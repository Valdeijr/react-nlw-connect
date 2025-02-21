import { Button } from "@/components/button";
import { IconButton } from "@/components/iconButton";
import { ArrowRight, Copy } from "lucide-react";

export default function Home() {
	return (
		<main>
			<div className="text-white font-montserrat">Hello world!</div>
			<Button>
				Enviar
				<ArrowRight />
			</Button>

			<IconButton>
				<Copy />
			</IconButton>
		</main>
	);
}
