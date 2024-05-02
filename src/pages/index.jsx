import Footer from "@/components/component/Footer";
import Header from "@/components/component/Header";
import { Landing } from "@/components/component/landing";
import WhatsAppIcon from "@/components/component/WaIcon";
import { useEffect, useState } from "react";

export default function Home() {
	const [mobils, setMobils] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const response = await fetch("/api/mobil");
			const data = await response.json();
			setMobils(data);
		}

		fetchData();
	}, []);
	return (
		<div>
			<Header />
			<Landing mobils={mobils} />
			<Footer />
			<WhatsAppIcon /> {/* Menambahkan ikon WhatsApp di sini */}
		</div>
	);
}
