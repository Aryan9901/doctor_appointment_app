import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";

const NavSheet = () => {
	return (
		<SheetContent>
			<SheetHeader>
				<SheetTitle>Are you absolutely sure?</SheetTitle>
				<SheetDescription>
					This action cannot be undone. This will permanently delete your account and remove your data from our servers.
				</SheetDescription>
			</SheetHeader>
		</SheetContent>
	);
};

export default NavSheet;
