'use client';

import React from 'react';

export const Intro = ({
  intro: introData,
}: {
  intro: any[],
}) => {
  const intro = introData;

  return (
    <>
      {/* <div className="py-4 flex flex-col justify-between md:flex-row flex-wrap">
        {skills.map((skill, i) => {
          return (
            <div key={i} className="md:max-w-[310px] xl:max-w-[330px] flex pb-8">

            </div>
          );
        })}
      </div> */}

      <div className="rounded-lg shadow-lg bg-white">
        <div className="bg-gradient-to-r from-[#B89527] via-[#D4AF37] to-[#E5C845] bg-cover h-4"></div>
        <div className="px-4 py-6">
          <div className="flex justify-between">
            <div>
              <div className="text-3xl ">
                Wade Loccisano
              </div>
              <div className="text-2xl">
                Software Engineer
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                Phone
              </div>
              <div>
                Email
              </div>
              <div>
                LinkedIn
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='pt-6'>
        Software Developer with experience in full-stack development, cloud architecture, and continuous integration practices. Experienced in building websites and applications that have empowered users across a variety of industries including aviation, commerce, and project planning.
      </div>
    </>
  );
}

// <>
//   <div className="text-2xl md:text-4xl">
//     Programming Languages and Frameworks:
//   </div>
//   <div>
//     Software Developer with experience in full-stack development, cloud architecture, and continuous integration practices. Experienced in building websites and applications that have empowered users across a variety of industries including aviation, commerce, and project planning.
//   </div>
// </>
