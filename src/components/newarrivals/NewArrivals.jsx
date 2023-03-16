import React from "react";
import Cart from "./Cart";
import "./style.css";

const NewArrivals = () => {
	return (
		<>
			<section className='NewArrivals background'>
				<div className='container'>
					<div className='heading d_flex'>
						<div className='heading f_flex'>
							<img
								src='https://img.icons8.com/glyph-neue/64/26e07f/new.png'
								alt=''
							/>
							<h1>Hàng mới về</h1>
						</div>
						<div className='heading me-3'>
							<span>Xem tất cả</span>
							<i className='fa-solid fa-caret-right'></i>
						</div>
					</div>
					<Cart />
				</div>
			</section>
		</>
	);
};

export default NewArrivals;
