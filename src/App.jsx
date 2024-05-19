import { useState } from 'react'
import { IoMdMail } from "react-icons/io";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section>

{/* ------------------- GRID-1  --------------------- */}
          <div className='grid grid-cols-1 gap-4 list-none lg:grid-cols-3 lg:grid-rows-3 xl:grid-cols-4 xl:grid-rows-4'>
            <div className='lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 bg-[#1A1A1A] dark:bg-secondary shadow-xl dark:shadow-thick rounded-3xl p-8'>
              <div className='relative flex items-center gap-x-4'>
                  <img
                   className='h-10 w-10 rounded-full object-cover ring-1 dark:ring-white/10 ring-primary/5'
                   src="./public/images/avatardp.jpg" alt="" />
                   <div className='text-sm leading-6'>
                      <p className='font-semibold text-primary dark:text-white'>
                        <a href="#">
                          <span className='absolute inset-0'>
                            Prateek Singh Chouhan
                          </span>
                        </a>
                      </p>
                      <p className='text-zinc-500 dark:text-zinc-400'>
                        Full Stack Developer
                      </p>
                   </div>
              </div>
              <p className='text-3xl mt-6 font-medium lg:text-4xl tracking-tight text-primary dark:text-white'>
                Hey, I'm Prateek, welcome to my site!
              </p>
              <p className='mt-8 text-sm text-zinc-500 dark:text-zinc-400 font-light lg:text-xl'>
              I am a digital designer and developer located in Bhopal, India. I excel in the digital world, crafting user interfaces and exploring the complexities of coding. 
              <br />
              <br />
              Outside of the screen, I enjoy playing football or working out at the gym. My life is a balanced mix of technology and nature, switching between focused coding sessions and moments of creative inspiration.
              </p>
            </div>
          </div>

{/* ------------------- GRID-2 (Find me on section starts here )  --------------------- */}
          <div className='ring-1 dark:ring-white/10 ring-primary/5 rounded-3xl justify-between shadow-xl dark:shadow-thick items-center flex flex-col p-8 h-full bg-[#1A1A1A]  dark:bg-secondary'>
            <div className='w-full'>
              <p className='text-xl font-normal tracking-tight text-primary dark:text-white lg:text-8xl'>
              Find <br /> me on
              </p>
            </div>

            {/* Social Icons */}
            <div className='grid mt-4 grid-cols-4 md:grid-cols-8 lg:grid-cols-4 gap-y-4 gap-4 justify-center w-full'>
              <a 
              href="mailto:email@prateeksinghchouhan007.com"
              className='flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-12 w-12'>
              <IoMdMail className='icon icon-tabler h-6 w-6 group-hover:scale-125 duration-300 text-primary hover:text-primary dark:text-black group-hover text-primary:dark:text-white/50' /> 
              </a>

              <a 
              href="https://github.com/Prateeksingchn"
              className='flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-12 w-12'
              >
              <i className="icon icon-tabler h-6 w-6 group-hover:scale-125 duration-300 text-primary hover:text-primary dark:text-black group-hover text-primary:dark:text-white/50 fa-brands fa-github"></i>
              </a>

              <a 
              href="https://www.linkedin.com/in/prateek-singh-chouhan-7a511b1b7"
              className='flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-12 w-12'>
              <i className="icon icon-tabler h-6 w-6 group-hover:scale-125 duration-300 text-primary hover:text-primary dark:text-black group-hover text-primary:dark:text-white/50 fa-brands fa-linkedin"></i>
              </a>

              <a 
              href="https://www.instagram.com/prateeksinghchouhan007"
              className='flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-12 w-12'>
              <i className="icon icon-tabler h-6 w-6 group-hover:scale-125 duration-300 text-primary hover:text-primary dark:text-black group-hover text-primary:dark:text-white/50 fa-brands fa-instagram"></i>  
              </a>

              <a 
              href="https://twitter.com/prateeksinghchouhan"
              className='flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-12 w-12 '>
              <i className="icon icon-tabler h-6 w-6 group-hover:scale-125 duration-300 text-primary hover:text-primary dark:text-black group-hover text-primary:dark:text-white/50 fa-brands fa-twitter"></i>  
              </a>

              <a href="https://www.behance.net/prateeksinghc1"
              className='flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-12 w-12'>
              <i className="icon icon-tabler h-6 w-6 group-hover:scale-125 duration-300 text-primary hover:text-primary dark:text-black group-hover text-primary:dark:text-white/50 fa-brands fa-behance"></i>  
              </a>

              <a href="https://dribbble.com/prateeeeek"
              className='flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-12 w-12'>
                <i className="icon icon-tabler h-6 w-6 group-hover:scale-125 duration-300 text-primary hover:text-primary dark:text-black group-hover text-primary:dark:text-white/50 fa-brands fa-dribbble"></i>
              </a>

              <a href="https://in.pinterest.com/prateekchouhan96483/"
              className='flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-12 w-12'>
              <i className="icon icon-tabler h-6 w-6 group-hover:scale-125 duration-300 text-primary hover:text-primary dark:text-black group-hover text-primary:dark:text-white/50 fa-brands fa-pinterest"></i>
              </a>
            </div>
            {/* Social Icons */}
          </div>

{/* --------------------------------- GRID-3 Designify section starts here  -------------------------------------- */}
          <a 
          href="#"
          className='ring-1 lg:row-span-2 flex flex-col justify-between group hover:ring-primary/10 dark:hover:ring-white/20 duration-300 h-full dark:ring-white/10 ring-primary/5 lg:row-start-2 md:grid-cols-2 md:grid lg:gap-0 md:items-center md:gap-12 lg:grid-cols-none lg:col-start-2 lg:col-span-2 rounded-3xl p-8 bg-[#1A1A1A] dark:bg-secondary shadow-xl dark:shadow-thick'>
            <div>
              <p className='text-xl tracking-tight font-medium text-primary dark:text-white md:text-6xl'>
                Desinify
              </p>
              <p className='mt-4 text-sm text-zinc-500 dark:text-zinc-400'>
                Design & development subscriptions for startups.
                <br />
                <br />
                Designify streamlines the design process with a fixed monthly rate
                and limitless design requests. Say goodbye to phone calls and
                extensive contracts; reach out to Designify directly at any time.
                Embrace flexibility, pause or terminate your subscription whenever
                you need.
              </p>
            </div>
            <div className='mt-8'>
              <img src="https://images.unsplash.com/photo-1715966966827-25a227141ee9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8"
              className='rounded-2xl group-hover:ring-white/20 duration-300 invert dark:invert-0 aspect-[4/4] bg-primary/5 dark:bg-primary ring-1 ring-white/10  object-cover' alt="" />
            </div>
          </a>
{/* --------------------------------- GRID-3 Designify section ends here  -------------------------------------- */}



{/* --------------------------------- GRID-3 Resume section ends here  -------------------------------------- */}
          <div className='ring-1 dark:ring-white/10  ring-primary/5 flex flex-col justify-between items-center rounded-3xl shadow-xl dark:shadow-thick p-8  bg-[#1A1A1A] dark:bg-secondary overflow-hidden text-center lg:text-left'>
              <div> 
                <p className='text-xl text-primary dark:text-white lg:text-7xl tracking-tight'>
                  Grab my résumé!
                </p>
                <p className='mt-4 text-sm text-zinc-500 dark:text-zinc-400 md:max-w-xs lg:max-w-none'>
                  Unlock the doors to explore the rich tapestry of my professional
                  journey and accomplishments.
                </p>
              </div>
              <div className='w-full mt-8 md:max-w-xs lg:max-w-none'>
                <a href="https://drive.google.com/file/d/14Kgva0jVB4b-4knPzhpDPGV5rtkJVnsI/view?usp=drive_link">
                  <button 
                    type='button'
                    className='text-sm py-2 w-full px-4 h-12 font-semibold focus:ring-2 rounded-lg bg-primary dark:bg-black dark:text-primary dark:hover:text-white hover:text-primary dark:hover:bg-white/5 hover:bg-primary/10 text-white flex duration-200 focus:ring-offset-2 focus:ring-inline-flex items-center justify-between'> 
                    Download my CV
                    <i className="icon icon-tabler icon-tabler-download w-4 h-4 fa-solid fa-download"></i>
                  </button>
                </a>
              </div>
          </div>

{/* --------------------------------- GRID-3 Resume section ends here  -------------------------------------- */}



{/* --------------------------------- GRID-4 << My Projects section starts here >>  -------------------------------------- */}

          <a 
          href="#"
          className='ring-1 lg:row-start-3 items-center h-full flex p-8 flex-col justify-center hover:ring-primary/5 dark:hover:ring-white/20 dark:ring-white/10 ring-primary/5 relative rounded-3xl overflow-hidden bg-[#1A1A1A] dark:bg-secondary shadow-xl dark:shadow-thick'>
            <img 
            src="https://images.unsplash.com/photo-1715151696404-aa4e214ade78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D"
            className='rounded-3xl hover:scale-105 duration-300'
            alt="" />
            <p className='text-xl hover:underline hover:scale-105 duration-500 text-primary dark:text-white lg:text-2xl mt-6'>
              My Projécts!
            </p>
          </a>

{/* --------------------------------- GRID-4 << My Projects section ends here >>  -------------------------------------- */}



{/* --------------------------------- GRID-5 Skills section starts here   -------------------------------------- */}
          <div className='lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 hover:ring-primary/5 bg-[#1A1A1A] dark:bg-secondary dark:hover:ring-white/20 overflow-hidden duration-300 shadow-xl dark:shadow-thick rounded-3xl p-8'>
            <a href="#">
              <div className='-mr-28 pr-4 '>
                <img src="https://images.unsplash.com/photo-1714848195662-3186664aaabd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </div>
            </a>
            <div className='mt-8 grid grid-cols-2 gap-4 text-white p-4 border-2 border-zinc-500 rounded-xl'>
                <div className='flex flex-col items-center justify-center'>
                  <i class="text-6xl hover:scale-125 duration-300 text-teal-200 ri-java-fill"></i>
                  <p className='text-[14px] mt-2 w-full text-center'>Java</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <img className='w-14 h-14 object-cover hover:scale-125 duration-300 rounded-lg' src="https://th.bing.com/th/id/OIG4.li6EO7EIwdkpRxQeS81B?pid=ImgGn" alt="" />
                  <p className='text-[14px] mt-2 w-full text-center'>DSA</p>
                </div>
            </div>

            <div className='grid grid-cols-3 gap-10 mt-8 text-white'>
              <div className='flex flex-col items-center justify-center'>
                <i class="text-5xl hover:scale-125 duration-300 text-yellow-300 fa-brands fa-html5"></i>
                <p className='text-[12px] mt-2 w-full text-center'>HTML</p>
              </div>
              <div className='flex flex-col items-center justify-center'>
              <i class="text-5xl hover:scale-125 duration-300 text-yellow-300 fa-brands fa-css3"></i>
                <p className='text-[12px] mt-2 w-full text-center'>CSS</p>
              </div>
              <div className='flex flex-col items-center justify-center'>
              <i class="text-5xl hover:scale-125 duration-300 text-blue-400 ri-tailwind-css-fill "></i>
                <p className='text-[12px] mt-2 w-full text-center'>Tailwind CSS</p>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <i class="text-5xl hover:scale-125 duration-300 text-green-600 fa-brands fa-js"></i>
                <p className='text-[12px] mt-2 w-full text-center'>JAVASCRIPT</p>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <i class="text-5xl hover:scale-125 duration-300 text-sky-300 fa-brands fa-react"></i>
                <p className='text-[12px] mt-2 w-full text-center'>React</p>
              </div>
              <div className='flex flex-col items-center justify-center'>
              <i class="text-5xl hover:scale-125 duration-300 text-indigo-500 ri-nextjs-fill"></i>
                <p className='text-[12px] mt-2 w-full text-center'>Next JS</p>
              </div>
              <div className='flex flex-col items-center justify-center'>
              <i class="text-5xl hover:scale-125 duration-300 text-orange-300 fa-brands fa-node"></i>
                <p className='text-[12px] mt-2 w-full text-center'>Node Js</p>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <img
                className='w-12 h-12 object-cover hover:scale-125 duration-300 rounded-lg' 
                src="https://th.bing.com/th/id/OIP.1fZjQpkRMKTBGN_7H5YnFwHaGL?w=212&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
                <p className='text-[12px] mt-2 w-full text-center'>Express Js</p>
              </div>
 
              
            </div>

          </div>
{/* --------------------------------- GRID-5 Skills section ends here   -------------------------------------- */}



{/* --------------------------------- GRID-3 Resume section ends here  -------------------------------------- */}
{/* --------------------------------- GRID-3 Resume section ends here  -------------------------------------- */}
{/* --------------------------------- GRID-3 Resume section ends here  -------------------------------------- */}
{/* --------------------------------- GRID-3 Resume section ends here  -------------------------------------- */}
{/* --------------------------------- GRID-3 Resume section ends here  -------------------------------------- */}

      </section>
    </>
  )
}

export default App
