/* eslint-disable react/prop-types */
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

function TabsContainer() {
	return (
		<Tabs defaultValue="emergency" className="my-12">
			<TabsList className="bg-[#1F5FFF] outline-none text-white border-none grid w-full max-w-[43rem] mx-auto grid-cols-1 md:grid-cols-3 rounded-xl overflow-x-hidden">
				<TabsTrigger className="h-full  hover:bg-[#04CE78] " value="emergency">
					Our Emergency Case
				</TabsTrigger>
				<TabsTrigger className="h-full   hover:bg-[#04CE78]" value="professional">
					Our Professional Skills
				</TabsTrigger>
				<TabsTrigger className="h-full   hover:bg-[#04CE78] " value="opening">
					Our Opening Hours
				</TabsTrigger>
			</TabsList>
			<SelectedTab value="emergency" img="/why_2_2.jpg" />
			<SelectedTab value="professional" img="/why_2.jpg" />
			<SelectedTab value="opening" img="/why_2_3.jpg" />
		</Tabs>
	);
}

export default TabsContainer;

const SelectedTab = ({ value, img }) => {
	return (
		<TabsContent value={value} className="mx-4 mt-8 md:mx-24 md:mt-0 bg-white box-shadow rounded-3xl flex flex-col md:flex-row">
			<div className="w-full md:w-[50%] flex flex-col items-start justify-start px-4 py-6">
				<h2 className="text-2xl md:text-3xl font-semibold mb-3">
					Benefits By <span className="text-[#04CE78]">Mediax</span> Dental Care And Clinic
				</h2>
				<p className="text-sm md:text-base font-medium mt-1 opacity-75 text-[#0a101c] tracking-widest">
					Prompt care for dental emergencies, such as toothaches, broken teeth, or knocked-out teeth. Specialized dental care for children.
					Give patients an estimate of the average wait time for scheduled appointments.
				</p>
				{value === "emergency" && (
					<div className="flex flex-col md:flex-row items-center gap-4 mt-5">
						<div className="flex flex-col items-start bg-[#F5F7FA] justify-start py-2 px-4 box-shadow gap-2 rounded-xl">
							<h3 className="font-semibold mt-2">Intensive Start</h3>
							<article className="text-base leading-6 mt-1 mb-3">
								Specialized dental care for children. Give patients an estimate the average wait time for scheduled appointments.
							</article>
						</div>
						<div className="flex flex-col items-start bg-[#F5F7FA] justify-start py-2 px-4 box-shadow gap-2 rounded-xl">
							<h3 className="font-semibold mt-2">Intensive Start</h3>
							<article className="text-base leading-6 mt-1 mb-3">
								Specialized dental care for children. Give patients an estimate the average wait time for scheduled appointments.
							</article>
						</div>
					</div>
				)}
				{value === "professional" && (
					<div className="flex flex-col gap-4 my-4">
						<ProgressItem title="Dental Prevention" percentage={85} />
						<ProgressItem title="Shinny Smiles" percentage={93} />
						<ProgressItem title="All Ages Visitor" percentage={60} />
						<ProgressItem title="Dental Care" percentage={90} />
					</div>
				)}
				{value === "opening" && (
					<div className="w-full my-4 text-white py-3 px-5 bg-[#1F5FFF] rounded-xl">
						<Table>
							<TableBody>
								<TableRow>
									<TableCell className="font-medium">Monday - Tuesday</TableCell>
									<TableCell>9am - 6pm</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="font-medium">Wednesday - Saturday</TableCell>
									<TableCell>8am - 5pm</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="font-medium">Sunday</TableCell>
									<TableCell>closed</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</div>
				)}
			</div>
			<div className="w-full md:w-[50%] px-4 py-4 flex items-center justify-center">
				<img src={img} className="rounded-2xl w-full" alt="" />
			</div>
		</TabsContent>
	);
};

const ProgressItem = ({ title, percentage }) => {
	return (
		<div className="w-full flex flex-col gap-2">
			<p className="text-slate-900 text-base flex justify-between">
				{title} <span>{percentage}%</span>
			</p>
			<Progress value={percentage} className="w-full h-3 bg-slate-300" />
		</div>
	);
};
