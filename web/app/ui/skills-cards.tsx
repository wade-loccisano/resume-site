'use client';

import React from 'react';
import Image from "next/image";

export const SkillsCards = ({
  skills: skillsList,
}: {
  skills: any[],
}) => {
  const skills = skillsList;
  // const [selectedProject, setSelectedProject] = React.useState(0);
  //   ## Skills

  // ### Front-end
  // - HTML/CSS
  // - JavaScript (React, Redux, Node.js)
  // - TypeScript (Next.js, Angular)

  // ### Back-end
  // - C# (.NET)
  // - ORM (Entity Framework, Prisma)
  // - SQL (Postgresql)

  // ### DevOps
  // - Cloud (AWS EC2, Lambda)
  // - Python (Flask, Pandas)
  // - CI/CD (Git, Docker)

  return (
    <div className="py-4 flex flex-col justify-between md:flex-row flex-wrap">
      {skills.map((skill, i) => {
        return (
          <div key={i} className="md:max-w-[310px] xl:max-w-[330px] flex pb-8">
            <div className="rounded-lg shadow-lg bg-white">
              <div className="bg-gradient-to-r from-[#B89527] via-[#D4AF37] to-[#E5C845] bg-cover h-8 sm:h-12"></div>
              <div className="px-8 py-4">
                <div className="text-2xl">
                  {skill.skillName}
                </div>
                {skill.listItems.map((item, i) => {
                  return (
                    <p key={i} className="text-md">
                      {item}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
