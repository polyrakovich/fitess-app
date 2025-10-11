import Logo from '@/assets/icons/Santosha.svg'
import ActionButton from "@/utils/ActionButton.tsx";
import { useEffect, useState } from "react";
import { navLinks, type SectionId } from "@/types/type.ts";
import CustomLink from "@/components/nav/Link.tsx";
import useMediaQuery from "@/hooks/useMediaQuery.ts";
import { FaBarsStaggered } from "react-icons/fa6";
import { HiXMark } from "react-icons/hi2";

const NavBar = () => {
	const [activeSection, setActiveSection] = useState<SectionId | null>(navLinks[0]?.id || null);

	const [isTop, setTop] = useState<boolean>(true);
	const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

	const isAboveMediaScreen = useMediaQuery('(min-width: 1120px)')

	const navbarBg = isTop ? '' : 'bg-neutral-50'

	const handleSetActive = (sectionId: SectionId)=> {
		setActiveSection(sectionId);
	}

	useEffect(() => {
		const handleScroll = () => {
			setTop(window.scrollY === 0);

			navLinks.forEach(({id}) => {
				const element = document.getElementById(id);
				if (element) {
					const offsetTop = element.offsetTop;
					const offsetBottom= offsetTop + element.offsetHeight;

					if(window.scrollY >= offsetTop - 100 &&
					window.scrollY < offsetBottom - 100) {
						setActiveSection(id);
					}
				}
			})
		}
		window.addEventListener('scroll', handleScroll)
		handleScroll()

		return () => window.removeEventListener('scroll', handleScroll)
	}, [])
	return (
		<nav className="relative h-[88px]">
			<div className={`${navbarBg} ${isTop ? 'py-6' : 'py-4'} animate fixed top-0 z-30 w-full`}>
				<div className="mx-auto w-5/6 flex-between">
					<div className="flex-between gap-20 w-full">
						<img src={Logo} alt="logo"/>
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
								<ActionButton
									variant='button'
								>
									Sign in
								</ActionButton>
								<ActionButton to='contactUs' variant='link'>
									Become a Member
								</ActionButton>
							</div>
						</div> ) : (
							<>
								<button className="p-2 rounded-full bg-button-brown animate cursor-pointer"
								onClick={() => setIsMenuToggled((prev) => !prev)}>
									<FaBarsStaggered className="h-6 w-6 text-white animate"/>
								</button>
								{/*Mobile menu*/}
								{!isAboveMediaScreen && isMenuToggled && (
									<div className='fixed top-0 right-0 h-screen w-[300px] bg-neutral-50 drop-shadow-xl z-40 animate'>
										<div className='flex justify-end p-6'>
											<button onClick={() => setIsMenuToggled(false)}>
												<HiXMark className='h-7 w-7 text-button-brown animate cursor-pointer'/>
											</button>
										</div>
										<div className='ml-[20%] flex flex-col gap-8 text-xl '>
											{navLinks.map(({id, label}) => (
												<CustomLink
												key={id}
												section={id}
												onClick={sectionId => {
													setActiveSection(sectionId);
													setIsMenuToggled(false)
												}}
												activeSection={activeSection}
												>
													{label}
												</CustomLink>
											))}

										</div>
									</div>
								)}
							</>
							)
						}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;