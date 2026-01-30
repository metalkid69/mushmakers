import Image from "next/image";
import Link from "next/link";
import { Clock, ChefHat } from "lucide-react";
import { Recipe } from "@/lib/recipes";

export function RecipeCard({ recipe }: { recipe: Recipe }) {
    return (
        <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-stone-100 flex flex-col h-full">
            <div className="relative h-48 sm:h-64 overflow-hidden">
                <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-xs font-semibold bg-primary/90 px-2 py-1 rounded-md mb-2 inline-block">Easy</span>
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-stone-900 mb-2 line-clamp-1">{recipe.title}</h3>
                <p className="text-stone-600 text-sm line-clamp-2 mb-4 flex-grow">
                    {recipe.description}
                </p>

                <div className="flex items-center gap-4 text-xs text-stone-500 mb-4">
                    <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>20 mins</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <ChefHat className="w-4 h-4" />
                        <span>5 Ingredients</span>
                    </div>
                </div>

                <Link
                    href={`/recipes#${recipe.id}`}
                    className="w-full mt-auto py-2 px-4 rounded-xl border border-primary text-primary font-medium hover:bg-primary hover:text-white transition-colors text-center text-sm"
                >
                    View Recipe
                </Link>
            </div>
        </div>
    );
}
