import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export default function RefundPage() {
    return (
        <main className="min-h-screen bg-stone-50 flex flex-col">
            <Navbar />
            <Container className="pt-32 pb-20 flex-grow">
                <h1 className="text-3xl font-bold mb-8">Return & Refund Policy</h1>
                <div className="prose prose-stone max-w-none bg-white p-8 rounded-2xl border border-stone-100">
                    <p>
                        We operate a strict no-return and no-refund policy. Once a purchase is made, it is considered final. We do not offer returns, exchanges, or refunds of any kind, regardless of the time elapsed since your purchase.
                    </p>
                    <p>
                        By completing your purchase, you acknowledge and agree that: (i) All items are sold on a non-returnable basis; (ii) No requests for refunds or exchanges will be entertained due to a "change of mind" or wrong selection; (iii) This policy applies to all items, including those purchased on sale or promotion.
                    </p>

                    <h3>Damaged or Defective Items</h3>
                    <p>
                        In the unlikely event that you receive a defective or damaged item, please contact us immediately. While we do not offer refunds, we may, at our sole discretion, offer a replacement for items proven to be damaged upon receipt, provided you contact us within 1 day of delivery with photographic evidence.
                    </p>
                </div>
            </Container>
            <Footer />
        </main>
    );
}
