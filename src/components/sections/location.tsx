import { MapPin, Clock, Phone, Mail } from "lucide-react"

export function Location() {
    return (
        <section id="location" className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                                Visit Our Modern Clinic
                            </h2>
                            <p className="text-lg text-slate-600">
                                Conveniently located in the heart of the city, with ample parking and easy access.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900 text-lg">Address</h3>
                                    <p className="text-slate-600">
                                        123 Dental Street, Suite 100<br />
                                        New York, NY 10001
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900 text-lg">Opening Hours</h3>
                                    <div className="text-slate-600 space-y-1">
                                        <p className="flex justify-between w-48"><span>Mon - Fri:</span> <span>9:00 AM - 6:00 PM</span></p>
                                        <p className="flex justify-between w-48"><span>Saturday:</span> <span>10:00 AM - 4:00 PM</span></p>
                                        <p className="flex justify-between w-48"><span>Sunday:</span> <span>Closed</span></p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900 text-lg">Contact</h3>
                                    <p className="text-slate-600">
                                        (555) 123-4567<br />
                                        contact@brightsmiles.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-[400px] w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-200">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976373946229!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1689785232962!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Maps Location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}
