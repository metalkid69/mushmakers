import { Container } from "@/components/Container";
import { Truck, MapPin, Calendar } from "lucide-react";

export function DeliveryInfo() {
    return (
        <section id="delivery" className="py-20 bg-primary/5 border-t border-primary/10">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                        <div className="p-3 bg-white rounded-xl shadow-sm text-primary">
                            <Truck className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-stone-900">Same Day Delivery</h3>
                            <p className="text-sm text-stone-600 mt-1">Order before 12 PM for delivery by evening.</p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                        <div className="p-3 bg-white rounded-xl shadow-sm text-primary">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-stone-900">Coverage Area</h3>
                            <p className="text-sm text-stone-600 mt-1">Currently serving Patna</p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                        <div className="p-3 bg-white rounded-xl shadow-sm text-primary">
                            <Calendar className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-stone-900">Fresh Harvest Cycle</h3>
                            <p className="text-sm text-stone-600 mt-1">We harvest daily at 4 AM so you get the freshest batch.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
