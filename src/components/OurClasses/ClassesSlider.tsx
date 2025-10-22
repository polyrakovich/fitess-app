"use client";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { classesData } from "@/utils/classesData.tsx";
import type { ClassType } from "@/types/type.ts";
import ClassCard from "@/components/OurClasses/ClassCard.tsx";

const ClassesSlider = () => {
	return (
		<Swiper
			modules={[Navigation, Pagination]}
			navigation={true}
			pagination={{
				clickable: true,
			}}
			loop={true}
			breakpoints={{
				0: { slidesPerView: 1 },
				1024: { slidesPerView: 2 },
				1440: { slidesPerView: 3 },
			}}
			className="w-full h-full"
		>
			{classesData.map((item: ClassType, index: number) => (
				<SwiperSlide key={`${item.title}-${index}`} className="">
					<ClassCard
						title={item.title}
						description={item.description}
						image={item.image}
					/>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default ClassesSlider;
