"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Phone, Calendar } from "lucide-react"
import Image from "next/image"

export function Hero() {
    const scrollToAppointment = () => {
        const element = document.getElementById("appointment")
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <section className="relative w-full pt-20 lg:pt-32 pb-16 lg:pb-32 overflow-hidden bg-slate-50">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex flex-col gap-6"
                    >
                        <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-800 w-fit">
                            <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
                            Accepting New Patients
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                            Book Your <span className="text-blue-600">Dental Appointment</span> Today
                        </h1>

                        <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
                            Experience gentle, state-of-the-art dental care in a relaxing environment.
                            From routine cleanings to cosmetic makeovers, we are dedicated to your smile.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mt-2">
                            <Button size="lg" onClick={scrollToAppointment} className="text-base h-12 px-8 shadow-blue-200 shadow-lg">
                                <Calendar className="mr-2 h-5 w-5" />
                                Book Appointment
                            </Button>
                            <Button size="lg" variant="outline" asChild className="text-base h-12 px-8 bg-white hover:bg-slate-50">
                                <a href="tel:+15551234567">
                                    <Phone className="mr-2 h-5 w-5" />
                                    (555) 123-4567
                                </a>
                            </Button>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-slate-500 mt-4">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-xs overflow-hidden">
                                        <div className={`w-full h-full bg-slate-300`} />
                                    </div>
                                ))}
                            </div>
                            <p>Trusted by 5,000+ local patients</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                            <Image
                                src="/images/hero.png"
                                alt="Modern Dental Clinic Reception"
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 to-transparent pointer-events-none" />
                        </div>

                        {/* Floating Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.5 }}
                            className="absolute -bottom-6 -left-6 md:bottom-8 md:-left-8 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-4 max-w-[200px]"
                        >
                            <div className="bg-green-100 p-2 rounded-full text-green-600">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-bold text-slate-900">Top Rated</p>
                                <p className="text-xs text-slate-500">5-Star Google Reviews</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Background Decor */}
            <div className="absolute top-0 right-0 -z-10 w-1/3 h-full bg-blue-50/50 blur-3xl opacity-50 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-full bg-blue-100/30 blur-3xl opacity-50 -translate-x-1/2" />
        </section>
    )
}
