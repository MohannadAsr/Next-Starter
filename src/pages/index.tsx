import { useRouter } from 'next/router';
import { getLocale } from '@/plugins/getLocale';
import React from 'react';
import DictType from '@/types/localiztion'; // Localiztion Type made it manually using ChatGPT

export default function Home({ dict }: { dict: DictType }) {
  const router = useRouter();

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 `}
    >
      <div>
        <h1 onClick={() => router.push('/Home/2500?hello=9000')}>e</h1>
        Here we are {dict.product.home}
      </div>
    </main>
  );
}

// Get The correct Localization based
export const getStaticProps = async (context: any) => {
  const { locale } = context;
  const dict = await getLocale(locale);
  return {
    props: {
      dict,
    } as { dict: typeof dict },
  };
};
