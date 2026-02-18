"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    phone: z.string().min(10, {
        message: "Please enter a valid phone number.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    date: z.string().refine((val) => new Date(val) > new Date(), {
        message: "Appointment date must be in the future.",
    }),
    message: z.string().optional(),
})

export function AppointmentForm() {
    const [issubmitted, setIssubmitted] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            phone: "",
            email: "",
            date: "",
            message: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // In a real app, this would be an API call
        console.log(values)

        // Simulate API delay
        setTimeout(() => {
            setIssubmitted(true)
            form.reset()
        }, 1000)
    }

    return (
        <section id="appointment" className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900 mb-4">
                        Request an Appointment
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Ready to enhance your smile? Fill out the form below and our team will get back to you within 24 hours to confirm your appointment.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <Card className="border-slate-200 shadow-xl overflow-hidden relative">
                        <div className="absolute top-0 w-full h-2 bg-gradient-to-r from-blue-400 to-blue-600" />

                        {issubmitted ? (
                            <div className="flex flex-col items-center justify-center py-20 px-6 text-center animate-in fade-in zoom-in duration-500">
                                <div className="bg-green-100 p-4 rounded-full mb-6">
                                    <CheckCircle2 className="w-12 h-12 text-green-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received!</h3>
                                <p className="text-slate-600 max-w-md">
                                    Thank you for contacting us. Our reception team will call you shortly to confirm your appointment time.
                                </p>
                                <Button
                                    onClick={() => setIssubmitted(false)}
                                    variant="outline"
                                    className="mt-8"
                                >
                                    Book Another Appointment
                                </Button>
                            </div>
                        ) : (
                            <>
                                <CardHeader>
                                    <CardTitle>Patient Information</CardTitle>
                                    <CardDescription>
                                        Please provide your contact details and preferred time.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="name">
                                                    Full Name
                                                </label>
                                                <Input
                                                    id="name"
                                                    placeholder="John Doe"
                                                    {...form.register("name")}
                                                    className={form.formState.errors.name ? "border-red-500 focus-visible:ring-red-500" : ""}
                                                />
                                                {form.formState.errors.name && (
                                                    <p className="text-sm text-red-500">{form.formState.errors.name.message}</p>
                                                )}
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="phone">
                                                    Phone Number
                                                </label>
                                                <Input
                                                    id="phone"
                                                    placeholder="(555) 123-4567"
                                                    {...form.register("phone")}
                                                    className={form.formState.errors.phone ? "border-red-500 focus-visible:ring-red-500" : ""}
                                                />
                                                {form.formState.errors.phone && (
                                                    <p className="text-sm text-red-500">{form.formState.errors.phone.message}</p>
                                                )}
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email">
                                                    Email Address
                                                </label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    placeholder="john@example.com"
                                                    {...form.register("email")}
                                                    className={form.formState.errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}
                                                />
                                                {form.formState.errors.email && (
                                                    <p className="text-sm text-red-500">{form.formState.errors.email.message}</p>
                                                )}
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="date">
                                                    Preferred Date
                                                </label>
                                                <Input
                                                    id="date"
                                                    type="date"
                                                    {...form.register("date")}
                                                    className={form.formState.errors.date ? "border-red-500 focus-visible:ring-red-500" : ""}
                                                />
                                                {form.formState.errors.date && (
                                                    <p className="text-sm text-red-500">{form.formState.errors.date.message}</p>
                                                )}
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="message">
                                                Message (Optional)
                                            </label>
                                            <Textarea
                                                id="message"
                                                placeholder="Tell us about your dental needs..."
                                                className="min-h-[100px]"
                                                {...form.register("message")}
                                            />
                                        </div>

                                        <Button type="submit" className="w-full h-11 text-base" disabled={form.formState.isSubmitting}>
                                            {form.formState.isSubmitting ? "Submitting..." : "Submit Request"}
                                        </Button>
                                    </form>
                                </CardContent>
                            </>
                        )}
                    </Card>
                </motion.div>
            </div>
        </section>
    )
}
