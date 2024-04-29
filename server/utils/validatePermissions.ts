import { UserContext } from "./session";

interface PermissionOptions {
  require_auth?: boolean;
  require_admin?: boolean;
}
export const validatePermissions = (
  { require_admin = false, require_auth = false }: PermissionOptions,
  user: UserContext | "Token expired" | null
) => {
  if (!require_auth) return;
  if (!user || user === "Token expired") {
    throw createError({
      statusCode: 403,
      message: "Authentication required",
    });
  }
  if (require_admin && user.role !== "admin") {
    throw createError({
      statusCode: 403,
      message: "You don't have permission to perform this action",
    });
  }
};
