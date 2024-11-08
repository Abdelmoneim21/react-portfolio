import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { RiNextjsLine } from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";
import { BsBootstrap } from "react-icons/bs";
import { motion } from "framer-motion";
export default function Technologies(){

    const iconVariant =(duration)=>({
        initial:{y:-10},
        animate:{
            y:[10,-10],
            transition:{
                duration:duration,
                ease:"linear",
                repeat:Infinity,
                repeatType:"reverse"
            }
        }
    })
    return(
        <div className="technologies border-b pb-24 border-neutral-900 ">
            <motion.h1 
            whileInView={{opacity:1,y:0}}
            initial={{y:-100,opacity:0}}
            transition={{duration:1.5}}
            className="text-center text-4xl my-20">Technologies</motion.h1>
            <motion.div

            whileInView={{x:0,opacity:1}}
            initial={{x:-200,opacity:0}}
            transition={{duration:1}}

            className="grid md:grid-cols-6 grid-cols-2 w-[70%] m-auto items-center justify-center gap-4  ">
                <motion.div
                variants={iconVariant(2)}
                initial="initial"
                animate="animate"
                className="icon border-4 border-neutral-800 p-4 rounded-2xl">
                    <FaReact className="text-8xl text-cyan-600 m-auto"/>
                </motion.div>
                <motion.div
                variants={iconVariant(4)}
                initial="initial"
                animate="animate" className="icon border-4 border-neutral-800 p-4 rounded-2xl">
                    <RiTailwindCssFill className="text-8xl text-[#38bdf8] m-auto"/>
                </motion.div>
                <motion.div
                variants={iconVariant(3)}
                initial="initial"
                animate="animate" className="icon border-4 border-neutral-800 p-4 rounded-2xl">
                    <IoLogoJavascript  className="text-8xl text-yellow-500 m-auto"/>
                </motion.div>
                <motion.div
                variants={iconVariant(5)}
                initial="initial"
                animate="animate" className="icon border-4 border-neutral-800 p-4 rounded-2xl">
                    <RiNextjsLine className="text-8xl text-gray-400 m-auto"/>
                </motion.div>
                <motion.div
                variants={iconVariant(2)}
                initial="initial"
                animate="animate" className="icon border-4 border-neutral-800 p-4 rounded-2xl">
                    <TbBrandRedux  className="text-8xl text-[#ba8fff] m-auto"/>
                </motion.div>
                <motion.div
                variants={iconVariant(6)}
                initial="initial"
                animate="animate" className="icon border-4 border-neutral-800 p-4 rounded-2xl">
                    <BsBootstrap  className="text-8xl text-[#ba8fff] m-auto"/>
                </motion.div>

            </motion.div>
        </div>
    )
}