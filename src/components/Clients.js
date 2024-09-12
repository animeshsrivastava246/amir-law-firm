import React, { useEffect, useState } from "react";

const Clients = () => {
	const [clients, setClients] = useState([]);

	useEffect(() => {
		fetch("/data/clients.json")
			.then((response) => response.json())
			.then((data) => setClients(data.clients));
	}, []);

	return (
		<section>
			<h2>Clients We Deal With</h2>
			<div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
				{clients.map((client, index) => (
					<div key={index} style={{ textAlign: "center" }}>
						<img src={client.logo} alt={client.name} width="100" />
						<h3>{client.name}</h3>
						<p>{client.description}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Clients;
