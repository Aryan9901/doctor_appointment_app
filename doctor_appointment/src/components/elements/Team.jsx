/* eslint-disable react/prop-types */
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Team = () => {
	return (
		<section className="py-12 pt-28 w-full">
			<h3 className="flex gap-3 text-[#05CE79] text-2xl items-center justify-start pl-5">
				<img src="/title_icon.svg" alt="title icon" />
				Expert Doctors
			</h3>
			<h2 className="text-4xl font-semibold text-[#000d44] w-[45%] my-4 pl-5 flex items-center justify-between">
				Meet Our Professional Doctors
			</h2>
			<div className="w-full px-20 my-16">
				<Carousel
					opts={{
						align: "center",
						loop: true,
					}}
					className="w-full max-w-2/5"
				>
					<CarouselPrevious className="h-10 w-10" />
					<CarouselNext className="h-10 w-10" />
					<CarouselContent>
						<Item img="/team_2_1.jpg" name="Dr. Malcolm Function" desc="Neurologist" />
						<Item img="/team_2_2.jpg" name="Dr. Douglas Lyphe" desc="Physiotherapist" />
						<Item img="/team_2_3.jpg" name="Dr. Wisteria Ravenc" desc="Cardiologist" />
						<Item img="/team_2_4.jpg" name="Dr. Benjamin Evalent" desc="Physiotherapist" />
					</CarouselContent>
				</Carousel>
			</div>
		</section>
	);
};

export default Team;

const Item = ({ img, name, desc }) => {
	return (
		<CarouselItem className="md:basis-1/2 lg:basis-1/3">
			<div className="p-1">
				<Card>
					<CardContent className="flex flex-col aspect-square items-center justify-center p-3">
						<img src={img} className="mb-3" alt={name} />
						<h2 className="text-xl font-semibold">{name}</h2>
						<p className="text-sm my-2 opacity-70">{desc}</p>
					</CardContent>
				</Card>
			</div>
		</CarouselItem>
	);
};
