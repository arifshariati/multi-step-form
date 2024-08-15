"use client";
import { useFormContext } from "@/contexts/form-context";
import UserAccount from "./sign-up/user-account";
import UserDetails from "./sign-up/user-details";

const MultiStepForm = () => {
  const { currentStep } = useFormContext();
  switch (currentStep) {
    case 0:
    default:
      return <UserAccount />;
    case 1:
      return <UserDetails />;
  }
};

export default MultiStepForm;
