import React from "react";
import Dcard from "./Dcard";

const Discount = () => {
	return (
		<>
			<section className='Discount background NewArrivals'>
				<div className='container'>
					<div className='heading d_flex'>
						<div className='heading-left f_flex'>
							<img
								src='https://img.icons8.com/windows/32/fa314a/gift.png'
								alt=''
							/>
							<h2>Siêu ưu đãi</h2>
						</div>
						<div className='heading'>
							<span>Xem tất cả</span>
							<i className='fa-solid fa-caret-right'></i>
						</div>
					</div>
					<Dcard />
				</div>
			</section>
		</>
	);
};

export default Discount;
