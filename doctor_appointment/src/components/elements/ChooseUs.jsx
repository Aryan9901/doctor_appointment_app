import TabsContainer from "./TabsContainer";

const ChooseUs = () => {
	return (
		<section className="min-h-screen py-12 pb-5 px-5 md:px-10 relative bg-[url(pattern_shape_3.png)] bg-cover">
			<img src="/dental_5.png" className="absolute right-6 top-12 animate-bounce w-48 md:w-80 duration-1000" alt="dental teeth" />
			<div className="max-w-screen-lg  mx-auto">
				<h3 className="flex gap-5 text-[#05CE79] text-2xl items-center justify-center">
					<img src="/title_icon.svg" alt="title icon" />
					Why Choose Us
				</h3>
				<h2 className="text-4xl text-center font-semibold text-[#000d44] w-full md:w-[45%] my-4 mx-auto flex items-center justify-center">
					We’re Passionate, Dedicated And Friendly...
				</h2>
				<div className="mx-auto w-full lg:w-[90%]">
					<TabsContainer />
				</div>
			</div>
		</section>
	);
};

export default ChooseUs;
