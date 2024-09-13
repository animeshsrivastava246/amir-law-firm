import React, { useEffect, useState } from "react";

const Clients = () => {
	const [clients, setClients] = useState([]);

	useEffect(() => {
		fetch("/data/clients.json")
			.then((response) => response.json())
			.then((data) => setClients(data.clients));
	}, []);

	return (
		<section className="py-16 bg-white">
			<div className="container mx-auto text-center">
				<h2 className="text-4xl font-semibold text-gray-800 mb-12">
					Clients We Deal With
				</h2>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
					{clients.map((client, index) => (
						<div
							key={index}
							className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
						>
							<img
								src={require(`../assets/client${index + 1}.png`)}
								alt={client.name}
								className="w-full h-32 object-contain mb-4"
							/>
							<h3 className="text-lg font-medium text-gray-700 mb-2">
								{client.name}
							</h3>
							<p className="text-gray-600">{client.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Clients;
