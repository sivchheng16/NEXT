export default function page({ params }: { params: { concept: string[] } }) {
  return (
    <div>
      <h1>Catch all the route use [...slug]</h1>
      {/* <p>{params.concept.join("/")}</p> */}
    </div>
  );
}
