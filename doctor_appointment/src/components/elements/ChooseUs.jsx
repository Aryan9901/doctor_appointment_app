import TabsContainer from "./TabsContainer";

const ChooseUs = () => {
	return (
		<section className="min-h-screen py-12 pb-5 px-10 relative bg-[url(pattern_shape_3.png)] bg-cover">
			<img src="/dental_5.png" className="absolute right-6 top-12 animate-bounce  w-80  duration-1000" alt="dental teeth" />
			<h3 className="flex gap-5 text-[#05CE79] text-2xl items-center justify-center">
				<img src="/title_icon.svg" alt="title icon" />
				Why Choose Us
			</h3>
			<h2 className="text-4xl text-center font-semibold text-[#000d44] w-[45%] my-4 mx-auto flex items-center justify-between">
				We’re Passionate, Dedicated And Friendly...
			</h2>
			<TabsContainer />
		</section>
	);
};

export default ChooseUs;
