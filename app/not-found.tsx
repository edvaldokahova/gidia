import Link from "next/link";

export default function NotFound() {
  return (
    <main className="wrap flex min-h-[100svh] flex-col items-center justify-center text-center">
      <p className="kicker">Erro 404</p>
      <h1 className="h2 mt-5">Esta página ficou sem voz.</h1>
      <Link href="/" className="btn-gold mt-10">Voltar ao início</Link>
    </main>
  );
}
