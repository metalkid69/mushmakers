"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Minus, Plus, ShoppingCart, Check } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type Variant = "200g" | "500g" | "1kg";

const VARIANTS: { id: Variant; label: string; price: number }[] = [
    { id: "200g", label: "200g Pack", price: 60.00 },
    { id: "500g", label: "500g Pack", price: 140.00 },
    { id: "1kg", label: "1kg Bulk", price: 270.00 },
];

import { useCart } from "@/store/CartContext";

export function ProductSection() {
    const [selectedVariant, setSelectedVariant] = useState<Variant>("500g");
    const [quantity, setQuantity] = useState(1);
    const [isAdded, setIsAdded] = useState(false);

    const { addItem } = useCart();

    const currentVariant = VARIANTS.find((v) => v.id === selectedVariant)!;
    const totalPrice = (currentVariant.price * quantity).toFixed(2);

    const handleAddToCart = () => {
        addItem({
            title: "Fresh Button Mushrooms",
            variant: currentVariant.label,
            price: currentVariant.price,
            quantity: quantity,
            image: "/images/product-bowl.png"
        });
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    return (
        <section id="product" className="py-24 bg-white">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left: Product Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative bg-secondary/30 rounded-3xl aspect-square overflow-hidden flex items-center justify-center"
                    >
                        <Image
                            src="/images/product-bowl.png"
                            alt="Fresh Button Mushrooms in Bowl"
                            width={800}
                            height={800}
                            className="object-contain w-[90%] h-[90%] hover:scale-105 transition-transform duration-500"
                        />

                        {/* Floating Badge */}
                        <div className="absolute top-6 left-6 bg-white py-2 px-4 rounded-full shadow-sm flex items-center gap-2">
                            <span className="text-primary">🌿</span>
                            <span className="text-sm font-semibold text-stone-800">Organic</span>
                        </div>
                    </motion.div>

                    {/* Right: Product Details */}
                    <div className="flex flex-col gap-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <div className="flex text-yellow-500">
                                    <Star className="w-4 h-4 fill-current" />
                                    <Star className="w-4 h-4 fill-current" />
                                    <Star className="w-4 h-4 fill-current" />
                                    <Star className="w-4 h-4 fill-current" />
                                    <Star className="w-4 h-4 fill-current" />
                                </div>
                                <span className="text-sm text-stone-500">(120 Reviews)</span>
                            </div>

                            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                                Fresh Button Mushrooms
                            </h2>
                            <p className="text-lg text-stone-600 leading-relaxed mb-6">
                                Freshly harvested daily. Crisp, white, and full of earthy flavor. Perfect for salads, sautéing, or pizza toppings.
                            </p>
                        </motion.div>

                        {/* Variant Selector */}
                        <div className="space-y-3">
                            <span className="text-sm font-semibold text-stone-900">Select Weight</span>
                            <div className="flex flex-wrap gap-3">
                                {VARIANTS.map((variant) => (
                                    <button
                                        key={variant.id}
                                        onClick={() => setSelectedVariant(variant.id)}
                                        className={cn(
                                            "px-6 py-3 rounded-xl border-2 transition-all font-medium",
                                            selectedVariant === variant.id
                                                ? "border-primary bg-primary/5 text-primary-dark"
                                                : "border-stone-200 text-stone-600 hover:border-primary/50"
                                        )}
                                    >
                                        {variant.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="my-6 h-px bg-stone-100" />

                        {/* Price & Quantity */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                            <div className="flex flex-col">
                                <span className="text-sm text-stone-500">Total Price</span>
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={totalPrice}
                                        initial={{ opacity: 0, y: 5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -5 }}
                                        className="text-4xl font-bold text-stone-900"
                                    >
                                        ₹{totalPrice}
                                    </motion.span>
                                </AnimatePresence>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="flex items-center border border-stone-200 rounded-full p-1">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-stone-100 text-stone-600 transition-colors"
                                    >
                                        <Minus className="w-4 h-4" />
                                    </button>
                                    <span className="w-12 text-center font-semibold text-lg">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-stone-100 text-stone-600 transition-colors"
                                    >
                                        <Plus className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Sticky Bottom or Just specific button area */}
                        <div className="mt-4">
                            <Button
                                onClick={handleAddToCart}
                                size="lg"
                                fullWidth
                                disabled={isAdded}
                                className={cn(
                                    "text-lg h-16 shadow-xl transition-all duration-300",
                                    isAdded ? "bg-green-600 hover:bg-green-700" : "bg-primary hover:bg-primary-dark"
                                )}
                            >
                                <div className="flex items-center justify-center gap-2">
                                    {isAdded ? (
                                        <>
                                            <motion.div
                                                initial={{ scale: 0.5 }}
                                                animate={{ scale: 1 }}
                                            >
                                                <Check className="w-6 h-6" />
                                            </motion.div>
                                            <span>Added to Cart</span>
                                        </>
                                    ) : (
                                        <>
                                            <ShoppingCart className="w-5 h-5" />
                                            <span>Add to Cart - ₹{(currentVariant.price * quantity).toFixed(2)}</span>
                                        </>
                                    )}
                                </div>
                            </Button>
                        </div>

                        <p className="text-center text-sm text-stone-400 mt-2">
                            Free delivery for orders above ₹300
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
}
