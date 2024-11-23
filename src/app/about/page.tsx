import { type Metadata } from 'next'
import { AboutMe } from '@/components/AboutMe'

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Spencer Sharp. I live in New York City, where I design the future.',
}


export default function About() {
  return(<AboutMe />)
}
