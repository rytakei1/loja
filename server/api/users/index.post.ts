import { prisma } from "~/prisma/db";
import { handlePrismaError } from "~/prisma/utils/errorHandling";
import { createUserSchema } from "~/schemas/user";

export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, (data) =>
    createUserSchema.safeParse(data)
  );
  if (!body.success) {
    throw createError({
      statusCode: 400,
      data: body.error.format(),
      message: "Validation Error",
    });
  }
  try {
    const res = await prisma.user.create({
      data: {
        email: body.data.email,
        firstName: body.data.firstName,
        lastName: body.data.lastName,
        password: body.data.password,
        customerId: body.data.customerId,
      },
    });
    return res;
  } catch (err) {
    handlePrismaError(err);
  }
});
