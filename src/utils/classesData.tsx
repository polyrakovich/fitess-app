import type {ClassType} from "@/types/type.ts";

import img1 from '@/assets/images/classes-image1.png';
import img2 from '@/assets/images/classes-image2.png';
import img3 from '@/assets/images/classes-image3.png';
import img4 from '@/assets/images/classes-image4.png';

export const classesData: Array<ClassType> = [
	{
		title: 'Hatha Yoga',
		description: 'Classical practise for body and mind. Suitable for all levels.',
		image: img1,
	},
	{
		title: 'Meditation',
		description: 'Mindfulness and relaxation techniques.',
		image: img2,
	},
	{
		title: 'Vinyasa Flow',
		description: 'Dynamic sequence of poses synchronized with breath.',
		image: img3,
	},
	{
		title: 'Beginner Yoga',
		description: 'Gentle introduction to yoga fundamentals.',
		image: img4,
	},
]