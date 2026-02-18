"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star } from "lucide-react"

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Patient since 2019",
        content: "The best dental experience I've ever had. Dr. Smith is so gentle and explains everything clearly.",
        rating: 5
    },
    {
        name: "Michael Chen",
        role: "Patient since 2021",
        content: "I used to be terrified of the dentist, but the team here made me feel completely at ease. Highly recommend!",
        rating: 5
    },
    {
        name: "Emily Davis",
        role: "Patient since 2018",
        content: "My kids actually look forward to their appointments! The staff is amazing with children.",
        rating: 5
    }
]

export function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-white">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        What Our Patients Say
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Don't just take our word for it. Read reviews from our happy community.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <Card key={i} className="bg-slate-50 border-none shadow-sm hover:shadow-md transition-shadow">
                            <CardContent className="pt-6 relative">
                                <Quote className="absolute top-4 right-4 h-8 w-8 text-blue-100" />
                                <div className="flex gap-1 mb-4">
                                    {[...Array(t.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-slate-700 italic mb-6 relative z-10">"{t.content}"</p>
                                <div>
                                    <p className="font-semibold text-slate-900">{t.name}</p>
                                    <p className="text-sm text-slate-500">{t.role}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
