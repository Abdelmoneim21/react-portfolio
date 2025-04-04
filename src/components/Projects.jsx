import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { motion } from "framer-motion";
export default function Projects() {
  return (
    <div className="projects mt-4 border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="text-center text-4xl my-20"
      >
        My projects
      </motion.h1>
      <div className="content">
        <div className="project md:flex justify-center w-[80%] m-auto items-center gap-10 mb-[5%]">
          <motion.img
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            src="../assets/Screenshot 2024-10-19 185855.png"
            className="mb-6 rounded mx-auto"
            width={250}
            height={250}
            alt="e-commerce app"
          />
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text w-full lg:w-1/2"
          >
            <h1 className="mb-4 font-semibold text-2xl">E-commerce App</h1>
            <p className="leading-7 text-neutral-500">
              The e-commerce app is a fully responsive platform built with React
              and Redux Toolkit, designed to streamline the online shopping
              experience. It includes a variety of user-centered features such
              as a comprehensive product search, a wishlist function to save
              favorite items
            </p>
            <div className="techs mt-6 ">
              <span className="mr-2 text-purple-700 rounded bg-neutral-900 py-2 px-2">
                REACT
              </span>
              <span className="mr-2 text-purple-700 rounded bg-neutral-900 py-2 px-2">
                TAILWIND CSS
              </span>
              <span className="mr-2 text-purple-700 rounded bg-neutral-900 py-2 px-2">
                REDUX TOOLKIT
              </span>
              <span className="mr-2 text-purple-700 rounded bg-neutral-900 py-2 px-2">
                RESPONSIVE
              </span>
              <span className="mr-0 text-purple-700 rounded bg-neutral-900 py-2 px-0">
                FIGMA DESIGN
              </span>
            </div>
            <div className="source flex justify-center gap-5 mt-10">
              <a
                href="https://github.com/Abdelmoneim21/E-commerce-app"
                target="_blank"
                className="inline-block bg-green-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-green-900 hover:shadow-lg transition duration-200 ease-in-out"
              >
                Github Repo
                <HiMiniArrowTopRightOnSquare className="inline-block ml-2 text-2xl " />
              </a>
              <a
                href="https://gilded-madeleine-bb1ace.netlify.app/"
                target="_blank"
                className="inline-block bg-red-500  text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-red-700 hover:shadow-lg transition duration-200 ease-in-out"
              >
                Live Demo
                <HiMiniArrowTopRightOnSquare className="inline-block ml-2 text-2xl " />
              </a>
            </div>
          </motion.div>
        </div>
        <div className="project md:flex justify-center w-[80%] m-auto items-center gap-10 mb-[5%]">
          <motion.img
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            src="/assets/Screenshot 2025-04-04 204617.png"
            className="mb-6 rounded mx-auto"
            width={250}
            height={250}
            alt="e-commerce app"
          />
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text w-full lg:w-1/2"
          >
            <h1 className="mb-4 font-semibold text-2xl">Toy store App</h1>
            <p className="leading-7 text-neutral-500">
              Toys Wonderland is a fully functional toys e-commerce platform
              designed to provide a seamless shopping experience. Built with
              React, Redux Toolkit, and Tailwind CSS, it features a clean,
              responsive design and optimized performance.
            </p>
            <div className="techs mt-6 ">
              <span className="mr-2 text-purple-700 rounded bg-neutral-900 py-2 px-2">
                REACT
              </span>
              <span className="mr-2 text-purple-700 rounded bg-neutral-900 py-2 px-2">
                TAILWIND CSS
              </span>
              <span className="mr-2 text-purple-700 rounded bg-neutral-900 py-2 px-2">
                REDUX TOOLKIT
              </span>
              <span className="mr-2 text-purple-700 rounded bg-neutral-900 py-2 px-2">
                RESPONSIVE
              </span>
              <span className="mr-0 ml-3 text-purple-700 rounded bg-neutral-900 py-2 px-0">
                WhatsApp Integration
              </span>
              <span className="mr-0 ml-3 text-purple-700 rounded bg-neutral-900 py-2 px-0">
                Redux Toolkit Authentication
              </span>
              <span className="mr-0 ml-3 text-purple-700 rounded bg-neutral-900 py-2 px-0">
                React Router
              </span>
            </div>
            <div className="source flex justify-center gap-5 mt-10">
              <a
                href="https://github.com/Abdelmoneim21/gaming-shop"
                target="_blank"
                className="inline-block bg-green-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-green-900 hover:shadow-lg transition duration-200 ease-in-out"
              >
                Github Repo
                <HiMiniArrowTopRightOnSquare className="inline-block ml-2 text-2xl " />
              </a>
              <a
                href="https://babaeid.com/"
                target="_blank"
                className="inline-block bg-red-500  text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-red-700 hover:shadow-lg transition duration-200 ease-in-out"
              >
                Live Demo
                <HiMiniArrowTopRightOnSquare className="inline-block ml-2 text-2xl " />
              </a>
            </div>
          </motion.div>
        </div>
        <div className="project md:flex justify-center w-[80%] m-auto items-center gap-10 mb-[5%]">
          <motion.img
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            src="/assets/Screenshot 2025-04-04 204925.png"
            className="mb-6 rounded mx-auto"
            width={250}
            height={250}
            alt="e-commerce app"
          />
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text w-full lg:w-1/2"
          >
            <h1 className="mb-4 font-semibold text-2xl">Food delivery app</h1>
            <p className="leading-7 text-neutral-500">
              Our food delivery app is a fully functional website which provide
              booking food and checkout adding delivery fees
            </p>
            <div className="techs mt-6 ">
              <span className="mr-2 text-purple-700 rounded bg-neutral-900 py-2 px-2">
                REACT
              </span>
              <span className="mr-2 text-purple-700 rounded bg-neutral-900 py-2 px-2">
                TAILWIND CSS
              </span>
              <span className="mr-2 text-purple-700 rounded bg-neutral-900 py-2 px-2">
                REDUX TOOLKIT
              </span>
              <span className="mr-2 text-purple-700 rounded bg-neutral-900 py-2 px-2">
                RESPONSIVE
              </span>
              <span className="mr-0 ml-3 text-purple-700 rounded bg-neutral-900 py-2 px-0">
                Authentication
              </span>
              <span className="mr-0 ml-3 text-purple-700 rounded bg-neutral-900 py-2 px-0">
                Context API
              </span>
              <span className="mr-0 ml-3 text-purple-700 rounded bg-neutral-900 py-2 px-0">
                React Router
              </span>
            </div>
            <div className="source flex justify-center gap-5 mt-10">
              <a
                href="https://github.com/Abdelmoneim21/Restaurant-Delivery"
                target="_blank"
                className="inline-block bg-green-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-green-900 hover:shadow-lg transition duration-200 ease-in-out"
              >
                Github Repo
                <HiMiniArrowTopRightOnSquare className="inline-block ml-2 text-2xl " />
              </a>
              <a
                href="https://babaeid.com/"
                target="_blank"
                className="inline-block bg-red-500  text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-red-700 hover:shadow-lg transition duration-200 ease-in-out"
              >
                Live Demo
                <HiMiniArrowTopRightOnSquare className="inline-block ml-2 text-2xl " />
              </a>
            </div>
          </motion.div>
        </div>
        <div className="project md:flex justify-center w-[80%] m-auto items-center gap-10 mb-[5%] mt-20 md:mt-0">
          <motion.img
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 1 }}
            src="../assets//Screenshot 2024-11-07 100008.png"
            className="mb-6 rounded mx-auto"
            width={250}
            height={250}
            alt="e-commerce app"
          />
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 1 }}
            className="text w-full lg:w-1/2"
          >
            <h1 className="mb-4 font-semibold text-2xl">Weather App</h1>
            <p className="leading-7 text-neutral-500">
              This weather website offers real-time weather updates by accessing
              user location and integrating data from a REST API. With user
              permission, it automatically displays local weather conditions,
              including temperature, humidity, wind speed, and current
              forecasts. The platform also allows global weather searches,
              presenting accurate data in a user-friendly, responsive design
              that updates dynamically with location or search changes.
            </p>
            <div className="techs mt-6">
              <span className="mr-2 text-purple-700 rounded bg-neutral-900 py-2 px-2">
                HTML
              </span>
              <span className="mr-2 text-purple-700 rounded bg-neutral-900 py-2 px-2">
                CSS
              </span>
              <span className="mr-2 text-purple-700 rounded bg-neutral-900 py-2 px-2">
                Javascript
              </span>
              <span className="mr-0 text-purple-700 rounded bg-neutral-900 py-2 px-0">
                RestAPI
              </span>
            </div>
            <div className="source flex justify-center gap-5 mt-10">
              <a
                href="https://github.com/Abdelmoneim21/weather-app"
                target="_blank"
                className="inline-block bg-green-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-green-900 hover:shadow-lg transition duration-200 ease-in-out"
              >
                Github Repo
                <HiMiniArrowTopRightOnSquare className="inline-block ml-2 text-2xl " />
              </a>
              <a
                href="https://chipper-strudel-7976a9.netlify.app/"
                target="_blank"
                className="inline-block bg-red-500  text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-red-700 hover:shadow-lg transition duration-200 ease-in-out"
              >
                Live Demo
                <HiMiniArrowTopRightOnSquare className="inline-block ml-2 text-2xl " />
              </a>
            </div>
          </motion.div>
        </div>
        <div className="project md:flex justify-center w-[80%] m-auto items-center gap-10 mb-[5%] mt-20 md:mt-0">
          <motion.img
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 1.5 }}
            src="../assets/Screenshot 2024-11-08 153906.png"
            className="mb-6 rounded mx-auto"
            width={250}
            height={250}
            alt="e-commerce app"
          />
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 1 }}
            className="text w-full lg:w-1/2"
          >
            <h1 className="mb-4 font-semibold text-2xl">To Do List App</h1>
            <p className="leading-7 text-neutral-500">
              This website, titled "My Book List App" allows users to manage a
              personalized book list. Users can enter book details—title,
              author, and ISBN—into a simple form. Submitted books then appear
              in a table that displays each book’s information and includes a
              delete button for easy removal. The site’s design, using
              responsive CSS, ensures functionality and a clean look on various
              devices, making it accessible and easy to use on both desktop and
              mobile screens.
            </p>
            <div className="techs mt-6">
              <span className="mr-2 text-purple-700 rounded bg-neutral-900 py-2 px-2">
                HTML
              </span>
              <span className="mr-2 text-purple-700 rounded bg-neutral-900 py-2 px-2">
                CSS
              </span>
              <span className="mr-2 text-purple-700 rounded bg-neutral-900 py-2 px-2">
                Javascript
              </span>
              <span className="mr-0 text-purple-700 rounded bg-neutral-900 py-2 px-0">
                Responsive Design
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
