import useMediaQuery from "@/hooks/useMediaQuery.ts";
import Telegram from "/icons/telegram-icon.svg";
import Inst from "/icons/instagram-icon.svg";
import Logo from "/icons/Santosha-white.svg";

const Footer = () => {
	const isAboveMediaScreen = useMediaQuery("(min-width: 1120px)");
	return (
		<>
			{isAboveMediaScreen && (
				<footer className="w-full py-15 text-white bg-button-brown">
					<div className="px-20 pb-10 flex justify-between items-start gap-10">
						<div className="flex-1">
							<img src={Logo} alt="logo" className="my-[3px]" />
							<p className="mt-5">
								Find your balance and inner peace through mindful practice and
								expert guidance.
							</p>
						</div>
						<hr className="md:hidden" />
						<div className="flex-1">
							<h5 className="mb-5 font-semibold">Quick links</h5>
							<ul className="flex flex-col gap-3 cursor-pointer ">
								<li>
									<a href="#">Home</a>
								</li>
								<li>
									<a href="#">Benefits</a>
								</li>
								<li>
									<a href="#">Our Classes</a>
								</li>
								<li>
									<a href="#">Contact us</a>
								</li>
							</ul>
						</div>
						<div className="flex-1">
							<h5 className="mb-5 font-semibold">Classes</h5>
							<ul className="flex flex-col gap-3 cursor-pointer ">
								<li>
									<a href="#">Hatha Yoga</a>
								</li>
								<li>
									<a href="#">Meditation</a>
								</li>
								<li>
									<a href="#">Vinyasa Flow</a>
								</li>
								<li>
									<a href="#">Beginner Yoga</a>
								</li>
							</ul>
						</div>
						<div className="flex-1">
							<h5 className="mb-5 font-semibold">Connect</h5>
							<div className="flex gap-4.5">
								<a href="#">
									<img src={Inst} alt="instagram-icon" />
								</a>
								<a href="#">
									<img src={Telegram} alt="telegram-icon" />
								</a>
							</div>
						</div>
					</div>
					<hr className="w-full text-white" />
					<p className="pt-10 flex-center">
						© 2025 Santosha. All rights reserved.
					</p>
				</footer>
			)}
		</>
	);
};

export default Footer;
