import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
	const [formData, setFormData] = React.useState({
		name: "",
		email: "",
		message: "",
	});
    const apiUrl = import.meta.env.VITE_MAIL_ACCESS_KEY;

	const handleSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);

		formData.append("access_key", apiUrl);

		const object = Object.fromEntries(formData);
		const json = JSON.stringify(object);

		const res = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: json,
		}).then((res) => res.json());

		if (res.success) {
			console.log("Success", res);
		}
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<section id="contact" className="py-20 bg-gray-50">
			<div className="container mx-auto px-6">
				<h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
					Get In Touch
				</h2>

				<div className="grid md:grid-cols-2 gap-12">
					<div>
						<h3 className="text-2xl font-semibold mb-6">
							Contact Information
						</h3>
						<div className="space-y-6">
							<div className="flex items-center">
								<Mail
									className="text-blue-600 mr-4"
									size={24}
								/>
								<span className="text-gray-600">
									mukultaraniajobs@gmail.com
								</span>
							</div>
							<div className="flex items-center">
								<Phone
									className="text-blue-600 mr-4"
									size={24}
								/>
								<span className="text-gray-600">
									+91 (964) 395-3281
								</span>
							</div>
							<div className="flex items-center">
								<MapPin
									className="text-blue-600 mr-4"
									size={24}
								/>
								<span className="text-gray-600">
									Delhi, India
								</span>
							</div>
						</div>
					</div>

					<form onSubmit={handleSubmit} className="space-y-6">
						<div>
							<label
								htmlFor="name"
								className="block text-gray-700 mb-2"
							>
								Name
							</label>
							<input
								type="text"
								id="name"
								name="name"
								value={formData.name}
								onChange={handleChange}
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
								required
							/>
						</div>
						<div>
							<label
								htmlFor="email"
								className="block text-gray-700 mb-2"
							>
								Email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
								required
							/>
						</div>
						<div>
							<label
								htmlFor="message"
								className="block text-gray-700 mb-2"
							>
								Message
							</label>
							<textarea
								id="message"
								name="message"
								value={formData.message}
								onChange={handleChange}
								rows={4}
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
								required
							></textarea>
						</div>
						<button
							type="submit"
							className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
						>
							Send Message
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
