import { Container } from "@/components/Container";
import Image from "next/image";

const STEPS = [
    {
        step: "01",
        title: "Substrate Preparation",
        desc: "We prepare a nutrient-rich compost base for optimal mycelium growth.",
    },
    {
        step: "02",
        title: "Spawning",
        desc: "Premium mushroom spawn is mixed into the compost in controlled conditions.",
    },
    {
        step: "03",
        title: "Pinning & Growth",
        desc: "In cool, humid rooms, tiny mushrooms (pins) begin to appear and grow rapidly.",
    },
    {
        step: "04",
        title: "Hand Harvesting",
        desc: "Each mushroom is gently hand-picked at the perfect moment of maturity.",
    },
];

export function FarmingProcess() {
    return (
        <section id="process" className="py-24 bg-white overflow-hidden">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-primary font-medium tracking-wider text-sm uppercase">Our Process</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mt-2 mb-6">
                            From Spore to Plate
                        </h2>
                        <p className="text-lg text-stone-600 mb-8 max-w-lg">
                            We follow a strict, hygienic, and precise farming cycle to guarantee consistent quality and taste in every batch.
                        </p>

                        <div className="space-y-8">
                            {STEPS.map((s, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-primary/20 flex items-center justify-center font-bold text-primary">
                                        {s.step}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-stone-900">{s.title}</h4>
                                        <p className="text-stone-500 text-sm mt-1">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative h-[600px] rounded-3xl overflow-hidden hidden lg:block shadow-2xl group">
                        <Image
                            src="/images/process.png"
                            alt="Mushroom farming process"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                    </div>
                </div>
            </Container>
        </section>
    );
}
