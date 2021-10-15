import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Jack McBride - Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-3xl font-bold">
          Jack McBride - Web Developer
        </h1>

        <div className="flex items-center justify-around flex-row"> 
          <Image className="p-4 rounded-full" src="/JackElma.jpg" target="_blank" alt="Jack and Elma" width={175} height={175} />
          <a className="p-4" href="https://github.com/JackMcBride98" target="_blank"><Image src="/GitHub-Mark-64px.png" alt="Github Logo" width={64} height={64} />  </a>
          <a className="p-4" href="mailto:mcbride.jack1@gmail.com" target="_blank"> <Image src="/gmailIcon.png" alt="Github Logo" width={64} height={64} /> </a>
          <a className="p-4" href="www.linkedin.com/in/jack-connor-mcbride" target="_blank"> <Image src="/linkedinIcon.png" alt="LinkedIn Logo" width={64} height={64} /> </a>
        </div>

        <div className="pt-8 px-20" >
          <p>Hi! Thanks for checking out my portfolio. I am a web developer currently living in Didcot, Oxfordshire. I studied Computer Science at the University of Bath and was 
            awarded a Diploma of Higher Education. I am highly creative individual and I enjoy designing and building fullstack web applications. I have many hobbies and interests 
            including: music production, reading, cooking, spirituality, calisthenics, running and surfing. I would be particurlaly interested in working in the fields of: 
            sustainability, music, mental health, education and events. 
          </p>
        </div>

        <div className="pt-8 px-20" >
          <h2>Languages, Frameworks and Technologies I am familiar with:</h2>
          <ul className="">
            <li>html/css </li>
            <li>javascript</li>
            <li>React</li>
            <li>Nextjs</li>
            <li>Tailwindcss</li>
            <li>mongodb</li>
            <li>sql</li>
            <li>python</li>
            <li>Ruby on Rails</li>
            <li>C</li>
            <li>Java</li>
            <li>Haskell</li>                                                
          </ul>
        </div>

        <div className="pt-8" >
          <h1>Experience</h1>
          <h2>Computer Science at University of Bath</h2>
          <p>duck duck duck goose</p>
          <h2>CiteAB internship</h2>
          <p>something something darkside of the force</p>
        </div>

        <div className="pt-8" >
          <p>Projects - Drum Sequencer, Bidding Game Scoreboard...</p>
        </div>

        {/* <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a
            href="https://nextjs.org/docs"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
            <p className="mt-4 text-xl">
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Learn &rarr;</h3>
            <p className="mt-4 text-xl">
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Examples &rarr;</h3>
            <p className="mt-4 text-xl">
              Discover and deploy boilerplate example Next.js projects.
            </p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
            <p className="mt-4 text-xl">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>
{/* 
      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer> */}
    </div>
  )
}
