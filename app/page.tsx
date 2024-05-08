import Image from "next/image";

const resumeTemplate: string = `
  # Wade Loccisano

  [Pittsburgh, Pennsylvania, 16117] | [724 - 494 - 4379] | [wade.loccisano@gmail.com]
  
  ## About:
  Dynamic and results - oriented Software Developer with a proven track record of delivering high - quality software solutions.Skilled in full - stack development, Agile methodologies, and continuous integration practices.Seeking to leverage expertise in software engineering to contribute to innovative projects in a collaborative team environment.

  ## Skills:

  ### Programming Languages and Frameworks:

  Proficient in programming languages: JavaScript, TypeScript, C#, Python
  Experienced in web development frameworks: React, Angular, NextJs

  ### Database Management and ORM:

  Strong understanding of relational and NoSQL databases: MySQL, MongoDB
  Worked with ORMs: Entity Framework, !!!

  ### Development Tools and Methodologies:

  Familiarity with version control systems: Git
  Experienced with Agile development methodologies
  Excellent problem-solving and analytical skills
  
  ## Experience:
  
  ### Full Stack Software Developer | MadeLabs LLC. | April 2021 - Present
  
  Developed and maintained web applications using React.js, resulting in improved user experience and increased client satisfaction.
  Collaborated with cross - functional teams to design and implement scalable software solutions, adhering to Agile development practices.
  Participated in code reviews and quality assurance processes to ensure code integrity and performance.
  
  ## Projects:
  
  ### Resume Site
  
  Developed a website to host this resume using a NextJS front-end with TailwindCss to handle theming.
  Implemented a Docker container and deployed to!!! to allow multi - region availability.
  Added!!! analytics to track some basic information about users.
  
  ## Qualifications:
  
  ### Education:
  Web Application Development Bootcamp
  Tech Elevator, City, State
  Graduated: February 2021

  ### Certifications
  AWS Certified Cloud Practitioner
  
  ## References:
  Available upon request.
`;

const skills = [
  {
    skillName: 'Front-end',
    listItems: [
      "HTML/CSS",
      "JavaScript (ES6, React, Redux, Node.js, Next.js, JSX)",
      "TypeScript (Next.js, TSX, Angular)",
    ],
  },
  {
    skillName: 'Backend and Database',
    listItems: [
      "C# (.NET, REST APIs)",
      "SQL (Postgresql)",
      "ORM (Entity Framework, Prisma)",
    ],
  },
  {
    skillName: 'DevOps and Cloud',
    listItems: [
      "Cloud (AWS)",
      "Python (Flask, Pandas)",
      "Version Control and CI/CD (Git, Docker)",
    ],
  },
  {
    skillName: 'Agile',
    listItems: [
      "Experienced with Agile development methodologies",
      "Excellent problem-solving and analytical skills",
    ],
  },
];

const experiences = [
  {
    titleLine: 'Full Stack Software Developer | MadeLabs LLC. | April 2021 - Present',
    description: `
          Developed and maintained web applications using React.js, resulting in improved user experience and increased client satisfaction.
          Collaborated with cross-functional teams to design and implement scalable software solutions, adhering to Agile development practices.
          Participated in code reviews and quality assurance processes to ensure code integrity and performance.
    `,
    technologies: {
      // front-end
      frontEnd: [
        "HTML/CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Angular",
        "Node",
        "Next.js",
      ],
      backEnd: [
        "C#",
        "SQL",
        "Entity Framework"
      ],
      devops: [
        "AWS",
        "Docker",
        "Terraform",
      ],


      // "HTML/CSS",
      // "JavaScript (ES6, React, Redux, Node.js, Next.js, JSX)",
      // "TypeScript (Next.js, TSX, Angular)",
    },
  },
];

const projects = [
  {
    name: 'My Project',
    description: `
          This is a description of the project. Let us
          talk about what we did, what we are doing,
          and what we plan on doing.
    `,
    image: "image"
  },
  {
    name: 'Project 2',
    description: `
          This is a description of the project. Let us
          talk about what we did, what we are doing,
          and what we plan on doing.
    `,
    image: "image"
  },
  {
    name: 'Project 3',
    description: `
          This is a description of the project. Let us
          talk about what we did, what we are doing,
          and what we plan on doing.
    `,
    image: "image"
  },
];

const certifications = [
  {
    name: 'AWS Certified Cloud Practitioner',
    description: `
          This is a description of the certifications. Let us
          talk about what we did, what we are doing,
          and what we plan on doing.
    `,
  },
  {
    name: 'Tech Elevator',
    description: `
          This is a description of the project. Let us
          talk about what we did, what we are doing,
          and what we plan on doing.
    `,
  },
  {
    name: 'Tech Elevator',
    description: `
          This is a description of the project. Let us
          talk about what we did, what we are doing,
          and what we plan on doing.
    `,
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-sans pt-[60px]">
      <section className="flex justify-center bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-600 bg-cover text-white min-w-[100%]">
        {/* Splash Screen */}
        <div id="splash-section">
          <div className="custom-max-width">
            <div id="splash-container" className="flex flex-col lg:flex-row px-4 py-32 text-center">
              <div id="left" className="flex-1 lg:flex-1/2">
                <div className="text-5xl mb-2">
                  # Wade Loccisano
                </div>
                <div className="text-xl mb-6">
                  {/* tagline */}
                  Building Tomorrow's Solutions...
                  <br />
                  Today, Your Full Stack Partner.
                </div>
                {/* <button className="border border-black p-2">
                  Contact
                </button> */}
              </div>
              <div id="right" className="flex-1 lg:flex-1/2 bg-gray-900 p-4 font-family:monospace border border-gray-400 text-left">
                <div className="text-xl">
                  ## About:
                </div>
                <div className="text-lg">
                  Dynamic and results-oriented Software Developer with a proven track record of delivering high-quality software solutions. Skilled in full-stack development, Agile methodologies, and continuous integration practices. Seeking to leverage expertise in software engineering to contribute to innovative projects in a collaborative team environment.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="skills-section" className=" flex justify-center min-w-[100%]">
        {/* <div className="max-w-[1200px]"> */}
        <div className="custom-max-width">
          <div id="skills-container" className="flex flex-col py-28">
            <div>
              Skills
            </div>
            <div className="text-4xl">
              Programming Languages and Frameworks:
            </div>
            <div>
              {/* Skills scroller */}
              <div className="py-4 flex flex-col justify-between lg:flex-row">
                {skills.map((skill, i) => {
                  return (
                    <div key={i} className="py-2 flex">
                      <div className="w-[244px] rounded-lg shadow-lg">
                        <div className="bg-cover bg-red-200 h-8 sm:h-12"></div>
                        <div className="p-2">
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
                {/* <div className="w-[244px] border border-black">
                  <div className="bg-cover bg-red-200 h-8 sm:h-12"></div>
                  <div className="text-2xl">
                    Skill Name
                  </div>
                  <div>

                  </div>
                </div> */}
              </div>
              <div className="flex">
                <button>
                  Scroll Left
                </button>
                <button>
                  Scroll Right
                </button>
              </div>
            </div>
            {/* <div>
              Proficient in programming languages: JavaScript, TypeScript, C#, Python
              Experienced in web development frameworks: React, Angular, NextJs

              Database Management and ORM:

              Strong understanding of relational and NoSQL databases and ORMs: MySQL, MongoDB, Entity Framework

              Development Tools and Methodologies:

              Familiarity with version control systems: Git
              Experienced with Agile development methodologies
              Excellent problem-solving and analytical skills
            </div> */}
          </div>
        </div>
        {/* <div className="custom-max-width">
            <div id="splash-container" className="flex flex-col lg:flex-row px-4 py-32">
              <div id="left" className="flex-1 lg:flex-1/2">
                <div className="text-5xl mb-2">
                  # Wade Loccisano
                </div>
                <div className="text-xl mb-6">
                  Hello, my name is Wade Loccisano!
                </div>
                <button className="border border-black p-2">
                  Contact
                </button>
              </div>
              <div id="right" className="flex-1 lg:flex-1/2">
                <div className="text-xl">
                  ## About:
                </div>
                <div className="text-lg">
                  Dynamic and results-oriented Software Developer with a proven track record of delivering high-quality software solutions. Skilled in full-stack development, Agile methodologies, and continuous integration practices. Seeking to leverage expertise in software engineering to contribute to innovative projects in a collaborative team environment.
                </div>
              </div>
            </div>
          </div> */}
      </section>
      <section id="experience-section" >
        <div className="custom-max-width">
          <div id="experience-container" className="flex flex-col py-32">
            <div className="text-4xl text-center">
              <h2 className="mb-1">
                Experience:
              </h2>
            </div>
            {/* <div className="text-xl text-center">
            <p>
              A tagline or something?
              </p>
            </div> */}
            <div>
              <div className="py-4 flex flex-col justify-between lg:flex-row">
                {experiences.map((experience, i) => {
                  return (
                    <div key={i} className="py-2 flex">
                      <div className="rounded-lg shadow-lg bg-white">
                        <div className="p-4">
                          <div className="flex flex-col lg:flex-row">

                            <div className="p-1 text-md basis-1/3">
                              {/* {experience.technologies.map((technology) => {
                                  return (
                                    <div className="m-1 px-2 border border-black rounded-full">
                                      {technology}
                                    </div>
                                  );
                                })} */}
                              <div className="text-sm text-slate-400">Front-end</div>
                              <div className="flex flex-wrap">
                                {experience.technologies.frontEnd.map((technology) => {
                                  return (
                                    <>
                                      <div className="m-1 px-2 border border-black rounded-full">
                                        {technology}
                                      </div>
                                    </>
                                  );
                                })}
                              </div>
                              <div className="text-sm text-slate-400">Backend</div>
                              <div className="flex flex-wrap">
                                {experience.technologies.backEnd.map((technology) => {
                                  return (
                                    <>
                                      <div className="m-1 px-2 border border-black rounded-full">
                                        {technology}
                                      </div>
                                    </>
                                  );
                                })}
                              </div>
                              <div className="text-sm text-slate-400">DevOps</div>
                              <div className="flex flex-wrap">
                                {experience.technologies.devops.map((technology) => {
                                  return (
                                    <>
                                      <div className="m-1 px-2 border border-black rounded-full">
                                        {technology}
                                      </div>
                                    </>
                                  );
                                })}
                              </div>
                            </div>

                            <div className="p-1 basis-2/3">
                              <div className="text-2xl mb-2">
                                {experience.titleLine}
                              </div>
                              <div className="text-lg">
                                {experience.description}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* ## Experience:
          Full Stack Software Developer | MadeLabs LLC. | April 2021 - Present

          Developed and maintained web applications using React.js, resulting in improved user experience and increased client satisfaction.
          Collaborated with cross-functional teams to design and implement scalable software solutions, adhering to Agile development practices.
          Participated in code reviews and quality assurance processes to ensure code integrity and performance. */}
        </div>
      </section>
      <section id="project-section">
        <div className="custom-max-width">
          <div id="project-container" className="flex flex-col py-32">
            <div className="text-4xl">
              <h2 className="mb-1">
                Projects:
              </h2>
            </div>
            <div className="text-xl">
              <p>
                Take a look at some of these projects:
              </p>
            </div>
            <div className="flex py-4">
              <div className="flex flex-col basis-1/3">
                {projects.map((project, i) => {
                  return (
                    <div key={i} className="py-2">
                      <div className="text-md rounded-lg shadow-lg bg-white flex">
                        <div className="bg-red-500 w-4 rounded-l-lg"></div>
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
              <div className="pl-4 pt-2 basis-2/3">
                <div className="bg-white h-full"></div>
              </div>
            </div>
          </div>
          {/* ## Projects:
          Resume Site

          Developed a website to host this resume using a NextJS front-end with TailwindCss to handle theming.
          Implemented a Docker container and deployed to !!! to allow multi-region availability.
          Added !!! analytics to track some basic information about users. */}
        </div>
      </section>
      <section id="certification-section">
        <div className="custom-max-width">
          <div id="certification-container" className="flex flex-col py-32">
            <div className="text-4xl">
              <h2 className="mb-1">
                Certifications:
              </h2>
            </div>
            <div className="text-xl">
              <p>
                Some of my certifications and credentials.
              </p>
            </div>
            <div className="py-4">
              <div className="grid gap-8 grid-cols-3">
                {certifications.map((project, i) => {
                  return (
                    <div key={i} className="">
                      <div className="text-md rounded-lg shadow-lg bg-white">
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
            </div>
          </div>
          {/* ## Certifications:
          AWS Certified Cloud Practitioner

          ### Education:
          Web Application Development Bootcamp
          Tech Elevator, City, State
          Graduated: February 2021 */}
        </div>
      </section>
      {/* <section id="reference-section">
        ### Testimonials
        ### References:
        Available upon request.
      </section> */}
    </main >
  );
}
