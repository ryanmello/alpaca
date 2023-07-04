import getCurrentUser from "@/app/actions/getCurrentUser";
import getGitHubUser from "@/app/actions/getGithubUser";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const currentUser = await getGitHubUser();
    const body = await request.json();
    const { email } = body;

    if (!currentUser) {
      throw new NextResponse("Unauthorized", { status: 401 });
    }

    const updatedUser = await prisma.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        email: email as string,
      },
    });

    return NextResponse.json(updatedUser);

  } catch (error) {
    console.log(error, "API_EMAIL");
    throw new NextResponse("Internal error", { status: 500 });
  }
}
