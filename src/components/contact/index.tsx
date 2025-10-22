import { useForm } from "react-hook-form";
import { type ContactFormType, contactSchema } from "@/utils/contactSchema.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import Heading from "@/utils/Heading.tsx";
import TextInput from "@/components/formElements/TextInput.tsx";
import ActionButton from "@/utils/ActionButton.tsx";
import { motion } from "framer-motion";

const ContactUs = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitSuccessful },
		reset,
	} = useForm<ContactFormType>({
		resolver: zodResolver(contactSchema),
		mode: "onTouched",
	});

	const onSubmit = (data: ContactFormType) => {
		console.log(data);
		setTimeout(() => {
			alert("Thank you for your message!");
			reset();
		}, 1000);
	};
	return (
		<section
			id="contactUs"
			className="flex-center px-50 bg-[url(@/assets/images/contact-bg.png)] bg-cover min-h-[784px]"
		>
			<div className="xl:flex xl:gap-10 p-12 bg-neutral-50 rounded-lg">
				<div className="flex flex-col justify-between xl:flex-1">
					<div className="flex flex-col gap-3">
						<Heading>Contact Us</Heading>
						<p className="hidden xl:block">
							santosha is a modern yoga studio where everyone can find their
							perfect practice. We've created a welcoming space with
							professional instructors to help you achieve harmony, strength,
							and flexibility. Our classes suit all levels—from beginners to
							advanced practitioners.
						</p>
					</div>
					<address className="hidden xl:flex xl:flex-col xl:gap-1">
						<p>Saint-Petersburg</p>
						<p>Peace st. 42</p>
						<a href="tel:+79002009090">+7 900 200 90 90</a>
						<a href="mailto:example@mail.ru">example@mail.ru</a>
					</address>
				</div>
				<div className="xl:flex-1 xl:mt-0 mt-5">
					<form onSubmit={handleSubmit(onSubmit)}>
						<TextInput
							placeholder="Name"
							register={register("name")}
							error={errors.name}
						/>
						<TextInput
							type="email"
							placeholder="Email"
							register={register("email")}
							error={errors.email}
						/>
						<TextInput
							className="resize-none"
							type="textarea"
							placeholder="Message"
							register={register("message")}
						/>
						<ActionButton type="submit" variant="button">
							Submit
						</ActionButton>
						{isSubmitSuccessful && (
							<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
								Your message has been sent successfully!
							</motion.p>
						)}
					</form>
				</div>
			</div>
		</section>
	);
};

export default ContactUs;
