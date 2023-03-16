import React from "react";
import { Link } from "react-router-dom";

const Search = ({ CartItem }) => {
	window.addEventListener("scroll", function () {
		const search = document.querySelector(".search");
		search.classList.toggle("active", window.scrollY > 80);
	});

	return (
		<>
			<section className='search'>
				<div className='container c_flex'>
					<div className='logo width'>
						<Link to='/' className='fs-4 fw-bold'>
							Atomic Shop
						</Link>
					</div>
					<div className='search-box f_flex'>
						<i className='fa fa-search'></i>
						<input type='text' placeholder='Tìm kiếm sản phẩm' />
					</div>

					<div className='icon f_flex width'>
						<i className='fa fa-user icon-circle'></i>
						<div className='cart'>
							<Link to='/cart'>
								<i className='fa fa-shopping-bag icon-circle'></i>
								{CartItem.length === 0 ? (
									""
								) : (
									<span className='d-flex align-items-center justify-content-center'>
										{CartItem.length}
									</span>
								)}
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Search;
