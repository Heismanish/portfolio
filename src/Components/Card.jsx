import React from "react";

function Card(props) {
	return (
		<a class=" px-4 py-6 transition ease-out duration-300 justify-self-center self-center  xl:max-w-[85%] w-full h-full  bg-white border-2 border-gray-200 rounded-lg shadow-lg hover:scale-[102%]  hover:border-gray-800 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-900 dark:hover:border-gray-200 ">
			<h5 class="mb-2 text-2xl font-medium tracking-tight text-gray-900 dark:text-gray-50  bg-transparent text-center">
				{props.heading}
			</h5>
			<div className="flex justify-center justify-self-center">
				{" "}
				{props.children}
			</div>
		</a>
	);
}

export default Card;
