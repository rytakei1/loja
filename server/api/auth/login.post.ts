import { prisma } from "~/prisma/db";
import { loginSchema } from "~/schemas/auth";
export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, (data) =>
    loginSchema.safeParse(data)
  );
  if (!body.success) {
    throw createError({
      status: 400,
      message: "Invalid Email or Password",
    });
  }
  try {
    const user = await prisma.user.findUnique({
      where: { email: body.data.email },
    });

    if (!user || user.password !== body.data.password) {
      throw createError({
        status: 400,
        message: "Invalid Email or Password",
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
