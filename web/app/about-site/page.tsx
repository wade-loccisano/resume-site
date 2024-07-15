export default function AboutSite() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-sans pt-[56px]">
      <section id="skills-section" className="flex justify-center min-w-[100%]">
        <div className="custom-max-width">
          <div id="skills-container" className="px-2 sm:px-0 flex flex-col py-28">
            <div>
              About this Site
            </div>
            <div className="text-2xl md:text-4xl">
              {/* Programming Languages and Frameworks: */}
            </div>
            <div>
              {/* Skills scroller */}
              <div className="py-4 flex flex-col justify-between md:flex-row flex-wrap">
                {/* <div className="w-[244px] border border-black">
                  <div className="bg-cover bg-red-200 h-8 sm:h-12"></div>
                  <div className="text-2xl">
                    Skill Name
                  </div>
                  <div>

                  </div>
                </div> */}
              </div>
              {/* <div className="flex">
                <button>
                  Scroll Left
                </button>
                <button>
                  Scroll Right
                </button>
              </div> */}
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
      </section>
    </main >
  );
}