import type { SectionId } from "@/types/type.ts";
import React from "react";
import {Link} from "react-scroll"


type Props = {
	children: React.ReactNode;
	to?: SectionId;
	variant: 'link' | 'button';
	className?: string;
	type?: 'button' | 'submit' | 'reset';
}

const ActionButton = ({children, to, variant, className, type}: Props) => {
	const defaultStyle = 'py-2 px-10 rounded-md  border-2 border-button-brown animate cursor-pointer';
	const linkStyle = className || `${defaultStyle} bg-neutral-50 text-button-brown hover:text-neutral-50 hover:bg-button-brown`;
	const buttonStyle = className || `${defaultStyle} text-neutral-50 bg-button-brown hover:bg-neutral-50 hover:text-button-brown`;
	return variant === 'link' && to ? (
		<Link
		to={to}
		className={linkStyle}>
			{children}
		</Link>
	) : (
		<button
			type={type}
			className={buttonStyle}>
			{children}
		</button>
	)
};

export default ActionButton;