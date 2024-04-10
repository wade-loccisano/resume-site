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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section>
        {/* Splash Screen */}
        <div id="splash-section">
          <div className="sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
            <div id="splash-container" className="flex flex-column">
              <div id="left" className="flex-1">
                <div className="text-xl">
                  # Wade Loccisano
                </div>
                <div>
                  {/* tagline */}
                  Hello, my name is Wade Loccisano!
                </div>
                <button className="border border-black p-2">
                  Contact
                </button>
              </div>
              <div id="right" className="flex-1">
                <div>
                  ## About:
                  Dynamic and results-oriented Software Developer with a proven track record of delivering high-quality software solutions. Skilled in full-stack development, Agile methodologies, and continuous integration practices. Seeking to leverage expertise in software engineering to contribute to innovative projects in a collaborative team environment.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="skills-section">
        {/* <div className="max-w-[1200px]"> */}
        <div className="sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
          <div>
            Skills
          </div>
          <div className="text-4xl">
            Programming Languages and Frameworks:
          </div>
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
      </section>
      <section>
        ## Experience:
        Full Stack Software Developer | MadeLabs LLC. | April 2021 - Present

        Developed and maintained web applications using React.js, resulting in improved user experience and increased client satisfaction.
        Collaborated with cross-functional teams to design and implement scalable software solutions, adhering to Agile development practices.
        Participated in code reviews and quality assurance processes to ensure code integrity and performance.
      </section>
      <section>
        ## Projects:
        Resume Site

        Developed a website to host this resume using a NextJS front-end with TailwindCss to handle theming.
        Implemented a Docker container and deployed to !!! to allow multi-region availability.
        Added !!! analytics to track some basic information about users.
      </section>
      <section>
        ## Certifications:
        AWS Certified Cloud Practitioner

        ### Education:
        Web Application Development Bootcamp
        Tech Elevator, City, State
        Graduated: February 2021
      </section>
      <section>
        {/* ### Testimonials */}
        ### References:
        Available upon request.
      </section>
    </main>
  );
}
