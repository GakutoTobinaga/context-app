'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const HomePage = () => {
  const router = useRouter()
  function to2ndPage() {
    router.push("/second")
  }
  return (
    <div className='pt-20'>
      <div>This is 1st page</div>
      <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded" onClick={to2ndPage}>to 2nd page</button>
    </div>
  );
};

export default HomePage;
/*
- useRouterはapp routerの時 next/navigation の方からimportする
- そしてrouter.push("URL")でページ遷移の関数を作成できる
*/