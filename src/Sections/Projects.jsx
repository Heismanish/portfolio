import React, { useEffect, useState } from "react";
import ProjectCards from "../Components/ProjectCards";
import axios from "axios";

export default function Projects() {
	const [fetchedData, setFetchedData] = useState([]);
	const [dataArray, setDataArray] = useState([]);
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
			setError("Error fetching data");
			console.log(error);
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
			className="h-auto max-w-[80%] mx-auto dark:bg-gray-900 text-center"
		>
			<h1 className="text-4xl  font-medium mb-12 text-gray-950 dark:text-gray-300  ">
				Projects
			</h1>
			<div className="mx-auto">
				<ProjectCards dataArray={dataArray}></ProjectCards>
			</div>
		</div>
	);
}
