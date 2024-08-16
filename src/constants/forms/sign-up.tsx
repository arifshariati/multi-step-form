import { FormConfig } from "@/types/forms";

export const SIGNUP_FORM: FormConfig[] = [
  {
    title: "Account",
    description: "Account details of user",
    fields: [
      {
        name: "email",
        type: "text",
        inputType: "input",
        label: "Email",
        placeholder: "Enter your email address",
        validation: {
          type: "string",
          rules: [{ method: "email", params: [] }],
        },
      },
      {
        name: "password",
        type: "password",
        inputType: "input",
        label: "Password",
        placeholder: "Enter your password",
        validation: {
          type: "string",
          rules: [{ method: "min", params: [8] }],
        },
      },
    ],
    defaultValues: {
      email: "",
      password: "",
    },
  },
  {
    title: "Details",
    description: "Your personal information",
    fields: [
      {
        name: "firstName",
        type: "text",
        inputType: "input",
        label: "First Name",
        placeholder: "Enter your first name",
        validation: {
          type: "string",
          rules: [{ method: "min", params: [8] }],
        },
      },
      {
        name: "lastName",
        type: "text",
        inputType: "input",
        label: "Last Name",
        placeholder: "Enter your last name",
        validation: {
          type: "string",
          rules: [{ method: "min", params: [8] }],
        },
      },
      {
        name: "address",
        type: "textarea",
        inputType: "textarea",
        label: "Address",
        placeholder: "Enter your address",
        validation: {
          type: "string",
          rules: [{ method: "min", params: [8] }],
        },
      },
    ],
    defaultValues: {
      firstName: "",
      lastName: "",
      address: "",
    },
  },
];
