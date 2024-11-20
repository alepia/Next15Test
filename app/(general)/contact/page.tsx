import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Contacto',
 description: 'contacto',
 keywords: ['Contact Page', 'Informacion']
};

export default function ContactPage() {
    return (
        <span className="text-7xl">Contact Page</span>
    )
}