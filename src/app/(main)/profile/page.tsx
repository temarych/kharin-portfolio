import { getServerSession } from "next-auth";
import { redirect }         from "next/navigation";

const Profile = async () => {
  const session = await getServerSession();

  if (!session || !session.user) {
    redirect("/login");
  }

  return (
    <h1 className="text-center">Profile</h1>
  );
};

export default Profile;