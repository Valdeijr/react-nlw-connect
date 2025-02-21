import type { ReactNode } from "react";

interface IconButtonProps {
	children: ReactNode;
}

export function IconButton(props: IconButtonProps) {
	return (
		<button
			className="items-center p-1.5 bg-grey-100 text-purple rounded-md cursor-pointer transition-colors duration-300 hover:bg-purple hover:text-grey-100"
			type="submit"
		>
			{props.children}
		</button>
	);
}
