
"use client"
import React from "react";
import Image from "next/image";
import yafeh from "../../images/yafeh.jpg"
import {  useTypewriter } from "react-simple-typewriter";
  const Home=()=> {
  const[typeEffect]=useTypewriter({
    words:["Hi","I am Muhammad Yafeh"],
  
    typeSpeed:200,
    delaySpeed:300
  })
  
  return (
    <main>
      
      <div className="flex-1 p-5 ">

      <div>
        <Image className="rounded-full border-double border-2 border-sky-700" src={yafeh} alt="profile image" width={300} height={300} />
        <h1 className="text-3xl px-8 py-8 hover:text-purple-600 font-serif font-black" >{typeEffect}</h1>
    
      </div>
          <h2 className="p-8 text-pretty font-bold">your go-to web magician 🎩✨  I craft digital wonders that mesmerize and captivate.

🚀 Ready to launch your online presence to new heights? Lets collaborate and turn your visions into pixel-perfect reality.

Check out my portfolio , and lets create something extraordinary together!

</h2>
        
      </div>
    </main>

  );
}
export default Home; 
 




