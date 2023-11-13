// import from "react";
import Chopper from "../assets/Chopper.png";
import Ohara from "../assets/Ohara.png";
import Zoro from "../assets/ZORO.png";
import Socially from "../assets/Socially.png";
const projectSources = [
  {
    id: 1,
    name: "Course Selling App:Admin-Dashboard",
    description:
      "Admin side of a course selling app with a frontend and backend built entirely using Typescript.",
    image: Ohara,
    demoLink: " https://omnifood-heismanish.netlify.app/",
  },
  {
    id: 2,
    name: "Chopper: Full-Stack Note-Taking App",
    description:
      "Chopper is full-stack note-taking application built using Typescript for a robust foundation. It combines the power of React for the frontend with MongoDB, Express, and Node.js (MERN) for the backend, creating a seamless and efficient note-taking experience.",
    image: Chopper,
    code: "https://github.com/Heismanish/chopper-notes/",
    demoLink: "https://www.youtube.com/watch?v=6Qc0IuvDCps",
  },
  {
    id: 3,
    name: "Zoro-Url-Shortener",
    description:
      "Zoro is an express app as of now which provides you with a shorter url as a replacement for your huge and hefty urls 🕶️",
    image: Zoro,
    code: "https://github.com/Heismanish/Zoro-Url-Shortener",
    demoLink: "https://www.youtube.com/watch?v=-w_b6JTXwg4",
  },
  {
    id: 4,
    name: "Blog-Socially",
    description: "kcuh to hai",
    image: Socially,
    code: "https://github.com/Heismanish/Blog-Socially",
    demoLink: " https://youtu.be/sQkBZXX9gd4",
  },
];

// export default projectSources;

function ProjectCards() {
  // const projectData = props.dataArray;
  console.log(projectSources);
  return (
    <div
      // className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-wrap"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-project-layout grid-rows-project-row gap-x-2 gap-y-3  place-content-center 	 "
    >
      {projectSources.map((element) => (
        <div
          key={element.id}
          className="max-w-sm flex flex-wrap f-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          // className="max-w-sm h-full  cursor-pointer justify-self-center self-center bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 "
        >
          <img
            className="rounded-t-lg "
            src={element.image}
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
              className="text-white text-lg border border-gray-950 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg  px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              <a href={element.code}>Github</a>
            </button>
            <button
              type="button"
              className="text-gray-900 text-lg bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg  px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              <a href={element.demoLink}>Demo</a>
              <svg
                className="w-3.5 h-3.5 ml-2 inline-block -rotate-45"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectCards;
