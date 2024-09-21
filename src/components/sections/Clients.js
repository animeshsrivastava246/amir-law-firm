import React, { useEffect, useState } from "react";
import clientsData from "../../data/clients.json";

const Clients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    setClients(clientsData);
  }, []);

  return (
    <section className="relative py-6 px-10 bg-gray-800 bg-fixed bg-cover bg-center">
      <div className="container mx-auto text-center max-w-screen-xl">
        <h2 className="text-5xl font-semibold text-white mb-12">Our Clients</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="p-6 bg-gray-100 bg-opacity-30 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-95 flex flex-col justify-between"
            >
              <h3 className="text-gray-100 text-2xl font-medium mb-2">
                {client.name}
              </h3>
              <p className="text-gray-300">{client.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
