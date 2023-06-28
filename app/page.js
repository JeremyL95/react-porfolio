/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */

'use client'
import { useState } from "react";
import Image from 'next/image';

// assets
import {BsFillMoonStarsFill} from 'react-icons/bs';
import ethan from "../public/images/ethan.png";
import coding from "../public/images/coding.png";
import design from "../public/images/design.png";
import video from "../public/images/video.png";
import project1 from "../public/images/web1.png";
import project2 from "../public/images/web2.png";
import project3 from "../public/images/web3.png";
import project4 from "../public/images/web4.png";
import project5 from "../public/images/web5.png";
import project6 from "../public/images/web6.png";

// components
import Card from "./components/Card";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="h-4/5">
          <nav className ="flex justify-between py-10 mb-12">
            <h1 className="text-2xl text-teal-600 font-bold">Ethan</h1>
            <ul className="flex items-center">
              <li className ="mr-4" onClick={()=> setDarkMode(!darkMode)}>
                <BsFillMoonStarsFill className="cursor-pointer text-2x text-gray-600"/>
              </li>
              <li>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md" href="#">Resume</a>
              </li>
            </ul>
          </nav>

          <div className="text-center py-10 px-5">
            <h2 className="text-4xl py-2 text-teal-600 font-medium md:text-6xl">Hi, I'm Ethan.</h2>
            <h3 className="text-xl py-2 text-gray-600 md:text-3xl">A Product Designer</h3>

            <p className="text-md py-4 text-gray-500 leading-8 md:text-xl max-w-lg mx-auto">As a moonlighting developer and aesthetic designer, I'm passionate about creating interfaces that are fun, 
            useful, and user-centric.</p>
          </div>

          <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 mx-auto overflow-hidden">
            <Image src={ethan} alt="ethan-avatar"/>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-2xl text-gray-500 pt-7 md:mt-10">About Me</h3>
            <p className="text-md pt-4 text-gray-500 leading-8">
              Over the past 5 years, I've worked in various areas of <span className="text-teal-600">digital design, including front-end development, 
              email, marketing, and app UI/UX</span>. I'm proud to have worn many hats.</p>
            <p className="text-md pt-2 py-4 text-gray-500 leading-8">These days, I focus on building Drawing Bot AI tools as a Senior Product Designer.</p>
          </div>
        </section>

        <section>
          <h3 className="text-2xl text-gray-500 pt-7">What I can do</h3>

          <div className="lg:flex gap-10">
            <Card title="Clean Code" description="Write less and efficient code" images={coding} details1="JavaScript" details2="React" details3="Python"/>
            <Card title="Beautiful Designs" description="Create elegant design that suited your needs design theory" images={design} details1="PhotoShop" details2="Illustrator" details3="Figma"/>
            <Card title="Video Editing" description="Create stunning visual effects" images={video} details1="Premiere Pro" details2="Final Cut Pro" details3="Davinci Resolve"/>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-2xl text-gray-500 pt-7">Portfolio</h3>
            <p className="text-md pt-4 text-gray-500 leading-8">
              Since the beginning of my journey as a senior product designer. I've done some remote work for 
              <span className="text-teal-600"> clients</span> and <span className="text-teal-600">agencies</span>. 
            </p>
            <p className="text-md pt-2 py-4 text-gray-500 leading-8">
              I offer from a wide range of services, including <span className="text-teal-600">brand design, programming and consulting</span>.
            </p>

            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <Portfolio image={project1} />
              <Portfolio image={project2} />
              <Portfolio image={project3} />
              <Portfolio image={project4} />
              <Portfolio image={project5} />
              <Portfolio image={project6} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
