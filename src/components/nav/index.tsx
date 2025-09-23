import Logo from '@/assets/icons/Santosha.svg'
import ActionButton from "@/utils/ActionButton.tsx";
import { useState } from "react";
import { navLinks, type SectionId } from "@/types/type.ts";
import CustomLink from "@/components/nav/Link.tsx";

const NavBar = () => {
	const [activeSection, setActiveSection] = useState<SectionId | null>(navLinks[0]?.id || null);
	console.log(navLinks);
	const handleSetActive = (sectionId: SectionId)=> {
		setActiveSection(sectionId);
	}
	return (
		<nav className="relative h-[88px]">
			<div className="fixed top-0 z-30 w-full">
				<div className="mx-auto w-5/6 flex-between">
					<div className="flex-between gap-20 w-full">
						<img src={Logo} alt="logo"/>
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
								<button className='px-10 py-2 rounded-md bg-button-brown text-neutral-50 hover:bg-neutral-50 border-2 border-button-brown hover:text-button-brown cursor-pointer animate'>
									Sign in
								</button>
								<ActionButton to='contactUs' variant='link'>
									Become a Member
								</ActionButton>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;