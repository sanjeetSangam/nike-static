import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { shoes, statistics } from "../constants";

import { AnimatePresence, motion } from "framer-motion";

const Hero = () => {
	const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

	return (
		<section
			className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
			id="home"
		>
			<div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
				<p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
				<h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
					<span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
						The new Arrival
					</span>
					<br />
					<span className="text-coral-red inline-block mt-3">Nike </span> Shoes
				</h1>
				<p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
					Discover stylish Nike arrivals, quality comfort, and innovation for your active
					life.
				</p>

				<Button label="Shop Now" iconUrl={arrowRight} />

				<div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16 ">
					{statistics.map((statistic) => (
						<div key={statistic.label}>
							<p className="text-4xl font-palanquin font-bold">{statistic.value}</p>
							<p className="leading-7 font-montserrat text-slate-gray ">
								{statistic.label}
							</p>
						</div>
					))}
				</div>
			</div>

			<div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
				<AnimatePresence>
					{bigShoeImg && (
						<motion.img
							src={bigShoeImg}
							alt="shoe collection"
							height={610}
							width={500}
							className="object-contain relative z-10"
							whileInView={{ y: 0, opacity: 1 }}
							initial={{ y: "50%", opacity: 0 }}
							transition={{ duration: 1 }}
							exit={{ x: -30000 }}
						/>
					)}
				</AnimatePresence>

				<div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
					{shoes.map((shoe) => (
						<div key={shoe}>
							<ShoeCard
								imgUrl={shoe}
								changeBigShoeImage={(shoe) => {
									setBigShoeImg(shoe);
								}}
								bigShoeImage={bigShoeImg}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Hero;
