export default async function ISRPage() {
  // fetch 요청에 revalidate 옵션을 추가 => 5초마다 페이지를 재생성
  const res = await fetch("http://localhost:3001/posts", {
    next: { revalidate: 5 },
  });

  const data = await res.json();

  return (
    <div>
      <h1>ISR Page</h1>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
}
