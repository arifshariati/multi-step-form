import { z, ZodTypeAny } from "zod";

export type ZodMethodType = "string" | "number" | "boolean" | "date";

type ZodMappings = {
  [key in ZodMethodType]: () => ZodTypeAny;
};

export const zodMappings: ZodMappings = {
  string: z.string,
  number: z.number,
  boolean: z.boolean,
  date: z.boolean,
};
