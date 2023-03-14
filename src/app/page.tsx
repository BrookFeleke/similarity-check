import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='bg-amber-400 text-lg'>
     Hello World
    </main>
  )
}
