// components/WhatsAppIcon.js
import React from "react";

function WhatsAppIcon() {
	return (
		<a
			href='https://wa.me/yourphonenumber'
			target='_blank'
			rel='noopener noreferrer'
			style={{
				position: "fixed",
				bottom: "20px", // Jarak dari bawah
				right: "20px", // Jarak dari kanan
				zIndex: 1000, // Pastikan ikon tidak tertutup oleh komponen lain
			}}
		>
			<img
				src='https://i.pinimg.com/550x/93/b2/65/93b265c795140247db600ac92e58746a.jpg'
				alt='Chat with us on WhatsApp'
				style={{ width: "40px", height: "40px" }}
			/>
		</a>
	);
}

export default WhatsAppIcon;
