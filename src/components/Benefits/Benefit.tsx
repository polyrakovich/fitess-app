import type { BenefitType } from "@/types/type.ts";
import { motion } from "framer-motion";

type BenefitProps = BenefitType;

const Benefit = ({icon, title, description}: BenefitProps) => {
	return (
		<motion.div className='mt-5 p-5 text-center'>
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