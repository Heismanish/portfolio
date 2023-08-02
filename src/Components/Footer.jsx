import React from "react";
import { Link } from "react-scroll";

function Footer() {
	return (
		<footer class="bg-gray-200 mt-6 lg:mt-0 lg:m-0 dark:bg-gray-800">
			<div class="w-[95%] md:w-full	 mx-auto max-w-screen-xl p-2 sm:flex sm:items-center sm:justify-between">
				<Link
					className="flex items-center cursor-pointer"
					activeClass="active"
					to="#"
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}
				>
					<span className="self-center text-2xl font-normal whitespace-nowrap text-gray-500">
						Heismanish
					</span>{" "}
				</Link>
				<ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 ">
					<li>
						<Link
							className="mr-4 hover:underline md:mr-6 cursor-pointer"
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
							className="mr-4 hover:underline md:mr-6 cursor-pointer"
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
							className="mr-4 hover:underline md:mr-6 cursor-pointer"
							activeClass="active"
							to="projects"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
						>
							Project
						</Link>
					</li>
					<li>
						<Link
							className="mr-4 hover:underline md:mr-6 cursor-pointer"
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
				</ul>
			</div>
		</footer>
	);
}

export default Footer;
