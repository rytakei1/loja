import { prisma } from "~/prisma/db";
import { validatePermissions } from "~/server/utils/validatePermissions";

export default defineEventHandler(async (event) => {
  validatePermissions(
    { require_auth: true, require_admin: true },
    event.context.user
  );
  const users = (await prisma.user.findMany()).map((user) => {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  });
  return users;
});
