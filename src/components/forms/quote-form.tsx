import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field';
import { quoteFormSchema } from '@/schemas/quote-form-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import z from 'zod';
import { Input } from '../ui/input';

type FormValues = z.infer<typeof quoteFormSchema>;

export const QuoteForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      dni: '',
      phone: '',
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log('Form submitted with data:', data);
  };

  return (
    <div>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup>
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
                <Input
                  {...field}
                  id='quote-form-dni'
                  aria-invalid={fieldState.invalid}
                />
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
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};
