"use client"

import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export function Offer() {
    const scrollToAppointment = () => {
        const element = document.getElementById("appointment")
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <section className="bg-blue-600 text-white py-12 md:py-16">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-2">
                    <Sparkles className="w-8 h-8 text-yellow-300" />
                    First Time Here?
                </h2>
                <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
                    Get <span className="font-bold underline decoration-yellow-300 decoration-4 underline-offset-4">50% OFF</span> your initial consultation and cleaning.
                    <br className="hidden sm:block" />
                    Valid for new patients only.
                </p>
                <div className="flex justify-center gap-4">
                    <Button
                        size="lg"
                        variant="secondary"
                        onClick={scrollToAppointment}
                        className="text-blue-900 font-bold hover:bg-white px-8 text-lg"
                    >
                        Claim This Offer
                    </Button>
                </div>
                <p className="text-sm mt-4 text-blue-200">
                    *Terms and conditions apply. Offer expires soon.
                </p>
            </div>
        </section>
    )
}
