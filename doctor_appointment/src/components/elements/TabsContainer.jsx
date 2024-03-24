/* eslint-disable react/prop-types */
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function TabsContainer() {
	return (
		<Tabs defaultValue="emergency" className="mx-12 my-12">
			<TabsList className="bg-[#1F5FFF] outline-none text-white border-none grid w-1/2 min-h-12 p-0 mx-auto grid-cols-3 rounded-xl overflow-x-hidden">
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
			<SelectedTab value="emergency" />
			<SelectedTab value="professional" />
			<SelectedTab value="opening" />
		</Tabs>
	);
}

export default TabsContainer;

const SelectedTab = ({ value }) => {
	return (
		<TabsContent value={value} className="mx-36  bg-white box-shadow rounded-3xl mt-9">
			<div className="h-full w-[60%] flex flex-col items-start justify-start pl-6 py-12">
				<h2 className="text-3xl w-[70%] font-semibold mb-3">
					Benefits By <span className="text-[#04CE78]">Mediax</span> Dental Care And Clinic
				</h2>
				<p className="text-sm mt-4 opacity-75 text-[#0a101c] tracking-widest">
					Prompt care for dental emergencies, such as toothaches, broken teeth, or knocked-out teeth. Specialized dental care for children.
					Give patients an estimate of the average wait time for scheduled appointments.
				</p>
			</div>
			<div className="h-full w-[40%]"></div>
		</TabsContent>
	);
};
