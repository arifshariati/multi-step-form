import { useFormContext } from "@/contexts/form-context";
import { Button } from "../ui/button";

type FormWrapperProps = { children: React.ReactNode };

const FormWrapper = ({ children }: FormWrapperProps) => {
  const { currentStep, nextStep, prevStep } = useFormContext();
  const handleSubmit = (data: any) => {
    alert(data);
  };
  return (
    <div className="flex flex-col gap-10  p-4 min-w-[500px] min-h-[600px]">
      {children}
      <div className="flex items-center  mt-auto">
        {currentStep > 0 && <Button onClick={prevStep}>Previous</Button>}

        <Button type="submit" className="ml-auto" onClick={currentStep === 1 ? handleSubmit : nextStep}>
          {currentStep === 1 ? "Submit" : "Next"}
        </Button>
      </div>
    </div>
  );
};

export default FormWrapper;
