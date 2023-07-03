"use client"

import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

const EmailInput = () => {
    const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: ""
    },
  });

  return (
    <form>
      <Input
        id="email"
        label=""
        type="email"
        placeholder="Enter your email"
        register={register}
        errors={errors}
      />
      <div className="w-1/3 pt-2">
        <Button fullWidth>
            Submit
        </Button>
      </div>
    </form>
  );
};

export default EmailInput;
