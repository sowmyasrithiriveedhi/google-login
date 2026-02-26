import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import LogoutButton from "./logout";

export default async function Dashboard() {
  const session = await getServerSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome {session.user?.email}</p>
      <LogoutButton />
    </div>
  );
}