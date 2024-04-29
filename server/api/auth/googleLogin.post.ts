import { prisma } from "~/prisma/db";
import { googleCredentialSchema } from "~/schemas/auth";
import { OAuth2Client } from "google-auth-library";
import { v4 as uuid } from "uuid";

const client = new OAuth2Client(process.env.GOOGLE_OAUTH_ID);

const validateGoogleCredentials = async (credential: string) => {
  const ticket = await client.verifyIdToken({ idToken: credential });
  const payload = ticket.getPayload();
  return payload;
};

export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, (data) =>
    googleCredentialSchema.safeParse(data)
  );
  if (!body.success) {
    throw createError({
      status: 400,
      message: "Missing Credential",
    });
  }
  try {
    const userInfo = await validateGoogleCredentials(body.data.credential);
    // If the user exists, we login the user
    let user = await prisma.user.findUnique({
      where: { email: userInfo?.email },
    });

    // If the user doesn't exist, we create an user
    if (!user) {
      user = await prisma.user.create({
        data: {
          email: userInfo?.email || "",
          firstName: userInfo?.given_name || "",
          lastName: userInfo?.family_name || "",
          password: uuid(),
          role: "user",
        },
      });
    }
    const token = await createToken(user);
    setCookie(event, "__session", token);
    const { password, ...userWithoutPassword } = user;
    return {
      user: userWithoutPassword,
      token,
    };
  } catch (err) {
    throw err;
  }
});
