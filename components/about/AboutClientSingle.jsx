import Image from "next/image";
import Link from "next/link";

function AboutClientSingle({ title, image, url }) {
	return (
		<div className='flex items-center justify-center py-5 px-10 border bg-secondary-light border-ternary-light dark:border-ternary-dark  shadow-sm rounded-lg mb-5'>
			<Link
				href={url ? url : "#"}
				target='_blank'
			>
				<Image
					src={image}
					alt={title}
					layout='responsive'
					width={100}
					height={50}
				/>
			</Link>
		</div>
	);
}

export default AboutClientSingle;
