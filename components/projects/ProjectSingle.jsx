import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const imageStyle = { maxWidth: "100%", height: "auto" };

const ProjectSingle = (props) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: "easeInOut",
				duration: 0.7,
				delay: 0.15,
			}}
		>
			<Link
				href='#'
				as={"/projects/" + props.id}
				aria-label='Single Project'
				passHref
			>
				<div className='rounded-xl shadow-2xl hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark p-4'>
					<div>
						{/* <Image
							src={props.img}
							className="rounded-t-xl border-none"
							alt="Single Project"
							layout="responsive"
							width={100}
							height={90}
						/> */}
						<iframe
							className='w-full h-[350px] rounded-md'
							src={props.url}
							allowFullScreen
						/>
					</div>
					<div className='text-center px-4 py-6'>
						<p className='font-general-medium text-xl md:text-2xl text-ternary-dark dark:text-ternary-light mb-6 h-12'>
							{props.title}
						</p>
						<span className='text-lg text-ternary-dark dark:text-ternary-light'>
							{props.category}
						</span>
					</div>
				</div>
			</Link>
		</motion.div>
	);
};

export default ProjectSingle;
