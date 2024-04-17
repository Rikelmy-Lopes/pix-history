'use client';

import { useEffect, useState } from 'react';
import './page.css';
import { IPix } from '@/state/state';
import axios from 'axios';

export default function Home() {
  const [pixs, setPixs] = useState<IPix[]>([]);

  async function getPixs() {
    const { data } = await axios.get('/api/pix');
    setPixs(data);
  }

  useEffect(() => {
    getPixs();
  }, []);

  return (
    <main>
      <ul id='pix-list'>
        {
          pixs.toReversed().map(({ title, message, createAt }, index) => {
            return (
              <li className='pix-container' key={index}>
                <p className='pix-title'>Titulo: {title}</p>
                <p className='pix-description'>Descrição: {message}</p>
                <p className='pix-date'>Data: {new Date(createAt).toLocaleString('pt-br')}</p>
              </li>
            );
          })
        }
      </ul>
    </main>
  );
}
