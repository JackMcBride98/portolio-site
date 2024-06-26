import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black text-white">
      <Head>
        <title>Jack McBride - Fullstack Web Engineer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="VZGnEz3QRBdhp6brONj_ezQLHEhN6mkzvBAN80-kugQ"
        />
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-2 sm:px-20 text-center">
        <h1 className="text-3xl font-bold">
          Jack McBride - Fullstack Web Engineer{' '}
        </h1>

        <div className="flex items-center justify-around flex-row">
          <Image
            className="p-4 rounded-full"
            src="/headshot-me.png"
            target="_blank"
            alt="Professional headshot of Jack McBride"
            width={175}
            height={175}
          />
          <a
            className="p-1 bg-white rounded-full"
            href="https://github.com/JackMcBride98"
            target="_blank"
          >
            <Image
              src="/GitHub-Mark-64px.png"
              alt="Github Logo"
              width={64}
              height={64}
            />{' '}
          </a>
          <a
            className="p-4"
            href="mailto:mcbride.jack1@gmail.com"
            target="_blank"
          >
            {' '}
            <Image
              src="/gmailIcon.png"
              alt="Gmail Icon"
              width={64}
              height={64}
            />{' '}
          </a>
          <a
            className="p-4"
            href="https://www.linkedin.com/in/jack-connor-mcbride"
            target="_blank"
          >
            {' '}
            <Image
              src="/linkedinIcon.png"
              alt="LinkedIn Logo"
              width={64}
              height={64}
            />{' '}
          </a>
        </div>

        <div className="mt-8 p-4 sm:max-w-4xl w-full border-2 rounded-md">
          <p className="text-left">
            Hi, Thanks for checking out my portfolio. I am 26 years old and live in Bristol. I am
            currently working as a Software Developer at Ghyston - a software development
            agency and consultancy. I have a Diploma of Higher Education in Computer Science from the University of Bath. 
            In my first year I won the Netcraft Prize for placing in the top 10 students in my year.
            I am a highly creative individual and I enjoy designing and building fullstack web
            applications. I have many hobbies and interests including: reading,
            cooking, meditation, spirituality, music production, calisthenics,
            running and surfing. I would be particurlaly interested in working
            in the fields of: sustainability, health, education, music and
            psychology.
          </p>
        </div>

        <div className="pt-6 sm:max-w-4xl w-full">
          <h2 className="text-xl pb-2">
            Languages, Frameworks and Technologies I am familiar with:
          </h2>
          <ul className="inline-grid grid-cols-2 md:grid-cols-3 gap-x-1 justify-items-start list-disc list-inside">
            <li>html/css </li>
            <li>javascript</li>
            <li>Typescript</li>
            <li>React</li>
            <li>Nextjs</li>
            <li>Vercel</li>
            <li>Tailwindcss</li>
            <li>C#</li>
            <li>ASP .NET</li>
            <li>Azure</li>
            <li>Python</li>
            <li>Git</li>
            <li>mongodb</li>
            <li>sql</li>
            <li>Ruby on Rails</li>
          </ul>
        </div>

        <div className="p-4 sm:max-w-4xl sm:w-full">
          <h1 className="text-xl pb-2">Projects</h1>
          <div className="group mb-8 border-2 rounded-xl">
            <a href="https://et-bidding-game.vercel.app/" target="_blank">
              <h2 className="text-lg font-bold py-2 group-hover:text-blue-500 group-hover:underline">
                ET Bidding Game
              </h2>
              <Image
                className="border-2 mx-auto"
                src="/et-bidding-game.png"
                width="250"
                height="500"
              />
            </a>
            <p className="text-left p-2 px-4">
              A mobile-first responsive designed website used for scoring,
              saving and creating a leaderboard for a card game I play with
              friends <br />
              Technologies used: Javascript, React, JSX, Tailwindcss, Express,
              MongoDB, NodeJS
            </p>
          </div>
          <div className="group mb-8 border-2 rounded-xl">
            <a
              href="https://online-drum-sequencer.azurewebsites.net/"
              target="_blank"
            >
              <h2 className="text-lg font-bold py-2 group-hover:text-blue-500 group-hover:underline">
                Online Multiplayer Drum Sequencer
              </h2>
              <Image
                className="border-2 mx-auto"
                src="/drumseqcrop.png"
                width="800"
                height="400"
              />
            </a>
            <p className="text-left p-2 px-4">
              A website which allows users to colloborate in real time to create
              drum beats. <br />
              Technologies used: html, css, Javascript, Express, socket.io,
              jquery
            </p>
          </div>
          <div className="group mb-8 border-2 rounded-xl">
            <a
              href="https://spotify-playlist-search-tool.vercel.app/"
              target="_blank"
            >
              <h2 className="text-lg font-bold py-2 group-hover:text-blue-500 group-hover:underline">
                Spotify Playlist Search Tool
              </h2>
              <Image
                className="border-2 mx-auto"
                src="/spotifyPlaylistSearchTool.png"
                width="370"
                height="500"
              />
              <p className="p-2 text-left  px-4">
                A tool for finding out which of your saved Spotify playlists
                contain a given artist or song.
                <br />
                It's currently in development mode, so I have to explicitly
                allow access to users.
                <br /> Test account email: muccy3@gmail.com password: BenMee6!
                <br />
                Contact me if you would like me to allow you access :)
                <br /> Technologies used: Typescript, React, Tailwindcss,
                html/css, Spotify Web API
              </p>
            </a>
          </div>
          <div className="group mb-4 border-2 rounded-xl">
            <a href="https://jack-blog.vercel.app/" target="_blank">
              <h2 className="text-lg font-bold py-2 group-hover:text-blue-500 group-hover:underline">
                My Personal Blog Site
              </h2>
              <Image
                className="border-2 mx-auto"
                src="/jackblog.png"
                width="800"
                height="400"
              />
              <p className="p-2 text-left  px-4">
                My own personal blog where I cover topics such as software
                development, music production, book reviews, mental health,
                meditation and spirituality. <br />
                Technlogies used: Nextjs, React, Javascript, JSX, Tailwindcss,
                markdown, Auth0
              </p>
            </a>
          </div>
        </div>

        <div className="sm:max-w-4xl sm:w-full">
          <h1 className="text-xl pb-2">Experience</h1>
          <div className="p-4 sm:max-w-4xl sm:w-full border-2 rounded-md my-8">
            <h2 className="text-lg font-bold">
              Software Developer at Ghyston October 2022 - Current
            </h2>
            <p className="text-left p-2">
              Working in a software agency on a variety of projects with external companies.
              Worked on a pension retirement affordability tool for 6 months using Typescript, React, Styled
              Components, Nx, GraphQL, MongoDB. 
            </p>
            <p  className="text-left p-2">
              Now working on the support team, providing new feature development, bug fixes and maintenance and for a wide range of projects.
              This has allowed me to gain experience in multiple areas: working with legacy code, communicating with clients, devops, fixing live issues, working
              with application logs and insights to solve bugs and working with a wide range of technologies: C#, ASP .NET, Python, Ruby on Rails, Visual Basic, Winforms,
              Blazor, Razor, SQL and Azure. 
            </p>
            <p  className="text-left p-2">
              After working on the support team, I have been working on an internal ERP (Enterprise Resourcing Planning) system. 
              I have mentored junior developers on this project and have been responsible for the succesful migration away from the legacy system to the new system.  
            </p>
          </div>
          <div className="p-4 sm:max-w-4xl sm:w-full border-2 rounded-md my-8">
            <h2 className="text-lg font-bold">
              Junior Web Engineer at siHealth November 2021 - October 2022
            </h2>
            <p className="text-left p-2">
              My first job out of university. Worked closely in a team of 2
              developers building a web portal using javascript, react and
              tailwindcss. I really enjoyed working there. Have
              built forms, graphs, weather info pages, login pages, handled
              translations and learnt about the software engineering process,
              using BitBucket, Jira and working with design, management and
              backend teams to create a product I am proud to have helped with.
              I had a close relationship with the more senior developer
              on the web team. <br /> Gained experience using javascript, react,
              html/css, tailwindcss, git, bitbucket, Jira, translations,
              accesibility, SVG's, react-hook-form, amcharts and more
            </p>
          </div>
          <div className="p-4 sm:max-w-4xl sm:w-full border-2 rounded-md my-8">
            <h2 className="text-lg font-bold">
              Summer Internship at CiteAb 2019
            </h2>
            <p className="text-left p-2">
              Worked as software developer at CiteAb, a life sciences data
              provider company, rearchitecting there web scraping processes.
              Gained Experience using Ruby on Rails, Github, CSS selectors and
              Haml.
            </p>
          </div>
          <div className="p-4 max-w-4xl sm:w-full border-2 rounded-md pb-2 text-left">
            <h2 className="text-lg font-bold text-center mb-4">
              Computer Science at University of Bath 2017-2020
            </h2>
            <p className="pb-2 lg:px-4">
              Awarded a Diploma of Higher Education <br />
              Won the Netcraft Prize for placing in the top 10 students in first
              year Computer Science. <br />
              <span></span>Units Studied: <br />
            </p>
            <ul className="inline-grid md:grid-cols-2 text-left gap-x-1 justify-items-start list-disc list-inside lg:pl-4">
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
          </div>
        </div>
        <div className="my-8 sm:max-w-4xl sm:w-full border-2 rounded-md text-left p-2 ">
          <h2 className="text-xl my-2 font-bold text-center"> Contact </h2>
          <p className="mb-4 px-4">
            Email: mcbride.jack1@gmail.com <br />
            Github:{' '}
            <a
              href="https://github.com/JackMcBride98"
              target="_blank"
              className="underline text-blue-500"
            >
              {' '}
              https://github.com/JackMcBride98{' '}
            </a>{' '}
            <br />
            LinkedIn:{' '}
            <a
              href="https://www.linkedin.com/in/jack-connor-mcbride/"
              target="_blank"
              className="underline text-blue-500"
            >
              {' '}
              https://www.linkedin.com/in/jack-connor-mcbride/{' '}
            </a>{' '}
            <br />
            CV available upon request
          </p>
        </div>
      </main>
    </div>
  );
}
