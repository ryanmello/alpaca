import { signOut } from "next-auth/react";
import Button from "../components/Button";
import LogoutButton from "./components/LogoutButton";
import getCurrentUser from "../actions/getCurrentUser";
import EmailForm from "./components/EmailForm";

const Page = async () => {
  const user = await getCurrentUser();

  return (
    <div className="flex flex-col items-center justify-center h-full">
      {user?.email ? (
        <>
        <p>Welcome to your profile, {user?.name}</p>
        <div className="w-1/3">
          <LogoutButton />
        </div>
        </>
      ): (
        <div className="align-left">
          <p className="text-2xl font-bold">Before you continue...</p>
          <p className="pb-4">Please provide an email address for your account</p>
          <EmailForm />
        </div>
      )}
    </div>
  );
};

export default Page;
