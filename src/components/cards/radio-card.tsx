import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from '@/components/ui/field';
import { RadioGroupItem } from '@/components/ui/radio-group';

interface RadioCardProps {
  id: string;
  value: string;
  icon?: React.ReactNode;
  title: string;
  description: string;
}

export const RadioCard = ({
  id,
  value,
  icon,
  title,
  description,
}: RadioCardProps) => {
  return (
    <FieldLabel
      htmlFor={id}
      className='w-full max-w-63 border-none'>
      <div className='w-full pt-4 pb-10 px-6 rounded-3xl bg-white shadow-[0px_0px_20px_3px_rgba(0,0,0,0.1)]'>
        <Field
          orientation='horizontal'
          className='relative'>
          <FieldContent className='space-y-2 pt-6'>
            <div className='size-12'>{icon}</div>
            <FieldTitle className='font-black text-xl leading-7 tracking-[-0.2px]'>
              {title}
            </FieldTitle>
            <FieldDescription className='font-normal text-xs leading-5 tracking-[0.2px]'>
              {description}
            </FieldDescription>
          </FieldContent>
          <RadioGroupItem
            className='size-6 top-0 right-0 absolute'
            value={value}
            id={id}
          />
        </Field>
      </div>
    </FieldLabel>
  );
};
