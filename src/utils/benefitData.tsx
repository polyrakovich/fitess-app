import type { BenefitType } from "@/types/type.ts";
import { PiFlowerLotus } from "react-icons/pi";
import { TbAward } from "react-icons/tb";
import { GrYoga } from "react-icons/gr";
import { RiCupLine } from "react-icons/ri";

export const benefits: Array<BenefitType> = [
	{
		icon: <TbAward className="h-14 w-14 text-lavender" />,
		title: "Certified Instructors",
		description: "Expert guidance for your practice",
	},
	{
		icon: <PiFlowerLotus className="h-14 w-14 text-lavender" />,
		title: "Eco-Friendly Materials",
		description: "Sustainable and natural",
	},
	{
		icon: <GrYoga className="h-14 w-14 text-lavender" />,
		title: "Multiple Yoga Styles",
		description: "Find your perfect practice",
	},
	{
		icon: <RiCupLine className="h-14 w-14 text-lavender" />,
		title: "Relaxation Zone",
		description: "Tea and community space",
	},
];
