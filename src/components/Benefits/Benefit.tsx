import type { BenefitType } from "@/types/type.ts";
import { motion } from "framer-motion";
import { baseMotion, slideUp, withDelay } from "@/utils/motionPresets.ts";

type BenefitProps = BenefitType & {index: number};

const Benefit = ({icon, title, description, index}: BenefitProps) => {
	return (
		<motion.div
			{...baseMotion}
			transition={withDelay(index)}
			variants={slideUp}
			className='mt-5 p-5 text-center'>
			<div className="mb-4 flex-center">
				<div className="p-4">
					{icon}
				</div>
			</div>
			<h4 className='text-lg font-bold text-black'>{title}</h4>
			<p className="text-lg text-paragraph-gray">{description}</p>
		</motion.div>
	);
};

export default Benefit;