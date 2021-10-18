import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  const handleSubmit = event => {
    event.preventDefault()
    console.log(event.email)
  }

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

        <div className="mt-8 p-4 max-w-4xl sm:w-full border-2 rounded-md" >
          <p className="">Hi! Thanks for checking out my portfolio. I am 23 years old and a web developer currently living in Didcot, Oxfordshire. I studied Computer Science at the University of Bath and was 
            awarded a Diploma of Higher Education. I am a highly creative individual and I enjoy designing and building fullstack web applications. I have many hobbies and interests 
            including: music production, reading, cooking, meditation, spirituality, calisthenics, running and surfing. I would be particurlaly interested in working in the fields of: 
            sustainability, music, mental health, education and events. 
          </p>
        </div>

        <div className="pt-6 max-w-4xl sm:w-full" >
          <h2 className="text-xl pb-2">Languages, Frameworks and Technologies I am familiar with:</h2>
          <ul className="inline-grid grid-cols-3 gap-x-1 justify-items-start list-disc list-inside">
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

        <div className="p-4 max-w-4xl sm:w-full" >
          <h1 className="text-xl pb-2">Projects</h1>
          <div className="group mb-8 border-2 rounded-xl">
            <a href="http://online-drum-sequencer.herokuapp.com/" target="_blank"> 
              <h2 className="text-lg font-bold py-2 group-hover:text-blue-800 group-hover:underline">Online Multiplayer Drum Sequencer</h2>
              <Image className="border-2" src="/drumseqcrop.png" width="800" height="400"/>
            </a>
            <p className="py-2">
              A website which allows users to colloborate in real time to create drum beats. <br/>
              Technologies used: html, css, Express, socket.io, jquery
            </p>
          </div>
          <div className="group mb-4 border-2 rounded-xl">
            <a href="https://jack-blog.vercel.app/" target="_blank">
              <h2 className="text-lg font-bold py-2 group-hover:text-blue-800 group-hover:underline">My Personal Blog Site</h2>
              <Image className="border-2" src="/jackblog.png" width="800" height="400"/>
              <p className="py-2">
                My own personal blog where I cover topics such as software development, music production, book reviews, mental health, meditation and spirituality. <br/> 
                Technlogies used: Nextjs, React, JSX, Tailwindcss, markdown, Auth0 
              </p>
            </a>
          </div>
        </div>

        <div className="my-8" >
          <h1 className="text-xl mb-2">Experience</h1>
          <div className="p-4 max-w-4xl sm:w-full border-2 rounded-md pb-2"> 
            <h2 className="text-lg">Computer Science at University of Bath 2017-2020</h2>
            <p>
              Awarded a Diploma of Higher Education <br/>
              Won the Netcraft Prize for placing in the top 10 students in first year Computer Science.
              Units Studied: <br />
            </p>
            <ul className="inline-grid grid-cols-2 gap-x-1 justify-items-start list-disc list-inside">
              <li>Computing as a science and engineering discipline</li>
              <li>Computer Systems Architecture 1</li>
              <li>Discrete Maths for Computation</li>
              <li>Principles of programming 1</li>
              <li>Computer Systems Architecture 2</li>
              <li>Analytical mathematics for applications</li>
              <li>Principles of Programming 2</li>
              <li>Human-computer interaction</li>
              <li>Integrated group-based project</li>
              <li>Foundations of computation</li>
              <li>Fundamentals of visual computing</li>
              <li>Data structures and algorithms</li>
              <li>Databases</li>
              <li>Fundamentals of machine learning</li>
              <li>Artificial intelligence</li>
              <li>Comparative programming languages</li>
              <li>Functional programming</li>
            </ul>
            {/* <p>I thoroughly enjoyed my first year in Bath and I worked very hard, achieving 86% overall in my first year which place me in the top 10 students in the year!
              We were taught the fundamentals of programming by first learning a low-level language C to teach us what a programming language does - communicate with the 
              operating system to manage and manipulate data. We then moved onto a higher-level language Java where we learnt about Object Oriented Programmming. The course
              wasn't all programming though, we also had units covering the software engineering lifecycle, computer systems architecture, fundamental maths and operating
              systems.

              In second year we covered more advanced topics such as: artifical intelligence, machine learning, data structures and algorithms, functional programming, visual
              computing and human computer interaction. We also had an integrated group based project to design, document and build a software system which addresses a real 
              world problem. I took the lead in this project and we designed "Sample Safe" an app which allows music producers to share, sort and source samples to use in 
              there productions. I really enjoyed working as a team to design and develop a software system. I finished my second year with a high first. 

              Unfortunately I was not able to finish my final year of university due to health problems, but I was awarded a Diploma of Higher Education for the two years I did
              complete. Since then I have been working hard to heal myself and thankfully I am now at a place where I am able to work again.
            </p> */}
          </div>

          <div className="p-4 max-w-4xl sm:w-full border-2 rounded-md my-8"> 
            <h2 className="text-lg">Summer Internship at CiteAb 2019</h2>
            <p>Worked as software developer at CiteAb, a life sciences data provider company, rearchitecting there web scraping processes. Gained Experience
              using Ruby on Rails, Github, CSS selectors and Haml.
            </p>
            {/* <p>In the summer of 2019 I did a software development internship at CiteAb - a life sciences data provider company, who were recently named as finalists for the 
              Vesalius Innovation Award. During my time there I was working on rearchitecting there web scraping processes, this was a fun and challenging problem which I was
              glad to be able to help them with. I really enjoyed the small company culutre and learning about how the company was created and developed over time to become
              a profitable small business.
            </p> */}
          </div>
        </div>
        <div className="mb-8 max-w-4xl sm:w-full border-2 rounded-md ">
          <h2 className="text-xl my-2"> Contact </h2>
          <p className="mb-4">
            Email: mcbride.jack1@gmail.com <br/>
            Github: <a href="https://github.com/JackMcBride98" target="_blank" className="underline text-blue-800"> https://github.com/JackMcBride98 </a> <br/>
            LinkedIn: <a href="https://www.linkedin.com/in/jack-connor-mcbride/" target="_blank" className="underline text-blue-800"> https://www.linkedin.com/in/jack-connor-mcbride/ </a> <br/>
            CV available upon request
          </p>
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
