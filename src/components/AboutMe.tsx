"use client"
import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import React from 'react'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

function Canada() {
  return (
    <h1 className="text-xl font-bold">Canadian</h1>
  )
}

function Camping() {
  return (
    <h1 className="text-xl font-bold">Camping</h1>
  )
}


export function AboutMe() {
  const [info, setInfo] = React.useState<React.ReactNode>(null)

  function HoverableEmoji({ emoji, children }: {
    emoji: string;
    children: React.ReactNode;
  }) {
    return (
      <span
        className="relative group cursor-pointer"
        onMouseEnter={() => setInfo(children)}
        onMouseLeave={() => setInfo(null)}
      >
        <span
          className="text-5xl transition duration-100 ease-in-out filter grayscale-[60%] group-hover:grayscale-0"
          role="img"
          aria-label="emoji"
        >
          {emoji}
        </span>
      </span>
    );
  }

  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            About me
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>The key to storytelling is show don&apos;t tell.</p>


            <div className="flex flex-wrap gap-2">
              <HoverableEmoji emoji="🇨🇦">
                <Canada />
              </HoverableEmoji>
              <HoverableEmoji emoji="🏕️">
                <Camping />
              </HoverableEmoji>
              <HoverableEmoji emoji="☕️">
                Coffee
              </HoverableEmoji>
              <HoverableEmoji emoji="💻">
                Coding
              </HoverableEmoji>
              <HoverableEmoji emoji="🤿">
                Diving
              </HoverableEmoji>
              <HoverableEmoji emoji="🍻">
                Beer
              </HoverableEmoji>
              <HoverableEmoji emoji="🛶">
                Canoeing
              </HoverableEmoji>
              <HoverableEmoji emoji="🚴">
                Cycling
              </HoverableEmoji>
              <HoverableEmoji emoji="🔭">
                Stargazing
              </HoverableEmoji>
              <HoverableEmoji emoji="🎬">
                Movies
              </HoverableEmoji>
            </div>
            <div>
              {info}
            </div>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://www.linkedin.com/in/jason-meredith-115b2384/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="https://github.com/jason-meredith"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="mailto:jasonmeredith93@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              jasonmeredith93@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  );
}