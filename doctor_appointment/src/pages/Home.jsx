import { Button } from "../components/ui/button";

const Home = () => {
	return (
		<main className="mt-[3.4%] w-full min-h-screen">
			<section className="hero-section pt-2 w-full h-[150vh] bg-[url(/heroimg.png)] bg-cover  mx-auto" style={{ borderRadius: "2rem" }}>
				<div className="h-[72%] w-1/2 mt-11">
					<div className="h-full w-4/5 ml-auto flex items-start justify-center flex-col gap-5">
						<div className="flex items-center justify-start gap-2 px-9 py-2 rounded-3xl bg-[#34353641] text-xl font-semibold text-white">
							<p>Professional</p>
							<div className="w-10 h-[1.2px] bg-[#04ce78]"></div>
							<p>Doctor</p>
						</div>
						<h2 className="uppercase mt-1 text-6xl font-extrabold text-white leading-tight">
							Best
							<span className="px-2 border relative ml-4">
								<div className="absolute -translate-x-1/2 -translate-y-1/2 top-0 left-0 h-3 w-3 rounded-full bg-[#04ce78]"></div>
								<div className="absolute -translate-x-1/2 translate-y-1/2 bottom-0 left-0 h-3 w-3 rounded-full bg-[#04ce78]"></div>
								<div className="absolute translate-x-1/2 -translate-y-1/2 top-0 right-0 h-3 w-3 rounded-full bg-[#04ce78]"></div>
								<div className="absolute translate-x-1/2 translate-y-1/2 bottom-0 right-0 h-3 w-3 rounded-full bg-[#04ce78]"></div>
								Dental
							</span>{" "}
							Care In Town
						</h2>
						<article className="text-white text-sm w-5/6">
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
				<div className="px-6 appointment-form mr-6 w-[87%] rounded-[3rem] h-44 box-shadow bg-white ml-auto flex justify-between items-center">
					<h3 className="text-4xl text-[#000D44] font-bold pr-3 border-r-2 w-[25%] border-[#04ce78]">Book An Appointment</h3>
					<form className="flex flex-wrap items-center justify-around w-[75%] gap-4">
						<input
							type="text"
							className="py-3 px-8 outline-none focus:shadow-md border-[#000] rounded-3xl bg-slate-200 text-sm"
							placeholder="Your Name"
						/>
						<input
							type="text"
							className="py-3 px-8 outline-none focus:shadow-md border-[#000] rounded-3xl bg-slate-200 text-sm"
							placeholder="Your Name"
						/>
						<input
							type="text"
							className="py-3 px-8 outline-none focus:shadow-md border-[#000] rounded-3xl bg-slate-200 text-sm"
							placeholder="Your Name"
						/>
						<input
							type="text"
							className="py-3 px-8 outline-none focus:shadow-md border-[#000] rounded-3xl bg-slate-200 text-sm"
							placeholder="Your Name"
						/>
						<input
							type="text"
							className="py-3 px-8 outline-none focus:shadow-md border-[#000] rounded-3xl bg-slate-200 text-sm"
							placeholder="Your Name"
						/>
						<input
							type="text"
							className="py-3 px-8 outline-none focus:shadow-md border-[#000] rounded-3xl bg-slate-200 text-sm"
							placeholder="Your Name"
						/>
					</form>
				</div>
			</section>
		</main>
	);
};

export default Home;
