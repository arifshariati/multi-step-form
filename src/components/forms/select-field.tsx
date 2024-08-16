import { ControllerRenderProps } from "react-hook-form";
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

import { FormFieldOption } from "@/types/forms";

type SelectFieldProps = {
  field: ControllerRenderProps;
  label?: string;
  options: FormFieldOption[];
  placeholder?: string;
  description?: string;
};

export const SelectField = ({ field, label, options, placeholder = "", description = "" }: SelectFieldProps) => {
  return (
    <FormItem className="space-y-0.5">
      {label && <FormLabel>{label}</FormLabel>}
      <FormControl>
        <Select onValueChange={field.onChange} defaultValue={field.value}>
          <SelectTrigger>
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormControl>
      {description && <FormDescription>{description}</FormDescription>}
      <FormMessage />
    </FormItem>
  );
};
