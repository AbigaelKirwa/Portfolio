import Head from 'next/head';
import{BsFillMoonStarsFill} from 'react-icons/bs';
import{AiFillGithub, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai';
import Image from "next/image";
import portfolio from '../public/images/portfolio2.png';
import design from '../public/images/design.png'
import code from '../public/images/code.png'
import consulting from '../public/images/consulting.png'

import ui1 from '../public/images/kirche9.png'
import ui4 from '../public/images/computerco.png'
import ui7 from '../public/images/animation.png'
import ui8 from '../public/images/afyaweb2.png'
import ui9 from '../public/images/yoga5.png'
import {useState} from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Abigael Kirwa Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20, lg:px-20 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className='text-xl font-burtons dark:text-white'>developed by aby</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor=pointer text-2xl dark:text-white'/>
              </li>
              <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href='https://drive.google.com/file/d/15iekOi6ltPeP_ppPq0LoV6_tFo0H6Hqo/view?usp=sharing' target="_blank">Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Abigael Kirwa</h2>
            <h3 className='text-2xl py-2 md:text-3xl text-white'>Developer and Designer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-teal-200'> I am a computer science student soon graduating in 2024. I enjoy creating designs and developing them. I am currently a MERN (MongoDB, ExpressJs, ReactJs, NodeJs) stack developer.
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400'>
            <a href="https://github.com/AbigaelKirwa" target="_blank"><AiFillGithub /></a>
            <a href="https://www.linkedin.com/in/abigael-kirwa-40647219b/" target="_blank"><AiFillLinkedin /></a>
            <a href="https://www.youtube.com/channel/UCmnRQ3OAWO-CsJBaILn1d7w" target="_blank"><AiFillYoutube /></a>
          </div>
          <div className='flex items-center justify-center mt-10'>
            <Image src={portfolio} className='w-1/3 max-[950px]:w-full max-sm:w-xl'/>
          </div>
        </section>
        <section>
          <div>
            <h3 className="mt-10 text-3xl py-1 dark:text-white max-md:mt-3">Services I offer</h3>
            <p className='text-md py-2 text-justify leading-8 text-gray-800 dark:text-teal-200'>
              I am available for both short and long term projects requiring <span className='text-teal-500 dark:text-white'>design </span> 
              or <span className='text-teal-500 dark:text-white'> development</span>. I am also interested in development
              <span className='text-teal-500 dark:text-white'> internship</span> opportunities. Please do reach out to me through my email <span className='text-teal-500 dark:text-white'><a href="mailto:">abigael.kirwa@strathmore.edu</a></span> if interested.
            </p>
          </div>
          
          <div className='grid grid-cols-3 gap-7 max-lg:grid-cols-2 max-lg:gap-10  max-md:grid-cols-2 max-md:gap-5 max-sm:grid-cols-1'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-slate-100'>
              <div className='flex flex-col justify-center items-center' width="100%"><Image src={design}  width={100} height={100} /></div>
              <h3 className='text-lg pt-8 pb-2 font-bold text-cyan-800'>Beautiful Designs</h3>
              <p className='py-2'>Creating beautiful designs for your website</p>
              <h4 className='py-4 text-teal-600'>Design tools that I use</h4>
              <div className='grid grid-cols-2 gap-2'>
                <p className='text-gray-800 py-1'>Figma</p>
                <p className='text-gray-800 py-1'>Canva</p>
                <p className='text-gray-800 py-1'>Adobe XD</p>
                <p className='text-gray-800 py-1'>Flutter Flow</p>
              </div>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-slate-100'>
            <div className='flex flex-col justify-center items-center' width="100%"><Image src={code}  width={100} height={100}/></div>
              <h3 className='text-lg pt-8 pb-2 font-bold text-cyan-800'>Front End</h3>
              <p className='py-2'>Transforming design into functional code</p>
              <h4 className='py-4 text-teal-600'>Design tools that I use</h4>
              <div className='grid grid-cols-2 gap-2'>
                <p className='text-gray-800 py-1'>ReactJs</p>
                <p className='text-gray-800 py-1'>PHP</p>
                <p className='text-gray-800 py-1'>Django</p>
                <p className='text-gray-800 py-1'>NextJs</p>
              </div>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-slate-100'>
            <div className='flex flex-col justify-center items-center' width={'100%'}><Image src={consulting}  width={100} height={100}/></div>
              <h3 className='text-lg  pt-8 pb-2 font-bold text-cyan-800'>Back End</h3>
              <p className='py-2'>Working with databases and API's to handle data</p>
              <h4 className='py-4 text-teal-600'>Design tools that I use</h4>
              <div className='grid grid-cols-2 gap-2'>
                <p className='text-gray-800 py-1'>MongoDB</p>
                <p className='text-gray-800 py-1'>Postman API</p>
                <p className='text-gray-800 py-1'>Insomnia API</p>
                <p className='text-gray-800 py-1'>mySQL</p>
              </div>
            </div>

          </div>
        </section>
         
        <div>
          <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
          <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>
            Below is a list of websites I have designed, developed, and deployed. Click to view full page.
          </p>
        </div>
        <div className='grid grid-cols-2 gap-10 py-10 max-md:grid-cols-1'> 
          <div>
          <a href="https://kirche.netlify.app/" target="_blank"><Image src={ui1} className="rounded-lg object-cover h-80 max-[390px]:h-40"/></a>
          </div>
          <div>
            <a href="https://computerco.netlify.app/" target="_blank"><Image src={ui4} className="rounded-lg object-cover h-80 max-[390px]:h-40"/></a>
          </div>
          <div>
            <a href="https://abigaelkirwa.github.io/Animation-Website/" target="_blank"><Image src={ui7} className="rounded-lg object-cover h-80 max-[390px]:h-40"/></a>
          </div>
           <div>
            <a href="https://afyaweb.netlify.app/" target="_blank"><Image src={ui8} className="rounded-lg object-cover h-80 max-[390px]:h-40"/></a>
          </div>
          <div>
            <a href="https://yoga-tranquil.netlify.app/" target="_blank"><Image src={ui9} className="rounded-lg object-cover h-80 max-[390px]:h-40"/></a>
          </div>
        </div>
        
  
      </main>
    </div>
  );
}
