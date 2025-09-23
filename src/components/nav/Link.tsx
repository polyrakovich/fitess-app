
import type { SectionId } from "@/types/type.ts";
import { Link } from "react-scroll";
import React from "react";

type Props = {
	section: SectionId;
	children: React.ReactNode;
	onClick: (sectionId: SectionId) => void;
	activeSection: SectionId | null;

}

const CustomLink = ({section, children, onClick, activeSection}: Props) => {
	const isActive = activeSection === section;
	return (
		<Link
		to={section}
		onClick={() => onClick(section)}
		className={`animate cursor-pointer capitalize hover:text-gray-600 ${isActive ? 'text-button-brown': ''}`}>
			{children}
		</Link>
	);
};

export default CustomLink;