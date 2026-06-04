import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field';

import { useUser } from '@/hooks/useApi';
import { quoteFormSchema } from '@/schemas/quote-form-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import z from 'zod';
import { DocumentSelect } from '../select/document-select';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';
import { Input } from '../ui/input';

type FormValues = z.infer<typeof quoteFormSchema>;

export const QuoteForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      dni: '',
      phone: '',
      privacyPolicy: false,
      marketingConsent: false,
    },
  });

  const { fetchUser, isLoading } = useUser();

  const onSubmit = async (data: FormValues) => {
    await fetchUser(data);
  };

  return (
    <div>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-6'>
        <FieldGroup className='gap-4'>
          <Controller
            name='dni'
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel
                  htmlFor='quote-form-dni'
                  className='font-semibold'>
                  Documento
                </FieldLabel>
                <div className='flex'>
                  <DocumentSelect />
                  <Input
                    {...field}
                    id='quote-form-dni'
                    aria-invalid={fieldState.invalid}
                    className='rounded-l-none'
                  />
                </div>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name='phone'
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel
                  htmlFor='quote-form-phone'
                  className='font-semibold'>
                  Celular
                </FieldLabel>
                <Input
                  id='quote-form-phone'
                  aria-invalid={fieldState.invalid}
                  {...field}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>

        <div className='space-y-3'>
          <FieldGroup className='gap-3'>
            <Controller
              name='privacyPolicy'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field
                  orientation='horizontal'
                  data-invalid={fieldState.invalid}>
                  <Checkbox
                    id='checkout-privacy-policy'
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    aria-invalid={fieldState.invalid}
                  />
                  <FieldLabel
                    htmlFor='checkout-privacy-policy'
                    className='font-normal text-xs leading-5 tracking-[0.1px]'>
                    Acepto la Política de Privacidad
                  </FieldLabel>
                </Field>
              )}
            />
            <Controller
              name='marketingConsent'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field
                  orientation='horizontal'
                  data-invalid={fieldState.invalid}>
                  <Checkbox
                    id='checkout-marketing-consent'
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    aria-invalid={fieldState.invalid}
                  />
                  <FieldLabel
                    htmlFor='checkout-marketing-consent'
                    className='font-normal text-xs leading-5 tracking-[0.1px]'>
                    Acepto la Política de Comunicaciones Comerciales
                  </FieldLabel>
                </Field>
              )}
            />
          </FieldGroup>
          <p className='font-semibold text-xs leading-5 tracking-[0.1px] underline'>
            Aplican Términos y Condiciones.
          </p>
        </div>

        <Button
          type='submit'
          rounded='full'
          size='xl'
          disabled={isLoading}>
          {isLoading ? 'Cargando...' : 'Cotiza aquí'}
        </Button>
      </form>
    </div>
  );
};
