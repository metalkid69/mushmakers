import { Container } from "@/components/Container";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-stone-900 py-12 text-stone-400">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10">
                            <img
                                src="/images/logo.png"
                                alt="MushMakers Logo"
                                className="w-full h-full object-contain invert opacity-80"
                            />
                        </div>
                        <span className="font-bold text-xl text-white tracking-tight">MushMakers</span>
                    </div>

                    <div className="flex gap-6 text-sm">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="/refund" className="hover:text-white transition-colors">Return & Refund</Link>
                        <Link href="/shipping" className="hover:text-white transition-colors">Shipping Policy</Link>
                        <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
                    </div>

                    <div className="flex gap-4">
                        <Link href="#" className="p-2 bg-stone-800 rounded-full hover:bg-stone-700 hover:text-white transition-colors">
                            <Instagram className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="p-2 bg-stone-800 rounded-full hover:bg-stone-700 hover:text-white transition-colors">
                            <Facebook className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="p-2 bg-stone-800 rounded-full hover:bg-stone-700 hover:text-white transition-colors">
                            <Twitter className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
                <div className="border-t border-stone-800 mt-8 pt-8 text-center text-xs">
                    © {new Date().getFullYear()} MushMakers Inc. All rights reserved.
                </div>
            </Container>
        </footer>
    );
}
