import Award from '@/assets/icons/ui-award.svg'
import Cup from '@/assets/icons/ui-cup.svg'
import Hieroglyph from '@/assets/icons/ui-hieroglyph.svg'
import Flower from '@/assets/icons/ui-flower.svg'

const Benefits = () => {
	return (
		<div className='flex-between'>
			<div className="">
				<img src={Award} alt='Award'/>
				<p>Certified instructors</p>
				<p>Expert guidance for your practice</p>
			</div>
			<div className="">
				<img src={Flower} alt='Award' />
				<p>Certified instructors</p>
				<p>Expert guidance for your practice</p>
			</div>
			<div className="">
				<img src={Hieroglyph} alt='Award' />
				<p>Certified instructors</p>
				<p>Expert guidance for your practice</p>
			</div>
			<div className="">
				<img src={Cup} alt='Award' />
				<p>Certified instructors</p>
				<p>Expert guidance for your practice</p>
			</div>
		</div>
	);
};

export default Benefits;