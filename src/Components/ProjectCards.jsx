import React, { useEffect, useState } from "react";
import photo from "../assets/profilePic.jpg";
import projectSources from "./projectSources";

function ProjectCards(props) {
	const projectData = props.dataArray;
	console.log(projectData);

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-project-layout grid-rows-project-row h-[100%] gap-x-2 gap-y-3  place-content-center 	 ">
			{projectData.map((element) => {
				const projectImage = projectSources.find(
					(item) => item.name === element.name
				)?.image;
				const projectDemo = projectSources.find(
					(item) => item.name === element.name
				)?.demoLink;
				return (
					<div
						key={element.id}
						className="max-w-sm h-full  cursor-pointer justify-self-center self-center bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 "
					>
						<img
							className="rounded-t-lg "
							src={projectImage}
							alt="project image"
						/>

						<div className="p-5">
							<a href="#">
								<h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
									{element.name}
								</h5>
								{/* <h5 className=" text-md mb-1 font-normal text-center tracking-tight text-gray-600 dark:text-white">
									<span className="font-medium text-gray-900  dark:text-gray-300">
										Language:
									</span>{" "}
									{element.language}
								</h5> */}
							</a>
							<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
								{element.description}
							</p>

							<button
								type="button"
								class="text-white text-lg border border-gray-950 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg  px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
							>
								<a href={element.html_url}>Github</a>
							</button>
							<button
								type="button"
								class="text-gray-900 text-lg bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg  px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
							>
								<a href={projectDemo}>Demo</a>
								<svg
									className="w-3.5 h-3.5 ml-2 inline-block -rotate-45"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 14 10"
								>
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M1 5h12m0 0L9 1m4 4L9 9"
									/>
								</svg>
							</button>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default ProjectCards;
