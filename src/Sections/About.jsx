import Card from "../Components/Card";
import { DiHtml5, DiCss3, DiJsBadge, DiReact } from "react-icons/di";
import {
	SiTypescript,
	SiTailwindcss,
	SiExpress,
	SiMongodb,
	SiFirebase,
	SiGraphql,
	SiKotlin,
	SiVercel,
} from "react-icons/si";
import { BsGit } from "react-icons/bs";
import { FaNodeJs, FaJava } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";

const About = function () {
	return (
		<div
			id="about"
			className="grid shrink  h-auto w-[95%] md:w-[85%] lg:h-screen mb-16 max-w-[80%] mx-auto "
		>
			{/* introduction section */}
			<blockquote className=" flex flex-col justify-between max-w-2xl mx-auto mb-1 text-gray-500  dark:text-gray-400">
				<h3 className="text-2xl my-2  lg:text-4xl  font-medium lg:font-[500] text-gray-700 dark:text-gray-500 text-center">
					About Me{" "}
				</h3>
				<p className="mb-6 text-center">
					I&apos;m a MERN stack web developer with a passion for open source.
					Let&apos;s create something extraordinary together!{" "}
				</p>
				<h1 className="text-4xl mb-4   text-gray-800 dark:text-white text-center font-semibold bg-gradient-to-r from-gray-300 to-gray-950 bg-clip-text text-transparent ">
					{" "}
					My Tech Stack
				</h1>
			</blockquote>

			{/* 4 grid cards */}

			<div className="grid grid-cols-1 grid-flow-row  place-content-center align-center dark:border-gray-700 mb-4 sm:mb-12 sm:grid-cols-2 gap-8 ">
				<Card heading="Frontend">
					{/* <a href="#" class="flex items-center">
					<img
						src="https://flowbite.com/docs/images/logo.svg"
						className="h-8 mr-3"
						alt="Flowbite Logo"
					/>
					<span className="self-center text-2xl font-medium whitespace-nowrap dark:text-white">
						Heismanish
					</span>
				</a> */}
					<ul role="list" className=" flex flex-col space-y-4 my-3 ">
						<li className="flex space-x-2 ">
							<DiHtml5 className="text-2xl dark:text-gray-300 text-gray-700"></DiHtml5>
							<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
								HTML5
							</span>
						</li>
						<li className="flex space-x-3 items-center text-left">
							<DiCss3 className="text-2xl   dark:text-gray-300 text-gray-700"></DiCss3>
							<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
								CSS3
							</span>
						</li>
						<li className="flex space-x-3 items-center">
							<DiJsBadge className="text-2xl   dark:text-gray-300 text-gray-700"></DiJsBadge>
							<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
								Javascript
							</span>
						</li>
						<li className="flex space-x-3 items-center">
							<DiReact className="text-2xl   dark:text-gray-300 text-gray-700"></DiReact>
							<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
								React{" "}
							</span>
						</li>
						<li className="flex space-x-3 items-center">
							<SiTypescript className="text-2xl  dark:text-gray-300 text-gray-700"></SiTypescript>
							<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
								Typescript
							</span>
						</li>
						<li className="flex space-x-3 items-center">
							<SiTailwindcss className="text-2xl  dark:text-gray-300 text-gray-700"></SiTailwindcss>
							<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
								TailwindCSS
							</span>
						</li>
					</ul>
				</Card>

				<Card heading="Backend">
					<ul role="list" className="space-y-4 my-3">
						<li className="flex space-x-2 items-center">
							<FaNodeJs className="text-2xl dark:text-gray-300 text-gray-700"></FaNodeJs>
							<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ">
								NodeJS
							</span>
						</li>
						<li className="flex space-x-3 items-center">
							<SiExpress className="text-2xl   dark:text-gray-300 text-gray-700"></SiExpress>
							<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ">
								ExpressJS
							</span>
						</li>
						<li className="flex space-x-3 items-center">
							<SiMongodb className="text-2xl   dark:text-gray-300 text-gray-700"></SiMongodb>
							<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ">
								MongoDB
							</span>
						</li>
						<li className="flex space-x-3 items-center">
							<SiFirebase className="text-2xl   dark:text-gray-300 text-gray-700"></SiFirebase>
							<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
								Firebase
							</span>
						</li>
						<li className="flex space-x-3 items-center">
							<SiGraphql className="text-2xl  dark:text-gray-300 text-gray-700"></SiGraphql>
							<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
								GraphQL
							</span>
						</li>
					</ul>
				</Card>
				<Card heading="Programming Languages">
					<ul role="list" className="space-y-4 my-3">
						<li className="flex space-x-2 items-center">
							<FaJava className="text-2xl dark:text-gray-300 text-gray-700"></FaJava>
							<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ">
								Java
							</span>
						</li>
						<li className="flex space-x-3 items-center">
							<SiKotlin className="text-2xl   dark:text-gray-300 text-gray-700"></SiKotlin>
							<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ">
								Kotlin
							</span>
						</li>
					</ul>
				</Card>
				<Card heading="Tools">
					<ul role="list" className="space-y-4 my-3 ">
						<li className="flex space-x-2 items-center">
							<BsGit className="text-2xl dark:text-gray-300 text-gray-700"></BsGit>
							<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ">
								Git
							</span>
						</li>
						<li className="flex space-x-3 items-center">
							<VscGithub className="text-2xl   dark:text-gray-300 text-gray-700"></VscGithub>
							<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ">
								GitHub
							</span>
						</li>
						<li className="flex space-x-3 items-center">
							<SiVercel className="text-2xl   dark:text-gray-300 text-gray-700"></SiVercel>
							<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ">
								Vercel
							</span>
						</li>
					</ul>
				</Card>
			</div>
		</div>
	);
};

export default About;
