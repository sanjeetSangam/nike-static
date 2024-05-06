import { star } from "../assets/icons";
import { motion } from "framer-motion";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
	return (
		<div className="flex justify-center items-center flex-col ">
			<motion.img
				src={imgURL}
				alt={customerName}
				className="rounded-full object-cover h-[120px] w-[120px]"
				initial={{ scale: 0, opacity: 0 }}
				whileInView={{ scale: 1, opacity: 1 }}
				transition={{ duration: 1 }}
			/>

			<p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
			<div className="mt-3 flex justify-center items-center gap-2.5">
				<img
					src={star}
					alt="rating"
					width={24}
					height={24}
					className="object-contain m-0"
				/>
				<p className="text-xl font-montserrat text-slate-gray">({rating})</p>
			</div>

			<h3 className="mt-1 font-palanquin text-3xl text-center font-bold">{customerName}</h3>
		</div>
	);
};

export default ReviewCard;
