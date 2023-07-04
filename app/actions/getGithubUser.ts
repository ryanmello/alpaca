import prisma from "@/app/libs/prismadb";
import getSession from "./getSession";

/* When a user logs in with github, the email of the user may be
 * null if they have their email private on their github account.
 *
 * This application relies on having access to the users email.
 * To work around this issue, we use the session which contains
 * the following information about a github user:
 * {
 *   name: {insert the user's name}
 *   email: null
 *   image: {insert image address}
 * }
 *
 * We use the imageUrl to find the user.
 * This action is called in getCurrentUser to get the user if the email
 * is null which ONLY happens if the user logs in with GitHub
 */

const getGitHubUser = async () => {
  try {
    const session = await getSession();

    const user = prisma.user.findFirst({
      where: {
        image: session?.user?.image as string,
      },
    });

    if (!user) {
      return null;
    }

    return user;
  } catch (error) {
    return null;
  }
};

export default getGitHubUser;
