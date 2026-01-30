"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { useCart } from "@/store/CartContext";
import { Button } from "@/components/ui/Button";
import { Minus, Plus, Trash2, CreditCard, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function CheckoutPage() {
    const { items, updateQuantity, removeItem, cartTotal, clearCart, shipping, grandTotal } = useCart();
    const [step, setStep] = useState<"cart" | "details" | "success">("cart");
    const [processing, setProcessing] = useState(false);

    // Load Razorpay script
    const loadRazorpay = () => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    const handlePayment = async (e: React.FormEvent) => {
        e.preventDefault();
        setProcessing(true);

        const res = await loadRazorpay();

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            setProcessing(false);
            return;
        }

        try {
            // Create Order
            const response = await fetch("/api/razorpay", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    amount: grandTotal,
                    currency: "INR",
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to create order");
            }

            const order = await response.json();

            // Open Razorpay Modal
            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_placeholder",
                amount: order.amount,
                currency: order.currency,
                name: "MushMakers",
                description: "Fresh Mushrooms Transaction",
                order_id: order.id,
                handler: function (response: any) {
                    console.log("Payment Successful", response);
                    setStep("success");
                    clearCart();
                },
                prefill: {
                    name: "Prospective Buyer",
                    email: "buyer@example.com",
                    contact: "9999999999",
                },
                theme: {
                    color: "#57534e",
                },
            };

            const paymentObject = new (window as any).Razorpay(options);
            paymentObject.open();
            setProcessing(false);

        } catch (error) {
            console.error("Payment Error:", error);
            alert("Payment failed. Please try again.");
            setProcessing(false);
        }
    };

    if (step === "success") {
        return (
            <main className="min-h-screen bg-stone-50">
                <Navbar />
                <Container className="pt-32 pb-20">
                    <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600"
                        >
                            <CheckCircle2 className="w-10 h-10" />
                        </motion.div>
                        <h1 className="text-2xl font-bold text-stone-900 mb-2">Order Confirmed!</h1>
                        <p className="text-stone-600 mb-8">
                            Thank you for your purchase. We've sent a confirmation email with your order details.
                        </p>
                        <Link href="/">
                            <Button fullWidth>Continue Shopping</Button>
                        </Link>
                    </div>
                </Container>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-stone-50 flex flex-col">
            <Navbar />
            <Container className="pt-32 pb-20 flex-grow">
                <h1 className="text-3xl font-bold text-stone-900 mb-8">
                    {step === "cart" ? "Shopping Cart" : "Checkout Details"}
                </h1>

                {items.length === 0 && step === "cart" ? (
                    <div className="text-center py-20 bg-white rounded-3xl border border-stone-100">
                        <p className="text-stone-500 mb-6 text-lg">Your cart is empty.</p>
                        <Link href="/">
                            <Button>Start Shopping</Button>
                        </Link>
                    </div>
                ) : (
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Left Column: Cart Items or Form */}
                        <div className="lg:col-span-2 space-y-6">
                            {step === "cart" ? (
                                <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
                                    <div className="p-6 space-y-6">
                                        {items.map((item) => (
                                            <div key={item.id} className="flex gap-4 items-center">
                                                <div className="relative w-20 h-20 bg-stone-100 rounded-lg overflow-hidden flex-shrink-0">
                                                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                                                </div>
                                                <div className="flex-grow">
                                                    <h3 className="font-bold text-stone-900">{item.title}</h3>
                                                    <p className="text-sm text-stone-500">{item.variant}</p>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <div className="flex items-center border border-stone-200 rounded-lg">
                                                        <button
                                                            onClick={() => updateQuantity(item.id, -1)}
                                                            className="w-8 h-8 flex items-center justify-center hover:bg-stone-50"
                                                        >
                                                            <Minus className="w-3 h-3" />
                                                        </button>
                                                        <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                                                        <button
                                                            onClick={() => updateQuantity(item.id, 1)}
                                                            className="w-8 h-8 flex items-center justify-center hover:bg-stone-50"
                                                        >
                                                            <Plus className="w-3 h-3" />
                                                        </button>
                                                    </div>
                                                    <span className="font-bold w-16 text-right">₹{(item.price * item.quantity).toFixed(2)}</span>
                                                    <button
                                                        onClick={() => removeItem(item.id)}
                                                        className="text-stone-400 hover:text-red-500 transition-colors p-2"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <form id="checkout-form" onSubmit={handlePayment} className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 space-y-6">
                                    <h2 className="text-xl font-bold">Shipping Information</h2>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">First Name</label>
                                            <input required className="w-full p-2 border rounded-lg" placeholder="John" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Last Name</label>
                                            <input required className="w-full p-2 border rounded-lg" placeholder="Doe" />
                                        </div>
                                        <div className="space-y-2 md:col-span-2">
                                            <label className="text-sm font-medium">Address</label>
                                            <input required className="w-full p-2 border rounded-lg" placeholder="123 Mushroom Lane" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">City</label>
                                            <input required className="w-full p-2 border rounded-lg" placeholder="Farmville" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Postal Code</label>
                                            <input required className="w-full p-2 border rounded-lg" placeholder="10001" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Phone</label>
                                            <input required type="tel" className="w-full p-2 border rounded-lg" placeholder="+91 9999999999" />
                                        </div>
                                    </div>

                                    <div className="mt-6 p-4 bg-stone-50 rounded-lg border border-stone-200 text-stone-600 text-sm">
                                        <p>You will be redirected to Razorpay to securely complete your payment.</p>
                                    </div>
                                </form>
                            )}
                        </div>

                        {/* Right Column: Order Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 sticky top-24">
                                <h3 className="font-bold text-lg mb-4">Order Summary</h3>
                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between text-stone-600">
                                        <span>Subtotal</span>
                                        <span>₹{cartTotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-stone-600">
                                        <span>Shipping</span>
                                        <span>{shipping === 0 ? "Free" : `₹${shipping.toFixed(2)}`}</span>
                                    </div>
                                    <div className="h-px bg-stone-100 my-2" />
                                    <div className="flex justify-between font-bold text-stone-900 text-lg">
                                        <span>Total</span>
                                        <span>₹{grandTotal.toFixed(2)}</span>
                                    </div>
                                </div>

                                {step === "cart" ? (
                                    <Button fullWidth onClick={() => setStep("details")}>
                                        Proceed to Checkout
                                    </Button>
                                ) : (
                                    <div className="space-y-3">
                                        <Button
                                            fullWidth
                                            type="submit"
                                            form="checkout-form"
                                            disabled={processing}
                                        >
                                            {processing ? "Processing..." : `Pay ₹${grandTotal.toFixed(2)}`}
                                        </Button>
                                        <button
                                            onClick={() => setStep("cart")}
                                            className="w-full text-center text-sm text-stone-500 hover:underline"
                                            type="button"
                                        >
                                            Back to Cart
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </Container>
            <Footer />
        </main>
    );
}
