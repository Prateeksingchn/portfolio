import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdMail } from "react-icons/io";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaBehance, FaDribbble, FaPinterest, FaJava, FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiExpress } from 'react-icons/si';

const SocialIcon = ({ href, Icon }) => (
  <a 
    href={href}
    className='flex items-center justify-center w-12 h-12 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-all duration-300 group'
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon className="text-xl text-zinc-400 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
  </a>
);

const SkillIcon = ({ Icon, name }) => (
  <div className='flex flex-col items-center justify-center p-4 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-all duration-300'>
    <Icon className="text-4xl text-zinc-400 mb-2 group-hover:text-white" />
    <p className='text-xs text-zinc-400'>{name}</p>
  </div>
);

const Testimonial = ({ text, name, role, textColor }) => (
  <div className='mb-6 bg-zinc-800 p-4 rounded-lg'>
    <p className={`text-sm ${textColor} mb-2`}>{text}</p>
    <p className='text-xs text-zinc-400'>
      <span className='block font-medium'>{name}</span>
      <span className='block'>{role}</span>
    </p>
  </div>
);

function Home() {
  return (
    <section className='bg-zinc-900 min-h-screen text-white p-4 md:p-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6'>
          {/* Profile Section */}
          <div className='lg:row-span-2 bg-zinc-800 rounded-3xl p-8 col-span-full lg:col-span-2'>
            <div className='flex items-center mb-6'>
              <img
                className='h-16 w-16 rounded-full object-cover border-2 border-zinc-700'
                src="/images/avatardp.jpg" alt="Prateek Singh Chouhan" />
              <div className='ml-4'>
                <h2 className='text-xl font-bold'>Prateek Singh Chouhan</h2>
                <p className='text-zinc-400'>Full Stack Developer</p>
              </div>
            </div>
            <h1 className='text-3xl md:text-4xl font-bold mb-6'>Hey, I'm Prateek, welcome to my site!</h1>
            <p className='text-zinc-300 leading-relaxed'>
              I am a digital designer and developer based in Bhopal, India. I excel in crafting user interfaces and exploring the complexities of coding. Outside of work, I enjoy playing football and hitting the gym. My life is a balanced mix of technology and nature, switching between focused coding sessions and moments of creative inspiration.
            </p>
          </div>

          {/* Social Media Section */}
          <div className='bg-zinc-800 rounded-3xl p-8 col-span-full md:col-span-1'>
            <h2 className='text-2xl font-bold mb-6'>Find me on</h2>
            <div className='grid grid-cols-4 gap-4'>
              <SocialIcon href="mailto:email@prateeksinghchouhan007.com" Icon={IoMdMail} />
              <SocialIcon href="https://github.com/Prateeksingchn" Icon={FaGithub} />
              <SocialIcon href="https://www.linkedin.com/in/prateek-singh-chouhan-7a511b1b7" Icon={FaLinkedin} />
              <SocialIcon href="https://www.instagram.com/prateeksinghchouhan007" Icon={FaInstagram} />
              <SocialIcon href="https://twitter.com/prateeksinghchouhan" Icon={FaTwitter} />
              <SocialIcon href="https://www.behance.net/prateeksinghc1" Icon={FaBehance} />
              <SocialIcon href="https://dribbble.com/prateeeeek" Icon={FaDribbble} />
              <SocialIcon href="https://in.pinterest.com/prateekchouhan96483/" Icon={FaPinterest} />
            </div>
          </div>

          {/* Projects Section */}
          <Link to="/projects" className='bg-zinc-800 rounded-3xl p-8 col-span-full lg:col-span-2 hover:bg-zinc-700 transition-all duration-300'>
            <h2 className='text-2xl font-bold mb-4'>Projects</h2>
            <p className='text-zinc-300 mb-6'>
              Design & development subscriptions for startups. Streamlined process with fixed monthly rates and limitless design requests.
            </p>
            <img 
              src="/images/Projectsnew.png"
              className='rounded-xl w-full object-cover h-48'
              alt="Projects Preview" 
            />
          </Link>

          {/* Resume Section */}
          <div className='bg-zinc-800 rounded-3xl p-8 flex flex-col justify-between'>
            <div>
              <h2 className='text-2xl font-bold mb-4'>Grab my résumé!</h2>
              <p className='text-zinc-300 mb-6'>
                Unlock the doors to explore the rich tapestry of my professional journey and accomplishments.
              </p>
            </div>
            <a 
              href="https://drive.google.com/file/d/14Kgva0jVB4b-4knPzhpDPGV5rtkJVnsI/view?usp=drive_link"
              className='bg-zinc-700 text-white py-3 px-6 rounded-full font-bold hover:bg-zinc-600 transition-all duration-300 text-center'
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </div>

          {/* Designify Section */}
          <Link to="/designify" className='bg-zinc-800 rounded-3xl p-8 hover:bg-zinc-700 transition-all duration-300'>
            <h2 className='text-2xl font-bold mb-4'>Designify</h2>
            <p className='text-zinc-300 mb-6'>
              Design & development subscriptions for startups. Streamlined process with fixed monthly rates and limitless design requests.
            </p>
            <img 
              src="/images/Desginifynew.png"
              className='rounded-xl w-full object-cover h-48'
              alt="Designify Preview" 
            />
          </Link>

          {/* Skills Section */}
          <div className='bg-zinc-800 rounded-3xl p-8 col-span-full lg:col-span-2 lg:row-span-2'>
            <h2 className='text-2xl font-bold mb-6'>Skills</h2>
            <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4'>
              <SkillIcon Icon={FaJava} name="Java" />
              <SkillIcon Icon={FaHtml5} name="HTML" />
              <SkillIcon Icon={FaCss3} name="CSS" />
              <SkillIcon Icon={SiTailwindcss} name="Tailwind" />
              <SkillIcon Icon={FaJs} name="JavaScript" />
              <SkillIcon Icon={FaReact} name="React" />
              <SkillIcon Icon={SiNextdotjs} name="Next.js" />
              <SkillIcon Icon={FaNodeJs} name="Node.js" />
              <SkillIcon Icon={SiExpress} name="Express" />
            </div>
          </div>

          {/* Newsletter Section */}
          <div className='bg-zinc-800 rounded-3xl p-8 col-span-full lg:col-span-2'>
            <h2 className='text-2xl font-bold mb-6'>Subscribe to my newsletter</h2>
            <form className='flex flex-col md:flex-row gap-4'>
              <input 
                type="email"
                placeholder='Enter your email'
                className='flex-grow bg-zinc-700 rounded-full py-3 px-6 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500'
              />
              <button
                type='submit'
                className='bg-zinc-700 text-white py-3 px-6 rounded-full font-bold hover:bg-zinc-600 transition-all duration-300'
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Testimonials Section */}
          <div className='bg-zinc-800 rounded-3xl p-8 col-span-full lg:col-span-1'>
            <h2 className='text-2xl font-bold mb-6'>Testimonials</h2>
            <Testimonial 
              text="Big fan of your themes. They're well-organized, look clean, and are fast."
              name="Yuvraj Bali"
              role="Developer"
              textColor="text-pink-400"
            />
            <Testimonial 
              text='"Amazing resource using @react and @tailwindcss! I got it a week ago and have found the contents really useful."'
              name="Ayush"
              role="Entrepreneur"
              textColor="text-orange-400"
            />
          </div>

          {/* About Section */}
          <div className='bg-zinc-800 rounded-3xl p-8 col-span-full'>
            <h2 className='text-2xl font-bold mb-6'>About Me</h2>
            <p className='text-zinc-300 leading-relaxed mb-6'>
              As a digital designer, my expertise lies in crafting distinctive visual identities for digital products. I believe that engaging design begins with shared values, transparent communication, and genuine respect for the audience.
            </p>
            <p className='font-bold'>Prateek Singh Chouhan</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;