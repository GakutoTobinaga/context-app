'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const HomePage = () => {
  const router = useRouter()
  function to1stPage(){
    router.push("/")
  }

  function toNext3rdPage(){
    router.push("/third/nextthird")
  }

  return (
    <div className='pt-20'>
      <div>This is 3rd page</div>
      <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded" onClick={to1stPage}>to 1st page</button>
      <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded" onClick={toNext3rdPage}>to Next 3rd page</button>
    </div>
  );
};

export default HomePage;
