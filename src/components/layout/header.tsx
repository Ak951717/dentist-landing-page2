"use client"

import * as React from "react"
import Link from "next/link"
import { useScroll, useMotionValueEvent } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import { cn } from "@/lib/utils"

export function Header() {
    const { scrollY } = useScroll()
    const [isScrolled, setIsScrolled] = React.useState(false)

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50)
    })

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b",
                isScrolled
                    ? "bg-white/80 backdrop-blur-md border-border shadow-sm py-3"
                    : "bg-transparent border-transparent py-5"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <div className="bg-blue-600 p-1.5 rounded-lg">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-5 h-5 text-white"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S13.627 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.627 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                            />
                        </svg>
                    </div>
                    <span className="text-xl font-bold tracking-tight text-slate-900">
                        BrightSmiles
                    </span>
                </Link>

                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
                    <button onClick={() => scrollToSection("services")} className="hover:text-blue-600 transition-colors">
                        Services
                    </button>
                    <button onClick={() => scrollToSection("testimonials")} className="hover:text-blue-600 transition-colors">
                        Testimonials
                    </button>
                    <button onClick={() => scrollToSection("location")} className="hover:text-blue-600 transition-colors">
                        Location
                    </button>
                </nav>

                <div className="flex items-center gap-4">
                    <a href="tel:+15551234567" className="hidden lg:flex items-center gap-2 text-slate-900 font-medium hover:text-blue-600">
                        <Phone className="w-4 h-4" />
                        <span>(555) 123-4567</span>
                    </a>
                    <Button onClick={() => scrollToSection("appointment")} size="sm" className="hidden sm:inline-flex">
                        Book Online
                    </Button>
                </div>
            </div>
        </header>
    )
}
