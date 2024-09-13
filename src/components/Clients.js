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
				<h2 className="text-3xl font-semibold text-gray-800 mb-8">
					Clients We Deal With
				</h2>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
					{clients.map((client, index) => (
						<div
							key={index}
							className="p-4 bg-gray-100 rounded-lg shadow-md text-center"
						>
							<img
								src={require(`../assets/client${index+1}.png`)}
								alt="Client Logo"
								className="w-full"
							/>
							<h3>{client.name}</h3>
							<p>{client.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Clients;
