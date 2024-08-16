import { ControllerRenderProps } from "react-hook-form";
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";

import { FormFieldType } from "@/types/forms";

type TextFieldProps = {
  field: ControllerRenderProps;
  type: FormFieldType;
  label?: string;
  placeholder?: string;
  description?: string;
};

export const TextField = ({ field, type, label, placeholder = "", description = "" }: TextFieldProps) => (
  <FormItem className="space-y-0.5">
    {label && <FormLabel>{label}</FormLabel>}
    <FormControl>
      <Input type={type} autoComplete={field.name} placeholder={placeholder} {...field} />
    </FormControl>
    {description && <FormDescription>{description}</FormDescription>}
    <FormMessage />
  </FormItem>
);
