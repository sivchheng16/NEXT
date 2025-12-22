

export default async function page() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts',{cache: "force-cache"});
    const data = await res.json();
  return (
    <div>
      
    </div>
  )
}
