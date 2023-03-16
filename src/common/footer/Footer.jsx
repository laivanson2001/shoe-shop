import React from "react";
import "./style.css";

const Footer = () => {
	return (
		<>
			<footer>
				<div className='container grid2'>
					<div className='box pe-4'>
						<h1>Atomic Shop</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Auctor libero id et, in gravida. Sit diam duis
							mauris nulla cursus. Erat et lectus vel ut
							sollicitudin elit at amet.
						</p>
						<div className='icon d_flex'>
							<div className='img d_flex'>
								<i className='fa-brands fa-google-play'></i>
								<span>Google Play</span>
							</div>
							<div className='img d_flex'>
								<i className='fa-brands fa-app-store-ios'></i>
								<span>App Store</span>
							</div>
						</div>
					</div>

					<div className='box'>
						<h2>Về chúng tôi</h2>
						<ul>
							<li>Công việc</li>
							<li>Cửa hàng</li>
							<li>Chăm sóc</li>
							<li>Điều khoản & Điều kiện</li>
							<li>Chính sách bảo mật</li>
						</ul>
					</div>
					<div className='box'>
						<h2>Chăm sóc khách hàng</h2>
						<ul>
							<li>Trung tâm trợ giúp</li>
							<li>Thanh toán</li>
							<li>Theo dõi đơn hàng</li>
							<li>Affilate</li>
							<li>Hoàn trả & Hoàn tiền</li>
						</ul>
					</div>
					<div className='box'>
						<h2>Liên hệ</h2>
						<ul>
							<li>Số 1 Lĩnh Nam, Hoàng Mai, Hà Nội</li>
							<li>Email: example@gmail.com</li>
							<li>SDT: 0123456789</li>
						</ul>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
