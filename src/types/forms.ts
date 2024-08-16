import { ZodMethodType } from "./zod-mappings";

export type ValidationRule = {
  method: "min" | "max" | "email" | "regex";
  params: any[];
};

export type FormFieldOption = {
  value: string;
  label: string;
};

export type FormFieldValidation = {
  type: ZodMethodType;
  rules: ValidationRule[];
};

export type FormFieldType = "text" | "textarea" | "email" | "password" | "number" | "date" | "select" | "checkbox" | "radio";

export type FormFieldInputType = "select" | "input" | "textarea";

export type FormField = {
  name: string;
  type: FormFieldType;
  inputType: FormFieldInputType;
  validation: FormFieldValidation;
  label?: string;
  placeholder?: string;
  options?: FormFieldOption[];
  description?: string;
};

export type FormConfig = {
  fields: FormField[];
  defaultValues: { [key: string]: any };
  title?: string;
  description?: string;
};
