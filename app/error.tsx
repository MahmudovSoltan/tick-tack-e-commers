// app/error.tsx
"use client"; // Client Component olmalı

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="error-page">
      <h1>Bir hata oluştu!</h1>
      <p>{error.message}</p>
      <button onClick={reset}>Tekrar Dene</button>
    </div>
  );
}