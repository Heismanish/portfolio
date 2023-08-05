import { AiOutlineMail } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import ContactForm from "../Components/ContactForm";

export default function Contact() {
	return (
		<div
			id="contact"
			className="flex flex-col items-center justify-center py-10 lg:h-screen h-auto  mx-auto dark:bg-gray-900 gap-8	 "
		>
			{/* Headings */}
			{/* <div className="md:mb-6">
				<h1 className="text-4xl font-semibold text-gray-950 dark:text-gray-300">
					Get in Touch
				</h1>
				<h3 className="text-lg  text-center font-medium text-gray-500 dark:text-gray-400 mb-5 ">
					Contact Me
				</h3>
			</div>
			<div className="flex items-center justify-around gap-10 md:flex-row flex-col w-[100%] ">
				
			
			<div className="max-w-[500px] w-[80%] mx-auto">
				<h2 className="text-center mb-6 text-lg font-medium text-gray-950 dark:text-gray-300">
					Connect with me
				</h2>

				<section className="flex flex-col justify-center gap-6 w-full md:w-[90%]">
					<a
						target="blank"
						href="https://github.com/Heismanish"
						className=" text-center py-4 px-6 lg:min-w-[360px] flex flex-col items-center gap-1  dark:hover:text-gray:200 transition   delay-75 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:border-gray-900 dark:hover:border-white  ease-linear 	 "
					>
						<BsGithub className="text-4xl text-gray-950 dark:text-gray-500  "></BsGithub>
						<p className="text-xl text-gray-950 dark:text-gray-500  ">
							GitHub{" "}
						</p>
						<p className="text-gray-600 dark:text-gray-400 mb-3 ">
							@Heismanish{" "}
						</p>
						<p className="text-gray-600 dark:text-white  hover:text-black dark:hover:text-gray-200 flex gap-2 ">
							To Github
							<BsArrowRight className="text-2xl inline-block "></BsArrowRight>
						</p>
					</a>

					<a
						target="blank"
						href="https://www.linkedin.com/in/manish-kumar-gupta-47878320b/"
						className=" text-center py-4 px-6 lg:min-w-[360px] flex flex-col items-center  gap-1  darkh:hover:text-gray:200 transition delay-75  bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:border-gray-900 dark:hover:border-white  ease-linear scale-[101%]  "
					>
						<SiLinkedin className="text-4xl text-gray-950 dark:text-gray-500  "></SiLinkedin>
						<p className="text-xl text-gray-950 dark:text-gray-500  ">
							LinkedIn
						</p>
						<p className="text-gray-600 dark:text-gray-400 mb-3 ">
							Manish Kumar Gupta
						</p>
						<p className="text-gray-600 dark:text-white  hover:text-black dark:hover:text-gray-200 flex gap-2 ">
							Connect
							<BsArrowRight className="text-2xl inline-block "></BsArrowRight>
						</p>
					</a>

					<a
						href="mailto:manishgu231@gmail.com"
						className=" text-center py-4 px-6 lg:min-w-[360px] flex flex-col items-center  gap-1  darkh:hover:text-gray:200 transition  delay-75  bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:border-gray-900 dark:hover:border-white  ease-linear scale-[101%]  "
					>
						<AiOutlineMail className="text-4xl text-gray-950 dark:text-gray-500  "></AiOutlineMail>
						<p className="text-xl text-gray-950 dark:text-gray-500  ">Email</p>
						<p className="text-gray-600 dark:text-gray-400 mb-3 ">
							manishgu231@gmail.com
						</p>
						<p className="text-gray-600 dark:text-white  hover:text-black dark:hover:text-gray-200 flex gap-2 ">
							Write Me
							<BsArrowRight className="text-2xl inline-block "></BsArrowRight>
						</p>
					</a>
				</section>
			</div>{" "}
			*/}
			<div className="mb-6 text-center">
				<h1 className="text-4xl font-semibold text-gray-950 dark:text-gray-300">
					Get in Touch
				</h1>
				<h3 className="text-lg font-medium text-gray-500 dark:text-gray-400">
					Contact Me
				</h3>
			</div>
			<div className="flex flex-col justify-center items-center	  md:flex-row md:w-[80%] w-[90%] gap-16">
				{/* Contact Cards */}
				<div className="w-full md:w-[400px] mx-auto md:mx-0 mb-10 md:mb-0">
					<h2 className="text-center mb-6 text-lg font-medium text-gray-950 dark:text-gray-300">
						Connect with me
					</h2>

					<section className="flex flex-col gap-6 w-full">
						<a
							target="blank"
							href="https://github.com/Heismanish"
							className=" text-center py-4 px-6 lg:min-w-[360px] flex flex-col items-center gap-1  dark:hover:text-gray:200 transition   delay-75 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:border-gray-900 dark:hover:border-white  ease-linear 	 "
						>
							<BsGithub className="text-4xl text-gray-950 dark:text-gray-500  "></BsGithub>
							<p className="text-xl text-gray-950 dark:text-gray-500  ">
								GitHub{" "}
							</p>
							<p className="text-gray-600 dark:text-gray-400 mb-3 ">
								@Heismanish{" "}
							</p>
							<p className="text-gray-600 dark:text-white  hover:text-black dark:hover:text-gray-200 flex gap-2 ">
								To Github
								<BsArrowRight className="text-2xl inline-block "></BsArrowRight>
							</p>
						</a>
						<a
							target="blank"
							href="https://www.linkedin.com/in/manish-kumar-gupta-47878320b/"
							className=" text-center py-4 px-6 lg:min-w-[360px] flex flex-col items-center  gap-1  darkh:hover:text-gray:200 transition delay-75  bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:border-gray-900 dark:hover:border-white  ease-linear scale-[101%]  "
						>
							<SiLinkedin className="text-4xl text-gray-950 dark:text-gray-500  "></SiLinkedin>
							<p className="text-xl text-gray-950 dark:text-gray-500  ">
								LinkedIn
							</p>
							<p className="text-gray-600 dark:text-gray-400 mb-3 ">
								Manish Kumar Gupta
							</p>
							<p className="text-gray-600 dark:text-white  hover:text-black dark:hover:text-gray-200 flex gap-2 ">
								Connect
								<BsArrowRight className="text-2xl inline-block "></BsArrowRight>
							</p>
						</a>
						<a
							href="mailto:manishgu231@gmail.com"
							className=" text-center py-4 px-6 lg:min-w-[360px] flex flex-col items-center  gap-1  darkh:hover:text-gray:200 transition  delay-75  bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:border-gray-900 dark:hover:border-white  ease-linear scale-[101%]  "
						>
							<AiOutlineMail className="text-4xl text-gray-950 dark:text-gray-500  "></AiOutlineMail>
							<p className="text-xl text-gray-950 dark:text-gray-500  ">
								Email
							</p>
							<p className="text-gray-600 dark:text-gray-400 mb-3 ">
								manishgu231@gmail.com
							</p>
							<p className="text-gray-600 dark:text-white  hover:text-black dark:hover:text-gray-200 flex gap-2 ">
								Write Me
								<BsArrowRight className="text-2xl inline-block "></BsArrowRight>
							</p>
						</a>{" "}
					</section>
				</div>

				{/* Contact Form */}
				<ContactForm></ContactForm>
			</div>
		</div>
	);
}
