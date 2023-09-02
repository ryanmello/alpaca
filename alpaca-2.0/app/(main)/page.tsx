import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <p className="font-bold text-indigo-500">Hello</p>
      <UserButton afterSignOutUrl="/"/>
      <ModeToggle />
    </div>
  );
}
