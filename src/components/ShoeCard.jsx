import { motion } from "framer-motion";

const ShoeCard = ({ imgUrl, changeBigShoeImage, bigShoeImage }) => {
	const handleClick = () => {
		if (bigShoeImage !== imgUrl.bigShoe) {
			changeBigShoeImage(imgUrl.bigShoe);
		}
	};
	return (
		<div
			className={`border-2 rounded-xl ${
				bigShoeImage === imgUrl.bigShoe ? "border-coral-red" : "border-transparent"
			} cursor-pointer max-sm:flex-1`}
			onClick={handleClick}
		>
			<div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
				<motion.img
					src={imgUrl.thumbnail}
					alt="shoe collection"
					width={127}
					height={103}
					className="object-contain"
					initial={{ scale: 0, opacity: 0 }}
					whileInView={{ scale: 1, opacity: 1 }}
					transition={{ duration: 1 }}
				/>
			</div>
		</div>
	);
};

export default ShoeCard;
