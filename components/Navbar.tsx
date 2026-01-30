"use client";

import { ShoppingBag, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useCart } from "@/store/CartContext";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const { cartCount } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
            )}
        >
            <Container className="flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative w-10 h-10 sm:w-12 sm:h-12">
                        <img
                            src="/images/logo.png"
                            alt="MushMakers Logo"
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <span className="font-bold text-xl tracking-tight text-foreground group-hover:text-primary transition-colors hidden sm:block">
                        MushMakers
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/#features" className="text-sm font-medium text-stone-600 hover:text-primary transition-colors">
                        Our Mushrooms
                    </Link>
                    <Link href="/recipes" className="text-sm font-medium text-stone-600 hover:text-primary transition-colors">
                        Recipes
                    </Link>
                    <Link href="/#process" className="text-sm font-medium text-stone-600 hover:text-primary transition-colors">
                        How It's Grown
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Link href="/checkout" className="relative p-2 text-stone-800 hover:text-primary transition-colors">
                        <ShoppingBag className="w-6 h-6" />
                        {cartCount > 0 && (
                            <span className="absolute top-0 right-0 h-4 w-4 bg-primary text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                                {cartCount}
                            </span>
                        )}
                    </Link>

                    <Button className="hidden md:inline-flex" onClick={() => document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' })}>
                        Buy Fresh
                    </Button>

                    {/* Mobile Menu Toggle - Placeholder for now */}
                    <button className="md:hidden p-2 text-stone-800">
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </Container>
        </header>
    );
}
