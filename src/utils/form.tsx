import { DateFieled } from "@/components/forms/date-field";
import { SelectField } from "@/components/forms/select-field";
import { TextareaField } from "@/components/forms/text-area-field";
import { TextField } from "@/components/forms/text-field";
import { FormField } from "@/types/forms";

export const renderField = ({ type, label, placeholder, description, options }: FormField, controllerField: any) => {
  switch (type) {
    case "text":
    case "email":
    case "password":
      return <TextField field={controllerField} type={type} label={label} placeholder={placeholder} description={description} />;
    case "select":
      return <SelectField field={controllerField} label={label} placeholder={placeholder} description={description} options={options!} />;
    case "date":
      return <DateFieled field={controllerField} label={label} description={description} />;
    case "textarea":
      return <TextareaField field={controllerField} label={label} placeholder={placeholder} description={description} />;
    default:
      return <></>;
  }
};
