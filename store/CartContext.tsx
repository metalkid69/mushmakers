"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type CartItem = {
    id: string; // Composite key: productId + variant
    title: string;
    variant: string;
    price: number;
    quantity: number;
    image: string;
};

interface CartContextType {
    items: CartItem[];
    addItem: (item: Omit<CartItem, "id">) => void;
    removeItem: (id: string) => void;
    updateQuantity: (id: string, delta: number) => void;
    clearCart: () => void;
    cartTotal: number;
    cartCount: number;
    shipping: number;
    grandTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);

    // Load from local storage on mount
    useEffect(() => {
        const saved = localStorage.getItem("mushmakers-cart");
        if (saved) {
            try {
                setItems(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to load cart", e);
            }
        }
    }, []);

    // Save to local storage on change
    useEffect(() => {
        localStorage.setItem("mushmakers-cart", JSON.stringify(items));
    }, [items]);

    const addItem = (newItem: Omit<CartItem, "id">) => {
        setItems((prev) => {
            const id = `${newItem.title}-${newItem.variant}`;
            const existing = prev.find((i) => i.id === id);
            if (existing) {
                return prev.map((i) =>
                    i.id === id ? { ...i, quantity: i.quantity + newItem.quantity } : i
                );
            }
            return [...prev, { ...newItem, id }];
        });
    };

    const removeItem = (id: string) => {
        setItems((prev) => prev.filter((i) => i.id !== id));
    };

    const updateQuantity = (id: string, delta: number) => {
        setItems((prev) =>
            prev.map((i) => {
                if (i.id === id) {
                    const newQty = Math.max(1, i.quantity + delta);
                    return { ...i, quantity: newQty };
                }
                return i;
            })
        );
    };

    const clearCart = () => setItems([]);

    const cartTotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

    const shipping = cartTotal > 300 ? 0 : 40;
    const grandTotal = cartTotal + shipping;

    return (
        <CartContext.Provider
            value={{ items, addItem, removeItem, updateQuantity, clearCart, cartTotal, cartCount, shipping, grandTotal }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
