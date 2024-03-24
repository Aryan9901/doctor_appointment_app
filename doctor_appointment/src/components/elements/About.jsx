import { FaTooth } from "react-icons/fa";

const About = () => {
	return (
		<section className="w-full min-h-screen py-20 px-28 bg-[url(/blog_bg_1.jpg)] relative flex">
			<img src="/dental_2.png" className="absolute right-6 top-12 animate-bounce duration-1000 h-36" alt="dental teeth" />
			<img src="/dental_3.png" className="absolute left-6 bottom-12 animate-bounce duration-1000 h-36" alt="dental sthetoscope" />
			<div className="h-screen w-1/2 py-5">
				<h3 className="flex gap-5 text-[#05CE79] text-xl items-center px-12">
					<img src="/title_icon.svg" alt="title icon" />
					About Our Company
				</h3>
				<h2 className="text-3xl my-3 font-semibold text-[#000d44] w-3/4 mx-12 flex items-center justify-between">
					Your Great Smile Begins With A Great Dentist
				</h2>
				<ul className="flex my-5 flex-wrap px-12 items-start justify-start gap-5 gap-y-2">
					<li className="flex items-center gap-1">
						<FaTooth className="text-[#05CE79]" />
						Patients Value
					</li>
					<li className="flex items-center gap-1">
						<FaTooth className="text-[#05CE79]" />
						Latest Technologies
					</li>
					<li className="flex items-center gap-1">
						<FaTooth className="text-[#05CE79]" />
						Skilled Dentist & Fr
					</li>
					<li className="flex items-center gap-1">
						<FaTooth className="text-[#05CE79]" />
						Affordable Costs
					</li>
				</ul>
				<div className="px-12 mt-5">
					<img className="h-80 rounded-xl w-full" src="/blog-s-1-6-332x190.jpg" alt="blog photo" />
				</div>
			</div>
			<div className="h-screen w-1/2">
				<div className="px-10">
					<img src="/about_2_2-300x200.jpg" className="w-full rounded-xl" alt="about photo 2" />
				</div>
				<div className="h-56 mx-10 my-8 rounded-2xl flex flex-wrap border-2 border-[#05CE79]">
					<div
						className="w-1/2 h-1/2 flex flex-col items-center justify-center gap-0"
						style={{ borderRight: "2px solid #05CE79", borderBottom: "2px solid #05CE79" }}
					>
						<h3 className="text-4xl font-semibold">
							69<span className="text-[#05ce79]">K+</span>
						</h3>
						<p className="text-sm opacity-65">Satisfied Patients</p>
					</div>
					<div className="w-1/2 h-1/2 flex flex-col items-center justify-center gap-0" style={{ borderBottom: "2px solid #05CE79" }}>
						<h3 className="text-4xl font-semibold">
							236<span className="text-[#05ce79]">K+</span>
						</h3>
						<p className="text-sm opacity-65">Professional Doctors</p>
					</div>
					<div className="w-1/2 h-1/2 flex flex-col items-center justify-center gap-0" style={{ borderRight: "2px solid #05CE79" }}>
						<h3 className="text-4xl font-semibold">
							19<span className="text-[#05ce79]">K+</span>
						</h3>
						<p className="text-sm opacity-65">Operations Successful</p>
					</div>
					<div className="w-1/2 h-1/2 flex flex-col items-center justify-center gap-0">
						<h3 className="text-4xl font-semibold">
							320<span className="text-[#05ce79]">K+</span>
						</h3>
						<p className="text-sm opacity-65">National Awards Win</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
