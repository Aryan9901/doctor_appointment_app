import { FaPhoneAlt, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { Button } from "../ui/button";

const Navbar = () => {
	return (
		<header
			className="w-[90%] mx-auto max-w-screen-2xl h-28 shadow-md absolute top-0 left-1/2 -translate-x-1/2 "
			style={{ borderBottomRightRadius: "9px" }}
		>
			<div className="w-[20%] px-3 py-5 bg-black clip-custom absolute top-0 h-full left-0" style={{ borderBottomLeftRadius: "9px" }}>
				<img src="/logo.svg" className="w-[80%] h-full" alt="logo" />
			</div>
			<div className="w-[100%] bg-white pl-[20%] text-white h-full" style={{ borderBottomRightRadius: "9px", borderBottomLeftRadius: "9px" }}>
				<div className="header-top w-full  px-3 bg-[#04ce78] h-[39%] flex justify-between items-center">
					<div className="icons flex justify-start items-center gap-2">
						<div className="text-sm flex items-center gap-1 text-[.7rem]">
							<span className="h-6 w-6 rounded-full flex items-center justify-center border">
								<FaPhoneAlt className="text-[.6rem]" />
							</span>
							Phone: 91-7732636464
						</div>
						<div className="flex justify-start items-center gap-2">
							<div className="text-sm flex items-center gap-1 text-[.7rem]">
								<span className="h-6 w-6 rounded-full flex items-center justify-center border">
									<IoMail className="text-[.8rem]" />
								</span>
								Email: info@gmail.com
							</div>
						</div>
					</div>
					<div className="socials flex items-center justify-end gap-4 text-[.9rem]">
						<h4>Follow us on:</h4>
						<a href="/">
							<FaFacebook />
						</a>
						<a href="/">
							<FaInstagram />
						</a>
						<a href="/">
							<FaTwitter />
						</a>
					</div>
				</div>
				<div className="header-bottom w-full p-2 h-[61%] flex items-center justify-between">
					<nav className="flex items-center justify-evenly text-black w-3/5 font-semibold ">
						<Button variant="link">
							<a href="/">Home</a>
						</Button>
						<Button variant="link">
							<a href="/">About Us</a>
						</Button>
						<Button variant="link">
							<a href="/">Services</a>
						</Button>
						<Button variant="link">
							<a href="/">Blogs</a>
						</Button>
						<Button variant="link">
							<a href="/">Contacts</a>
						</Button>
					</nav>
					<div className="w-2/5 h-full flex justify-end items-center gap-5 pr-5">
						<Button className="bg-gradient py-5 px-7 text-white rounded-3xl hover:-translate-y-1 duration-1000" variant="secondary">
							Book Appointment
						</Button>
						<div className="h-10 w-10 border rounded-full flex justify-center items-center cursor-pointer hover:bg-[#04ce78] duration-500">
							<RxHamburgerMenu className="text-red-600 text-xl font-bold" />
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
