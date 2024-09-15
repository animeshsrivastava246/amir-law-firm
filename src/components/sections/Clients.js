import React, { useEffect, useState } from "react";
import clientsData from "../../data/clients.json";

const Clients = () => {
	const [clients, setClients] = useState([]);

	useEffect(() => {
		setClients(clientsData);
	}, []);

	return (
		<section
			className="relative py-16 bg-gray-50 bg-fixed bg-cover bg-center"
			style={{
				backgroundImage: `url(${require("../../assets/backdrops/clients.png")})`,
			}}
		>
			<div className="container mx-auto text-center">
				<h2 className="text-5xl font-semibold text-white mb-12">Our Clients</h2>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
					{clients.map((client, index) => (
						<div
							key={index}
							className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-opacity-50 hover:bg-opacity-100"
						>
							<img
								src={require(`../../assets/clients/${client.client_img}`)}
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
