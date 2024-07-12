import { Intro } from "./ui/intro";

const skills = [
  {
    category: 'Front-end',
    skills: [
      "HTML/CSS",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Next.js",
      "React",
      "Redux",
    ],
  },
  {
    category: 'Back-end',
    skills: [
      "C#",
      ".NET",
      "REST APIs",
      "SQL",
      "PostgreSQL",
      "Entity Framework",
      "Prisma",
    ],
  },
  {
    category: 'DevOps',
    skills: [
      "Cloud",
      "Amazon Web Services (AWS)",
      "Python",
      "Git",
      "Docker",
      "Terraform"
    ],
  },
];

const experiences = [
  {
    role: 'Full-Stack Software Developer',
    org: 'MadeLabs Technology',
    dates: 'April 2021 - April 2024',
    lineItems: [
      "Developed performant and reusable React components in the Next.js framework relying on Tailwind CSS for meeting design and theming requirements as well as Prisma to assist with database access and management.",
      // "Delivered new features using Prisma ORM as to assist with database management.",
      "Utilized a tech stack composed of TypeScript, .NET, and PostgreSQL to develop feature-rich, scalable applications that would meet the needs of the aviation industry.",
      "Used Python scripts powered by AWS Lambda and orchestrated by Amazon Step Functions to retrieve data from FTP sources and move it to Amazon S3.",
      "Ensured secure authentication and authorization to applications with Amazon Cognito user pools.",
      "Expanded Terraform configurations to include the neccessary delcarations to standardize management of new infrastructure.",
    ],

    // technologies: {
    //   frontEnd: [
    //     "HTML/CSS",
    //     "JavaScript",
    //     "TypeScript",
    //     "React",
    //     "Angular",
    //     "Node.js",
    //     "Next.js",
    //   ],
    //   backEnd: [
    //     "C#",
    //     "SQL",
    //     "Entity Framework"
    //   ],
    //   devops: [
    //     "AWS",
    //     "Docker",
    //     "Terraform",
    //   ],
    // },
  },
];


const certifications = [
  // {
  //   name: 'AWS Solutions Architect Associate',
  //   issuedBy: "Amazon Web Services",
  //   date: "August 2024",
  // },
  {
    name: 'AWS Certified Cloud Practitioner',
    issuedBy: "Amazon Web Services",
    date: "September 2022",
  },
];

const projects = [
  {
    name: 'Resume to Website Pipeline',
    org: 'Thunder Sheep LLC.',
    dates: 'April 2024 - Present',
    lineItems: [
      "Developed this website to host a markdown copy of my resume as webpage.",
    ],
  }
];

const educations = [
  {
    name: 'Web Application Development Bootcamp',
    org: "Tech Elevator: Coding Bootcamp",
    date: "Graduated: February 2021",
  },
  {
    name: 'Bachelor of Economics',
    org: "Penn State",
    date: "Graduated: Spring 2016",
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
          <div id="intro-container" className="px-2 sm:px-0 flex flex-col pt-10 pb-3">
            <div>
              {/* Intro Section */}
              <div>
                <Intro intro={skills} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills-section" className="flex justify-center min-w-[100%]">
        <div className="custom-max-width">
          <div id="skills-container" className="px-2 sm:px-0 flex flex-col py-3 shrink-0">
            <div className="text-xl md:text-2xl border-b-2 border-slate-400 font-bold">
              Skills
            </div>
            <div> {/* skills container thing*/}
              {skills.map((skill, i) => {
                return (
                  <div key={i}>
                    <div className="pt-3">
                      {skill.category}
                    </div>
                    <div className="flex flex-row flex-wrap">
                      {skill.skills.map((name, i) => {
                        return (
                          <div key={i} className="m-1 px-2 border border-black rounded-full bg-white">
                            {name}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="experience-section" className="min-w-[100%]">
        <div className="custom-max-width">
          <div id="experience-container" className="px-4 sm:px-0 flex flex-col py-3">
            <div className="text-xl md:text-2xl border-b-2 border-slate-400 font-bold">
              Experience
            </div>
            <div>
              {experiences.map((experience, i) => {
                return (
                  <div key={i} className="">
                    <div className="">
                      <div className="p-4 flex flex-col">
                        <div className="flex flex-col sm:flex-row justify-between">
                          <div className="">
                            <div className="text-lg md:text-xl font-bold">
                              {experience.org}
                            </div>
                            <div className="text-base md:text-lg italic">
                              {experience.role}
                            </div>
                          </div>
                          <div className="text-base md:text-lg italic content-center">
                            {experience.dates}
                          </div>
                        </div>
                        <div className="px-6 pt-3 pb-0">
                          <ul className="list-disc list-outside ml-3">
                            {experience.lineItems.map((item, i) => {
                              return (
                                <li key={i} className="mb-1 pl-4">
                                  {item}
                                </li>
                              );
                            })}
                          </ul>
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
          <div id="certification-container" className="px-4 sm:px-0 flex flex-col">
            <div className="text-xl md:text-2xl border-b-2 border-slate-400 font-bold">
              Certifications
            </div>
            {certifications.map((certification, i) => {
              return (
                <div key={i} className="">
                  <div className="">
                    <div className="px-4 pt-3 pb-4">
                      <div className="flex flex-col sm:flex-row sm:justify-between">
                        <div className="">
                          <div className="text-lg md:text-xl font-bold">
                            {certification.name}
                          </div>
                          <div className="text-base md:text-lg italic">
                            {certification.issuedBy}
                          </div>
                        </div>
                        <div className="text-base md:text-lg italic content-center">
                          Issued: {certification.date}
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="project-section">
        <div className="custom-max-width">
          <div id="project-container" className="px-4 sm:px-0 flex flex-col py-3">
            <div className="text-xl md:text-2xl border-b-2 border-slate-400 font-bold">
              Projects
            </div>
            {projects.map((project, i) => {
              return (
                <div key={i} className="">
                  <div className="">
                    <div className="p-4 flex flex-col">
                      <div className="flex flex-col sm:flex-row justify-between">
                        <div className="">
                          <div className="text-lg md:text-xl font-bold">
                            {project.name}
                          </div>
                          <div className="text-base md:text-lg italic">
                            {project.org}
                          </div>
                        </div>
                        <div className="text-base md:text-lg italic content-center">
                          {project.dates}
                        </div>
                      </div>
                      <div className="px-6 pt-3 pb-0">
                        <ul className="list-disc list-outside ml-3">
                          {project.lineItems.map((item, i) => {
                            return (
                              <li key={i} className="mb-1 pl-4">
                                {item}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="education-section">
        <div className="custom-max-width">
          <div id="education-container" className="px-4 sm:px-0 flex flex-col ">
            <div className="text-xl md:text-2xl border-b-2 border-slate-400 font-bold">
              Education
            </div>
            {educations.map((education, i) => {
              return (
                <div key={i} className="">
                  <div className="">
                    <div className="px-4 pt-3 pb-4 flex flex-col">
                      <div className="flex flex-col sm:flex-row justify-between">
                        <div className="">
                          <div className="text-lg md:text-xl font-bold">
                            {education.name}
                          </div>
                          <div className="text-base md:text-lg italic">
                            {education.org}
                          </div>
                        </div>
                        <div className="text-base md:text-lg italic content-center">
                          {education.date}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}


            {/* <div className="py-3">
              <div>
                Web Application Development Bootcamp
                Tech Elevator, National Live Remote
                Graduated: February 2021

                Bachelor of Economics
                Penn State
                Graduated: Spring 2016
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* <section id="hobby-section">
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
      </section> */}

    </main >
  );
}
