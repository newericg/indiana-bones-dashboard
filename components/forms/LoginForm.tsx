"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form } from "@/components/ui/form";
// import { createUser } from "@/lib/actions/patient.actions";
import { UserFormValidation } from "@/lib/validation";

import "react-phone-number-input/style.css";
import CustomFormField, { FormFieldType } from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import { simplybookConfig } from "@/lib/simplybook/config";

export const LoginForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof UserFormValidation>) => {

    try {
      const url = "https://user-api.simplybook.me/admin/auth";
      const response = await fetch(url, {
        method: "getToken",
        headers: {
          companyLogin: simplybookConfig.company,
          login: "eric.gomes0105@gmail.com",
          password: "48x2qgjB",
        },
        // body: JSON.stringify({ ...userData }),
      });
      return console.log(response.json);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1 space-y-6">
        {/* <section className="mb-12 space-y-4">
          <h1 className="header">Hi there 👋</h1>
          <p className="text-dark-700">Get started with appointments.</p>
        </section> */}

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="name"
          label="Full name"
          placeholder="Sam Zam"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="email"
          label="Password"
          placeholder="******"
          iconSrc="/assets/icons/password.svg"
          iconAlt="email"
        />

        <SubmitButton className="bg-secondary w-full" isLoading={isLoading}>
          Login
        </SubmitButton>
      </form>
    </Form>
  );
};
