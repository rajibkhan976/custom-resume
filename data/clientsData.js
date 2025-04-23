import { v4 as uuidv4 } from "uuid";

// Import images
import JustGo from "../public/images/brands/just_go.webp";
import Gigalogy from "../public/images/brands/gigalogy.png";
import Flashtalking from "../public/images/brands/innovid_logo.png";
import SOLShare from "../public/images/brands/solshare_logo.svg";
import IngramMicro from "../public/images/brands/ingram_micro.jpg";
import OWNPROP from "../public/images/brands/own_prop.svg";
import NUCLICORE from "../public/images/brands/nucli_core.png";
import RETREAT from "../public/images/brands/retreat_logo.webp";

export const clientsHeading = "Some of the brands I worked with";

export const clientsData = [
	{
		id: uuidv4(),
		title: "JustGo",
		img: JustGo,
		url: "https://pca.justgo.com/",
	},
	{
		id: uuidv4(),
		title: "Gigalogy",
		img: Gigalogy,
		url: "https://gigalogy.com/",
	},
	{
		id: uuidv4(),
		title: "Flashtalking",
		img: Flashtalking,
		url: "https://www.flashtalking.com/",
	},
	{
		id: uuidv4(),
		title: "SOLShare",
		img: SOLShare,
		url: "https://solshare.com/",
	},
	{
		id: uuidv4(),
		title: "IngramMicro",
		img: IngramMicro,
		url: "https://www.ingrammicro.com/",
	},
	{
		id: uuidv4(),
		title: "OWNPROP",
		img: OWNPROP,
		url: "https://www.ownprop.com/",
	},
	{
		id: uuidv4(),
		title: "NUCLICORE",
		img: NUCLICORE,
		url: "https://nuclicore.com/",
	},
	{
		id: uuidv4(),
		title: "RETREAT",
		img: RETREAT,
		url: "https://www.planretreat.com/",
	},
];
