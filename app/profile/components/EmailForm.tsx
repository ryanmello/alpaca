"use client";

import getGitHubUser from "@/app/actions/getGithubUser";
import getSession from "@/app/actions/getSession";
import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import axios from "axios";
import { signOut } from "next-auth/react";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRouter } from 'next/navigation';

const EmailInput = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .post("/api/register/email", data)
      .then(() => {
        toast.success("Success");
        router.refresh();
      })
      .catch(() => toast.error("Something went wrong"))
      .finally(() => setIsLoading(false));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        id="email"
        label=""
        type="email"
        placeholder="Enter your email"
        register={register}
        errors={errors}
        required
      />
      <div className="w-1/3 pt-2">
        <Button fullWidth type="submit" disabled={isLoading}>
          Submit
        </Button>
      </div>
      <div>
        <Button secondary disabled={isLoading} onClick={() => signOut()}>
          Sign out
        </Button>
      </div>
    </form>
  );
};

export default EmailInput;
