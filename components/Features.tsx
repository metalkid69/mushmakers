import { Container } from "@/components/Container";
import { Sprout, CheckCircle, Clock, ShieldCheck } from "lucide-react";

const FEATURES = [
    {
        icon: Sprout,
        title: "100% Chemical Free",
        description: "Grown without any harmful pesticides or synthetic fertilizers. Pure nature.",
    },
    {
        icon: Clock,
        title: "Harvested Daily",
        description: "Picked every morning at 4 AM to ensure maximum freshness and flavor.",
    },
    {
        icon: ShieldCheck,
        title: "Quality Served",
        description: "Rigorously checked for size, texture, and color before packing.",
    },
    {
        icon: CheckCircle,
        title: "Locally Sourced",
        description: "Support local farming. Reduces carbon footprint and food miles.",
    },
];

export function Features() {
    return (
        <section id="features" className="py-24 bg-stone-50">
            <Container>
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-primary font-medium tracking-wider text-sm uppercase">Why Choose Us</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mt-2 mb-4">
                        Nature's Best, Delivered to You
                    </h2>
                    <p className="text-stone-600">
                        We take pride in our sustainable farming practices, ensuring you get the healthiest mushrooms possible.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {FEATURES.map((feature, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-stone-100 flex flex-col items-center text-center"
                        >
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                                <feature.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-stone-900 mb-3">{feature.title}</h3>
                            <p className="text-stone-600 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
