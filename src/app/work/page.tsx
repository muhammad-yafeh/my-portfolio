
import React from "react";
import  Image from "next/image";
import yafeh from "../../../images/yafeh.jpg"
import game from "../../../images/game.jpg"
import counter from "../../../images/counter.jpeg"
import calculator from "../../../images/calculator.jpg"
import todo from "../../../images/todo.jpg"
import atm from "../../../images/atm.jpg"
import timer from "../../../images/timer.jpg"

import Link from "next/link";

export default function Project() {
    return (
        <div className="grid grid-cols-3 gap-3 m-3 ">
            <div className="card p-3">
                <Image className="img" src={game} alt="xx" height={50} width={450}/>
            <div>
                <h1 className="mb-2 font-bold mt-2">Adventure game</h1>
                <p>Dive into fight with deadly enemies</p>
<Link href={"#"} className="pt-3 font-semibold">repo</Link>
            </div>
            </div>
            <div className="card p-3">
                <Image className="img" src={counter} alt="xx" height={50} width={450}/>
            <div>
                <h1 className="mb-2 font-bold mt-2">Word counter</h1>
                <p>Count words of a paragraph </p>
<Link href={"#"} className="pt-3 font-semibold">repo</Link>
            </div>
            </div>
            <div className="card p-3">
                <Image className="img" src={calculator} alt="xx" height={50} width={450}/>
            <div>
                <h1 className="mb-2 font-bold mt-2">Calculator</h1>
                <p>perform simple mathematical operation </p>
<Link href={"#"} className="pt-3 font-semibold">repo</Link>
            </div>
            </div>
            <div className="card p-3">
                <Image className="img" src={todo} alt="xx" height={50} width={450}/>
            <div>
                <h1 className="mb-2 font-bold mt-2">To do app</h1>
                <p>Make list of things to do </p>
<Link href={"#"} className="pt-3 font-semibold">repo</Link>
            </div>
            </div>
            <div className="card p-3">
                <Image className="img" src={atm} alt="xx" height={50} width={450}/>
            <div>
                <h1 className="mb-2 font-bold mt-2">ATM</h1>
                <p> Console interactive simple Atm machine</p>
<Link href={""} className="pt-3 font-semibold">repo</Link>
            </div>
            </div>
            <div className="card p-3">
                <Image className="img" src={timer} alt="xx" height={50} width={450}/>
            <div>
                <h1 className="mb-2 font-bold mt-2">Timer</h1>
                <p>Counts down time in seconds  </p>
<Link href={""} className="pt-3 font-semibold">repo</Link>
            </div>
            </div>
            
           </div>)}

