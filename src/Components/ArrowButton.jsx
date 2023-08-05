function ArrowButton(props) {
	return (
		<button className="hidden lg:inline-block text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900  focus:outline-none  font-medium rounded-3xl py-2 px-3 mb-2 text-lg  dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 ">
			{props.children}
		</button>
	);
}

export default ArrowButton;
