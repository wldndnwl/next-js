export default async function SSGPage() {
  const res = await fetch("http://localhost:3001/posts", {
    cache: "force-cache",
  });

  const data = await res.json();

  return (
    <div>
      <h1>SSG Page</h1>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
}
