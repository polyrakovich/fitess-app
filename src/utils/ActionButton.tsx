import type { SectionId } from "@/types/type.ts";
import React from "react";
import {Link} from "react-scroll"


type Props = {
	children: React.ReactNode;
	to?: SectionId;
	variant: 'link' | 'button';
}

const ActionButton = ({children, to, variant}: Props) => {
	return variant === 'link' && to ? (
		<Link
		to={to}
		className='px-10 py-2 rounded-md bg-neutral-50 text-button-brown hover:bg-button-brown border-2 border-button-brown hover:text-neutral-50 cursor-pointer animate'>
			{children}
		</Link>
	) : (
		<button
		className='px-10 py-2 rounded-md bg-neutral-50 text-button-brown hover:bg-button-brown border-2 border-button-brown hover:text-neutral-50 cursor-pointer animate'>
			{children}
		</button>
	)
};

export default ActionButton;