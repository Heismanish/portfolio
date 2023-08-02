import React from "react";
import { Link } from "react-scroll";
import { RxArrowRight, RxArrowDown } from "react-icons/rx";
import { SiHashnode, SiLinkedin } from "react-icons/si";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import HeroButton from "../Components/HeroButton";
import HeroButton2 from "../Components/HeroButton2";
import ArrowButton from "../Components/ArrowButton";
import { VscGithub, VscTwitter } from "react-icons/vsc";

export default function Hero() {
	return (
		<div
			id="#"
			className="flex gap-16  lg:mt-0 h-screen w-[95%] md:w-[85%] max-w-screen-2xl  mx-auto relative "
		>
			<div className="grid lg:grid-cols-hero-layout gap-4 lg:gap-12 grid-cols-1 ">
				{/* Socials - desktop */}
				<div className=" hidden lg:flex order-last lg:order-first lg:flex-col lg:gap-6 self-center justify-evenly ">
					<VscGithub className="text-2xl text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"></VscGithub>
					<VscTwitter className="text-2xl text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"></VscTwitter>
					<SiLinkedin className="text-2xl text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"></SiLinkedin>
				</div>
				{/* heading */}
				<div className="flex flex-col lg:items-start items-center shrink gap-12 lg:self-center pr-6  order-2 ">
					<div className=" ">
						<h1 className="font-[500] text-[#303030] lg:text-5xl text-3xl mb-1.5">
							<span className="mr-2 drop-shadow-lg bg-gradient-to-r from-gray-600 to-gray-950 dark:bg-gradient-to-r dark:from-gray-400 dark:to-gray-200 bg-clip-text text-transparent">
								Manish Gupta
							</span>
							<svg
								width="36"
								height="36"
								viewBox="0 0 48 48"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								class="home__hand"
								className="inline "
							>
								<path
									d="M25.4995 32.0305L31.3495 33.1555L36.1495 8.48051C36.4495 6.83051 35.3995 5.18051 33.8245 4.88051C32.1745 4.58051 30.5995 5.70551 30.2995 7.35551L25.4995 32.0305Z"
									fill="#FFDD67"
								></path>
								<path
									d="M33.8996 4.88018C33.6746 4.80518 33.5246 4.80518 33.2996 4.80518C34.6496 5.33018 35.3996 6.75518 35.0996 8.25518L30.2996 32.9302L31.3496 33.1552L36.1496 8.48018C36.5246 6.75518 35.4746 5.18018 33.8996 4.88018Z"
									fill="#EBA352"
								></path>
								<path
									d="M19.4995 32.7802H26.5495V5.55518C26.5495 3.53018 24.9745 1.80518 23.0245 1.80518C21.1495 1.80518 19.4995 3.45518 19.4995 5.55518V32.7802Z"
									fill="#FFDD67"
								></path>
								<path
									d="M23.0995 1.80518C22.9495 1.80518 22.7245 1.80518 22.5745 1.88018C24.2995 2.18018 25.5745 3.68018 25.5745 5.55518V32.8552H26.6245V5.55518C26.6245 3.45518 25.0495 1.80518 23.0995 1.80518Z"
									fill="#EBA352"
								></path>
								<path
									d="M15.7495 32.7054L21.7495 31.1304L15.2245 6.30541C14.7745 4.58041 13.0495 3.53041 11.3995 3.90541C9.74948 4.35541 8.77448 6.08041 9.22448 7.80541L15.7495 32.7054Z"
									fill="#FFDD67"
								></path>
								<path
									d="M11.3995 3.90541L10.9495 4.13041C12.4495 4.05541 13.7995 5.03041 14.2495 6.60541L20.7745 31.4304L21.8245 31.1304L15.2245 6.30541C14.7745 4.58041 13.0495 3.53041 11.3995 3.90541Z"
									fill="#EBA352"
								></path>
								<path
									d="M2.99937 10.355C1.57437 11.03 1.12437 12.83 1.87437 14.33L11.7744 34.055L16.7994 31.505L6.89937 11.78C6.14937 10.28 4.42437 9.68 2.99937 10.355Z"
									fill="#FFDD67"
								></path>
								<path
									d="M2.99956 10.355C2.84956 10.43 2.69956 10.505 2.54956 10.655C3.82456 10.28 5.24956 10.955 5.92456 12.305L15.8246 32.03L16.7996 31.58L6.89956 11.78C6.14956 10.28 4.42456 9.68 2.99956 10.355Z"
									fill="#EBA352"
								></path>
								<path
									d="M46.2744 22.2801C45.0744 19.9551 41.3244 20.1051 37.4994 24.3051C34.7994 27.2301 34.2744 28.2051 31.5744 28.1301V25.0551C31.5744 25.0551 25.7994 20.7801 14.3244 22.7301C14.3244 22.7301 7.79945 23.6301 7.79945 27.0801C7.79945 27.0801 6.67445 35.4051 8.99945 40.6551C12.4494 48.4551 30.1494 50.4801 35.6994 37.2051C36.8244 34.5801 39.0744 32.6301 41.0994 30.1551C43.4244 27.1551 47.5494 24.7551 46.2744 22.2801Z"
									fill="#FFDD67"
								></path>
								<path
									d="M46.2745 22.28C46.0495 21.83 45.7495 21.53 45.3745 21.23C45.4495 21.305 45.5245 21.38 45.5245 21.53C46.7995 24.08 42.6745 26.405 40.1995 29.405C38.1745 31.88 35.9245 33.83 34.7995 36.455C29.9995 47.93 16.0495 47.93 10.1995 42.68C15.5245 48.68 30.5245 49.28 35.5495 37.205C36.6745 34.58 38.9245 32.63 40.9495 30.155C43.4245 27.155 47.5495 24.755 46.2745 22.28ZM32.3245 28.13C27.4495 26.33 18.7495 29.63 19.9495 38.405C19.9495 30.23 27.3745 28.205 31.4245 28.205C32.0245 28.13 32.3245 28.13 32.3245 28.13Z"
									fill="#EBA352"
								></path>
							</svg>
						</h1>
						<div className="lg:text-3xl text-xl text-gray-500">
							<TfiLayoutLineSolid className="translate-y-0.5 hidden mr-2 lg:inline-block"></TfiLayoutLineSolid>
							<span className="text-lg  text-gray-500 dark:text-gray-400">
								A Fullstack Web Developer
							</span>
						</div>
					</div>
					{/* Subtitles    */}
					<div className=" flex flex-col lg:items-start items-center text-gray-600  dark:text-gray-300">
						<p className="font-normal lg:text-left text-center lg:text-xl md:texl-lg text:md lg:mb-10 mb:8">
							I'm a MERN stack web developer with a passion for open source.
							Let's create something extraordinary together!
						</p>
					</div>

					<div>
						<HeroButton2>
							<SiHashnode className="inline mr-4 " />
							<a href="https://heismanish.hashnode.dev/" target="blank">
								Blogs
							</a>
						</HeroButton2>
						<HeroButton>
							My CV
							<RxArrowRight className="inline ml-4 " />
						</HeroButton>
					</div>
					{/* social-mobile */}
					<div className="flex order-last lg:order-first gap-6 self-center justify-evenly lg:hidden ">
						<VscGithub className="text-2xl text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"></VscGithub>
						<VscTwitter className="text-2xl text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"></VscTwitter>
						<SiLinkedin className="text-2xl text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"></SiLinkedin>
					</div>
					<div className="animate-bounce absolute bottom-2  lg:bottom-4  lg:left-[50%] lg:-translate-x-[4rem]">
						<ArrowButton>
							<Link
								activeClass="active"
								to="about"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
							>
								<RxArrowDown className="inline" />
							</Link>
						</ArrowButton>
					</div>
				</div>

				{/* Animated PFP */}
				<div className=" bg-home-pfp order-first lg:order-3 grayscale lg:w-[360px] lg:h-[360px] w-[300px] h-[300px] bg-cover bg-center bg-no-repeat shadow-pfp dark:shadow-pfpDark self-center justify-self-center  animate-profile__animate "></div>
			</div>
		</div>
	);
}
