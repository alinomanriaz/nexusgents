import { CheckCircle } from 'lucide-react'
import React from 'react'
type PricingPlan = {
    name: string
    price: string
    description: string
    features: string[]
    popular: boolean
}

const PricePlan = () => {
    const pricingData: PricingPlan[] = [
        {
            name: "Starter",
            price: "Rs 10,000",
            description: "Perfect for small businesses and startups",
            features: [
                "Landing Page or Simple Website",
                "Responsive Design",
                "Basic SEO Setup",
                "Contact Form Integration",
                "2 Weeks Delivery",
                "1 Month Support",
            ],
            popular: false,
        },
        {
            name: "Professional",
            price: "Rs 50,000",
            description: "Ideal for growing businesses",
            features: [
                "Custom Web Application",
                "User Authentication",
                "Database Integration",
                "Admin Dashboard",
                "API Development",
                "4-6 Weeks Delivery",
                "3 Months Support",
            ],
            popular: true,
        },
        {
            name: "Enterprise",
            price: "Custom",
            description: "For large-scale applications",
            features: [
                "Full-Stack Application",
                "Advanced Features",
                "Third-party Integrations",
                "Performance Optimization",
                "Deployment & DevOps",
                "Custom Timeline",
                "6 Months Support",
            ],
            popular: false,
        },
    ]
    return (
        <section id="pricing" className="flex flex-col justify-center items-center py-16 h-fit w-full">
            <div className="grid md:grid-cols-3 gap-8">
                {pricingData.map((plan, index) => (
                    <div
                        key={index}
                        className={`relative ${plan.popular ? "ring-blue-500 dark:ring-slate-400/10 scale-110" : "ring-gray-400/30 dark:ring-slate-400/10"
                            } hover:shadow-md px-6 py-12 rounded-lg ring-1`}
                    >
                        {plan.popular && (
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 rounded-md px-4 text-white text-sm">
                                Most Popular
                            </div>
                        )}
                        <div className="text-center pb-4">
                            <div className="text-2xl">{plan.name}</div>
                            <div className="text-4xl font-bold text-blue-600 my-4">{plan.price}</div>
                            <div>{plan.description}</div>
                        </div>
                        <div>
                            <ul className="space-y-3 mb-8">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        <span className="text-sm text-gray-500 dark:text-white/50">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button
                                className={`w-full ${plan.popular ? "text-white bg-blue-600 hover:bg-blue-700" : ""
                                    } rounded-md ring-1 py-1.5 ring-gray-400/30`}
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default PricePlan
