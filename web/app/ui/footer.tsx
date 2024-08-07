'use client';

import Link from "next/link";
import Image from "next/image";



export const Footer = () => {
  return (
    <footer>
      <section id="footer-section" className="bg-emerald-800 min-h-[60px] text-white sm:px-24 py-10 lg:p-0">
        <div className="flex flex-col lg:flex-row justify-center">
          <div className="text-xl p-4 flex items-center">
            Wade Loccisano
          </div>
          <div className="flex flex-col items-left">
            <div className="border-t-2 border-slate-200 mx-8 lg:hidden">
            </div>
            <Link href="/about" target="_blank">
              <div className="text-lg px-8 py-2 lg:py-6">
                About Me
                <div className="text-xs py-2">
                  Learn about this site&apos;s creator.
                </div>
              </div>
            </Link>
            <div className="border-t-2 border-slate-200 mx-8 lg:hidden">
            </div>
          </div>
          <div className="flex flex-col items-left">
            <Link href="/about-site" target="_blank">
              <div className="text-lg px-8 py-2 lg:py-6">
                About this Site
                <div className="text-xs py-2">
                  A bit about what&apos;s behind this site.
                </div>
              </div>
            </Link>
            <div className="border-t-2 border-slate-200 mx-8 lg:hidden">
            </div>
          </div>
          <div className="flex flex-col items-left">
            <Link href="/other-apps" target="_blank">
              <div className="text-lg px-8 py-2 lg:py-6">
                Apps
                <div className="text-xs py-2">
                  Some other apps.
                </div>
              </div>
            </Link>
            <div className="border-t-2 border-slate-200 mx-8 lg:hidden">
            </div>
          </div>
          {/* <div className="flex flex-col items-left">
            <div className="text-lg px-8 py-2 lg:py-6">
              Contact
              <div className="text-xs py-2">
                Feel free to reach out.
              </div>
            </div>
            <div className="border-t-2 border-slate-200 mx-8 lg:hidden">
            </div>
          </div> */}

          {/* <Link href="https://www.linkedin.com/in/wade-loccisano/" target="_blank">
            <div className="text-lg p-4">
              About Me
            </div>
          </Link>
          <Link href="https://www.linkedin.com/in/wade-loccisano/" target="_blank">
            <div className="text-lg p-4">
              About this Site
            </div>
          </Link>
          <Link href="https://www.linkedin.com/in/wade-loccisano/" target="_blank">
            <div className="text-lg p-4">
              Apps
            </div>
          </Link>
          <Link href="https://www.linkedin.com/in/wade-loccisano/" target="_blank">
            <div className="text-lg p-4">
              Contact
            </div>
          </Link> */}

        </div>
        <div className="border-t-2 border-slate-200 w-[98%] mx-auto my-0 hidden lg:block">
        </div>
        <div className="flex flex-col lg:flex-row justify-center">
          <div className="lg:flex lg:justify-between">
            <div className="px-2 lg:px-0 flex flex-col lg:flex-row">
              <div className="text-xl p-4">
                {/* Language Select */}
              </div>
              <Link href="/privacy-policy" target="_blank">
                <div className="text-sm p-2 lg:p-6">
                  Privacy Policy
                </div>
              </Link>
              <Link href="/terms" target="_blank">
                <div className="text-sm p-2 lg:p-6">
                  Terms
                </div>
              </Link>
              <div className="text-xs flex items-center p-2 lg:p-6">
                Copyright &copy; 2024 Wade Loccisano
              </div>
            </div>
            <div className="min-w-[100px]"></div>
            <div className="flex flex-row invert p-2">
              <Link className="px-2 py-4" href="https://github.com/wade-loccisano" target="_blank">
                <Image
                  src="/github-logo.svg"
                  alt="Image of the GitHub Logo"
                  width={24}
                  height={24}
                />
              </Link>
              <Link className="px-2 py-4" href="https://www.linkedin.com/in/wade-loccisano/" target="_blank">
                <Image
                  src="/linkedin-logo.svg"
                  alt="Image of the LinkedIn Logo"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}