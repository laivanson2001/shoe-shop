import React from "react";
import "./style.css";

const Wrapper = () => {
	const data = [
		{
			cover: <i className='fa-solid fa-truck-fast'></i>,
			title: "Miễn phí giao hàng",
			decs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, numquam.",
		},
		{
			cover: <i className='fa-solid fa-id-card'></i>,
			title: "Thanh toán bảo mật",
			decs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, numquam.",
		},
		{
			cover: <i className='fa-solid fa-shield'></i>,
			title: "Tự tin mua sắm",
			decs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, numquam.",
		},
		{
			cover: <i className='fa-solid fa-headset'></i>,
			title: "Hỗ trợ 24/7",
			decs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, numquam.",
		},
	];
	return (
		<>
			<section className='wrapper background'>
				<div className='container grid2'>
					{data.map((val, index) => {
						return (
							<div className='product' key={index}>
								<div className='img icon-circle'>
									<i>{val.cover}</i>
								</div>
								<h3>{val.title}</h3>
								<p>{val.decs}</p>
							</div>
						);
					})}
				</div>
			</section>
		</>
	);
};

export default Wrapper;
