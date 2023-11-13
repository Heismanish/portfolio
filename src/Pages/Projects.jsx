import { useState } from "react";
import ProjectCards from "../Components/ProjectCards";
// import axios from "axios";

export default function Projects() {
  // const [fetchedData, setFetchedData] = useState([]);
  // const [dataArray, setDataArray] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState("");
  // const projectName = [
  // 	"ReactApp-ExpenseTracker",
  // 	"Omnifood--Project",
  // 	"Pokemon_Quiz_App",
  // 	"Blog-Socially",
  // ];

  // const fetchApi = async () => {
  // 	try {
  // 		const res = await axios.get(
  // 			"https://api.github.com/users/Heismanish/repos"
  // 		);
  // 		setFetchedData(res.data);
  // 	} catch (error) {
  // 		setError(error);
  // 	}
  // };
  // useEffect(() => {}, [fetchedData]);
  // useEffect(() => {
  // 	fetchApi();
  // }, []);

  // useEffect(() => {
  // 	setDataArray(fetchedData.filter((data) => projectName.includes(data.name)));
  // }, [fetchedData]);

  return (
    <div
      id="project"
      className="container flex flex-col gap-8 h-auto max-w-screen-xl mx-auto mt-12 dark:bg-gray-900 text-center p-4 md:p-8"
    >
      <h1 className="text-4xl font-semibold text-gray-950 dark:text-gray-300">
        Projects
      </h1>
      <div className="mx-auto">
        <ProjectCards></ProjectCards>
      </div>
    </div>
  );
}
