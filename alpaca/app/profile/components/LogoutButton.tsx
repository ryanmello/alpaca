"use client";

import Button from "@/app/components/Button";
import { signOut } from "next-auth/react";

const LogoutButton = () => {
  return (
    <Button onClick={() => signOut()} fullWidth>
      Sign out of your account
    </Button>
  );
};

export default LogoutButton;
