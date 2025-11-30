"use client";

import PageHero from "@/components/hero/PageHero";
import ContactForm from "@/components/sections/ContactForm";
import { useCinematicTransitions } from "@/hooks/useCinematicTransitions";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
    useCinematicTransitions();

    return (
        <main className="flex flex-col w-full min-h-screen pt-20">
            <PageHero
                title="Get in Touch"
                subtitle="Let's build something extraordinary together."
            />

            <div className="cinematic-section">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col items-center text-center hover:bg-white/10 transition-colors">
                        <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4 text-purple-400">
                            <Mail size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Email Us</h3>
                        <p className="text-gray-400">contact@inkspire.com</p>
                    </div>
                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col items-center text-center hover:bg-white/10 transition-colors">
                        <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4 text-blue-400">
                            <Phone size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Call Us</h3>
                        <p className="text-gray-400">+962779667168</p>
                    </div>
                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col items-center text-center hover:bg-white/10 transition-colors">
                        <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center mb-4 text-pink-400">
                            <MapPin size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                        <p className="text-gray-400">amman</p>
                    </div>
                </div>

                <ContactForm />
            </div>
        </main>
    );
}
