import Link from "next/link";
import ThemeSelector from "./theme-selector";

export const Header = () => {
  return (
    <header>
      <section id="header-section" className="w-full fixed bg-white shadow-lg z-50">
        <div className="flex flex-row justify-evenly">
          <Link
            href="/"
          >
            <div className="p-3 text-xl">
              Wade Loccisano
            </div>
          </Link>

          {/* <div className="flex flex-row p-2">
              <div>
                Skills
              </div>
              <div>
                Experience
              </div>
              <div>
                Projects
              </div>
              <div>
                Qualifications
              </div>
            </div> */}

          <div className="flex flex-row p-4 mt-6">
            {/* <ThemeSelector></ThemeSelector> */}
            {/* <button
              >
                <div className="min-w-[90px]">
                  Theme
                </div>
              </button> */}
            {/* <div className="min-w-[90px]">
                Contact
              </div> */}
          </div>
        </div>
      </section>
    </header>
  );
}