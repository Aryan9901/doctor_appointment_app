import { SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "../ui/button";

const HamburgerMenu = () => {
	return (
		<SheetContent className="w-[30%]">
			<SheetHeader>
				<SheetDescription className="flex items-center justify-center mt-8">
					<nav className="flex flex-col items-center justify-evenly text-black w-full font-bold ">
						<Button variant="outline" className="mb-9 px-6 w-full py-7 hover:bg-slate-400 bg-slate-800 text-white">
							<a href="/" className="text-2xl font-bold">
								Home
							</a>
						</Button>
						<Button variant="outline" className="mb-9 px-6 w-full py-7 hover:bg-slate-400 bg-slate-800 text-white">
							<a href="/" className="text-2xl font-bold">
								About Us
							</a>
						</Button>
						<Button variant="outline" className="mb-9 px-6 w-full py-7 hover:bg-slate-400 bg-slate-800 text-white">
							<a href="/" className="text-2xl font-bold">
								Services
							</a>
						</Button>
						<Button variant="outline" className="mb-9 px-6 w-full py-7 hover:bg-slate-400 bg-slate-800 text-white">
							<a href="/" className="text-2xl font-bold">
								Blogs
							</a>
						</Button>
						<Button variant="outline" className="mb-9 px-6 w-full py-7 hover:bg-slate-400 bg-slate-800 text-white">
							<a href="/" className="text-2xl font-bold">
								Contacts
							</a>
						</Button>
					</nav>
				</SheetDescription>
			</SheetHeader>
		</SheetContent>
	);
};

export default HamburgerMenu;
