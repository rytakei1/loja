import { Prisma } from "@prisma/client";

export const handlePrismaError = (error: unknown) => {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    throw createError({
      statusCode: 400,
      statusMessage: error.code,
      message: error.message,
    });
  }
  throw error;
};
