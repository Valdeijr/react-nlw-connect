import type { ReactNode } from "react";

interface ButtonProps {
	children: ReactNode;
}

export function Button(props: ButtonProps) {
	return (
		<button
			className="flex justify-between items-center px-5 h-12 bg-grey-100 text-purple font-semibold rounded-xl w-full cursor-pointer transition-colors duration-300 hover:bg-purple hover:text-grey-100"
			type="submit"
		>
			{props.children}
		</button>
	);
}
