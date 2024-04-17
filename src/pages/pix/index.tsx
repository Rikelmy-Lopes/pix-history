

'use client';

import { useEffect, useState } from 'react';
import './index.css';
import { IPix } from '@/state/state';
import axios from 'axios';
import { getLocalStorage } from '@/utils/localStorage';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const [pixs, setPixs] = useState<IPix[]>([]);
  const [isTokenValid, setIsTokenValid] = useState(false);

  async function getPixs() {
    if (isTokenValid) {
      try {
        const { data } = await axios.get('/api/pix', {
          headers: {
            Authorization: getLocalStorage('token') as string
          }
        });
        setPixs(data);
      } catch (error) {
        console.error(error);
      }
    }
  }

  async function validateToken() {
    const token = getLocalStorage('token');
    if (!token) {
      router.push('/login');
      return;
    }

    try {
      await axios.get('/api/auth/login', {
        headers: {
          Authorization: getLocalStorage('token') as string
        }
      });
      setIsTokenValid(true);
    } catch (error) {
      router.push('/login');
      localStorage.removeItem('token');
    }

  }

  useEffect(() => {
    validateToken();
  }, []);

  
  useEffect(() => {
    getPixs();
  }, [isTokenValid]);

  return (
    <main>
      <ul id='pix-list'>
        {
          pixs.map(({ title, message, createAt }, index) => {
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
