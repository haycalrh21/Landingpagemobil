// pages/api/mobil.js

export default function handler(req, res) {
	if (req.method === "GET") {
		// Enhanced data array with more details
		const data = [
			{
				id: 1,
				name: "Toyota Camry",
				imageUrl:
					"https://auto2000.co.id/berita-dan-tips/_next/image?url=https%3A%2F%2Fastradigitaldigiroomuat.blob.core.windows.net%2Fstorage-uat-001%2Fapakah-camry-mewah.jpg&w=3840&q=75",
				year: 2021,
				description:
					"The Toyota Camry offers sleek styling, excellent fuel efficiency, and a comfortable interior.",
				harga: 200000000,
			},
			{
				id: 2,
				name: "Honda Accord",
				imageUrl:
					"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKp7a-dXABOGeenHlLjRtPkL3Te435eH8QC07LHEVtEg&s",
				year: 2022,
				description:
					"The Honda Accord is known for its reliability and offers a balanced ride with plenty of tech features.",
				harga: 300000000,
			},
			{
				id: 3,
				name: "Ford Mustang",
				imageUrl:
					"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-B2__QaBL96ZyZNAFk9KlrUTg9fx2_gdGHIoAyTQEP3b26PNEYekt3birS2QUmwszqrY&usqp=CAU",
				year: 2020,
				description:
					"The Ford Mustang is a classic American muscle car that offers impressive performance and a distinctive style.",
				harga: 400000000,
			},
		];

		res.status(200).json(data);
	} else {
		// Only allow GET requests
		res.setHeader("Allow", ["GET"]);
		res.status(405).end(`Method ${req.method} Not Allowed`);
	}
}
