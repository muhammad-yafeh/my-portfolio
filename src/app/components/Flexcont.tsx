// import React from 'react'
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"


// export const Flexcont = () => {
//   return (
//     <div className=' grid grid-cols-2 m-8 p8 shadow-lg p-4 bg-slate-400 rounded-xl ' >
//     {/* <div className='basis-1/4 rounded shadow-md bg-slate-900 text-white font-bold p-4  hover:p-6'><h2>HTML</h2></div>
//         <div className='basis-1/4 rounded shadow-md bg-slate-900 text-white font-bold p-4 hover:p-6'><h2>TAILWIND CSS</h2></div>
//         <div className='basis-1/4 rounded shadow-md bg-slate-900 text-white font-bold p-4 hover:p-6'><h2>TYPESCRIPT</h2></div>
//         <div className='basis-1/4 rounded shadow-md bg-slate-900 text-white font-bold p-4 hover:p-6'><h2>NEXT JS</h2></div> */}
        
// <Carousel>
//   <CarouselContent>
//     <CarouselItem className="md:basis-1/2 lg:basis-1/3">HTML</CarouselItem>
//     <CarouselItem className="md:basis-1/2 lg:basis-1/3">CSS</CarouselItem>
//     <CarouselItem className="md:basis-1/2 lg:basis-1/3">TYPE SCRIPT</CarouselItem>
//     <CarouselItem className="md:basis-1/2 lg:basis-1/3">NEXT JS</CarouselItem>
//   </CarouselContent>
//   <CarouselPrevious/>
//   <CarouselNext/>
// </Carousel>
import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function Flexcont() {
  return (
    
    <Carousel

    opts={{
      align: "start",
      
      }}
      
      className="w-full max-w-sm m-3"
      >
       <CarouselContent> 
        
          <CarouselItem  className="">
              <Card >
                <CardContent className="flex aspect-auto font-black text-6xl items-center justify-center p-20 m-8">
                  HTML 
                </CardContent>
              </Card>
          </CarouselItem>

          <CarouselItem  className="">
              <Card >
                <CardContent className="flex- aspect-auto font-black text-6xl items-center justify-center p-20 m-8">
                  CSS
                </CardContent>
              </Card>
          </CarouselItem>

          <CarouselItem  className="">
              <Card >
                <CardContent className="flex aspect-auto font-black text-6xl items-center justify-center p-20 m-8">
                  TYPESCRIPT 
                </CardContent>
              </Card>
          </CarouselItem>

          <CarouselItem  className="">
              <Card >
                <CardContent className="flex aspect-auto font-black text-6xl items-center justify-center p-20 m-8">
                  NEXTjs
                </CardContent>
              </Card>
          </CarouselItem>
        
      </CarouselContent>
      
      
      <CarouselNext />
      
    </Carousel>)}
  

        

