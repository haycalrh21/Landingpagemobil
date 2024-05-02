import Link from "next/link";
import React from "react";

export default function Header() {
	return (
		<>
			<header className='bg-gradient-to-r from-[#ff5a5f] to-[#ff7b7b] px-4 lg:px-6 h-14 flex items-center'>
				<Link className='flex items-center justify-center' href='/'>
					<CarIcon className='h-6 w-6 text-white' />
					<span className='sr-only'>Car Dealer</span>
				</Link>
				<nav className='ml-auto flex gap-4 sm:gap-6'>
					<Link
						className='text-sm font-medium text-white hover:underline underline-offset-4'
						href='/'
					>
						Home
					</Link>
					<Link
						className='text-sm font-medium text-white hover:underline underline-offset-4'
						href='#whyus'
					>
						Why Us
					</Link>
					<Link
						className='text-sm font-medium text-white hover:underline underline-offset-4'
						href='/Product'
					>
						Cars
					</Link>
					<Link
						className='text-sm font-medium text-white hover:underline underline-offset-4'
						href='/#hubungi'
					>
						Contact
					</Link>
				</nav>
			</header>
		</>
	);
}

function CarIcon(props) {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<path d='M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2' />
			<circle cx='7' cy='17' r='2' />
			<path d='M9 17h6' />
			<circle cx='17' cy='17' r='2' />
		</svg>
	);
}
