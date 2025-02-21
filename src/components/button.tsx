interface ButtonProps {
	text?: string;
}

export function Button(props: ButtonProps) {
	return (
		<button className="bg-violet-500 px-5 py-2 rounded-sm" type="submit">
			{props.text}
		</button>
	);
}
