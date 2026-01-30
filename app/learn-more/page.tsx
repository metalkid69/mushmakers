import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import Image from "next/image";
import { Leaf, Heart, Shield, Activity, Droplets, Sun, Wind, Thermometer } from "lucide-react";

export const metadata = {
    title: "Learn More | MushMakers",
    description: "Discover the health benefits and the fascinating growing process of our fresh button mushrooms.",
};

const BENEFITS = [
    {
        icon: Heart,
        title: "Heart Health",
        desc: "Low in sodium and saturated fat, button mushrooms are great for maintaining a healthy heart and blood pressure."
    },
    {
        icon: Shield,
        title: "Immunity Boost",
        desc: "Rich in selenium and antioxidants like ergothioneine which help protect body cells from damage."
    },
    {
        icon: Leaf,
        title: "Vitamin D Source",
        desc: "One of the few non-animal sources of Vitamin D, essential for bone health and immune system regulation."
    },
    {
        icon: Activity,
        title: "Weight Management",
        desc: "Low in calories but high in fiber, they keep you fuller for longer, aiding in weight control."
    }
];

const STEPS = [
    {
        icon: Droplets,
        title: "1. Composting & Spawning",
        desc: "We start with a nutrient-rich compost substrate. Premium quality mushroom spawn (mycelium) is mixed in under sterile conditions."
    },
    {
        icon: Thermometer,
        title: "2. Casing & Pinning",
        desc: "A layer of moist peat moss is added. Temperature is carefully controlled to shock the mycelium into producing 'pins' - baby mushrooms."
    },
    {
        icon: Sun,
        title: "3. Growth Cycle",
        desc: "In a humidity-controlled environment, these pins double in size every 24 hours. We maintain perfect darkness to ensure whiteness."
    },
    {
        icon: Wind,
        title: "4. Harvesting",
        desc: "Mushrooms are hand-picked at peak maturity to ensure the perfect texture (closed cap) and maximize shelf life."
    }
];

export default function LearnMorePage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Header */}
            <section className="bg-stone-900 pt-32 pb-20 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/growing.png')] opacity-20 bg-cover bg-center" />
                <Container className="relative z-10 text-center">
                    <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">Knowledge Hub</span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Why Button Mushrooms?</h1>
                    <p className="text-lg md:text-xl text-stone-300 max-w-2xl mx-auto">
                        More than just a topping. Discover the nutritional powerhouse and the science behind our farm.
                    </p>
                </Container>
            </section>

            {/* Benefits Grid */}
            <section className="py-24 bg-white">
                <Container>
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-stone-900 mb-4">Health Benefits</h2>
                        <p className="text-stone-600">
                            Incorporating button mushrooms into your diet can have significant positive effects on your well-being.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {BENEFITS.map((b, i) => (
                            <div key={i} className="bg-stone-50 p-8 rounded-2xl border border-stone-100 hover:shadow-lg transition-shadow">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                                    <b.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-stone-900 mb-3">{b.title}</h3>
                                <p className="text-stone-600 text-sm leading-relaxed">
                                    {b.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Harvesting Process with Image */}
            <section className="py-24 bg-stone-50">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1">
                            <Image
                                src="/images/growing.png"
                                alt="Mushrooms growing in compost"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                <p className="text-white font-medium italic">"Great mushrooms start with great soil."</p>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl font-bold text-stone-900 mb-8">The Growing Cycle</h2>
                            <div className="space-y-10">
                                {STEPS.map((s, i) => (
                                    <div key={i} className="flex gap-5">
                                        <div className="flex-shrink-0">
                                            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                                                {i + 1}
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-stone-900 mb-2 flex items-center gap-2">
                                                {s.title}
                                            </h4>
                                            <p className="text-stone-600 leading-relaxed">
                                                {s.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <Footer />
        </main>
    );
}
