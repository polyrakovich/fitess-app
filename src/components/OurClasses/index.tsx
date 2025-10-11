import Heading from "@/utils/Heading.tsx";
import ClassesSlider from "@/components/OurClasses/ClassesSlider.tsx";


const OurClasses = () => {
	return (
		<section
			id='ourClasses'
			className='w-full bg-neutral-50 py-40'
		>
			<div className="w-full flex-center">
				<div className="md:w-3/5">
					<Heading>our classes</Heading>
					<p
					className='text-paragraph-gray py-5 text-center'>
						We offer different yoga styles for your growth and comfort.We offer different yoga styles for your growth and comfort.
					</p>
				</div>
			</div>
			<div className="mt-10 w-full">
				<ClassesSlider/>
			</div>
		</section>
	);
};

export default OurClasses;