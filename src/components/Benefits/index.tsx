import { motion } from "framer-motion";
import Heading from "@/utils/Heading.tsx";
import { benefits } from "@/utils/benefitData.tsx";
import Benefit from "@/components/Benefits/Benefit.tsx";
import { atmospherePhotos } from "@/utils/atmospherePhotos.ts";
import { baseMotion, slideUp, withDelay } from "@/utils/motionPresets.ts";

const Benefits = () => {
	return (
		<section
			id="benefits"
			className="flex-center flex-col min-h-full py-20 px-4"
		>
			<motion.div
				{...baseMotion}
				transition={{ duration: 0.5 }}
				variants={slideUp}
				className="flex-center flex-col p-3 md:my-5 md:w-3/5"
			>
				<Heading>the santosha Yoga space</Heading>
				<p className="my-5 text-paragraph-gray md:text-lg md:text-center">
					santosha is a modern yoga studio where everyone can find their perfect
					practice. We've created a welcoming space with professional
					instructors to help you achieve harmony, strength, and flexibility.
					Our classes suit all levels—from beginners to advanced practitioners.
				</p>
			</motion.div>
			<motion.div className="md:flex mt-5 items-center justify-between gap-8">
				{benefits.map((benefit, index) => (
					<Benefit index={index} key={benefit.title} {...benefit} />
				))}
			</motion.div>
			<motion.div
				{...baseMotion}
				transition={{ duration: 0.5 }}
				variants={slideUp}
				className="md:flex-col items-center justify-between gap-20 mt-12 md:mt-28"
			>
				<motion.div
					{...baseMotion}
					transition={{ duration: 0.5 }}
					variants={slideUp}
					className="flex-1"
				>
					<Heading>atmosphere</Heading>
					<p className="my-5 md:px-9 text-paragraph-gray md:text-lg md:text-center">
						santosha is a modern yoga studio where everyone can find their
						perfect practice. We've created a welcoming space with professional
						instructors to help you achieve harmony, strength, and flexibility.
						Our classes suit all levels—from beginners to advanced
						practitioners.
					</p>
				</motion.div>
				<motion.div
					{...baseMotion}
					transition={{ duration: 0.5 }}
					variants={slideUp}
					className="min-h-[550px] w-full flex-2 py-9"
				>
					<div className="md:flex-between flex-center flex-wrap gap-4">
						{atmospherePhotos.map((img, index) => (
							<motion.div
								{...baseMotion}
								transition={withDelay(index)}
								variants={slideUp}
								key={index}
								className="rounded-2xl>"
							>
								<img src={img.src} alt={img.alt} />
							</motion.div>
						))}
					</div>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default Benefits;
