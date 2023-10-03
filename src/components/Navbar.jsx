import React, { useState } from "react";
import { Transition } from "@headlessui/react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="bg-[#1b1b1b] fixed z-5 text-white w-full backdrop-filter backdrop-blur-lg bg-opacity-30">
        <div className="  mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-16">
            <div className="flex justify-between w-full">
              <div className="flex-shrink-0 ">
                <h1 className="hover:text-purple-600 cursor-pointer font-mono text-2xl  font-bold text-transparent bg-clip-text text-gray-300 ">
                  Jay's Portfolio
                </h1>
              </div>
              <div className="hidden md:block font-sans  ">
                <div className="ml-10 flex items-baseline  space-x-4">
                  <a
                    href="#project"
                    className="hover:text-purple-600 px-3 py-2 rounded-md text-lg font-medium"
                  >
                    Projects
                  </a>

                  <a
                    href="#skills"
                    className="hover:text-purple-600 px-3 py-2 rounded-md text-md font-medium"
                  >
                    Skills
                  </a>

                  <a
                    href="https://blog.codewithjay.co.in/"
                    className=" hover:text-purple-600 px-3 py-2 rounded-md text-lg font-medium"
                  >
                    Blog
                  </a>

                  <a
                    href="#certificates"
                    className="hover:text-purple-600 px-3 py-2 rounded-md text-lg font-medium"
                  >
                    Certifications
                  </a>

                  <a
                    href="#contectme"
                    className=" hover:text-purple-600 px-3 py-2 rounded-md text-l font-semibold"
                  >
                    Contact me
                  </a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div refs={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#project"
                  onClick={() => setIsOpen(!isOpen)}
                  className=" hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Projects
                </a>

                <a
                  href="#skills"
                  onClick={() => setIsOpen(!isOpen)}
                  className="hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Skills
                </a>

                <a
                  href="https://blog.codewithjay.co.in/"
                  onClick={() => setIsOpen(!isOpen)}
                  className=" hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Blog
                </a>

                <a
                  href="#certificates"
                  onClick={() => setIsOpen(!isOpen)}
                  className=" hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Certifications
                </a>

                <a
                  href="#contectme"
                  onClick={() => setIsOpen(!isOpen)}
                  className=" hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact me
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Navbar;
