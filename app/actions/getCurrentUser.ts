import prisma from "@/app/libs/prismadb";
import getSession from "./getSession";
import getGitHubUser from "./getGithubUser";

const getCurrentUser = async () => {
  try {
    const session = await getSession();

    // ensure that the current session has a valid user
    if (!session?.user?.email) {
      const githubUser = await getGitHubUser();

      if(!githubUser?.email){
        return null;
      }

      return githubUser;
    }

    // find the user with the session user email
    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email as string,
      },
    });

    // ensure returned user is not null
    if (!currentUser) {
      return null;
    }

    return currentUser;
  } catch (error: any) {
    return null;
  }
};

export default getCurrentUser;