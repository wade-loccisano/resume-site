'use client';

import React from 'react';
import Image from "next/image";
import linkedinLogo from './linkedin-logo.svg';
import githubLogo from './github-logo.svg';
import dbeaverLogo from './dbeaver-logo.svg';

export const ProjectExplorer = ({
  projects: projectsList,
}: {
  projects: any[],
}) => {
  const projects = projectsList;
  const [selectedProject, setSelectedProject] = React.useState(0);

  return (
    <div className="flex py-4 flex-col-reverse lg:flex-row">
      <div className="flex flex-col lg:basis-1/3">
        {projects.map((project, i) => {
          return (
            <div key={i} className="py-2 hover:cursor-pointer" onClick={() => setSelectedProject(i)}>
              <div className={`text-md rounded-lg flex ${selectedProject === i ? 'shadow-lg bg-white' : ''}`}>
                <div className={`w-4 rounded-l-lg ${selectedProject === i ? 'shadow-lg bg-red-500' : ''}`}></div>
                <div className="p-2 flex flex-col">
                  <div className="text-2xl mb-2">
                    {project.name}
                  </div>
                  <div className="text-lg">
                    {project.description}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="px-0 py-2 lg:px-2 lg:basis-2/3">
        <div className="relative p-2 bg-white rounded-lg shadow-lg h-[300px] lg:h-full">
          {selectedProject === 0 ? <Image
            src={linkedinLogo}
            alt="Image of the LinkedIn Logo"
            fill
            className=""
          /> :
            selectedProject === 1 ? <Image
              src={githubLogo}
              alt="Image of the GitHub Logo"
              fill
              className=""
            /> :
              <Image
                src={dbeaverLogo}
                alt="Image of the DBeaver Logo"
                fill
                className=""
              />}
        </div>
      </div>
    </div>
  );
}
