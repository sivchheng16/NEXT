export default async function InterceptingId({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  return <div>InterceptingId: {id}</div>;
}
