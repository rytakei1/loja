export default defineEventHandler(async (event) => {
  const user = await getUserToken(event);
  if (!user) {
    event.context.user = null;
  } else {
    event.context.user = user;
  }
});
