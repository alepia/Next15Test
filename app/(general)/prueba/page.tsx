import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Prueba Page',
 description: 'Prueba',
 keywords: 'Prueba'
};

export default function PruebaPage() {
    return (
        <span className="text-7xl">Prueba</span>
    )
}