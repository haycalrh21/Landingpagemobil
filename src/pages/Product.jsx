import { ProductMobil } from "@/components/component/product-mobil";
import React, { useEffect, useState } from "react";

export default function Product() {
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
			<ProductMobil mobils={mobils} />
		</div>
	);
}

// export async function getStaticProps() {
// 	const response = await fetch("http://localhost:3000/api/mobil");
// 	const mobils = await response.json();

// 	return {
// 		props: { mobils },
// 	};
// }
