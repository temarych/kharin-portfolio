export const revalidate = async (tag: string) => {
  await fetch(`/api/revalidate?tag=${tag}&secret=${process.env.NEXT_PUBLIC_REVALIDATE_SECRET}`, { method: "POST" });
};