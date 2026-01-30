"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/Container";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative w-full h-[95vh] min-h-[600px] flex items-center overflow-hidden bg-stone-100">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero.png"
                    alt="Fresh Mushrooms Background"
                    fill
                    className="object-cover opacity-90"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent sm:from-white/90 sm:via-white/70 sm:to-transparent/10" />
            </div>

            <Container className="relative z-10 pt-20">
                <div className="max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary-dark font-medium text-sm mb-4 border border-primary/20 backdrop-blur-sm">
                            🌱 Fresh from the Farm
                        </span>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white sm:text-stone-900 leading-[1.1] mb-6 tracking-tight">
                            Farm-Fresh <br />
                            <span className="text-primary-dark sm:text-primary">Button Mushrooms</span>
                            <br /> Delivered.
                        </h1>
                        <p className="text-lg sm:text-xl text-stone-200 sm:text-stone-600 mb-8 leading-relaxed max-w-lg">
                            Organically grown, hand-picked, and delivered within 24 hours. Experience the earthy taste of true freshness.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                size="lg"
                                className="text-lg px-8 shadow-xl shadow-primary/20"
                                onClick={() => document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Buy Fresh Mushrooms
                            </Button>
                            <Link href="/learn-more">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="text-lg px-8 bg-white/20 sm:bg-transparent text-white sm:text-primary border-white/40 sm:border-primary/40 hover:bg-white/40 sm:hover:bg-primary/5"
                                >
                                    Learn More
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
