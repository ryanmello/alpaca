import LogoutButton from "./components/LogoutButton";
import getCurrentUser from "../actions/getCurrentUser";

const Page = async () => {
  const user = await getCurrentUser();

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <p className="pb-2">Welcome to your profile, {user?.name}</p>
      <div className="w-1/3">
        <LogoutButton />
      </div>
    </div>
  );
};

export default Page;
