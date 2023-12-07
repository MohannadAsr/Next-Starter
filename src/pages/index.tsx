import Image from 'next/image';
import { Inter } from 'next/font/google';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 `}
    >
      <div>
        <h1 onClick={() => router.push('/Home/2500?hello=9000')}>
          Here we are
        </h1>
      </div>
    </main>
  );
}
