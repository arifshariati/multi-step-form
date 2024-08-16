import { z, ZodSchema, ZodTypeAny } from "zod";
import { ValidationRule } from "@/types/forms";
import { zodMappings, ZodMethodType } from "@/types/zod-mappings";

type FormFieldConfig = {
  name: string;
  validation: {
    type: ZodMethodType;
    rules: ValidationRule[];
  };
};

type Shape = {
  [key: string]: ZodTypeAny;
};

export const generateZodSchema = (fields: FormFieldConfig[]): ZodSchema<Shape> => {
  const shape: Shape = {};
  fields.forEach((field) => {
    const zodMethod = zodMappings[field.validation.type];
    if (!zodMethod) {
      throw new Error(`Unsupported validation type: ${field.validation.type}`);
    }

    let schema: ZodTypeAny = zodMethod();
    field.validation.rules.forEach((rule) => {
      const method = rule.method as keyof typeof schema;
      if (typeof schema[method] === "function") {
        schema = schema[method](...rule.params);
      } else {
        throw new Error(`Invalid method: ${rule.method}`);
      }
    });
    shape[field.name] = schema;
  });
  return z.object(shape);
};
