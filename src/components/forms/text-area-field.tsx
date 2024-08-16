import { ControllerRenderProps } from "react-hook-form";
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Textarea } from "../ui/textarea";

type TextareaFieldProps = {
  field: ControllerRenderProps;
  label?: string;
  placeholder?: string;
  description?: string;
};

export const TextareaField = ({ field, label, placeholder = "", description = "" }: TextareaFieldProps) => {
  return (
    <FormItem className="space-y-0.5">
      {label && <FormLabel>{label}</FormLabel>}
      <FormControl>
        <Textarea placeholder={placeholder} className="resize-none" {...field} />
      </FormControl>
      {description && <FormDescription>{description}</FormDescription>}
      <FormMessage />
    </FormItem>
  );
};
