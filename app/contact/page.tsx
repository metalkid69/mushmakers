import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-stone-50 flex flex-col">
            <Navbar />
            <Container className="pt-32 pb-20 flex-grow">
                <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
                <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Name</label>
                                <input className="w-full p-3 border rounded-xl bg-stone-50" placeholder="Your Name" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Email</label>
                                <input className="w-full p-3 border rounded-xl bg-stone-50" placeholder="your@email.com" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Message</label>
                            <textarea className="w-full p-3 border rounded-xl bg-stone-50 min-h-[150px]" placeholder="How can we help?" />
                        </div>
                        <Button fullWidth size="lg">Send Message</Button>
                    </form>

                    <div className="mt-12 pt-8 border-t text-center space-y-2">
                        <p className="font-bold text-stone-900">MushMakers HQ</p>
                        <p className="text-stone-600">Patna, Bihar</p>
                        <p className="text-stone-600">info@mushmakers.in | +91 7004192482</p>
                    </div>
                </div>
            </Container>
            <Footer />
        </main>
    );
}
