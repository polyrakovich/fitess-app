import React from "react";

type Props = {
	children: React.ReactNode;
}

const Heading = ({children}: Props) => {
	return (
		<h2 className='basis-3/5 text-3xl text-center text-black font-syncopate font-bold'>
			{children}
		</h2>
	);
};

export default Heading;