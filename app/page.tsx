import Image from "next/image";

const resumeTemplate: string = `
  # Wade Loccisano

  [Pittsburgh, Pennsylvania, 16117] | [724 - 494 - 4379] | [wade.loccisano@gmail.com]
  
  ## About:
  Dynamic and results - oriented Software Developer with a proven track record of delivering high - quality software solutions.Skilled in full - stack development, Agile methodologies, and continuous integration practices.Seeking to leverage expertise in software engineering to contribute to innovative projects in a collaborative team environment.
  
  ## Skills:

  Proficient in programming languages: JavaScript, TypeScript, C#
  Experienced in web development frameworks: React, Angular, NextJs
  Strong understanding of relational and NoSQL databases: MySQL, MongoDB
  Familiarity with version control systems: Git
  Experienced with Agile development methodologies
  Excellent problem - solving and analytical skills
  
  ## Experience:
  Full Stack Software Developer | MadeLabs LLC. | April 2021 - Present
  
  Developed and maintained web applications using React.js, resulting in improved user experience and increased client satisfaction.
  Collaborated with cross - functional teams to design and implement scalable software solutions, adhering to Agile development practices.
  Participated in code reviews and quality assurance processes to ensure code integrity and performance.
  
  ## Projects:
  Resume Site
  
  Developed a website to host this resume using a NextJS front-end with TailwindCss to handle theming.
  Implemented a Docker container and deployed to!!! to allow multi - region availability.
  Added!!! analytics to track some basic information about users.
  
  ## Certifications:
  AWS Certified Cloud Practitioner
  
  ### Education:
  Web Application Development Bootcamp
  Tech Elevator, City, State
  Graduated: February 2021
  
  ### References:
  Available upon request.
`;

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section>
        {/* Splash Screen */}
        # Wade Loccisano

        [Pittsburgh, Pennsylvania, 16117] | [724-494-4379] | [wade.loccisano@gmail.com]

        ## About:
        Dynamic and results-oriented Software Developer with a proven track record of delivering high-quality software solutions. Skilled in full-stack development, Agile methodologies, and continuous integration practices. Seeking to leverage expertise in software engineering to contribute to innovative projects in a collaborative team environment.
      </section>
      <section>
        Programming Languages and Frameworks:

        Proficient in programming languages: JavaScript, TypeScript, C#, Python
        Experienced in web development frameworks: React, Angular, NextJs
        Database Management and ORM:

        Strong understanding of relational and NoSQL databases and ORMs: MySQL, MongoDB, Entity Framework
        Development Tools and Methodologies:

        Familiarity with version control systems: Git
        Experienced with Agile development methodologies
        Excellent problem-solving and analytical skills
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
