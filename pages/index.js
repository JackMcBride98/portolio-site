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
            <li>.NET</li>
            <li>Azure</li>
            <li>Python</li>
            <li>Git</li>
            <li>mongodb</li>
            <li>SQL</li>
            <li>Ruby on Rails</li>
          </ul>
        </div>

        <div className="p-4 sm:max-w-4xl sm:w-full">
          <h2 className="text-xl pb-2">Projects</h2>
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

        <h2 className="text-xl font-bold text-center"> Contact </h2>

        <div className="mb-8 mt-4 sm:max-w-4xl sm:w-full border-2 rounded-md text-left p-4">
          <p>
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
