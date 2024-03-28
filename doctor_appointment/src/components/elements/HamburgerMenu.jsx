import { SheetContent, SheetDescription, SheetHeader } from "@/components/ui/sheet";
import { Button } from "../ui/button";

const HamburgerMenu = () => {
	return (
		<SheetContent className="w-[49%] box-border p-0">
			<SheetHeader className="w-full py-12 px-5">
				<SheetDescription className="flex w-full items-center justify-center mt-8">
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
