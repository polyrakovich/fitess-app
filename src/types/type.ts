import type { JSX } from "react";

export type SectionId = "home" | "benefits" | "ourClasses" | "contactUs";

export const navLinks: { id: SectionId; label: string }[] = [
	{ id: "home", label: "Home" },
	{ id: "benefits", label: "Benefits" },
	{ id: "ourClasses", label: "Our Classes" },
	{ id: "contactUs", label: "Contact Us" },
];

export type BenefitType = {
	icon?: JSX.Element;
	title: string;
	description: string;
};

export type ClassType = {
	title: string;
	description: string;
	image: string;
};
