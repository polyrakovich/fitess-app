import ActionButton from "@/utils/ActionButton.tsx";
import { useEffect, useState } from "react";
import { navLinks, type SectionId } from "@/types/type.ts";
import CustomLink from "@/components/nav/Link.tsx";
import useMediaQuery from "@/hooks/useMediaQuery.ts";
import { FaBarsStaggered } from "react-icons/fa6";
import { HiXMark } from "react-icons/hi2";
import Logo from "/icons/Santosha.svg";
import Instagram from "/icons/instagram-icon-brown.svg";
import Telegram from "/icons/telegram-icon-brown.svg";

const NavBar = () => {
	const [activeSection, setActiveSection] = useState<SectionId | null>(
		navLinks[0]?.id || null,
	);

	const [isTop, setTop] = useState<boolean>(true);
	const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

	const isAboveMediaScreen = useMediaQuery("(min-width: 1120px)");

	const navbarBg = isTop ? "" : "bg-neutral-50";

	const handleSetActive = (sectionId: SectionId) => {
		setActiveSection(sectionId);
	};

	useEffect(() => {
		const handleScroll = () => {
			setTop(window.scrollY === 0);

			navLinks.forEach(({ id }) => {
				const element = document.getElementById(id);
				if (element) {
					const offsetTop = element.offsetTop;
					const offsetBottom = offsetTop + element.offsetHeight;

					if (
						window.scrollY >= offsetTop - 100 &&
						window.scrollY < offsetBottom - 100
					) {
						setActiveSection(id);
					}
				}
			});
		};
		window.addEventListener("scroll", handleScroll);
		handleScroll();

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	return (
		<nav className="relative h-[88px]">
			<div
				className={`${navbarBg} ${isTop ? "py-6" : "py-4"} animate fixed top-0 z-30 w-full`}
			>
				<div className="mx-auto w-5/6 flex-between">
					<div className="flex-between gap-20 w-full">
						<img src={Logo} alt="logo" />
						{isAboveMediaScreen ? (
							<div className="flex-between w-full">
								<div className="flex-between gap-8 text-sm">
									{navLinks.map((link) => (
										<CustomLink
											key={link.id}
											section={link.id}
											onClick={() => handleSetActive(link.id)}
											activeSection={activeSection}
										>
											{link.label}
										</CustomLink>
									))}
								</div>
								<div className="flex-between gap-8">
									<ActionButton variant="button">Sign in</ActionButton>
									<ActionButton to="contactUs" variant="link">
										Become a Member
									</ActionButton>
								</div>
							</div>
						) : (
							<>
								<button
									className="p-2 rounded-full bg-button-brown animate cursor-pointer"
									onClick={() => setIsMenuToggled((prev) => !prev)}
								>
									<FaBarsStaggered className="h-6 w-6 text-white animate" />
								</button>
								{/*Mobile menu*/}
								{!isAboveMediaScreen && isMenuToggled && (
									<div className="fixed top-0 right-0 h-screen w-[300px] bg-neutral-50 drop-shadow-xl z-40 animate">
										<div className="flex justify-end p-6">
											<button onClick={() => setIsMenuToggled(false)}>
												<HiXMark className="h-7 w-7 text-button-brown animate cursor-pointer" />
											</button>
										</div>
										<div className="ml-[20%] flex flex-col gap-8 text-xl ">
											{navLinks.map(({ id, label }) => (
												<CustomLink
													key={id}
													section={id}
													onClick={(sectionId) => {
														setActiveSection(sectionId);
														setIsMenuToggled(false);
													}}
													activeSection={activeSection}
												>
													{label}
												</CustomLink>
											))}
										</div>
										<div className="p-10">
											<h5 className="mb-5 font-semibold text-button-brown">
												Connect
											</h5>
											<div className="flex gap-4.5 text-button-brown">
												<a href="#">
													<img src={Instagram} alt="instagram-icon" />
												</a>
												<a href="#">
													<img src={Telegram} alt="telegram-icon" />
												</a>
											</div>
										</div>
										<div className="absolute bottom-0">
											<hr className="w-full text-button-brown" />
											<p className="flex justify-start p-5 text-button-brown">
												© 2025 Santosha. All rights reserved.
											</p>
										</div>
									</div>
								)}
							</>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
