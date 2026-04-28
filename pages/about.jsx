import { motion } from 'framer-motion';
import AboutClients from '../components/about/AboutClients';
import AboutCounter from '../components/about/AboutCounter';
import AboutMeBio from '../components/about/AboutMeBio';
import PagesMetaHead from '../components/PagesMetaHead';

function about() {
	return (
		<div className='flex flex-col justify-center'>
			<PagesMetaHead title="About Me" />
			<h1 className='mx-auto px-4 py-8 text-3xl'>My Github contribution for my current employer</h1>
			<a target='_blank' href='https://github.com/rajib-abweb' className='rounded' rel='noreferrer'>
			<iframe
				className='md:mx-auto w-full md:px-36 px-4 md:h-64'
				id="inlineFrameExample"
				title="Inline Frame Example"
				src="https://jandi.firejune.io/rajib-abweb"
			>
			</iframe>
			</a>
			
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
				<AboutMeBio />
			</motion.div>

			{/** Counter without paddings */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
			>
				<AboutCounter />
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
				<AboutClients />
			</motion.div>
		</div>
	);
}

export default about;
