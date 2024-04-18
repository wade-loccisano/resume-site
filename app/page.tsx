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

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-sans">
      <section className="flex justify-center bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-600 bg-cover text-white">
        {/* Splash Screen */}
        <div id="splash-section" className="min-w-[100vw]">
          <div className="custom-max-width">
            <div id="splash-container" className="flex flex-col lg:flex-row px-4 py-32">
              <div id="left" className="flex-1 lg:flex-1/2">
                <div className="text-5xl mb-2">
                  # Wade Loccisano
                </div>
                <div className="text-xl mb-6">
                  {/* tagline */}
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
          </div>
        </div>
      </section>
      <section id="skills-section" className="min-h-screen flex justify-center">
        {/* <div className="max-w-[1200px]"> */}
        <div className="custom-max-width">
          <div id="skills-container" className="flex flex-col py-32">
            <div>
              Skills
            </div>
            <div className="text-4xl">
              Programming Languages and Frameworks:
            </div>
            <div>
              {/* Skills scroller */}
              Proficient in programming languages: JavaScript, TypeScript, C#, Python
              Experienced in web development frameworks: React, Angular, NextJs

              Database Management and ORM:

              Strong understanding of relational and NoSQL databases and ORMs: MySQL, MongoDB, Entity Framework

              Development Tools and Methodologies:

              Familiarity with version control systems: Git
              Experienced with Agile development methodologies
              Excellent problem-solving and analytical skills
            </div>
          </div>
        </div>
      </section>
      <section id="experience-section" className="min-h-screen">
        <div className="custom-max-width">
          ## Experience:
          Full Stack Software Developer | MadeLabs LLC. | April 2021 - Present

          Developed and maintained web applications using React.js, resulting in improved user experience and increased client satisfaction.
          Collaborated with cross-functional teams to design and implement scalable software solutions, adhering to Agile development practices.
          Participated in code reviews and quality assurance processes to ensure code integrity and performance.
        </div>
      </section>
      <section id="project-section" className="min-h-screen">
        <div className="custom-max-width">
          ## Projects:
          Resume Site

          Developed a website to host this resume using a NextJS front-end with TailwindCss to handle theming.
          Implemented a Docker container and deployed to !!! to allow multi-region availability.
          Added !!! analytics to track some basic information about users.
        </div>
      </section>
      <section id="certification-section" className="min-h-screen">
        <div className="custom-max-width">
          ## Certifications:
          AWS Certified Cloud Practitioner

          ### Education:
          Web Application Development Bootcamp
          Tech Elevator, City, State
          Graduated: February 2021
        </div>
      </section>
      <section id="reference-section" className="min-h-screen">
        {/* ### Testimonials */}
        ### References:
        Available upon request.
      </section>
    </main >
  );
}
