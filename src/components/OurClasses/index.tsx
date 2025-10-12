import Heading from "@/utils/Heading.tsx";
import ClassesSlider from "@/components/OurClasses/ClassesSlider.tsx";
import { motion } from "framer-motion";
import { baseMotion, slideUp } from "@/utils/motionPresets.ts";


const OurClasses = () => {
	return (
		<section
			id='ourClasses'
			className='w-full bg-neutral-50 py-40'
		>
			<motion.div
				{...baseMotion}
				transition={{duration: 0.5}}
				variants={slideUp}
				className="w-full flex-center">
				<div className="md:w-3/5">
					<Heading>our classes</Heading>
					<p
					className='text-paragraph-gray py-5 text-center'>
						We offer different yoga styles for your growth and comfort.We offer different yoga styles for your growth and comfort.
					</p>
				</div>
			</motion.div>
			<motion.div
				{...baseMotion}
				transition={{duration: 0.5}}
				variants={slideUp}
				className="mt-10 w-full">
				<ClassesSlider/>
			</motion.div>
		</section>
	);
};

export default OurClasses;