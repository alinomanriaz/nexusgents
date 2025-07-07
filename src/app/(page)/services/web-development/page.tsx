
// import Button from "@/components/Button"
import Featurepromises from "@/components/Featurepromises"
import { GradientTitle, Subtitle, Title } from "@/components/Titles"
import {
    CheckCircle,
    Code,
    Database,
    Globe,
    Smartphone,
    Users,
    Zap,
    LucideIcon
} from "lucide-react"
import Link from "next/link"

type PromiseFeature = {
    icon: LucideIcon
    title: string
    description: string
    features: string[]
}

type PricingPlan = {
    name: string
    price: string
    description: string
    features: string[]
    popular: boolean
}

const Page = () => {
    const promisesData: PromiseFeature[] = [
        {
            icon: Globe,
            title: "Web Development",
            description:
                "Custom websites and web applications built with modern frameworks like React, Next.js, and Vue.js",
            features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Modern UI/UX"],
        },
        {
            icon: Smartphone,
            title: "Mobile Development",
            description: "Native and cross-platform mobile apps for iOS and Android using React Native and Flutter",
            features: ["Cross-Platform", "Native Performance", "App Store Ready", "Push Notifications"],
        },
        {
            icon: Database,
            title: "Backend Development",
            description: "Robust server-side solutions with APIs, databases, and cloud infrastructure",
            features: ["RESTful APIs", "Database Design", "Cloud Deployment", "Security First"],
        },
        {
            icon: Code,
            title: "Full-Stack Solutions",
            description: "End-to-end development from frontend to backend with seamless integration",
            features: ["Complete Solutions", "Scalable Architecture", "Modern Tech Stack", "Maintenance"],
        },
        {
            icon: Zap,
            title: "Performance Optimization",
            description: "Speed up your existing applications and improve user experience",
            features: ["Speed Optimization", "Code Refactoring", "Performance Audit", "Best Practices"],
        },
        {
            icon: Users,
            title: "Consulting & Strategy",
            description: "Technical consulting and strategic planning for your digital transformation",
            features: ["Tech Strategy", "Architecture Review", "Team Training", "Best Practices"],
        },
    ]

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
        <div>
            {/* Hero Section */}
            <section className="relative h-screen flex justify-center items-center">
                <div className='absolute dark:hidden -top-28 rounded-full blur-[90px] w-full h-24 bg-gradient'></div>
                <div className='fixed hidden dark:flex -top-28 rounded-full blur-[90px] w-1/2 h-64 opacity-30 bg-gradient'></div>
                <div className="sm:-mt-2 mt-0 absolute opacity-10 md:opacity-10 inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[size:3rem_3rem] dark:sm:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 sm:h-[150vh] h-[80vh]" />
                <div className="sm:-mt-2 mt-0 absolute opacity-10 md:opacity-10 inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[size:3rem_3rem] dark:sm:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 sm:h-[150vh] h-[80vh]" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="w-fit mb-4 bg-sky-200/50 px-4 py-1 dark:hidden font-medium text-sm text-blue-500 rounded-xl">
                                <span className="pr-2">🚀</span> Premium Development Services
                            </p>
                            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                                Build Your Dream <span className="text-blue-600">Digital Product</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                From concept to deployment, we create stunning web applications, mobile apps, and digital solutions that drive your business forward.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="https://dev-ale.vercel.app" className="bg-black text-white px-6 py-2 rounded-md">
                                    Developer Portfolio
                                </Link>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white/10 rounded-lg p-4">
                                        <Globe className="h-8 w-8 mb-2" />
                                        <h3 className="font-semibold">Web Apps</h3>
                                        <p className="text-sm opacity-90">Modern & Responsive</p>
                                    </div>
                                    <div className="bg-white/10 rounded-lg p-4">
                                        <Smartphone className="h-8 w-8 mb-2" />
                                        <h3 className="font-semibold">Mobile Apps</h3>
                                        <p className="text-sm opacity-90">iOS & Android</p>
                                    </div>
                                    <div className="bg-white/10 rounded-lg p-4">
                                        <Database className="h-8 w-8 mb-2" />
                                        <h3 className="font-semibold">Backend</h3>
                                        <p className="text-sm opacity-90">Scalable APIs</p>
                                    </div>
                                    <div className="bg-white/10 rounded-lg p-4">
                                        <Zap className="h-8 w-8 mb-2" />
                                        <h3 className="font-semibold">Performance</h3>
                                        <p className="text-sm opacity-90">Lightning Fast</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="flex flex-col justify-center items-center py-16 h-fit w-full">
                <GradientTitle text="Features" />
                <Title title="Discover our powerful features" className="my-4" />
                <Subtitle className="mb-14" subtitle="Astra offers a range of features to help you build a stunning website in no time" />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-[96%]">
                    {promisesData.map((service, index) => (
                        <Featurepromises
                            key={index}
                            title={service.title}
                            description={service.description}
                            Icon={service.icon}
                            features={service.features}
                        />
                    ))}
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="flex flex-col justify-center items-center py-16 h-fit w-full">
                <GradientTitle text="Features" />
                <Title title="Discover our powerful features" className="my-4" />
                <Subtitle className="mb-20" subtitle="Astra offers a range of features to help you build a stunning website in no time" />
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
        </div>
    )
}

export default Page

{/* Testimonials */ }
{/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO, TechStart",
                content:
                  "DevCraft transformed our idea into a beautiful, functional web application. Their attention to detail and technical expertise is outstanding.",
                rating: 5,
              },
              {
                name: "Michael Chen",
                role: "Founder, EcomPlus",
                content:
                  "The team delivered our e-commerce platform ahead of schedule. The performance and user experience exceeded our expectations.",
                rating: 5,
              },
              {
                name: "Emily Rodriguez",
                role: "CTO, DataFlow",
                content:
                  "Professional, reliable, and skilled developers. They understood our complex requirements and delivered a scalable solution.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

{/* CTA Section */ }
{/* <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90">
            Lets discuss your ideas and bring them to life with cutting-edge technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Get Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              View Portfolio
            </Button>
          </div>
        </div>
      </section> */}


//         </div>
//     )
// }

