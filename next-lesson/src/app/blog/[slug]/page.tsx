export default function Blogpost({ params }: { params: { slug: string } }) {
  return <h1>Blog:{params.slug} id 1</h1>;
}
