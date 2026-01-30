import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export default function ShippingPage() {
    return (
        <main className="min-h-screen bg-stone-50 flex flex-col">
            <Navbar />
            <Container className="pt-32 pb-20 flex-grow">
                <h1 className="text-3xl font-bold mb-8">Shipping Policy</h1>
                <div className="prose prose-stone max-w-none bg-white p-8 rounded-2xl border border-stone-100">
                    <p>
                        The orders for the user are shipped through registered domestic courier companies, private service and/or speed post only. Orders are shipped within 1 days from the date of the order and/or payment or as per the delivery date agreed at the time of order confirmation and delivering of the shipment, subject to courier company / post office norms.
                    </p>
                    <p>
                        Platform Owner shall not be liable for any delay in delivery by the courier company / postal authority. Delivery of all orders will be made to the address provided by the buyer at the time of purchase. Delivery of our services will be confirmed on your email ID as specified at the time of registration.
                    </p>
                    <p>
                        If there are any shipping cost(s) levied by the seller or the Platform Owner (as the case be), the same is not refundable.
                    </p>
                </div>
            </Container>
            <Footer />
        </main>
    );
}
