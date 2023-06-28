import Image from 'next/image';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import ethan from "../public/images/ethan.png";
import coding from "../public/images/coding.png";
import design from "../public/images/design.png";
import project1 from "../public/images/web1.png";
import project2 from "../public/images/web2.png";
import project3 from "../public/images/web3.png";
import project4 from "../public/images/web4.png";
import project5 from "../public/images/web5.png";
import project6 from "../public/images/web6.png";

export default function Home() {
  return (
    <>
      <main className="bg-white px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className ="flex justify-between py-10 mb-12">
            <h1 className="text-xl">React Portfolio</h1>
            <ul className="flex items-center">
              <li className ="mr-3">
                <BsFillMoonStarsFill className="cursor-pointer text-2x"/>
              </li>
              <li>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md" href="#">Resume</a>
              </li>
            </ul>
          </nav>

          <div className="text-center py-10 px-5">
            <h2 className="text-4xl py-2 text-teal-600 font-medium">Hi, I'm Ethan.</h2>
            <h3 className="text-xl  py-2">A Product Designer</h3>

            <p className="text-md py-4 text-gray-500 leading-8">As a moonlighting developer and aesthetic designer, I'm passionate about creating interfaces that are fun, 
            useful, and user-centric.</p>
          </div>

          <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 mx-auto overflow-hidden">
            <Image src={ethan} />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-2xl pt-7">About Me</h3>
            <p className="text-md pt-4 text-gray-500 leading-8">Over the past 5 years, I've worked in various areas of <span className="text-teal-600">digital design, including front-end development, email, marketing, and app UI/UX</span>. 
            I'm proud to have worn many hats.</p>
            <p className="text-md pt-2 py-4 text-gray-500 leading-8">These days, I focus on building Drawing Bot AI tools as a Senior Product Designer.</p>
          </div>
        </section>

        <section>
          <div className="text-center p-10 rounded-xl my-5 shadow-lg">
            <h3 className="text-2xl pt-7">What I can do</h3>

            <div className="w-100 flex items-center justify-center flex-col">
              <Image className="mt-8" src={coding} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Clean Code</h3>
              <p>Write less and efficient code</p>

              <p className="text-teal-500 pt-4">Programming Language I use</p>
              <ul className="flex">
                <li className="text-gray-600 py-1">JavaScript</li>
                <li className="text-gray-600 py-1 mx-5">React</li>
                <li className="text-gray-600 py-1">Python</li>
              </ul>
            </div>
          </div>

          <div className="text-center p-10 rounded-xl my-5 shadow-lg">
            <div className="w-100 flex items-center justify-center flex-col drop-shadow-lg mb-5">
              <Image className="mt-8" src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
              <p>Create elegant design that suited your needs design theory</p>

              <p className="text-teal-500 pt-4">Design tools I use</p>
              <ul className="flex">
                <li className="text-gray-600 py-1">PhotoShop</li>
                <li className="text-gray-600 py-1 mx-5">Illustrator</li>
                <li className="text-gray-600 py-1">Figma</li>
              </ul>
            </div>
          </div>

          <div className="text-center p-10 rounded-xl my-5 shadow-lg">
            <div className="w-100 flex items-center justify-center flex-col drop-shadow-lg">
              <Image className="mt-8" src={coding} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Clean Code</h3>
              <p>Write less and efficient code</p>

              <p className="text-teal-500 pt-4">Programming Language I use</p>
              <ul className="flex">
                <li className="text-gray-600 py-1">JavaScript</li>
                <li className="text-gray-600 py-1 mx-5">React</li>
                <li className="text-gray-600 py-1">Python</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-2xl pt-7">Portfolio</h3>
            <p className="text-md pt-4 text-gray-500 leading-8">
              Since the beginning of my journey as a senior product designer. I've done some remote work for 
              <span className="text-teal-600">clients</span> and <span className="text-teal-600">agencies</span>. 
            </p>
            <p className="text-md pt-2 py-4 text-gray-500 leading-8">
              I offer from a wide range of services, including <span className="text-teal-600">brand design, programming and consulting</span>.
            </p>

            <div className="">
              <div>
                <Image src={project1}/>
              </div>
              <div>
                <Image src={project2}/>
              </div>
              <div>
                <Image src={project3}/>
              </div>
              <div>
                <Image src={project4}/>
              </div>
              <div>
                <Image src={project5}/>
              </div>
              <div>
                <Image src={project6}/>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
