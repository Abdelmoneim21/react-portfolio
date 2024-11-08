
import { motion } from "framer-motion"
export default function Hero (){

    const container =(delay)=>({
        hidden:{x:-100 , opacity : 0 },
        visible:{
            x:0,
            opacity:1,
            transition:{duration:0.5,delay : delay}
        }
    })
    return(
        <div className="Hero border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="container flex flex-wrap w-[80%] m-auto items-center" >
            <div className="w-full lg:w-1/2">
                <div className="text flex flex-col items-center lg:items-start">
                    <motion.h1 
                    variants={container(0)}
                    
                    initial="hidden"
                    animate="visible"
                    
                    className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                        Abdelmoneim Ramadan
                    </motion.h1>
                    <motion.h2
                    variants={container(0.5)}
                    
                    initial="hidden"
                    animate="visible"
                    className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500
                    bg-clip-text tracking-tight text-transparent text-center text-3xl
                     ">
                        Front-End Developer 
                    </motion.h2>
                    <motion.p
                    variants={container(1)}
                    
                    initial="hidden"
                    animate="visible"
                    className="my-2 max-w-xl py-6 font-light tracking-tighter md:text-start text-center">
                    As a Front-End Developer specializing in React, I design and develop seamless, engaging user interfaces that emphasize user experience and performance. With expertise in HTML, CSS, and JavaScript, I create dynamic, responsive applications using React.js, focusing on reusability, scalability, and efficient state management. By integrating RESTful APIs, I ensure data-rich interactions, crafting applications that are both functional and visually appealing.
                    </motion.p>
                </div>
                </div>
                <div className="image w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center" >
                    <motion.img
                    initial={{x:100,opacity:0}}
                    animate={{x:0,opacity:1}}
                    transition={{duration:1,delay:1.5}}
                    src="../assets/WhatsApp Image 2024-07-20 at 14.45.47_cf5ed9db.jpg" className="w-[70%] h-[70%]"  alt="my picture"/>
                    </div>
                </div>
            </div>
        </div>
    )
}