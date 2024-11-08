import { motion } from "framer-motion"
export default function About(){
    return(
        <div className="About border-b border-neutral-900 pb-4 w-[80%] m-auto items-center">
            <h2 className="text-center text-[30px] mt-[10%] selection:bg-slate-700 hover:text-purple-700 mb-[5%]">About Me </h2>
            <div className="flex flex-wrap items-center">
            <motion.div 
            whileInView={{x:0,opacity:1}}
            initial={{x:-100,opacity:0}}
            transition={{duration:0.5}}
            className="flex-col w-full lg:w-1/2 lg:p-8 ">
                    <img className="rounded-2xl h-[20%]" src="../assets/WhatsApp Image 2024-07-20 at 14.45.47_cf5ed9db.jpg" alt="about me image" />
                </motion.div>
                <motion.div
                whileInView={{x:0,opacity:1}}
                initial={{x:100,opacity:0}}
                transition={{duration:0.5}}
                className="flex  w-full lg:w-1/2 lg:p-8 text-center md:text-start mt-20 lg:mt-0">
                I am an aspiring front-end developer with a solid foundation in React, Next.js, and JavaScript,
                 seeking to contribute my skills and experience in creating dynamic, responsive,
                  and user-centric web applications. Having completed the Rowad Masr DEPI course in React web development,
                   I aim to leverage my expertise in Redux Toolkit and UI frameworks 
                   to deliver high-quality solutions and further enhance my knowledge in the field of web development. My goal is to join a forward-thinking team where I can grow, 
                learn, and make a significant impact through innovative web solutions. 
                </motion.div>
                
            </div>
        </div>
    )
}