// pages/api/mobil/[id].js

export default function handler(req, res) {
	if (req.method === "GET") {
		const { id } = req.query; // Mendapatkan ID dari query parameter

		// Array data mobil dengan detail lebih lengkap
		const data = [
			{
				id: 1,
				name: "Toyota Camry",
				imageUrl1:
					"https://www.toyota.astra.co.id/sites/default/files/2023-09/New%20Camry%20V%20Type.jpg",
				imageUrl2:
					"https://www.toyota.astra.co.id/sites/default/files/2023-09/New%20Camry%20V%20Type%20Rear.jpg",
				imageUrl3:
					"https://www.toyota.astra.co.id/sites/default/files/2021-11/7-Airbag.jpg ",
				imageUrl4:
					" https://www.toyota.astra.co.id/sites/default/files/2023-08/interior%20fitur1%201200x675_1.jpg",
				year: 2021,
				harga: 20000000,
				description:
					"The Toyota Camry offers sleek styling, excellent fuel efficiency, and a comfortable interior.",
			},
			{
				id: 2,
				name: "Honda Accord",
				imageUrl1:
					"https://asset.honda-indonesia.com/2023/12/02/Q9DIsgSRsBEml101NF5xTPMjHHyF0Nh0Dk2KvToY.jpg",
				imageUrl2:
					"https://asset.honda-indonesia.com/2023/12/02/PYeZMvqdvfVJsTDMiSZs1YMXlLB5jk9ALosdUqAd.jpg",
				imageUrl3:
					"https://asset.honda-indonesia.com/2023/12/02/s71CJP4RCOlEJM9gk751UO3rw2awV7JzHZFMUJrS.jpg",
				imageUrl4:
					"https://asset.honda-indonesia.com/2023/12/02/KrAkZ1XBGCW1Ob14GFQ05vUnQFyahs0P678BkwuM.jpg",
				harga: 30000000,
				year: 2022,
				description:
					"The Honda Accord is known for its reliability and offers a balanced ride with plenty of tech features.",
			},
			{
				id: 3,
				name: "Ford Mustang",
				imageUrl1:
					"https://www.ford.com/is/image/content/dam/vdm_ford/live/en_us/ford/nameplate/mustang/2024/collections/dm/24_FRD_MST_61047.tif?croppathe=1_3x2&wid=720&fit=crop&hei=480",
				imageUrl2:
					"https://www.ford.com/is/image/content/dam/vdm_ford/live/en_us/ford/nameplate/mustang/2024/collections/dm/24_FRD_MST_60980.tif?croppathe=2_3x2&wid=720&fit=crop&hei=480",
				imageUrl3:
					"https://www.ford.com/is/image/content/dam/vdm_ford/live/en_us/ford/nameplate/mustang/2024/collections/dm/24_FRD_MST_61048.tif?croppathe=1_3x2&wid=720&fit=crop&hei=480",
				imageUrl4:
					"https://www.ford.com/is/image/content/dam/vdm_ford/live/en_us/ford/nameplate/mustang/2024/collections/dm/2024_Mustang_Interior_01.tif?croppathe=1_3x2&wid=720&fit=crop&hei=480",
				harga: 30000000,
				year: 2020,
				harga: 40000000,
				description:
					"The Ford Mustang is a classic American muscle car that offers impressive performance and a distinctive style.",
			},
		];

		// Mencari mobil berdasarkan ID
		const car = data.find((car) => car.id.toString() === id);

		if (car) {
			res.status(200).json(car);
		} else {
			res.status(404).json({ message: "Car not found" });
		}
	} else {
		res.setHeader("Allow", ["GET"]);
		res.status(405).end(`Method ${req.method} Not Allowed`);
	}
}
