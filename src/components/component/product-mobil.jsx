import formatRupiah from "@/libs/formatRupiah";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import { motion } from "framer-motion";

export function ProductMobil({ mobils }) {
	return (
		<div>
			<section>
				<Header />
			</section>
			<main className='grid gap-6 p-6 md:p-10 lg:p-12'>
				<div className='flex flex-col items-center justify-center space-y-4'>
					<h1 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl'>
						Temukan Mobil Impianmu
					</h1>
					<p className='max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
						Jelajahi berbagai pilihan mobil terbaik dari berbagai merek
						terkemuka.
					</p>
				</div>
				<div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
					{mobils.map((mobil) => (
						<motion.div
							className='relative group overflow-hidden rounded-lg'
							key={mobil.id}
							whileHover={{ scale: 1.2 }}
							whileTap={{ scale: 0.9 }}
							transition={{ type: "spring", stiffness: 400, damping: 17 }}
						>
							<Link className='absolute inset-0 z-10' href={`/${mobil.id}`}>
								<span className='sr-only'>View</span>
							</Link>
							<motion.div>
								<img
									alt='Mobil 1'
									className='object-cover w-full h-60'
									height='300'
									src={mobil.imageUrl}
									style={{
										aspectRatio: "100/200",
										objectFit: "cover",
									}}
									width='400'
								/>
							</motion.div>

							<div className='bg-gradient-to-r from-[#ff5a5f] to-[#ff7b7b] p-4'>
								<h3 className='font-semibold text-lg md:text-xl'>
									{mobil.name}
								</h3>

								<h4 className='font-semibold text-base md:text-lg'>
									{formatRupiah(mobil.harga)}
								</h4>
							</div>
						</motion.div>
					))}

					{/* stop mapping di atas saja */}
				</div>
			</main>
			<section>
				<Footer />
			</section>
		</div>
	);
}
