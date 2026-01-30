import { Container } from "@/components/Container";
import { RecipeCard } from "@/components/RecipeCard";
import { RECIPES } from "@/lib/recipes";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function RecipesPreview() {
    const topRecipes = RECIPES.slice(0, 3);

    return (
        <section className="py-24 bg-stone-50">
            <Container>
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div className="max-w-xl">
                        <span className="text-primary font-medium tracking-wider text-sm uppercase">In the Kitchen</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mt-2">
                            Cook with MushMakers
                        </h2>
                        <p className="text-stone-600 mt-4 text-lg">
                            Discover delicious ways to enjoy our fresh button mushrooms. From quick stirs to rich curries.
                        </p>
                    </div>
                    <Link href="/recipes">
                        <Button variant="outline" className="hidden md:flex gap-2">
                            View All Recipes <ArrowRight className="w-4 h-4" />
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {topRecipes.map((recipe) => (
                        <RecipeCard key={recipe.id} recipe={recipe} />
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link href="/recipes">
                        <Button variant="outline" className="w-full gap-2">
                            View All Recipes <ArrowRight className="w-4 h-4" />
                        </Button>
                    </Link>
                </div>
            </Container>
        </section>
    );
}
