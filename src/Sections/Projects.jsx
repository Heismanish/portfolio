import { useEffect, useState } from "react";
import ProjectCards from "../Components/ProjectCards";
import axios from "axios";

export default function Projects() {
	const [fetchedData, setFetchedData] = useState([]);
	const [dataArray, setDataArray] = useState([]);
	// eslint-disable-next-line no-unused-vars
	const [error, setError] = useState("");
	const projectName = [
		"ReactApp-ExpenseTracker",
		"Omnifood--Project",
		"Pokemon_Quiz_App",
		"Blog-Socially",
	];

	const fetchApi = async () => {
		try {
			const res = await axios.get(
				"https://api.github.com/users/Heismanish/repos"
			);
			setFetchedData(res.data);
		} catch (error) {
			setError(error);
		}
	};
	useEffect(() => {}, [fetchedData]);
	useEffect(() => {
		fetchApi();
	}, []);

	useEffect(() => {
		setDataArray(fetchedData.filter((data) => projectName.includes(data.name)));
	}, [fetchedData]);

	return (
		<div
			id="project"
			className="container flex flex-col gap-8 h-auto max-w-[80%] mx-auto lg:h-screen dark:bg-gray-900 text-center"
			// className="grid shrink  h-auto w-[95%] md:w-[85%] lg:h-full mb-16 max-w-[80%] mx-auto "
		>
			<h1 className="text-4xl  font-semibold  text-gray-950 dark:text-gray-300  ">
				Projects
			</h1>
			<div className="mx-auto">
				<ProjectCards dataArray={dataArray}></ProjectCards>
			</div>
		</div>
	);
}
