// import { useEffect, useRef, useState } from "react";
// import * as yup from "yup";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import emailjs from "@emailjs/browser";

// const schema = yup.object().shape({
// 	name: yup.string().required("Please enter a valid name"),
// 	email: yup.string().email().required("Please enter a valid email."),
// 	message: yup.string().required("This field cannot be empty"),
// });

// function ContactForm() {
// 	const [sent, setSent] = useState(false);
// 	const form = useRef();

// 	const afterSendig = () => {
// 		setSent(true);
// 		setTimeout(() => setSent(false), 3000);
// 	};
// 	const sendEmail = (e) => {
// 		try {
// 			emailjs
// 				.sendForm(
// 					"service_mvewp0g",
// 					"template_pmhqi7s",
// 					form.current,
// 					"Gw3li_PZC-Hu5Vqp6"
// 				)
// 				.then(
// 					(result) => {
// 						console.log(result.text);
// 						afterSendig();
// 					},
// 					(error) => {
// 						console.log(error.text);
// 					}
// 				);
// 		} catch (error) {
// 			console.log(error.message());
// 		}
// 	};

// 	const {
// 		register,
// 		handleSubmit,
// 		reset,
// 		formState: { errors },
// 	} = useForm({ resolver: yupResolver(schema) });

// 	useEffect(() => {
// 		reset();
// 	}, [sent]);

// 	return (

// 	);
// }

// export default ContactForm;

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "@emailjs/browser";
import * as yup from "yup";

const schema = yup.object().shape({
	name: yup.string().required("Please enter a valid name"),
	email: yup.string().email().required("Please enter a valid email."),
	message: yup.string().required("This field cannot be empty"),
});

function ContactForm() {
	const [sent, setSent] = React.useState(false);
	const form = React.useRef();

	const afterSending = () => {
		setSent(true);
		setTimeout(() => setSent(false), 3000);
	};

	const sendEmail = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				"YOUR_SERVICE_ID",
				"YOUR_TEMPLATE_ID",
				form.current,
				"YOUR_USER_ID"
			)
			.then(
				(result) => {
					console.log(result.text);
					afterSending();
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	React.useEffect(() => {
		reset();
	}, [sent]);

	return (
		<form
			onSubmit={handleSubmit((d) => sendEmail(d))}
			ref={form}
			className=" flex flex-col align-middle justify-evenly h-full gap-6 w-[80%] md:w-full max-w-2xl "
		>
			<h1 className="text-center text-2xl font-medium text-gray-950 dark:text-gray-300">
				Write me your project{" "}
			</h1>
			<div className="mb-6">
				<label
					htmlFor="success"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500"
				>
					Your name
				</label>
				{/* <input
					type="text"
					id="success"
					className="bg-green-50 border text-gray-800 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 "
					placeholder="Robert J. Oppenheimer"
					{...register("name")}
				/> */}
				<input
					type="text"
					id="success"
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="Robert J. Oppenheimer"
					{...register("name")}
					required
				></input>
				{
					<p className={errors?.name ? "inline-block text-red-600" : "hidden"}>
						{errors.name?.message}
					</p>
				}
			</div>
			<div>
				<label
					htmlFor="input-group-1"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>
					Your Email
				</label>
				<div className="relative mb-6 ">
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
						type="email"
						id="input-group-1"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="name@gmail.com"
						required
						{...register("email")}
					/>
					<p
						className={
							errors?.email ? "inline-block text-red-600 absolute " : "hidden"
						}
					>
						{errors.email?.message}
					</p>
				</div>
			</div>
			<div>
				<label
					htmlFor="message"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>
					Your Project
				</label>
				<textarea
					id="message"
					rows="4"
					required
					className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="Write your project here..."
					{...register("message")}
				></textarea>
			</div>
			<div className="flex flex-row  items-center gap-4">
				<button
					type="submit"
					className=" text-gray-900 max-w-[200px] transition ease-out duration-300 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg py-3 px-4 mr-2 mb-2 text-lg  dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
				>
					Send
				</button>{" "}
				<p
					className={
						sent
							? " transition-all ease-out text-base text-white rounded-xl bg-green-400 dark:bg-opacity-60 px-3 py-1"
							: "hidden"
					}
				>
					Email Sent
				</p>
			</div>
		</form>
	);
}

export default ContactForm;
