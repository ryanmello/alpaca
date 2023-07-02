"use client";

import { signOut } from "next-auth/react";
import Button from "../components/Button";

const Page = async () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <p>Welcome to your profile</p>
      <div className="w-1/3">
        <Button onClick={() => signOut()} fullWidth>
          Sign out of your account
        </Button>
      </div>
    </div>
  );
};

export default Page;
