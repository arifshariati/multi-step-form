import { createContext, useContext, useState } from "react";

type FormContextType = {
  currentStep: number;
  nextStep: () => void;
  prevStep: () => void;
  formData: { [key: string]: any };
  updateFormData: (data: { [key: string]: any }) => void;
};
const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<{ [key: string]: any }>({});

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);
  const updateFormData = (data: { [key: string]: any }) => setFormData((prev) => ({ ...prev, ...data }));

  return <FormContext.Provider value={{ currentStep, nextStep, prevStep, formData, updateFormData }}>{children}</FormContext.Provider>;
};

export const useFormContext = (): FormContextType => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};
