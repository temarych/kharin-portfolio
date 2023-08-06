import { getServerSession } from "next-auth";
import { redirect }         from "next/navigation";

const Activity = async () => {
  const session = await getServerSession();

  if (!session || !session.user) {
    redirect("/login");
  }

  return (
    <h1 className="text-center">Activity</h1>
  );
};

export default Activity;