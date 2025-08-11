import { useState } from 'react';
import { Menu, X, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navItems = [
		{ label: 'Home', href: '#home' },
		{ label: 'Services', href: '#solutions' },
    { label: 'About', href: '#about' },
		{ label: 'Our work', href: '#ourWork' },
		{ label: 'Contact', href: '#contact' }
	];

	return (
		<nav className="fixed left-1/2 top-6 transform -translate-x-1/2 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-navbar rounded-full w-fit px-6 py-2 flex items-center justify-center">
			<div className="flex justify-between items-center h-10 w-full">
				{/* Logo */}
				<div className="flex-shrink-0">
					<h1 className="text-2xl font-bold text-black">
						{/* <img
							src="https://ik.imagekit.io/dm9pawxsf/Untitled-1.svg"
							alt="Logo"
							className="h-8 w-auto"
						/> */}
					</h1>
				</div>

				{/* Desktop Navigation */}
				<div className="hidden md:block">
					<div className="ml-10 flex items-baseline space-x-10">
						{navItems.map((item) => (
							<a
								key={item.label}
								href={item.href}
								className="text-black px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-full hover:bg-black hover:text-white"
							>
								{item.label}
							</a>
						))}
					</div>
				</div>
        

				{/* Sign In Button */}
				{/* <div className="hidden md:block">
          <Button variant="outline" size="sm" className="flex items-center gap-2 hover:bg-accent/10 hover:text-accent transition-colors duration-200 rounded-full">
            <User size={16} />
            Sign In
          </Button>
        </div> */}

				{/* Mobile menu button */}
				<div className="md:hidden">
					<Button
						variant="ghost"
						size="sm"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className="rounded-full hover:bg-accent/10 hover:text-accent transition-colors duration-200"
					>
						{isMenuOpen ? <X size={20} /> : <Menu size={20} />}
					</Button>
				</div>
			</div>





			{/* Mobile Navigation Menu */}
			{isMenuOpen && (
				<div className="md:hidden absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-full bg-background border-t border-border rounded-full shadow-lg px-2 pt-2 pb-3 space-y-1 sm:px-3">
					{navItems.map((item) => (
						<a
							key={item.label}
							href={item.href}
							className="text-foreground hover:text-accent block px-3 py-2 text-base font-medium transition-colors duration-200 rounded-full hover:bg"
							onClick={() => setIsMenuOpen(false)}
						>
							{item.label}
						</a>
					))}
					<div className="pt-2">
						<Button variant="outline" size="sm" className="w-full flex items-center justify-center gap-2 rounded-full hover:bg-accent/10 hover:text-accent transition-colors duration-200">
							<User size={16} />
							Sign In
						</Button>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;