export default async function SSRPage() {
  const res = await fetch("http://localhost:3001/posts", {
    cache: "no-store",
    // 매 요청마다 데이터를 서버에서 가져옴
  });

  console.log(res);

  const data = await res.json();

  return (
    <div>
      <h1>SSR Page</h1>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
}
