import { motion } from 'framer-motion';
import AboutClients from '../components/about/AboutClients';
import AboutCounter from '../components/about/AboutCounter';
import AboutMeBio from '../components/about/AboutMeBio';
import PagesMetaHead from '../components/PagesMetaHead';

function about() {
	return (
		<div className='flex flex-col justify-center'>
			<PagesMetaHead title="About Me" />
			<h1 className='mx-auto py-8 text-3xl'>My Contribution for my current employee</h1>
			<iframe
			className='mx-auto w-full px-36'
			id="inlineFrameExample"
			title="Inline Frame Example"
			height="320"
			src="https://jandi.firejune.io/rajib-abweb">
			</iframe>
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
