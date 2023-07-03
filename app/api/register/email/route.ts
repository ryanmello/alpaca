import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return new NextResponse("Missing info", { status: 400 });
    }

    const currentUser = await getCurrentUser();
    if (!currentUser) {
      throw new NextResponse("Unauthorized", { status: 401 });
    }

    const updatedUser = await prisma.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        email: email,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error: any) {
    console.log(error, "API_EMAIL");
    throw new NextResponse("Internal error", { status: 500 });
  }
}
