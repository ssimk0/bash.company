import Image from "next/image";
import ContactForm from "./components/ContactForm";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Bash Company",
    description: "Expert software development consulting specializing in legacy system migration, performance optimization, and modern fullstack solutions.",
    url: "https://bash.company",
    logo: "https://bash.company/apple-touch-icon.png",
    foundingDate: "2014",
    areaServed: "Worldwide",
    knowsAbout: [
      "Software Development",
      "Legacy System Migration",
      "Next.js",
      "React",
      "Golang",
      "PHP",
      "Python",
      "Performance Optimization",
      "Cost Optimization",
      "Fullstack Development"
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "10"
    },
    offers: [
      {
        "@type": "Offer",
        name: "Legacy System Migration",
        description: "Transform outdated applications into modern, scalable solutions"
      },
      {
        "@type": "Offer",
        name: "Cost & Performance Optimization",
        description: "Maximize efficiency and minimize operational costs"
      },
      {
        "@type": "Offer",
        name: "Fullstack Solutions",
        description: "Custom fullstack applications tailored to your needs"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm border-b border-zinc-200 dark:border-zinc-800 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-zinc-900 dark:text-white">
            Bash<span className="text-blue-600">.</span>company
          </div>
          <div className="flex gap-8 text-sm font-medium">
            <a href="#services" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
              Services
            </a>
            <a href="#technologies" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
              Technologies
            </a>
            <a href="#contact" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white leading-tight mb-6">
                Modernize Your Legacy Systems
              </h1>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                With over 10+ years of experience, we provide expert software development consulting to small and large clients across many countries around the globe. We specialize in migrating legacy services to modern technologies and optimizing for cost efficiency and effectiveness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="px-8 py-4 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors text-center"
                >
                  Get Started
                </a>
                <a
                  href="#services"
                  className="px-8 py-4 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white rounded-lg font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-center"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
                alt="Team collaboration"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              Our Services
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              With a proven track record spanning 10+ years, we help businesses of all sizes transition to modern technology stacks while optimizing performance and reducing costs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white dark:bg-zinc-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                Legacy System Migration
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Transform your outdated applications into modern, scalable solutions. We specialize in migrating legacy systems to cutting-edge technologies without disrupting your business operations.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white dark:bg-zinc-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                Cost & Performance Optimization
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Maximize efficiency and minimize costs. Our experts analyze your infrastructure and codebase to identify bottlenecks and implement solutions that improve performance while reducing operational expenses.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white dark:bg-zinc-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                Fullstack Solutions
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Build custom fullstack applications tailored to your specific needs. From concept to deployment, we create robust, scalable solutions that integrate seamlessly with your existing infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              Our Technology Stack
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              We work with modern and proven technologies to deliver robust, scalable solutions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Next.js/React */}
            <div className="bg-zinc-50 dark:bg-zinc-900 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Image
                  src="/react-logo.png"
                  alt="React Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">Next.js / React</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Modern web applications</p>
            </div>

            {/* Golang */}
            <div className="bg-zinc-50 dark:bg-zinc-900 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Image
                  src="/go-logo.png"
                  alt="Go Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">Golang</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">High-performance backends</p>
            </div>

            {/* PHP */}
            <div className="bg-zinc-50 dark:bg-zinc-900 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Image
                  src="/php-logo.png"
                  alt="PHP Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">PHP</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Legacy system expertise</p>
            </div>

            {/* Python */}
            <div className="bg-zinc-50 dark:bg-zinc-900 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Image
                  src="/python-logo.png"
                  alt="Python Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">Python</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Data & automation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              Ready to Modernize Your Systems?
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">
              Let's discuss how we can help transform your legacy infrastructure into a modern, efficient solution.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto text-center text-zinc-600 dark:text-zinc-400">
          <p className="mb-2">
            <span className="font-bold text-zinc-900 dark:text-white">Bash<span className="text-blue-600">.</span>company</span> - Software Development Consulting
          </p>
          <p className="text-sm">
            Specializing in Next.js, React, Golang, PHP, and Python
          </p>
        </div>
      </footer>
    </div>
  );
}
