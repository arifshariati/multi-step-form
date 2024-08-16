import MultiStepForm from "@/components/forms/multi-step-form";
import { SIGNUP_FORM } from "@/constants/forms/sign-up";
import { FormProvider } from "@/contexts/form-context";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FormProvider>
        <MultiStepForm formConfig={SIGNUP_FORM} />
      </FormProvider>
    </main>
  );
}
