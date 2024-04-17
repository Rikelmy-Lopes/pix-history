import { useEffect, useState } from 'react';
import './index.css';
import axios from 'axios';
import { getLocalStorage, setLocalStorage } from '@/utils/localStorage';
import { useRouter } from 'next/router';

export default function Login() {
  const [password, setPassword] = useState('');
  const router = useRouter();

  async function login() {
    try {
      const { data } = await axios.post('/api/auth/login', { password });
      setLocalStorage('token', data.token);
      router.push('/pix');
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const token = getLocalStorage('token');
    if (token) {
      router.push('/pix');
    }
  }, []);

  return (
    <div id='container'>
      <h1>Login</h1>
      <div id='login-container'>
        <div id='login-password-container'>
          <span>Senha:</span>
          <input
            onChange={({ target }) => setPassword(target.value)}
            type="text" 
          />
        </div>
        <button
          onClick={login}
        >
              Login
        </button>
      </div>
    </div>
  );
}   