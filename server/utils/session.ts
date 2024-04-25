import { Role, User } from "@prisma/client";
import jwt from "jsonwebtoken";
export interface UserContext {
  id: number;
  email: string;
  role: Role;
  customerId: number;
}
export const createToken = async (user: User) => {
  const config = useRuntimeConfig();
  return await jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role,
      customerId: user.customerId,
    },
    config.tokenSecret,
    {
      expiresIn: 60 * 60,
    }
  );
};

const verifyToken = async (token: string) => {
  try {
    const config = useRuntimeConfig();
    return (await jwt.verify(token, config.tokenSecret)) as UserContext;
  } catch (err) {
    return "Token expired";
  }
};

export const getUserToken = (event: any) => {
  const cookie = getCookie(event, "__session");
  if (!cookie) {
    return null;
  }
  const token = verifyToken(cookie);
  if (!token) {
    return null;
  }
  return token;
};
