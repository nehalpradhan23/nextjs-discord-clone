import { currentUser, redirectToSignIn } from "@clerk/nextjs";
import { db } from "./db";

export const initialProfile = async () => {
  const user = await currentUser(); // check if user logged in or not

  if (!user) return redirectToSignIn(); // if not logged in

  // find profile
  const profile = await db.profile.findUnique({
    where: {
      userId: user.id,
    },
  });

  if (profile) return profile;

  // create new profile
  const newProfile = await db.profile.create({
    data: {
      userId: user.id,
      name: `${user.firstName} ${user.lastName}`,
      imageUrl: user.imageUrl,
      email: user.emailAddresses[0].emailAddress,
    },
  });

  return newProfile;
};
