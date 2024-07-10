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
      <div>
        Software Developer with experience in full-stack development, cloud architecture, and continuous integration practices. Experienced in building websites and applications that have empowered users across a variety of industries including aviation, commerce, and project planning.
      </div>
      <div className="text-2xl md:text-4xl">
        Programming Languages and Frameworks:
      </div>
    </>
  );
}