import { ShieldCheck, UserCheck, Stethoscope, Sparkles, Clock, HeartHandshake } from "lucide-react"

const features = [
    {
        name: 'Comprehensive Care',
        description: 'From routine cleanings to complex surgeries, we handle 99% of dental needs in-house.',
        icon: Stethoscope,
    },
    {
        name: 'Cosmetic Dentistry',
        description: 'Transform your smile with porcelain veneers, whitening, and clear aligners.',
        icon: Sparkles,
    },
    {
        name: 'Emergency Services',
        description: 'Same-day appointments available for dental emergencies and pain relief.',
        icon: Clock,
    },
    {
        name: 'Family Friendly',
        description: 'We love kids! Our gentle approach makes visits fun for the whole family.',
        icon: UserCheck,
    },
    {
        name: 'Advanced Technology',
        description: 'Digital X-rays, 3D imaging, and laser dentistry for precise, painless care.',
        icon: ShieldCheck,
    },
    {
        name: 'Comfort First',
        description: 'Relax with our sedation options, noise-canceling headphones, and weighted blankets.',
        icon: HeartHandshake,
    },
]

export function Features() {
    return (
        <section id="services" className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-2xl lg:text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-blue-600">Why Choose Us</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Everything You Need for a Healthy Smile
                    </p>
                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        We combine modern technology with old-fashioned care to provide the best dental experience in town.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature) => (
                            <div key={feature.name} className="flex flex-col bg-white p-6 rounded-2xl shadow-sm border border-slate-100 transition-shadow hover:shadow-md">
                                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900 mb-4">
                                    <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-600">
                                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="flex flex-auto flex-col text-base leading-7 text-slate-600">
                                    <p className="flex-auto">{feature.description}</p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    )
}
