import { InitialModal } from "@/components/models/initial-modal";
import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";
import { UserButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const SetupPage = async () => {
  const profile = await initialProfile();

  // find server that user is member of
  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  // if user has a server =================
  if (server) {
    return redirect(`/servers/${server.id}`);
  }

  // if user not in a server
  return <InitialModal />;
};

export default SetupPage;
