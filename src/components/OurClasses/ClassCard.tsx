type Props = {
	title: string;
	description: string;
	image: string;
}

const ClassCard = ({title, image, description}: Props) => {
	return (
			<div
				className='relative mb-5 flex-center overflow-hidden rounded-md cursor-pointer'
			>
					<div
						className="absolute top-3/4 x-20 px-6 max-w-[329px] text-white text-lg tracking-white rounded-md animate mobile-show-overlay"
					>
						<p className='mb-2 font-bold'>{title}</p>
						<p className='font-light'>{description}</p>
					</div>
					<img
						src={image}
						alt={title}
					/>
			</div>
	);
};

export default ClassCard;