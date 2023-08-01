import React from "react";

function ContactForm() {
	return (
		<div className="flex flex-col justify-evenly h-full gap-6 w-[80%] md:w-full max-w-2xl ">
			<h1 className="text-center text-2xl font-medium text-gray-950 dark:text-gray-300">
				Write me your project{" "}
			</h1>
			<div className="mb-6">
				<label
					for="success"
					className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
				>
					Your name
				</label>
				<input
					type="text"
					id="success"
					className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
					placeholder="Robert J. Oppenheimer"
				/>
			</div>
			<div>
				<label
					for="input-group-1"
					class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>
					Your Email
				</label>
				<div className="relative mb-6">
					<div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
						<svg
							className="w-4 h-4 text-gray-500 dark:text-gray-400"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 20 16"
						>
							<path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
							<path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
						</svg>
					</div>
					<input
						type="text"
						id="input-group-1"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="name@gmail.com"
					/>
				</div>
			</div>
			<div>
				<label
					for="message"
					class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>
					Your Project
				</label>
				<textarea
					id="message"
					rows="4"
					class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="Write your project here..."
				></textarea>
			</div>
		</div>
	);
}

export default ContactForm;
