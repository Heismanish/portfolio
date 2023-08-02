import React from "react";
import { SiHashnode } from "react-icons/si";

function HeroButton(props) {
	return (
		// <button
		// 	type="button"
		// 	class="py-3 px-5 mr-2 mb-2 text-lg font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
		// >
		// 	{props.children}
		// </button>
		<button
			type="button"
			className="text-gray-900 transition ease-out duration-300 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg py-3 px-4 mr-2 mb-2 text-lg  dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
		>
			{props.children}
		</button>
	);
}

export default HeroButton;
