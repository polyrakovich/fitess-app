
import { motion } from "framer-motion";
import ActionButton from "@/utils/ActionButton.tsx";

const Home = () => {
	return (
		<section
			id='home'
			className='bg-neutral-50'
		>
			<div className="p-6 md:min-h-[800px] flex flex-col justify-center items-center gap-14 bg-[url(@/assets/icons/Home-background.png)] bg-cover">
					<motion.div
						initial='hidden'
						whileInView='visible'
						viewport={{once: true, amount: 0.5}}
						transition={{duration: 0.5}}
						variants={{
							hidden: {opacity: 0, y: -50},
							visible: {opacity: 1, y: 0}
						}}
						className="flex-col flex-between gap-10 z-10"
					>
						<div className="flex-col flex-center gap-2">
							<h1 className='font-syncopate font-bold text-white text-6xl'>
								Yoga for body &amp; mind
							</h1>
							<p className='text-white text-2xl tracking-wide'>
								Find balance in the heart of the city
							</p>
						</div>
						<ActionButton
							variant='button'
							className='py-2 px-15 text-white hover:text-button-brown border-2 border-white rounded-full bg-transparent hover:bg-white animate cursor-pointer'
						>
							Book class
						</ActionButton>
			</motion.div>
			</div>
		</section>
	);
};

export default Home;