import { Hero } from "@/components/sections/hero"
import { Features } from "@/components/sections/features"
import { Testimonials } from "@/components/sections/testimonials"
import { AppointmentForm } from "@/components/sections/appointment-form"
import { Location } from "@/components/sections/location"
import { Offer } from "@/components/sections/offer"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Offer />
      <Features />
      <Testimonials />
      <Location />
      <AppointmentForm />
    </main>
  )
}
