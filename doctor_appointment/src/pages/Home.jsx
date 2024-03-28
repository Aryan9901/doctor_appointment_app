/* eslint-disable react/prop-types */
import { FaPlus } from "react-icons/fa";
import About from "../components/elements/About";
import ChooseUs from "../components/elements/ChooseUs";
import HomeServices from "../components/elements/HomeServices";
import { Button } from "../components/ui/button";
import Marquee from "react-fast-marquee";
import Team from "../components/elements/Team";
import { useEffect, useState } from "react";

const Home = () => {
	const [isSmallerScreen, setIsSmallerScreen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsSmallerScreen(window.innerWidth <= 640);
		};

		// Initial call to handleResize
		handleResize();

		// Event listeners for window resize and scroll
		window.addEventListener("resize", handleResize);

		// Cleanup function to remove the event listeners when component unmounts
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<main className="mt-[3.4%] w-full min-h-screen">
			<section
				className="hero-section pt-2 w-full h-[110vh] bg-[url(/heroimg.png)] bg-cover mx-auto sm:h-[150vh]"
				style={{ borderRadius: "2rem" }}
			>
				<div className="h-[55%] w-full pl-12  mt-11 sm:h-[50%] md:h-[72%] sm:w-[70%]">
					<div className="h-full w-full ml-auto flex items-center justify-center flex-col gap-5 sm:items-start">
						<div className="flex items-center justify-center gap-2 px-9 py-2 rounded-3xl bg-[#34353641] text-xl font-semibold text-white sm:justify-start">
							<p>Professional</p>
							<div className=" w-10 h-[1.2px] bg-[#04ce78]"></div>
							<p>Doctor</p>
						</div>
						{!isSmallerScreen && (
							<h2 className="uppercase mt-1 text-6xl font-extrabold text-white leading-tight w-full text-center sm:text-left">
								Best
								<span className="px-2  border-2 relative ml-4 mr-4">
									<div className="absolute -translate-x-1/2 -translate-y-1/2 top-0 left-0 h-3 w-3 rounded-full bg-[#04ce78]"></div>
									<div className="absolute -translate-x-1/2 translate-y-1/2 bottom-0 left-0 h-3 w-3 rounded-full bg-[#04ce78]"></div>
									<div className="absolute translate-x-1/2 -translate-y-1/2 top-0 right-0 h-3 w-3 rounded-full bg-[#04ce78]"></div>
									<div className="absolute translate-x-1/2 translate-y-1/2 bottom-0 right-0 h-3 w-3 rounded-full bg-[#04ce78]"></div>
									Dental
								</span>
								Care In Town
							</h2>
						)}
						{isSmallerScreen && (
							<h2 className="uppercase mt-1 text-5xl font-extrabold text-white leading-tight w-[90%] text-center">
								Best
								<span className="px-2  border-2 relative ml-4 mr-4">
									<div className="absolute -translate-x-1/2 -translate-y-1/2 top-0 left-0 h-5 w-5 rounded-full bg-[#04ce78]"></div>
									<div className="absolute -translate-x-1/2 translate-y-1/2 bottom-0 left-0 h-5 w-5 rounded-full bg-[#04ce78]"></div>
									<div className="absolute translate-x-1/2 -translate-y-1/2 top-0 right-0 h-5 w-5 rounded-full bg-[#04ce78]"></div>
									<div className="absolute translate-x-1/2 translate-y-1/2 bottom-0 right-0 h-5 w-5 rounded-full bg-[#04ce78]"></div>
									Dental
								</span>
								<br />
								Care In Town
							</h2>
						)}
						<article className="text-white text-md w-[90%] text-center sm:text-sm sm:text-left sm:w-5/6">
							A brief statement outlining the purpose and mission of the clinic. This can include the commitment to patient care,
							community health.
						</article>
						<div className="flex items-start justify-start gap-5">
							<Button variant="secondary" className="px-8 py-5 rounded-3xl bg-gradient-green text-black">
								See All Services
							</Button>
							<Button variant="secondary" className="px-8 py-5 rounded-3xl bg-[#EEF2FD] text-[#252a3a]">
								Contact Us
							</Button>
						</div>
					</div>
				</div>
				<div className="px-6 py-4 appointment-form mr-6 w-[90%] md:w-[90%] h-[40%] rounded-[3rem] box-shadow bg-white ml-auto flex flex-col justify-between items-center md:flex-row sm:h-[35%] md:h-48 md:py-0">
					<h3 className=" text-3xl md:text-3xl 2xl:text-4xl xl:text-3xl lg:text-3xl mb-5  text-[#000D44] font-bold pr-3 md:border-r-2 lg:w-[25%] md:w-[22%] xl:w-[25%]  border-[#04ce78]">
						Book An Appointment
					</h3>
					<form className="flex flex-wrap items-center justify-around w-[75%] gap-4">
						<input
							type="text"
							className="py-3 w-56 px-5 outline-none focus:shadow-md border-[#000] rounded-3xl bg-slate-100 text-sm"
							placeholder="Your Name"
						/>
						<input
							type="text"
							className="py-3 w-56 px-5 outline-none focus:shadow-md border-[#000] rounded-3xl bg-slate-100 text-sm"
							placeholder="Email Address"
						/>
						<input
							type="text"
							className="py-3 w-56 px-5 outline-none focus:shadow-md border-[#000] rounded-3xl bg-slate-100 text-sm"
							placeholder="Phone Number"
						/>
						<input
							type="date"
							className="py-3 px-5 w-56 outline-none focus:shadow-md border-[#000] rounded-3xl bg-slate-100 text-sm"
							placeholder="23-04-2024"
						/>
						<input
							type="text"
							className="py-3 w-56 px-5 outline-none focus:shadow-md border-[#000] rounded-3xl bg-slate-100 text-sm"
							placeholder="Your Name"
						/>
						<input
							type="text"
							className="py-3 w-56 px-5 outline-none focus:shadow-md border-[#000] rounded-3xl bg-slate-100 text-sm"
							placeholder="Your Name"
						/>
					</form>
				</div>
			</section>
			<section className="feature h-48 mt-9  px-9 flex flex-wrap items-center justify-around border-b lg:h-48">
				<Feature imgpath="/feature_box_1.svg" heading="Experienced Doctors" para="Our team of skilled doctors, nurses, and specialists" />
				<Feature imgpath="/feature_box_2.svg" heading="Painless Treatment" para="Your health and well-being are our top priorities." />
				<Feature imgpath="/feature_box_3.svg" heading="Top Dental Equipment" para="Our clinic is equipped with modern facilities" />
				<Feature imgpath="/feature_box_4.svg" heading="24/7 Advance Care" para="We understand that every patient is unique" />
			</section>
			<HomeServices />
			<About />
			{/* <ChooseUs /> */}
			<section className="w-full h-48 bg-[#1F5FFF]  flex items-center justify-center lg:h-32">
				<Marquee>
					<div className="mr-32">
						<img src="/brand_2_1.svg" className="h-15 w-15 sm:h-17 sm:w-17" alt="brand logo 1" />
					</div>
					<div className="mr-32">
						<img src="/brand_2_2.svg" className="h-15 w-15 sm:h-17 sm:w-17" alt="brand logo 1" />
					</div>
					<div className="mr-32">
						<img src="/brand_2_3.svg" className="h-15 w-15 sm:h-17 sm:w-17" alt="brand logo 1" />
					</div>
					<div className="mr-32">
						<img src="/brand_2_4.svg" className="h-15 w-15 sm:h-17 sm:w-17" alt="brand logo 1" />
					</div>
					<div className="mr-32">
						<img src="/brand_2_5.svg" className="h-15 w-15 sm:h-17 sm:w-17" alt="brand logo 1" />
					</div>
					<div className="mr-32">
						<img src="/brand_2_6.svg" className="h-15 w-15 sm:h-17 sm:w-17" alt="brand logo 1" />
					</div>
					<div className="mr-32">
						<img src="/brand_2_7.svg" className="h-15 w-15 sm:h-17 sm:w-17" alt="brand logo 1" />
					</div>
					<div className="mr-32">
						<img src="/brand_2_8.svg" className="h-15 w-15 sm:h-17 sm:w-17" alt="brand logo 1" />
					</div>
				</Marquee>
			</section>
			<section className="w-full ">
				<div className="photo-gallery w-full flex items-start justify-start flex-wrap">
					<div className="photo-item min-w-[300px] relative w-2/6 h-80">
						<div className="absolute opacity-0 h-full w-full p-5 bg-[#131a47cb]">
							<div className="h-full w-full border-2 flex flex-col items-center justify-center">
								<div className="h-12 w-12 rounded-full flex items-center justify-center bg-[#04ce78] hover:bg-[#1F5FFF]">
									<FaPlus className="text-white font-regular text-xl" />
								</div>
								<h3 className="text-white text-xl font-bold my-3">Dental Cleaning</h3>
								<p className="w-2/3 text-sm text-white text-center">
									Thorough oral examinations to assess the overall health of teeth, gums, and surrounding structures.
								</p>
							</div>
						</div>
						<img className="w-full h-full" src="/gallery_1_1.jpg" alt="image 1" />
					</div>
					<div className="photo-item min-w-[300px] relative w-2/6 h-80">
						<div className="absolute opacity-0 h-full w-full p-5 bg-[#131a47cb]">
							<div className="h-full w-full border-2 flex flex-col items-center justify-center">
								<div className="h-12 w-12 rounded-full flex items-center justify-center bg-[#04ce78] hover:bg-[#1F5FFF]">
									<FaPlus className="text-white font-regular text-xl" />
								</div>
								<h3 className="text-white text-xl font-bold my-3">Dental Cleaning</h3>
								<p className="w-2/3 text-sm text-white text-center">
									Thorough oral examinations to assess the overall health of teeth, gums, and surrounding structures.
								</p>
							</div>
						</div>
						<img className="w-full h-full" src="/gallery_1_2.jpg" alt="image 1" />
					</div>
					<div className="photo-item min-w-[300px] relative w-2/6 h-80">
						<div className="absolute opacity-0 h-full w-full p-5 bg-[#131a47cb]">
							<div className="h-full w-full border-2 flex flex-col items-center justify-center">
								<div className="h-12 w-12 rounded-full flex items-center justify-center bg-[#04ce78] hover:bg-[#1F5FFF]">
									<FaPlus className="text-white font-regular text-xl" />
								</div>
								<h3 className="text-white text-xl font-bold my-3">Dental Cleaning</h3>
								<p className="w-2/3 text-sm text-white text-center">
									Thorough oral examinations to assess the overall health of teeth, gums, and surrounding structures.
								</p>
							</div>
						</div>
						<img className="w-full h-full" src="/gallery_1_3.jpg" alt="image 1" />
					</div>
					<div className="photo-item min-w-[300px] relative w-2/6 h-80">
						<div className="absolute opacity-0 h-full w-full p-5 bg-[#131a47cb]">
							<div className="h-full w-full border-2 flex flex-col items-center justify-center">
								<div className="h-12 w-12 rounded-full flex items-center justify-center bg-[#04ce78] hover:bg-[#1F5FFF]">
									<FaPlus className="text-white font-regular text-xl" />
								</div>
								<h3 className="text-white text-xl font-bold my-3">Dental Cleaning</h3>
								<p className="w-2/3 text-sm text-white text-center">
									Thorough oral examinations to assess the overall health of teeth, gums, and surrounding structures.
								</p>
							</div>
						</div>
						<img className="w-full h-full" src="/gallery_1_4.jpg" alt="image 1" />
					</div>
					<div className="photo-item min-w-[300px] relative w-2/6 h-80">
						<div className="absolute opacity-0 h-full w-full p-5 bg-[#131a47cb]">
							<div className="h-full w-full border-2 flex flex-col items-center justify-center">
								<div className="h-12 w-12 rounded-full flex items-center justify-center bg-[#04ce78] hover:bg-[#1F5FFF]">
									<FaPlus className="text-white font-regular text-xl" />
								</div>
								<h3 className="text-white text-xl font-bold my-3">Dental Cleaning</h3>
								<p className="w-2/3 text-sm text-white text-center">
									Thorough oral examinations to assess the overall health of teeth, gums, and surrounding structures.
								</p>
							</div>
						</div>
						<img className="w-full h-full" src="/gallery_1_5.jpg" alt="image 1" />
					</div>
				</div>
			</section>
			<Team />
		</main>
	);
};

export default Home;

const Feature = ({ imgpath, heading, para }) => {
	return (
		<div className="flex min-w-52 w-[20%] items-center justify-end gap-2">
			<img src={imgpath} className="w-[19%]" alt={heading} />
			<div>
				<h3 className="text-md font-bold">{heading}</h3>
				<article className="text-[.8rem] leading-4 text-slate-800 font-normal opacity-75 w-[90%] text-balance">{para}</article>
			</div>
		</div>
	);
};
