import { React, useState, useRef, useEffect } from "react";
import { Link } from "react-scroll";
import githubLogo from "../assets/github.png";
import githubDarkLogo from "../assets/githubDark.png";

export default function Navbar() {
	const navToggle = useRef();
	// console.log(navToggle.current);

	// const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
	// const hamRef = useRef();
	// const getCurrentTheme = () =>
	// 	window.matchMedia("(prefers-color-scheme: dark)").matches;
	// const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());

	return (
		<nav className="fixed top-0 left-0 right-0 z-10 h-16 px-2 bg-white border-gray-200 dark:bg-gray-900 shadow-sm ">
			<div className="max-w-screen-3xl flex flex-wrap items-center justify-between mx-auto p-4">
				<Link
					className="flex items-center cursor-pointer"
					activeClass="active"
					to="#"
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}
				>
					<span className="self-center text-2xl font-medium whitespace-nowrap dark:text-white">
						Heismanish
					</span>{" "}
				</Link>
				<button
					onClick={() => {
						navToggle.current.classList.toggle("hidden");
					}}
					// data-collapse-toggle="navbar-default"
					type="button"
					class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
					// aria-controls="navbar-default"
					aria-expanded="false"
				>
					<span className="sr-only">Open main menu</span>
					<svg
						className="w-5 h-5"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 17 14"
					>
						cursor
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M1 1h15M1 7h15M1 13h15"
						/>
					</svg>
				</button>
				<div
					className="hidden w-full md:block md:w-auto"
					id="navbar-default"
					ref={navToggle}
				>
					<ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border  border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 shadow-md md:shadow-none">
						<li>
							<Link
								className=" transition ease-linear duration-100 hover:bg-gray-200 md:hover:bg-inherit dark:hover:bg-opacity-70 md:hover:text-black dark:md:hover:text-gray-300  cursor-pointer block py-2 pl-3 pr-4 text-gray-700 bg-gray-100 dark:bg-gray-800 rounded md:bg-transparent md:text-gray-700 md:p-0 dark:text-white md:dark:text-gray-500"
								activeClass="active"
								to="#"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								className=" transition ease-linear duration-100 hover:bg-gray-200 md:hover:bg-inherit dark:hover:bg-opacity-70 md:hover:text-black dark:md:hover:text-gray-300  cursor-pointer block py-2 pl-3 pr-4 text-gray-700 bg-gray-100 dark:bg-gray-800 rounded md:bg-transparent md:text-gray-700 md:p-0 dark:text-white md:dark:text-gray-500"
								activeClass="active"
								to="about"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
							>
								About
							</Link>
						</li>
						<li>
							<Link
								className=" transition ease-linear duration-100 hover:bg-gray-200 md:hover:bg-inherit dark:hover:bg-opacity-70 md:hover:text-black dark:md:hover:text-gray-300  cursor-pointer block py-2 pl-3 pr-4 text-gray-700 bg-gray-100 dark:bg-gray-800 rounded md:bg-transparent md:text-gray-700 md:p-0 dark:text-white md:dark:text-gray-500"
								activeClass="active"
								to="blog"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
							>
								Blogs
							</Link>
						</li>
						<li>
							<Link
								className=" transition ease-linear duration-100 hover:bg-gray-200 md:hover:bg-inherit dark:hover:bg-opacity-70 md:hover:text-black dark:md:hover:text-gray-300  cursor-pointer block py-2 pl-3 pr-4 text-gray-700 bg-gray-100 dark:bg-gray-800 rounded md:bg-transparent md:text-gray-700 md:p-0 dark:text-white md:dark:text-gray-500"
								activeClass="active"
								to="project"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
							>
								Projects
							</Link>
						</li>
						<li>
							<Link
								className=" transition ease-linear duration-100 hover:bg-gray-200 md:hover:bg-inherit dark:hover:bg-opacity-70 md:hover:text-black dark:md:hover:text-gray-300  cursor-pointer block py-2 pl-3 pr-4 text-gray-700 bg-gray-100 dark:bg-gray-800 rounded md:bg-transparent md:text-gray-700 md:p-0 dark:text-white md:dark:text-gray-500"
								activeClass="active"
								to="contact"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
							>
								Contact
							</Link>
						</li>
						<li>
							<a
								href="https://github.com/Heismanish"
								target="blank"
								className=" hidden lg:inliine-block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
							>
								{/* <img
									src={isDarkTheme ? githubDarkLogo : githubLogo}
									alt="github logo"
									className="  md:w-8  -translate-y-1"
								></img> */}
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
