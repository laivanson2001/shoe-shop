import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [MobileMenu, setMobileMenu] = useState(false);
	return (
		<>
			<header className='header'>
				<div className='container'>
					<div className='navlink'>
						<ul
							className={
								MobileMenu
									? "nav-links-mobile"
									: "link f_flex capitalize mb-0"
							}
							onClick={() => setMobileMenu(false)}
						>
							<li>
								<Link to='/'>Trang chủ</Link>
							</li>
							<li>
								<Link to='/user'>Tài khoản</Link>
							</li>
							<li>
								<Link to='/shop'>Cửa hàng</Link>
							</li>
							<li>
								<Link to='/track'>Giỏ hàng</Link>
							</li>
							<li>
								<Link to='/contact'>Liên hệ</Link>
							</li>
						</ul>

						<button
							className='toggle'
							onClick={() => setMobileMenu(!MobileMenu)}
						>
							{MobileMenu ? (
								<i className='fas fa-times close home-btn'></i>
							) : (
								<i className='fas fa-bars open'></i>
							)}
						</button>
					</div>
				</div>
			</header>
		</>
	);
};

export default Navbar;
