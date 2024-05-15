import Link from "next/link";
import React from "react";

export default function Footer() {
	return (
		<footer className='bg-gradient-to-r from-[#ff5a5f] to-[#ff7b7b] p-4 md:py-12 w-full flex items-center justify-center'>
			<div className='container mx-auto max-w-full px-4 md:px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm text-white text-left'>
				<div className='flex flex-col items-center md:items-start'>
					<h3 className='font-semibold'>Tentang Kami</h3>
					<Link href='#'>Sejarah</Link>
					<Link href='#'>Visi dan Misi</Link>
					<Link href='#'>Karir</Link>
				</div>
				<div className='flex flex-col items-center md:items-start'>
					<h3 className='font-semibold'>Produk</h3>
					<Link href='#'>Sedan</Link>
					<Link href='#'>SUV</Link>
					<Link href='#'>MPV</Link>
				</div>
				<div className='flex flex-col items-center md:items-start'>
					<h3 className='font-semibold'>Layanan</h3>
					<Link href='#'>Pembiayaan</Link>
					<Link href='#'>Asuransi</Link>
					<Link href='#'>Servis</Link>
				</div>
				<div className='flex flex-col items-center md:items-start'>
					<h3 className='font-semibold'>Informasi</h3>
					<Link href='#'>Pembiayaan</Link>
				</div>
			</div>
		</footer>
	);
}
