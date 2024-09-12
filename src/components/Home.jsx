import React from 'react';
import { IoMdMail } from "react-icons/io";
import { Link } from 'react-router-dom';

const SocialIcon = ({ href, icon }) => (
  <a 
    href={href}
    className='flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-12 w-12'
  >
    {icon}
  </a>
);

const SkillIcon = ({ icon, name }) => (
  <div className='flex flex-col items-center justify-center'>
    {icon}
    <p className='text-[12px] mt-2 w-full text-center'>{name}</p>
  </div>
);

const Testimonial = ({ text, name, role, textColor }) => (
  <div className='mt-2'>
    <p className={`text-sm ${textColor}`}>{text}</p>
    <p className='text-xs mt-2 text-zinc-500'>
      <span className='block text-xs'>{name}</span>
      <span className='block text-xs'>{role}</span>
    </p>
  </div>
);

function Home() {
  return (
    <section className='dark:bg-[#101010] w-full min-h-screen'>
      <div className='p-4'>
        <div className='grid grid-cols-1 gap-4 list-none lg:grid-cols-3 lg:grid-rows-3 xl:grid-cols-4 xl:grid-rows-4'>
          {/* Profile Section */}
          <div className='lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 bg-[#1A1A1A] dark:bg-secondary shadow-xl dark:shadow-thick rounded-3xl p-8'>
            <div className='relative flex items-center gap-x-4'>
              <img
                className='h-10 w-10 rounded-full object-cover ring-1 dark:ring-white/10 ring-primary/5'
                src="./public/images/avatardp.jpg" alt="Prateek Singh Chouhan" />
              <div className='text-sm leading-6'>
                <p className='font-semibold text-primary dark:text-white ml-12'>
                  <a href="#">
                    <span className='absolute inset-0 ml-14 '>
                      Prateek Singh Chouhan
                    </span>
                  </a>
                </p>
                <p className='text-zinc-500 dark:text-zinc-400 mt-5'>
                  Full Stack Developer
                </p>
              </div>
            </div>
            <p className='text-3xl mt-6 font-medium lg:text-4xl tracking-tight leading-16 text-primary dark:text-white'>
              Hey, I'm Prateek, welcome to my site!
            </p>
            <p className='mt-8 leading-16 text-sm text-zinc-500 dark:text-zinc-400 font-light lg:text-xl'>
              I am a digital designer and developer located in Bhopal, India. I excel in the digital world, crafting user interfaces and exploring the complexities of coding. 
              <br />
              <br />
              Outside of the screen, I enjoy playing football or working out at the gym. My life is a balanced mix of technology and nature, switching between focused coding sessions and moments of creative inspiration.
            </p>
          </div>

          {/* Social Media Section */}
          <div className='ring-1 dark:ring-white/10 ring-primary/5 rounded-3xl justify-between shadow-xl dark:shadow-thick items-center flex flex-col p-8 h-full bg-[#1A1A1A] dark:bg-secondary'>
            <div className='w-full'>
              <p className='text-6xl font-normal tracking-tight text-primary dark:text-white lg:text-8xl'>
                Find <br /> me on
              </p>
            </div>
            <div className='grid mt-32 grid-cols-4 md:grid-cols-8 lg:grid-cols-4 gap-y-4 gap-4 justify-center items-center w-full'>
              <SocialIcon href="mailto:email@prateeksinghchouhan007.com" icon={<IoMdMail className='icon icon-tabler h-6 w-6 group-hover:scale-125 duration-300  text-primary hover:text-primary dark:text-black group-hover text-primary:dark:text-white/50' />} />
              <SocialIcon href="https://github.com/Prateeksingchn" icon={<i className="icon icon-tabler h-6 w-6 ml-[5.5px] text-[22px] mt-[2px]  group-hover:scale-125 duration-300  text-primary hover:text-primary dark:text-black group-hover text-primary:dark:text-white/50 fa-brands fa-github"></i>} />
              <SocialIcon href="https://www.linkedin.com/in/prateek-singh-chouhan-7a511b1b7" icon={<i className="icon icon-tabler h-6 w-6 ml-[5.5px] text-[22px] mt-[2px]  group-hover:scale-125 duration-300  text-primary hover:text-primary dark:text-black group-hover text-primary:dark:text-white/50 fa-brands fa-linkedin"></i>} />
              <SocialIcon href="https://www.instagram.com/prateeksinghchouhan007" icon={<i className="icon icon-tabler h-6 w-6 ml-[5.5px] text-[22px] mt-[2px]  group-hover:scale-125 duration-300  text-primary hover:text-primary dark:text-black group-hover text-primary:dark:text-white/50 fa-brands fa-instagram"></i>} />
              <SocialIcon href="https://twitter.com/prateeksinghchouhan" icon={<i className="icon icon-tabler h-6 w-6 ml-[5.5px] text-[22px] mt-[2px]  group-hover:scale-125 duration-300  text-primary hover:text-primary dark:text-black group-hover text-primary:dark:text-white/50 fa-brands fa-twitter"></i>} />
              <SocialIcon href="https://www.behance.net/prateeksinghc1" icon={<i className="icon icon-tabler h-6 w-6 ml-[5.5px] text-[22px] mt-[2px]  group-hover:scale-125 duration-300  text-primary hover:text-primary dark:text-black group-hover text-primary:dark:text-white/50 fa-brands fa-behance"></i>} />
              <SocialIcon href="https://dribbble.com/prateeeeek" icon={<i className="icon icon-tabler h-6 w-6 ml-[5.5px] text-[22px] mt-[2px]  group-hover:scale-125 duration-300  text-primary hover:text-primary dark:text-black group-hover text-primary:dark:text-white/50 fa-brands fa-dribbble"></i>} />
              <SocialIcon href="https://in.pinterest.com/prateekchouhan96483/" icon={<i className="icon icon-tabler h-6 w-6 ml-[5.5px] text-[22px] mt-[2px]  group-hover:scale-125 duration-300  text-primary hover:text-primary dark:text-black group-hover text-primary:dark:text-white/50 fa-brands fa-pinterest"></i>} />
            </div>
          </div>

          {/* Projects Section */}
          <Link 
            to="/projects"
            className='ring-1 lg:row-span-2 flex flex-col justify-between group hover:ring-primary/10 dark:hover:ring-white/20 duration-300 h-full dark:ring-white/10 ring-primary/5 lg:row-start-2 md:grid-cols-2 md:grid lg:gap-0 md:items-center md:gap-12 lg:grid-cols-none lg:col-start-2 lg:col-span-2 rounded-3xl p-8 bg-[#1A1A1A] dark:bg-secondary shadow-xl dark:shadow-thick'>
            <div>
              <p className='text-xl tracking-tight font-medium text-primary dark:text-white md:text-6xl'>
              Projects   
              </p>
              {/* <p className='mt-4 text-sm text-zinc-500 dark:text-zinc-400'>
                Design & development subscriptions for startups.
                <br />
                <br />
                Designify streamlines the design process with a fixed monthly rate
                and limitless design requests. Say goodbye to phone calls and
                extensive contracts; reach out to Designify directly at any time.
                Embrace flexibility, pause or terminate your subscription whenever
                you need.
              </p> */}
            </div>
            <div className='mt-8'>
              <img 
                src="/images/Projectsnew.png"
                className='rounded-2xl h-auto group-hover:ring-white/20 duration-300 invert dark:invert-0 aspect-[4/4] bg-primary/5 dark:bg-primary ring-1 ring-white/10 object-cover' 
                alt="Designify" 
              />
            </div>
          </Link>

          {/* Resume Section */}
          <div className='ring-1 dark:ring-white/10 ring-primary/5 flex flex-col justify-between items-center rounded-3xl shadow-xl dark:shadow-thick p-8 bg-[#1A1A1A] dark:bg-secondary overflow-hidden text-center lg:text-left'>
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
                  className='text-sm py-2 w-full px-4 h-12 font-semibold focus:ring-2 rounded-lg bg-primary dark:bg-[#ECECEC] dark:text-black dark:hover:text-white hover:text-primary dark:hover:bg-white/5 hover:bg-primary/10 text-white flex duration-200 focus:ring-offset-2 focus:ring-inline-flex items-center justify-between'> 
                  Download my CV
                  <i className="icon icon-tabler icon-tabler-download w-4 h-4 fa-solid fa-download"></i>
                </button>
              </a>
            </div>
          </div>

          {/* Designify Section */}
            <Link 
              to="/designify"
              className='ring-1 lg:row-start-3 items-center h-full flex px-8 pb-8 pt-2 flex-col justify-center hover:ring-primary/5 dark:hover:ring-white/20 dark:ring-white/10 ring-primary/5 relative rounded-3xl overflow-hidden bg-[#1A1A1A] dark:bg-secondary shadow-xl dark:shadow-thick'
            >
              
              <p className='text-xl hover:underline hover:scale-105 duration-500 text-primary w-full text-start dark:text-white lg:text-2xl mt-2'>
                Designify
              </p>
              <p className='mt-4 text-sm text-zinc-500 dark:text-zinc-400'>
                Design & development subscriptions for startups.
                Designify streamlines the design process with a fixed monthly rate
                and limitless design requests. Say goodbye to phone calls and
                extensive contracts; reach out to Designify directly at any time.
                Embrace flexibility, pause or terminate your subscription whenever
                you need.
              </p>
              <img 
                src="/images/Desginifynew.png"
                className='rounded-3xl hover:scale-105 duration-300 w-[250px] '
                alt="designify" 
              />
            </Link>

           {/* Skills Section */}
           <div className='lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 hover:ring-primary/5 bg-[#1A1A1A] dark:bg-secondary dark:hover:ring-white/20 overflow-hidden duration-300 shadow-xl dark:shadow-thick rounded-3xl p-8'>
            <a href="#">
              <div className='-mr-28 pr-4 '>
                <img src="./public/images/skills3.png" class="rounded-2xl object-cover ring-1 h-64 w-[75%] lg:h-auto dark:ring-white/10 ring-primary/5 bg-tertiary hover:scale-105 duration-300" alt="" />
              </div>
            </a>
            <div className='mt-8 grid grid-cols-2 gap-4 text-white p-4 border-2 border-zinc-500 rounded-xl'>
              <div className='flex flex-col items-center justify-center'>
                <i className="text-6xl hover:scale-125 duration-300 text-teal-200 ri-java-fill"></i>
                <p className='text-[14px] mt-2 w-full text-center'>Java</p>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <img className='w-14 h-14 object-cover hover:scale-125 duration-300 rounded-lg' src="https://th.bing.com/th/id/OIG4.li6EO7EIwdkpRxQeS81B?pid=ImgGn" alt="" />
                <p className='text-[14px] mt-2 w-full text-center'>DSA</p>
              </div>
            </div>

            <div className='grid grid-cols-3 gap-10 mt-8 text-white'>
              <div className='flex flex-col items-center justify-center'>
                <i className="text-5xl hover:scale-125 duration-300 text-yellow-300 fa-brands fa-html5"></i>
                <p className='text-[12px] mt-2 w-full text-center'>HTML</p>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <i className="text-5xl hover:scale-125 duration-300 text-yellow-300 fa-brands fa-css3"></i>
                <p className='text-[12px] mt-2 w-full text-center'>CSS</p>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <i className="text-5xl hover:scale-125 duration-300 text-blue-400 ri-tailwind-css-fill "></i>
                <p className='text-[12px] mt-2 w-full text-center'>Tailwind CSS</p>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <i className="text-5xl hover:scale-125 duration-300 text-green-600 fa-brands fa-js"></i>
                <p className='text-[12px] mt-2 w-full text-center'>JAVASCRIPT</p>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <i className="text-5xl hover:scale-125 duration-300 text-sky-300 fa-brands fa-react"></i>
                <p className='text-[12px] mt-2 w-full text-center'>React</p>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <i className="text-5xl hover:scale-125 duration-300 text-indigo-500 ri-nextjs-fill"></i>
                <p className='text-[12px] mt-2 w-full text-center'>Next JS</p>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <i className="text-5xl hover:scale-125 duration-300 text-orange-300 fa-brands fa-node"></i>
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

          {/* Newsletter Section */}
          <div className='ring-1 dark:ring-white/10 ring-primary/5 flex flex-col p-8 h-full justify-center items-center rounded-3xl overflow-hidden relative lg:col-span-2 lg:row-start-4 bg-[#1A1A1A] dark:bg-secondary shadow-xl dark:shadow-thick'>
            <div className='relative p-8 text-center w-full'>
              <p className='text-xl tracking-tight font-medium text-primary dark:text-white md:text-6xl'>
                Subscribe <span className='lg:block'>to my newsletter</span>
              </p>
              <form className='mt-6 sm:flex w-full lg:max-w-sm mx-auto'>
                <label htmlFor="email-address" className='sr-only'>Email address</label>
                <input 
                  type="email"
                  name='email-address'
                  id='email-address'
                  autoComplete='email'
                  required=''
                  className='block w-full h-12 px-4 py-2 text-sm text-zinc-500 bg-[#262626] dark:bg-tertiary ring-1 dark:ring-white/10 ring-primary/5 rounded-lg appearance-none focus:ring-white/20 placeholder-zinc-400 focus:border-zinc-300 focus:bg-primary focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  placeholder='Enter your email' />
                <div className='mt-4 sm:ml-2 sm:mt-0 sm:flex-shrink-0'>
                  <button
                    type='submit'
                    className='text-sm py-2 w-full px-4 h-12 font-semibold focus:ring-2 rounded-lg bg-primary dark:bg-white dark:text-primary dark:hover:text-white hover:text-primary dark:hover:bg-white/5 hover:bg-primary/10 text-black flex duration-200 focus:ring-offset-2 focus:ring-inline-flex items-center justify-between'>
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className='ring-1 dark:ring-white/10 ring-primary/5 shadow-xl dark:shadow-thick rounded-3xl p-8 lg:row-start-4 h-full flex flex-col justify-between bg-[#1A1A1A] dark:bg-secondary'>
            <p className='text-xl tracking-tight font-medium text-primary dark:text-white md:text-5xl'>
              Testimonials
            </p> 
            <div className='md:grid md:grid-cols-2 gap-6 lg:grid-cols-1'>
              <div className='mt-2'>
                <p className='text-sm text-pink-500 dark:text-pink-400'>
                  "Big fan of your themes. They're well-organized, look clean, and
                  are fast."
                </p>
                <p className='text-xs mt-2 text-zinc-500'>
                  <span className='block text-xs'>Yuvraj Bali</span>
                  <span className='block text-xs'>Developer</span>
                </p>
              </div>
              <div className='mt-2'>
                <p className='text-sm text-pink-500 dark:text-pink-400'>
                  "Big fan of your themes. They're well-organized, look clean, and
                  are fast."
                </p>
                <p className='text-xs mt-2 text-zinc-500'>
                  <span className='block text-xs'>Yuvraj Bali</span>
                  <span className='block text-xs'>Developer</span>
                </p>
              </div>
              <div className='mt-2'>
                <p className='text-sm text-orange-500 dark:text-orange-300'>
                  "Amazing resource using @react and @tailwindcss! I got it
                  a week ago and have found the contents really useful.
                </p>
                <p className='text-xs mt-2 text-zinc-500'>
                  <span className='block text-xs'>Ayush</span>
                  <span className='block text-xs'>Entrepreneur</span>
                </p>    
              </div>
            </div> 
          </div>

          {/* About Section */}
          <div className='lg:col-span-2 xl:col-span-1 h-full flex flex-col justify-between lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 bg-[#1A1A1A] dark:bg-secondary shadow-xl dark:shadow-thick rounded-3xl p-8'>
            <p className='text-xl tracking-tight font-medium text-primary dark:text-white md:text-3xl'>
              As a digital designer, my expertise lies in crafting distinctive
              visual identities for digital products.
              <br />
              <br />
              I hold the belief that an engaging design begins with shared values,
              transparent communication, and a genuine respect for the audience.
            </p>
            <p className='text-primary dark:text-white '>Prateek Singh Chouhan</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;