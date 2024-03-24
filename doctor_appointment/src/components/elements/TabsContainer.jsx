/* eslint-disable react/prop-types */
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";

function TabsContainer() {
	return (
		<Tabs defaultValue="emergency" className="my-12">
			<TabsList className="bg-[#1F5FFF] outline-none text-white border-none grid w-[43rem] min-h-12 p-0 mx-auto grid-cols-3 rounded-xl overflow-x-hidden">
				<TabsTrigger className="h-full border-r border-[#d1d0d0] rounded-e-none hover:bg-[#04CE78]" value="emergency">
					Our Emergency Case
				</TabsTrigger>
				<TabsTrigger className="h-full rounded-none" value="professional">
					Our professional Skills
				</TabsTrigger>
				<TabsTrigger className="h-full border-l border-[#d1d0d0] rounded-s-none" value="opening">
					Our Opening Hours
				</TabsTrigger>
			</TabsList>
			<SelectedTab value="emergency" img="/why_2_2.jpg" />
			<SelectedTab value="professional" img="/why_2.jpg" />
			<SelectedTab value="opening" img="/why_2_3.jpg" />
		</Tabs>
	);
}

const invoices = [
	{
		day: "Monday - Tuesday",
		time: "9am - 6pm",
	},
	{
		day: "Wednusday - Saturday",
		time: "8am - 5pm",
	},
	{
		day: "Sunday",
		time: "closed",
	},
];

export default TabsContainer;

const SelectedTab = ({ value, img }) => {
	return (
		<TabsContent value={value} className="mx-24  bg-white box-shadow rounded-3xl flex">
			<div className="w-[50%] flex flex-col items-start justify-start pl-6 py-6">
				<h2 className="text-3xl w-[90%] font-semibold mb-3">
					Benefits By <span className="text-[#04CE78]">Mediax</span> Dental Care And Clinic
				</h2>
				<p className="text-[.8rem] font-medium mt-1 opacity-75 text-[#0a101c] tracking-widest">
					Prompt care for dental emergencies, such as toothaches, broken teeth, or knocked-out teeth. Specialized dental care for children.
					Give patients an estimate of the average wait time for scheduled appointments.
				</p>
				{value === "emergency" && (
					<div className="flex items-center justify-center gap-4 mt-5">
						<div className="flex flex-col items-start bg-[#F5F7FA] justify-start py-2 pl-4 pr-2 box-shadow gap-2 rounded-xl">
							<h3 className="font-semibold mt-2">Intensive Start</h3>
							<p className="text-sm leading-6 mt-1 mb-3">
								Specialized dental care for children. Give patients an estimate the average wait time for scheduled appointments.
							</p>
						</div>
						<div className="flex flex-col items-start bg-[#F5F7FA] justify-start py-2 pl-4 pr-2 box-shadow gap-2 rounded-xl">
							<h3 className="font-semibold mt-2">Intensive Start</h3>
							<p className="text-sm leading-6 mt-1 mb-3">
								Specialized dental care for children. Give patients an estimate the average wait time for scheduled appointments.
							</p>
						</div>
					</div>
				)}
				{value === "professional" && (
					<div className="flex flex-col w-full items-start justify-start gap-4 my-4">
						<div className="w-full flex flex-col gap-2">
							<p className="text-slate-900 text-sm flex justify-between">
								Dental Prevention <spa>85%</spa>
							</p>
							<Progress value={85} className="w-full h-3 bg-slate-300" />
						</div>
						<div className="w-full flex flex-col gap-2">
							<p className="text-slate-900 text-sm flex justify-between">
								Shinny Smiles <spa>93%</spa>
							</p>
							<Progress value={93} className="w-full h-3 bg-slate-300" />
						</div>
						<div className="w-full flex flex-col gap-2">
							<p className="text-slate-900 text-sm flex justify-between">
								All Ages Visitor <spa>60%</spa>
							</p>
							<Progress value={60} className="w-full h-3 bg-slate-300" />
						</div>
						<div className="w-full flex flex-col gap-2">
							<p className="text-slate-900 text-sm flex justify-between">
								Dental Care <spa>90%</spa>
							</p>
							<Progress value={90} className="w-full h-3 bg-slate-300" />
						</div>
					</div>
				)}
				{value === "opening" && (
					<div className="w-full my-4 text-white py-3 px-5 bg-[#1F5FFF] rounded-xl">
						<Table>
							<TableBody className="py-24">
								{invoices.map((invoice) => (
									<TableRow key={invoice.invoice}>
										<TableCell className="font-medium py-4">{invoice.day}</TableCell>
										<TableCell>{invoice.time}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</div>
				)}
			</div>
			<div className="w-[50%] px-4 py-4 flex items-center justify-center">
				<img src={img} className="rounded-2xl w-5/6" alt="" />
			</div>
		</TabsContent>
	);
};
