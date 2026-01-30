import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RecipeCard } from "@/components/RecipeCard";
import { Container } from "@/components/Container";
import { RECIPES } from "@/lib/recipes";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Recipes | MushMakers",
    description: "Explore our collection of healthy and delicious mushroom recipes.",
};

export default function RecipesPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Header */}
            <section className="bg-primary pt-32 pb-20 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/hero.png')] opacity-10 bg-cover bg-center mix-blend-overlay" />
                <Container className="relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Mushroom Recipes</h1>
                    <p className="text-lg md:text-xl text-primary-100 max-w-2xl mx-auto">
                        Elevate your everyday meals with the earthy goodness of fresh button mushrooms.
                    </p>
                </Container>
            </section>

            {/* Recipe Grid */}
            <section className="py-20">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
                        {RECIPES.map((recipe) => (
                            <RecipeCard key={recipe.id} recipe={recipe} />
                        ))}
                    </div>
                </Container>
            </section>

            {/* Detailed View (Simple list for now, ideally this would be dynamic pages) */}
            <section className="py-20 bg-stone-50">
                <Container>
                    <h2 className="text-3xl font-bold mb-12 text-center">Detailed Instructions</h2>
                    <div className="space-y-16 max-w-4xl mx-auto">
                        {RECIPES.map((recipe) => (
                            <div key={recipe.id} id={recipe.id} className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 scroll-mt-24">
                                <h3 className="text-2xl font-bold text-stone-900 mb-6 flex items-center gap-3">
                                    {recipe.title}
                                </h3>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="font-semibold text-primary mb-3 uppercase tracking-wide text-sm">Ingredients</h4>
                                        <ul className="space-y-2 text-stone-600">
                                            {recipe.ingredients.map((ing, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2 flex-shrink-0" />
                                                    <span className="flex-1">{ing}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-primary mb-3 uppercase tracking-wide text-sm">Method</h4>
                                        <ol className="space-y-4 text-stone-600">
                                            {recipe.method.map((step, i) => (
                                                <li key={i} className="flex gap-4">
                                                    <span className="font-bold text-stone-300">0{i + 1}</span>
                                                    <p>{step}</p>
                                                </li>
                                            ))}
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            <Footer />
        </main>
    );
}
