import { Inter } from 'next/font/google';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return <h1 className='underline'>Hello world!</h1>;
}
