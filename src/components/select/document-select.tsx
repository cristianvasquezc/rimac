import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export const DocumentSelect = () => {
  return (
    <Select>
      <SelectTrigger className='w-38 rounded-r-none border-r-0'>
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
