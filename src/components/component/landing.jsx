import Link from "next/link";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function Landing({ mobils }) {
	const variants = {
		hidden: { scale: 0.8, opacity: 0 },
		visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
	};

	const AnimatedSection = ({ children }) => {
		const controls = useAnimation();
		const [ref, inView] = useInView();

		useEffect(() => {
			if (inView) {
				controls.start("visible");
			} else {
				controls.start("hidden");
			}
		}, [controls, inView]);

		return (
			<motion.div
				ref={ref}
				initial='hidden'
				animate={controls}
				variants={variants}
			>
				{children}
			</motion.div>
		);
	};

	return (
		<>
			<main>
				<AnimatedSection>
					<section className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#ff5a5f] to-[#ff7b7b]'>
						<div className='container mx-auto px-4 md:px-6 text-center'>
							<div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
								<div className='flex flex-col justify-center space-y-4 text-white'>
									<div className='space-y-2'>
										<h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
											Temukan Mobil Impianmu di Sini
										</h1>
										<p className='max-w-[600px] text-white/80 md:text-xl'>
											Kami menyediakan berbagai pilihan mobil terbaik dengan
											harga terjangkau. Temukan mobil idamanmu sekarang juga!
										</p>
									</div>
									<div className='flex flex-col gap-2 min-[400px]:flex-row'>
										<Link
											className='inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-[#ff5a5f] shadow transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50'
											href='/Product'
										>
											Lihat Mobil
										</Link>
										<Link
											className='inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-white bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800'
											href='#hubungi'
											passHref
										>
											Hubungi Kami
										</Link>
									</div>
								</div>
								<motion.div
									whileHover={{ scale: 1.1 }}
									transition={{ type: "spring", stiffness: 400, damping: 10 }}
								>
									<img
										alt='Hero'
										className='mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square'
										height='550'
										src='https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/models_gw/images-s/asterion.jpg'
										width='550'
									/>
								</motion.div>
							</div>
						</div>
					</section>
				</AnimatedSection>
				<AnimatedSection>
					<section className='w-full py-12 md:py-24 lg:py-32' id='whyus'>
						<div className='container mx-auto px-4 md:px-6 text-center'>
							<div className='flex flex-col items-center justify-center space-y-4 text-center'>
								<div className='space-y-2'>
									<div className='inline-block rounded-lg bg-[#ff5a5f]/20 px-3 py-1 text-sm text-[#ff5a5f]'>
										Mengapa Pilih Mobil Di Kami
									</div>
									<h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
										Keunggulan Kami
									</h2>
									<p className='max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
										Kami menyediakan berbagai pilihan mobil terbaik dengan harga
										terjangkau dan pelayanan yang memuaskan.
									</p>
								</div>
							</div>
							<div className='mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3'>
								<div className='grid gap-1'>
									<h3 className='text-lg font-bold text-[#ff5a5f]'>
										Harga Kompetitif
									</h3>
									<p className='text-sm text-gray-500 dark:text-gray-400'>
										Kami menawarkan harga yang kompetitif untuk setiap mobil
										kami.
									</p>
								</div>
								<div className='grid gap-1'>
									<h3 className='text-lg font-bold text-[#ff5a5f]'>
										Garansi Terbaik
									</h3>
									<p className='text-sm text-gray-500 dark:text-gray-400'>
										Kami memberikan garansi terbaik untuk setiap mobil yang kami
										jual.
									</p>
								</div>
								<div className='grid gap-1'>
									<h3 className='text-lg font-bold text-[#ff5a5f]'>
										Layanan Purna Jual
									</h3>
									<p className='text-sm text-gray-500 dark:text-gray-400'>
										Kami menyediakan layanan purna jual yang memuaskan.
									</p>
								</div>
								<div className='grid gap-1'>
									<h3 className='text-lg font-bold text-[#ff5a5f]'>
										Stok Mobil Lengkap
									</h3>
									<p className='text-sm text-gray-500 dark:text-gray-400'>
										Kami memiliki stok mobil yang lengkap untuk memenuhi
										kebutuhan Anda.
									</p>
								</div>
								<div className='grid gap-1'>
									<h3 className='text-lg font-bold text-[#ff5a5f]'>
										Proses Cepat dan Mudah
									</h3>
									<p className='text-sm text-gray-500 dark:text-gray-400'>
										Kami memiliki proses pembelian yang cepat dan mudah.
									</p>
								</div>
								<div className='grid gap-1'>
									<h3 className='text-lg font-bold text-[#ff5a5f]'>
										Konsultasi Gratis
									</h3>
									<p className='text-sm text-gray-500 dark:text-gray-400'>
										Kami menyediakan konsultasi gratis untuk membantu Anda
										memilih mobil yang tepat.
									</p>
								</div>
							</div>
						</div>
					</section>
				</AnimatedSection>

				<AnimatedSection>
					<section className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#ff5a5f] to-[#ff7b7b]'>
						<div className='container mx-auto px-4 md:px-6 text-center'>
							<div className='flex flex-col items-center justify-center space-y-4 text-center text-white'>
								<div className='space-y-2'>
									<div className='inline-block rounded-lg bg-white/20 px-3 py-1 text-sm'>
										Produk Mobil
									</div>
									<h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
										Pilihan Mobil Terbaik
									</h2>
									<p className='max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
										Kami menyediakan berbagai pilihan mobil terbaik dengan harga
										terjangkau.
									</p>
								</div>
							</div>
							<div className='mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3'>
								{mobils.map((mobil) => (
									<div className='grid gap-4' key={mobil.id}>
										<img
											alt='Car'
											className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full'
											height='310'
											src={mobil.imageUrl}
											width='550'
										/>
										<div className='space-y-2'>
											<h3 className='text-xl font-bold text-white'>
												{mobil.name}
											</h3>
											<p className='text-white/80'>{mobil.description}</p>
											<Link
												className='inline-flex h-9 items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-[#ff5a5f] shadow transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50'
												href={`/${mobil.id}`}
											>
												Lihat Detail
											</Link>
										</div>
									</div>
								))}
							</div>
						</div>
					</section>
				</AnimatedSection>

				<AnimatedSection>
					<section className='w-full py-12 md:py-24 lg:py-32' id='hubungi'>
						<div className='container  mx-auto grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10'>
							{/* <div className='container mx-auto px-4 md:px-6 text-center'> */}
							<div className='space-y-2'>
								<h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
									Hubungi Kami
								</h2>
								<p className='max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
									Jika Anda memiliki pertanyaan atau ingin melakukan pemesanan,
									jangan ragu untuk menghubungi kami.
								</p>
							</div>
							<div className='flex flex-col gap-2 min-[400px]:flex-row'>
								<Link
									className='inline-flex h-10 items-center justify-center rounded-md bg-[#ff5a5f] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#ff5a5f]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ff5a5f] disabled:pointer-events-none disabled:opacity-50'
									href='#'
								>
									Hubungi Kami
								</Link>
								<Link
									className='inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-[#ff5a5f] bg-white px-8 text-sm font-medium text-[#ff5a5f] shadow-sm transition-colors hover:bg-[#ff5a5f]/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ff5a5f] disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800'
									href='#'
								>
									Lihat Lokasi
								</Link>
							</div>
						</div>
					</section>
				</AnimatedSection>
			</main>
		</>
	);
}
