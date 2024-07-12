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
        <div className="px-4 py-4 md:py-6">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className='content-between'>
              <div className="text-2xl md:text-4xl md:mb-3">
                Wade Loccisano
              </div>
              <div className="text-lg md:text-2xl">
                Software Engineer
              </div>
            </div>
            <div className="flex flex-col md:text-right mt-2 text-sm md:text-base">
              <div className="font-bold md:mb-1 ">
                Phone: <span className="font-normal">(724) 494-4379</span>
              </div>
              <div className="font-bold md:mb-1">
                Email: <span className="font-normal">wade.loccisano@gmail.com</span>
              </div>
              <div className="font-bold">
                LinkedIn: <a target="_blank" className="font-normal" href={"https://linkedin.com/in/wade-loccisano"}>linkedin.com/in/wade-loccisano</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='pt-6 text-md'>
        Software Engineer with experience in full-stack development, cloud architecture, and continuous integration practices. Experienced in building websites and applications that have empowered users across a variety of industries including aviation, commerce, and project planning. Actively working with cloud platforms and services to deliver tomorrow&apos;s technology solutions, today.
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
