import { IPaquete } from "@/types/tipos";

export default async function addPaquete (paquete: IPaquete) {
  const data = await fetch(`${process.env.siteUrl}/api/paquetes/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(paquete),
  });
  const newPaquete = await data.json();
  return(JSON.stringify(newPaquete));
};