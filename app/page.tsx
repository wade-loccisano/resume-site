import { ProjectExplorer } from "@/app/ui/project-explorer";
import { SkillsCards } from "./ui/skills-cards";
import { Splash } from "./ui/splash";
import { Intro } from "./ui/intro";

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
  // {
  //   skillName: 'Agile',
  //   listItems: [
  //     "Experienced with Agile development methodologies",
  //     "Excellent problem-solving and analytical skills",
  //   ],
  // },
];

const experiences = [
  {
    position: 'Full Stack Software Developer',
    org: 'MadeLabs LLC.',
    dates: 'April 2021 - April 2024',
    titleLine: 'Full Stack Software Developer | MadeLabs LLC. | April 2021 - April 2024',
    description: `
          Developed and maintained web applications using React.js, resulting in improved user experience and increased client satisfaction.
          Collaborated with cross-functional teams to design and implement scalable software solutions, adhering to Agile development practices.
          Participated in code reviews and quality assurance processes to ensure code integrity and performance.
    `,
    technologies: {
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
    },
  },
];

const projects = [
  {
    name: 'Project 1',
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
      Gained foundational knowledge of cloud concepts, 
      AWS services, security, architecture, pricing, and 
      support to aid in leveraging cloud technologies 
      to optimize business solutions and enhance scalability.
    `,
  },
  {
    name: 'Tech Elevator Coding Bootcamp',
    description: `
      Attended a 14-week coding bootcamp learning how to 
      develop dynamic web-based software systems using the 
      Java programming language.
    `,
  },
  {
    name: 'B.A. Economics',
    description: `
      Obtained BA in Economics, mastering analytical skills 
      and understanding economic principles. Proficient in 
      applying economic theories to solve real-world 
      problems and make informed business decisions.
    `,
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-sans pt-[56px]">
      {/* Splash Screen */}
      {/* <section className="flex justify-center bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-600 bg-cover text-white min-w-[100%]"> */}
      {/* <section className="flex justify-center bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-600 bg-cover text-white min-w-[100%]">
        <div id="splash-section">
          <div className="custom-max-width">
            <div id="splash-container" className="flex flex-col lg:flex-row px-4 py-32 text-center lg:text-left">
              <Splash splashInfo={['x']} />
            </div>
          </div>
        </div>
      </section> */}

      <section id="intro-section" className="flex justify-center min-w-[100%]">
        <div className="custom-max-width">
          <div id="intro-container" className="px-2 sm:px-0 flex flex-col pt-12 pb-3">
            <div>
              {/* Intro Section */}
              <div>
                <Intro intro={skills} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="" className="flex justify-center min-w-[100%]">
        <div className="custom-max-width">
          <div id="" className="px-2 sm:px-0 flex flex-col py-3">
            <div className="text-xl md:text-2xl border-b-2 border-slate-400">
              Skills
            </div>
            <div> {/* skills container thing*/}
              <div>
                <div className="pt-3">
                  Front-end
                </div>
                <div className="flex flex-row flex-wrap">
                  <div className="m-1 px-2 border border-black rounded-full bg-white">
                    HTML/CSS
                  </div>
                  <div className="m-1 px-2 border border-black rounded-full">
                    JavaScript
                  </div>
                  <div className="m-1 px-2 border border-black rounded-full flex">
                    <div className="font-bold">TypeScript:</div>&nbsp;
                    <div>Next.js,&nbsp;TSX,&nbsp;Angular</div>
                  </div>
                  <div className="m-1 px-2 border border-black rounded-full">
                    Next.js
                  </div>
                  <div className="m-1 px-2 border border-black rounded-full">
                    Angular
                  </div>
                </div>
              </div>

              <div className="pt-3">Back-end</div>
              <div className="flex flex-row flex-wrap">
                <div className="m-1 px-2 border border-black rounded-full">
                  HTML/CSS
                </div>
                <div className="m-1 px-2 border border-black rounded-full">
                  JavaScript
                </div>
                <div className="m-1 px-2 border border-black rounded-full flex">
                  <div className="font-bold">TypeScript:</div>&nbsp;
                  <div>Next.js,&nbsp;TSX,&nbsp;Angular</div>
                </div>
                <div className="m-1 px-2 border border-black rounded-full">
                  Next.js
                </div>
                <div className="m-1 px-2 border border-black rounded-full">
                  Angular
                </div>
              </div>

              <div className="pt-3">DevOps</div>
              <div className="flex flex-row flex-wrap">
                <div className="m-1 px-2 border border-black rounded-full">
                  HTML/CSS
                </div>
                <div className="m-1 px-2 border border-black rounded-full">
                  JavaScript
                </div>
                <div className="m-1 px-2 border border-black rounded-full flex">
                  <div className="font-bold">TypeScript:</div>&nbsp;
                  <div>Next.js,&nbsp;TSX,&nbsp;Angular</div>
                </div>
                <div className="m-1 px-2 border border-black rounded-full">
                  Next.js
                </div>
                <div className="m-1 px-2 border border-black rounded-full">
                  Angular
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience-section" className="min-w-[100%]">
        <div className="custom-max-width">
          <div id="experience-container" className="px-4 sm:px-0 flex flex-col py-3">
            <div className="text-xl md:text-2xl border-b-2 border-slate-400">
              Experience
            </div>
            <div>
              {experiences.map((experience, i) => {
                return (
                  <div key={i} className="py-2">
                    <div className="rounded-lg shadow-lg bg-white">
                      <div className="p-4">
                        <div className="flex flex-col">
                          <div className="flex justify-between">
                            <div className="">
                              <div className="">
                                MadeLabs Technology
                              </div>
                              <div className="">
                                Software Developer
                              </div>
                            </div>
                            <div>
                              April 2021 - April 2024
                            </div>
                          </div>

                          {/* <div className="text-2xl mb-2">
                                {experience.titleLine}
                              </div>
                              <div className="text-lg">
                                {experience.description}
                              </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="certification-section">
        <div className="custom-max-width">
          <div id="certification-container" className="px-4 sm:px-0 flex flex-col py-3">
            <div className="text-xl md:text-2xl border-b-2 border-slate-400">
              Certifications
            </div>
            <div className="py-3">
              <div>
                AWS Certified Cloud Practitioner
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="project-section">
        <div className="custom-max-width">
          <div id="project-container" className="px-4 sm:px-0 flex flex-col py-3">
            <div className="text-xl md:text-2xl border-b-2 border-slate-400">
              Projects
            </div>
            <div className="py-3">
              <div>
                ECS Terraformed Resume Website
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="education-section">
        <div className="custom-max-width">
          <div id="education-container" className="px-4 sm:px-0 flex flex-col py-3">
            <div className="text-xl md:text-2xl border-b-2 border-slate-400">
              Education
            </div>
            <div className="py-3">
              <div>
                Web Application Development Bootcamp
                Tech Elevator, National Live Remote, United States
                Graduated: February 2021

                Bachelor of Economics
                Penn State, United States
                Graduated: Spring 2016
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="hobby-section">
        <div className="custom-max-width">
          <div id="hobby-container" className="px-4 sm:px-0 flex flex-col py-3">
            <div className="text-xl md:text-2xl border-b-2 border-slate-400">
              Hobbies
            </div>
            <div className="py-3">
              <div>
                Walking my Dog
              </div>
            </div>
          </div>
        </div>
      </section>

    </main >
  );
}
