import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SampleNextArrow = ({ onClick }) => {
	return (
		<div className='control-btn' onClick={onClick}>
			<button className='next'>
				<i className='fa fa-long-arrow-alt-right'></i>
			</button>
		</div>
	);
};
const SamplePrevArrow = ({ onClick }) => {
	return (
		<div className='control-btn' onClick={onClick}>
			<button className='prev'>
				<i className='fa fa-long-arrow-alt-left'></i>
			</button>
		</div>
	);
};
const FlashCard = ({ productItems, addToCart }) => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};

	return (
		<>
			<Slider {...settings}>
				{productItems.map((productItems, index) => {
					return (
						<div className='box' key={index}>
							<div className='product mtop'>
								<div className='img'>
									<span className='discount'>
										Giảm {productItems.discount}%
									</span>
									<img
										className='w-100'
										src={productItems.cover}
										alt=''
									/>
									<div className='product-like' role='button'>
										<i className='fa-regular fa-heart'></i>
									</div>
								</div>
								<div className='product-details'>
									<h3>{productItems.name}</h3>
									<div className='rate'>
										<i className='fa fa-star'></i>
										<i className='fa fa-star'></i>
										<i className='fa fa-star'></i>
										<i className='fa fa-star'></i>
										<i className='fa fa-star'></i>
									</div>
									<div className='price'>
										<h4>
											{new Intl.NumberFormat().format(
												productItems.price
											)}
											đ
										</h4>
										<button
											onClick={() =>
												addToCart(productItems)
											}
										>
											<i className='fa fa-plus'></i>
										</button>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</Slider>
		</>
	);
};

export default FlashCard;
