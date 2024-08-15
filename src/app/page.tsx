import MultiStepForm from "@/components/forms/multi-step-form";
import { FormProvider } from "@/contexts/form-context";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FormProvider>
        <MultiStepForm />
      </FormProvider>
    </main>
  );
}
