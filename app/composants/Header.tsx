"use client"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Link from 'next/link'
import React from 'react'
import SplitType from 'split-type'

const Header = () => {
   
    useGSAP(()=>{
        const hl = gsap.timeline()

        const linkheader :  HTMLElement[] = gsap.utils.toArray(".linkheader")

        linkheader.forEach((item)=>{    
            const txt = new SplitType(item, { types: 'chars,words' });

            hl.from(txt.chars,{
                y:40,
                skewY:40,
                duration:0.3,
                ease:"power4.Out"
            })

        })

    })


  return (
    <div className='flex uppercase text-black p-10 gap-y-4 w-full flex-col justify-start items-center'>
        <div className="text-xl font-bold linkheader w-full"><h2> Leonel Yimga  </h2></div>
        <div className='w-full flex justify-end items-end'>
            <ul className="flex justify-end px-8 items-end  gap-x-4">
                <li><Link href="/" className="linkheader hover:text-black/40 transition-all ease duration-300  flex justify-center items-center overflow-hidden " >  About Me </Link></li>
                <li><Link href="/" className="linkheader hover:text-black/40 transition-all ease duration-300  flex justify-center items-center overflow-hidden " >  Work </Link></li>
                <li><Link href="/" className="linkheader hover:text-black/40 transition-all ease duration-300  flex justify-center items-center overflow-hidden " >  Initiatives </Link></li>
                <li><Link href="/" className="linkheader hover:text-black/40 transition-all ease duration-300  flex justify-center items-center overflow-hidden " >  Experience </Link></li>
            </ul>
        </div>

    </div>
  )
}

export default Header