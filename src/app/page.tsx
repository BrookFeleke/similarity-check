import Image from 'next/image'
import { Inter } from 'next/font/google'
import Paragraph from '@/ui/Paragraph'
import LargeHeading from '@/ui/LargeHeading'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='text-lg'>
     {/* <LargeHeading className='bg-slate-600'>This is a large heading</LargeHeading>
     <Paragraph className='bg-slate-400'>Hello There</Paragraph> */}
    </main>
  )
}
