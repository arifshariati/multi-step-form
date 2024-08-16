"use client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormContext } from "@/contexts/form-context";
import { generateZodSchema } from "@/utils/form-validation";
import { renderField } from "@/utils/form";
import { FormConfig, FormField as FormFieldType } from "@/types/forms";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Form, FormField } from "../ui/form";
import { toast } from "../ui/use-toast";

type DisplayCardFooterButtonsProps = {
  currentStep: number;
  totalSteps: number;
  prevStep: () => void;
};
const DisplayCardFooterButtons = ({ currentStep, totalSteps, prevStep }: DisplayCardFooterButtonsProps) => {
  return (
    <div className="flex w-full">
      {currentStep > 0 && (
        <Button onClick={prevStep} variant={"outline"}>
          Prevous
        </Button>
      )}
      <Button type="submit" className="ml-auto">
        {currentStep + 1 >= totalSteps ? "Submit" : "Next"}
      </Button>
    </div>
  );
};

type MultiStepFormProps = {
  formConfig: FormConfig[];
};

const MultiStepForm = ({ formConfig }: MultiStepFormProps) => {
  const { currentStep, prevStep, nextStep, formData, updateFormData } = useFormContext();

  const { title, description, fields } = formConfig[currentStep];

  const defaultValues = formConfig.reduce((acc, form) => ({ ...acc, ...form.defaultValues }), {});

  const schema = generateZodSchema(fields);

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues,
    mode: "onSubmit",
  });

  const handleSubmit = (values: any) => {
    updateFormData(values);

    if (currentStep + 1 < formConfig.length) {
      nextStep();
    }
  };

  useEffect(() => {
    currentStep + 1 >= formConfig.length &&
      toast({
        title: "form data",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(formData, null, 2)}</code>
          </pre>
        ),
      });
  }, [currentStep, formData, formConfig]);

  return (
    <Card className="w-[350px]">
      <CardHeader>
        {title && <CardTitle>{title}</CardTitle>}
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <CardContent className="space-y-1">
            {fields.map((field: FormFieldType) => (
              <FormField
                key={field.name}
                control={form.control}
                name={field.name as never}
                render={({ field: controllerField }) => renderField(field, controllerField)}
              />
            ))}
          </CardContent>
          <CardFooter>
            <DisplayCardFooterButtons currentStep={currentStep} totalSteps={formConfig.length} prevStep={prevStep} />
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default MultiStepForm;
