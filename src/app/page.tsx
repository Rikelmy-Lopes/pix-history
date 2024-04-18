'use client';

import { useEffect } from 'react';
import './page.css';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/login'); 
  }, []);

  return (
    <main>
    </main>
  );
}
