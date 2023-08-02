import React from "react";

function Button2(props) {
	return (
		<button
			type="button"
			className="py-3.5 px-5 mr-2 mb-2 text-lg font-medium transition-all duration-500 text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300  rounded-lg  dark:focus:ring-gray-800 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700  "
		>
			{props.children}
		</button>
	);
}

export default Button2;
