/* eslint-disable react/prop-types */
import { useState } from "react";
import { TiTick } from "react-icons/ti";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Button } from "../ui/button";
const HomeServices = () => {
	const [isOpened, setIsOpened] = useState(1);
	return (
		<div className="w-full min-h-screen py-20 px-5">
			<h3 className="flex gap-5 text-[#05CE79] text-2xl items-center px-20">
				<img src="/title_icon.svg" alt="title icon" />
				Our Services
			</h3>
			<h2 className="text-4xl mt-3 font-semibold text-[#000d44] px-20 flex items-center justify-between">
				Best Dental Service For You{" "}
				<div className="flex items-center gap-5">
					<span>
						<FaArrowLeft
							className="text-md hover:text-[#05CE79] duration-500 cursor-pointer"
							onClick={() =>
								setIsOpened((curr) => {
									if (curr > 1) return curr - 1;
									else return 5;
								})
							}
						/>
					</span>
					<span>
						<FaArrowRight
							className="text-md hover:text-[#05CE79] duration-500 cursor-pointer"
							onClick={() =>
								setIsOpened((curr) => {
									if (curr < 5) return curr + 1;
									else return 1;
								})
							}
						/>
					</span>
				</div>
			</h2>
			<div className="flex items-center justify-around mx-16 mt-12  gap-4">
				<Accordion
					img="/service_list_1.svg"
					heading="Cosmetic Dentistry"
					paragraph="Based on the evaluation and examination, our medical team formulates a precise diagnosis and develops."
					list={["Many years of experience", "24/7 care for mother and baby", "Qualified team of professors", "Modern apparatus"]}
					idx={1}
					opened={isOpened === 1 ? true : false}
					setIsOpened={setIsOpened}
					bgColor="#F5F8FD"
				/>
				<Accordion
					img="/service_list_2.svg"
					heading="Orthodontics Service"
					paragraph="Based on the evaluation and examination, our medical team formulates a precise diagnosis and develops."
					list={["Many years of experience", "24/7 care for mother and baby", "Qualified team of professors", "Modern apparatus"]}
					idx={2}
					opened={isOpened === 2 ? true : false}
					setIsOpened={setIsOpened}
					bgColor="#F6F1EB"
				/>
				<Accordion
					img="/service_list_3.svg"
					heading="Oral Surgery"
					paragraph="Based on the evaluation and examination, our medical team formulates a precise diagnosis and develops."
					list={["Many years of experience", "24/7 care for mother and baby", "Qualified team of professors", "Modern apparatus"]}
					idx={3}
					opened={isOpened === 3 ? true : false}
					setIsOpened={setIsOpened}
					bgColor="#F5F8FD"
				/>
				<Accordion
					img="/service_list_4.svg"
					heading="Root Canal Therapy"
					paragraph="Based on the evaluation and examination, our medical team formulates a precise diagnosis and develops."
					list={["Many years of experience", "24/7 care for mother and baby", "Qualified team of professors", "Modern apparatus"]}
					idx={4}
					opened={isOpened === 4 ? true : false}
					setIsOpened={setIsOpened}
					bgColor="#F6F1EB"
				/>
				<Accordion
					img="/service_list_5.svg"
					heading="Pediatric Dentistry"
					paragraph="Based on the evaluation and examination, our medical team formulates a precise diagnosis and develops."
					list={["Many years of experience", "24/7 care for mother and baby", "Qualified team of professors", "Modern apparatus"]}
					idx={5}
					opened={isOpened === 5 ? true : false}
					setIsOpened={setIsOpened}
					bgColor="#F5F8FD"
				/>
			</div>
			<div className="mx-16 mt-16 rounded-3xl h-12 bg-slate-100 flex items-center justify-center">
				<article>
					Click any of the above services to learn more
					<Button variant="link" className="text-blue-500 text-sm">
						View Our All Services
					</Button>
				</article>
			</div>
		</div>
	);
};

export default HomeServices;

const Accordion = ({ img, heading, paragraph, list, opened = false, idx, setIsOpened, bgColor }) => {
	// setIsOpened(idx);

	return (
		<div
			onClick={() => setIsOpened(idx)}
			className={` cursor-pointer rounded-2xl transition-opacity duration-700 box-shadow ${
				opened ? "w-[40%] min-h-[23rem]" : "w-[20%] min-h-[23rem]"
			}`}
			style={{ backgroundColor: bgColor }}
		>
			<div onClick={() => setIsOpened(idx)} className={`border-b-2 cursor-pointer border-gray-300 w-full ${opened ? "p-6" : "p-6"}`}>
				<img src={img} className={`${opened ? "w-15" : "mx-auto w-12"}`} alt={heading} />
			</div>
			<div
				onClick={() => setIsOpened(idx)}
				className={`${
					opened
						? "py-6 px-5 cursor-pointer opacity-100"
						: "flex items-center justify-center h-[18rem] w-full transition-opacity duration-700"
				}`}
			>
				<h3 className={`text-xl font-semibold ${opened ? "" : "rotate-90"} ${opened ? "" : "whitespace-nowrap"}`}>{heading}</h3>
				<article onClick={() => setIsOpened(idx)} className={`my-3 text-sm opacity-85 w-[99%] ${opened ? "" : "hidden opacity-0"}`}>
					{paragraph}
				</article>
				<ul onClick={() => setIsOpened(idx)} className={`flex flex-col items-start justify-around gap-2 ${opened ? "" : "hidden opacity-0"}`}>
					{list.map((item, idx) => {
						return (
							<li key={idx + 1} className="text-sm flex items-center gap-3">
								<TiTick className="text-[#05CE79] text-xl" /> {item}
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};
