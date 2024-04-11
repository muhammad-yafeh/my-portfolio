import Link from 'next/link'
import React from 'react'
import { RxLinkedinLogo } from "react-icons/rx";
import { BsGithub } from "react-icons/bs";

export const Footer = () => {
  return (
    <div className='flex m-3 p-3 shadow-lg gap-3 '>
      <div className='basis-2/5  bg-slate-300 text-slate-950 rounded-lg shadow-md font-bold p-4'>
        <h1>Connect me</h1> <div className='py-3 '><BsGithub /><Link href={"#"}>Github</Link></div>
        <div className='py-3'><RxLinkedinLogo /><Link href={"#"}>Linkdin</Link></div></div>
      <div className='basis-4/5 bg-slate-400 rounded-lg shadow-md'>
        <div className='p-4'>📧<h3>
          <Link href='yafehkaleem@gmail.com'>yafehkaleem@mail.com</Link> </h3></div>
        <div className='font-semibold p-4'>📞
          <h3>contact 03222440880</h3>
        </div>
      </div>
    </div>
  )
}
