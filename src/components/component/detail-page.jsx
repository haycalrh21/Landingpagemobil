import formatRupiah from "@/libs/formatRupiah";
import { motion } from "framer-motion";

export function DetailPage({ car }) {
	return (
		<div>
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 p-4 md:p-8 lg:p-12'>
				<div className='order-2 lg:order-1'>
					<motion.div
						whileHover={{ scale: 1.2 }}
						whileTap={{ scale: 0.9 }}
						transition={{ type: "spring", stiffness: 400, damping: 17 }}
					>
						<img
							alt='Car Image'
							className='w-full h-auto rounded-lg object-cover'
							height={500}
							src={car.imageUrl1}
							style={{
								aspectRatio: "800/500",
								objectFit: "cover",
							}}
							width={800}
						/>
					</motion.div>
				</div>

				<div className='order-1 lg:order-2 space-y-4'>
					<h1 className='text-3xl font-bold'>{car.name}</h1>

					<div className='grid grid-cols-2 gap-4'>
						<div>
							<h3 className='text-lg font-medium'>Specifications</h3>
							<ul className='space-y-2 text-sm text-gray-500 dark:text-gray-400'>
								<li>Engine: 2.0L Turbo</li>
								<li>Transmission: 8-Speed Automatic</li>
								<li>Drivetrain: All-Wheel Drive</li>
								<li>Seating Capacity: 5</li>
							</ul>
						</div>
						<div>
							<h3 className='text-lg font-medium'>Harga</h3>
							<p className='text-2xl font-bold'>{formatRupiah(car.harga)}</p>
						</div>
					</div>
					<div>
						<h3 className='text-lg font-medium'>Overview</h3>
						<p className='text-gray-500 dark:text-gray-400'>
							{car.description}
						</p>
					</div>
				</div>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:p-8 lg:p-12'>
				<motion.div
					whileHover={{ scale: 1.2 }}
					whileTap={{ scale: 0.9 }}
					transition={{ type: "spring", stiffness: 400, damping: 17 }}
				>
					<img
						alt='Car Detail 1'
						className='w-full h-auto rounded-lg object-cover'
						height={300}
						src={car.imageUrl2}
						style={{
							aspectRatio: "400/300",
							objectFit: "cover",
						}}
						width={400}
					/>
				</motion.div>

				<motion.div
					whileHover={{ scale: 1.2 }}
					whileTap={{ scale: 0.9 }}
					transition={{ type: "spring", stiffness: 400, damping: 17 }}
				>
					<img
						alt='Car Detail 2'
						className='w-full h-auto rounded-lg object-cover'
						height={300}
						src={car.imageUrl3}
						style={{
							aspectRatio: "400/300",
							objectFit: "cover",
						}}
						width={400}
					/>
				</motion.div>
				<motion.div
					whileHover={{ scale: 1.2 }}
					whileTap={{ scale: 0.9 }}
					transition={{ type: "spring", stiffness: 400, damping: 17 }}
				>
					<img
						alt='Car Detail 3'
						className='w-full h-auto rounded-lg object-cover'
						height={300}
						src={car.imageUrl4}
						style={{
							aspectRatio: "400/300",
							objectFit: "cover",
						}}
						width={400}
					/>
				</motion.div>
			</div>
		</div>
	);
}
