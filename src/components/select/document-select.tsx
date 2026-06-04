import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface DocumentSelectProps {
  value?: string;
  onChange?: (value: string) => void;
}

export const DocumentSelect = ({ value, onChange }: DocumentSelectProps) => {
  return (
    <Select
      value={value}
      onValueChange={onChange}>
      <SelectTrigger className='w-38 rounded-r-none border-r-0 text-foreground'>
        <SelectValue placeholder='Seleccionar' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value='dni'>DNI</SelectItem>
          <SelectItem value='ce'>C.E.</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
