import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

type Props = {
	type?: "text" | "textarea" | "email";
	placeholder: string;
	register: UseFormRegisterReturn;
	error?: FieldError;
	className?: string;
};
const TextInput = ({
	type = "text",
	placeholder,
	register,
	error,
	className,
}: Props) => {
	const inputClass = `baseStyles ${className || ""}`;
	return (
		<div className="relative">
			{type === "textarea" ? (
				<textarea
					placeholder={placeholder}
					className={inputClass}
					rows={4}
					{...register}
				/>
			) : (
				<input
					placeholder={placeholder}
					className={inputClass}
					type={type}
					{...register}
				/>
			)}
			{error && <p className="absolute bottom-0">{error.message}</p>}
		</div>
	);
};

export default TextInput;
