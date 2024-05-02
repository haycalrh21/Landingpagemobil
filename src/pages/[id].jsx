// pages/[id].js
import { DetailPage } from "@/components/component/detail-page";
import Footer from "@/components/component/Footer";
import Header from "@/components/component/Header";
import React from "react";

function CarDetail({ car }) {
	if (!car) {
		return <p>No car found!</p>;
	}

	return (
		<div>
			<Header />
			<DetailPage car={car} />
			<Footer />
		</div>
	);
}

export async function getServerSideProps(context) {
	const { id } = context.params;
	const response = await fetch(
		`https://landingpagemobil.vercel.app//api/mobil/${id}`
	); // Update URL untuk match dengan dynamic API route
	const car = await response.json();

	return {
		props: { car },
	};
}

export default CarDetail;
