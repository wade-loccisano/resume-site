'use client';

import React from 'react';

export const Splash = ({
  splashInfo: splashInfo,
}: {
  splashInfo: any[],
}) => {
  const splash = splashInfo;
  return (
    <>
      <div id="left" className="flex-1 lg:flex-1/2">
        <div className="text-5xl mb-2">
          Wade Loccisano
        </div>
        <div className="text-xl mb-6">
          {/* tagline */}
          Building Tomorrow&apos;s Software Solutions...
          <br />
          Today, Your Full Stack Partner.
        </div>
        {/* <button className="border border-black p-2">
          Contact
        </button> */}
      </div>
      <div id="right" className="flex-1 lg:flex-1/2 bg-gray-900 p-4 font-['monospace'] border border-gray-400 text-left">
        {/* <div className="text-xl">
          About:
        </div> */}
        {/* <div className="text-lg">
          Dynamic and results-oriented Software Developer with a proven track record of delivering high-quality software solutions. Skilled in full-stack development, Agile methodologies, and continuous integration practices. Seeking to leverage expertise in software engineering to contribute to innovative projects in a collaborative team environment.
        </div> */}
      </div>
    </>
  );
}


// # Wade Loccisano

// wade.loccisano@gmail.com | 724-494-4379 | [linkedin.com/in/wade-loccisano](https://linkedin.com/in/wade-loccisano)

// <!-- ## About -->

// Software Developer with experience in full-stack development, cloud architecture, and continuous integration practices. Experienced in building websites and applications that have empowered users across a variety of industries including aviation, commerce, and project planning. 