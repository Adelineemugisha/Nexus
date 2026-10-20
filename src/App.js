import React, { useState } from 'react';

export default function App() {
  const [activeFolder, setActiveFolder] = useState(0);

  const services = [
    {
      title: 'Cybersecurity',
      icon: '🛡️',
      short: 'Securing your digital perimeter comprehensively.',
      desc: 'To ensure the absolute security of your enterprise is what we aim to do. We proactively isolate, neutralize, and prevent malicious actors or hackers before they can compromise your business ecosystem.'
    },
    {
      title: 'QA Testing',
      icon: '🔍',
      short: 'Going deep beyond surface-level test scripts.',
      desc: 'Quality Assurance is not merely about executing test matrices; it is an analytical pursuit. We look for hidden anomalies, edge cases, and architectural friction points that easily slip past standard reviews.'
    },
    {
      title: 'Web Architecture',
      icon: '🌐',
      short: 'Crafting beautiful, high-performance web systems.',
      desc: 'The world needs to see what you do and exactly how elegantly you execute it. We build performant, highly secure web infrastructures tailored to reflect your operational scale and brand aesthetic.'
    },
    {
      title: 'POS Systems',
      icon: '📊',
      short: 'Streamlining transaction workflows and inventories.',
      desc: 'Engineered specifically for expanding businesses. Our Point of Sale architectures provide granular, real-time inventory tracking, operational visibility, and seamless transaction security.'
    },
    {
      title: 'API Integration',
      icon: '⚡',
      short: 'Harmonizing distributed software systems seamlessly.',
      desc: 'We bring real-time communication between disconnected platform components into reality. By flawlessly merging your POS with backend systems, data silos are permanently eliminated.'
    },
    {
      title: 'Predictive Analytics',
      icon: '🔮',
      short: 'Transforming raw data into clear foresight.',
      desc: 'While tomorrow may seem like a mystery to most, data science makes it quantifiable. We build advanced computational models to predict trends, user behavior, and market trajectories.'
    }
  ];

  const projects = [
    {
      title: 'Steve Foundation',
      url: 'https://steve-foundation-xi.vercel.app/',
      description: 'An impactful NGO foundation focused on elevating public health, mental well-being, and maternal-child care solutions for women and children.',
      badge: 'Live'
    },
    {
      title: 'Home Materials',
      url: 'https://home-materials.vercel.app',
      description: 'A vibrant global commerce layout introducing innovative new stickers and modern materials loved by creators worldwide.',
      badge: 'Live'
    },
    {
      title: 'Home Care Platform',
      url: 'https://website-ten-gilt-t2nqf89ljd.vercel.app/',
      description: 'A trusted on-demand service registry where families can instantly book matched, professional household assistance and dedicated care.',
      badge: 'Live'
    },
    {
      title: 'Yusang Builders',
      url: 'https://yusang-builders.vercel.app/',
      description: 'A premier, high-fidelity real estate architecture hub tailored for modern housing developments and structural mastery.',
      badge: 'Live'
    },
    {
      title: 'Stanaland Tour and Travel',
      url: 'https://stanaland-project.vercel.app/',
      description: 'A high-end tourism platform designed to showcase signature travel care, reliable transportation solutions, and breathtaking upcountry safaris across East Africa.',
      badge: 'Live'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0F2270] text-[#AFD5F8] antialiased selection:bg-[#6E92F2] selection:text-[#0F2270]">
      <nav className="sticky top-0 z-50 border-b border-[#2E5DE6]/30 bg-[#0F2270]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-[#6E92F2] shadow-[0_0_12px_rgba(110,146,242,0.9)]" />
            <span className="text-xl font-bold tracking-[0.2em] text-[#AFD5F8]">NEXUS</span>
          </div>

          <div className="hidden items-center gap-8 text-sm font-medium tracking-[0.12em] text-[#AFD5F8]/80 md:flex">
            <a href="#philosophy" className="transition-colors hover:text-[#6E92F2]">PHILOSOPHY</a>
            <a href="#what-we-do" className="transition-colors hover:text-[#6E92F2]">SERVICES</a>
            <a href="#featured-projects" className="transition-colors hover:text-[#6E92F2]">PROJECTS</a>
            <a href="#who-we-are" className="transition-colors hover:text-[#6E92F2]">WHO WE ARE</a>
            <a href="#contacts" className="transition-colors hover:text-[#6E92F2]">CONTACT</a>
          </div>
        </div>
      </nav>

      <section id="philosophy" className="relative overflow-hidden px-6 py-24 md:py-32">
        <div className="absolute inset-0 -z-20 bg-[#0F2270]" />

        <div className="absolute inset-y-0 left-0 -z-10 hidden w-[32%] opacity-30 md:block">
          <video src="/assets/philo.mp4" autoPlay loop muted playsInline className="h-full w-full object-cover rounded-r-[2rem] border-r border-[#6E92F2]/30" />
        </div>
        <div className="absolute inset-y-0 right-0 -z-10 hidden w-[32%] opacity-30 md:block">
          <video src="/assets/phi.mp4" autoPlay loop muted playsInline className="h-full w-full object-cover rounded-l-[2rem] border-l border-[#6E92F2]/30" />
        </div>

        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(110,146,242,0.16),transparent_55%)]" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.35em] text-[#6E92F2]">Core Philosophy</span>
          <h1 className="mx-auto max-w-4xl text-4xl font-black leading-tight tracking-tight text-[#AFD5F8] md:text-6xl">
            “Understanding our users’ unique needs is our ultimate ambition. Problems may appear identical on the surface, but every persona experiences structural challenges differently.”
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-base text-[#AFD5F8]/80 md:text-lg">
            We construct tailored high-tech strategies centered on human-focused problem solving and impenetrable engineering infrastructure.
          </p>
        </div>
      </section>

      <section id="what-we-do" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.35em] text-[#6E92F2]">What We Do</span>
            <h2 className="text-3xl font-black tracking-tight text-[#AFD5F8] md:text-5xl">Capability Architecture</h2>
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-3">
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFolder(index)}
                  className={`group relative overflow-hidden rounded-2xl border p-6 text-left transition-all duration-300 ease-out hover:-translate-y-1 ${
                    activeFolder === index
                      ? 'border-[#6E92F2] bg-[#1A3BB8]/80 shadow-[0_0_25px_rgba(46,93,230,0.35)]'
                      : 'border-[#2E5DE6]/40 bg-[#1A3BB8]/40 hover:border-[#6E92F2]/70 hover:bg-[#1A3BB8]/60'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`flex h-14 w-14 items-center justify-center rounded-xl border text-2xl transition-transform ${
                      activeFolder === index
                        ? 'border-[#6E92F2] bg-[#2E5DE6] text-white'
                        : 'border-[#6E92F2]/40 bg-[#0F2270] text-[#AFD5F8]'
                    } group-hover:scale-110`}>
                      {service.icon}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-[#AFD5F8]">{service.title}</h3>
                      <p className="mt-1 text-xs text-[#AFD5F8]/70">{service.short}</p>
                    </div>
                  </div>
                  <div className={`mt-6 text-[10px] font-mono uppercase tracking-[0.25em] ${activeFolder === index ? 'text-[#6E92F2]' : 'text-[#AFD5F8]/50'}`}>
                    // ACTIVE
                  </div>
                </button>
              ))}
            </div>

            <div className="rounded-2xl border border-[#2E5DE6]/40 bg-[#101d4d] p-8 shadow-[0_14px_35px_rgba(15,34,112,0.45)]">
              <div className="mb-6 flex items-center justify-between border-b border-[#2E5DE6]/30 pb-4">
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#6E92F2]">System Console</span>
                <span className="rounded-full border border-[#6E92F2]/40 bg-[#2E5DE6]/20 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#AFD5F8]">
                  Online
                </span>
              </div>

              <div className="mb-4 text-[48px] leading-none text-[#6E92F2]">{services[activeFolder].icon}</div>
              <h3 className="mb-4 text-2xl font-black text-[#AFD5F8]">{services[activeFolder].title}</h3>
              <p className="text-base leading-relaxed text-[#AFD5F8]/80">{services[activeFolder].desc}</p>

              <div className="mt-8 border-t border-[#2E5DE6]/30 pt-5">
                <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.25em] text-[#AFD5F8]/70">
                  <span>Status: Operational</span>
                  <span>ID: 00{activeFolder + 1}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="featured-projects" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.35em] text-[#6E92F2]">Featured Work</span>
            <h2 className="text-3xl font-black tracking-tight text-[#AFD5F8] md:text-5xl">Featured Engineering Projects</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group flex h-full flex-col rounded-2xl border border-[#2E5DE6]/40 bg-[#1A3BB8]/50 p-5 shadow-[0_8px_20px_rgba(15,34,112,0.4)] transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(46,93,230,0.2)]"
              >
                <div className="mb-5 flex items-center justify-between gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2E5DE6] text-lg font-bold text-white">
                    {project.title.charAt(0)}
                  </span>
                  <span className="rounded-full border border-[#6E92F2]/60 bg-[#6E92F2]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#AFD5F8]">
                    {project.badge}
                  </span>
                </div>

                <div className="mb-4 flex-1">
                  <h3 className="mb-3 text-xl font-bold text-[#AFD5F8]">{project.title}</h3>
                  <p className="text-sm leading-relaxed text-[#AFD5F8]/75">{project.description}</p>
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-[#2E5DE6] px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#6E92F2]"
                >
                  <span>View Project</span>
                  <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="who-we-are" className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-3">
          <div>
            <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.35em] text-[#6E92F2]">The Brains</span>
            <h2 className="text-3xl font-black tracking-tight text-[#AFD5F8] md:text-5xl">Who We Are</h2>
            <p className="mt-6 text-base leading-relaxed text-[#AFD5F8]/80">
              We are ladies who want to map the user's journey into structured research, identifying exactly what users need and what our world needs. We are data-driven problem solvers who believe everything has an elegant solution, standing firm in the absolute power of technology and the deployment of AI for systemic good.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-2">
            <div className="rounded-2xl border border-[#2E5DE6]/40 bg-[#1A3BB8]/40 p-6 text-center transition-all duration-300 hover:border-[#6E92F2]">
              <div className="mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full border-2 border-[#6E92F2]/60 bg-[#0F2270] p-1">
                <img src="/assets/umwali.png" alt="Umwali" className="h-full w-full rounded-full object-cover" onError={(e) => { e.target.src = 'https://images.unsplash.com/...'; }} />
              </div>
              <h3 className="text-xl font-bold text-[#AFD5F8]">Umwali</h3>
              <p className="mt-2 text-[10px] font-mono uppercase tracking-[0.25em] text-[#6E92F2]">Co-Founder / UX Researcher</p>
              <p className="mt-4 rounded-xl border border-[#2E5DE6]/40 bg-[#0F2270]/50 p-4 text-sm italic leading-relaxed text-[#AFD5F8]/80">
                “Mapping intentional human journeys into complex digital infrastructure is how we create scalable value.”
              </p>
            </div>

            <div className="rounded-2xl border border-[#2E5DE6]/40 bg-[#1A3BB8]/40 p-6 text-center transition-all duration-300 hover:border-[#6E92F2]">
              <div className="mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full border-2 border-[#6E92F2]/60 bg-[#0F2270] p-1">
                <img src="/assets/adeline.png" alt="Adeline" className="h-full w-full rounded-full object-cover" onError={(e) => { e.target.src = 'https://images.unsplash.com/...'; }} />
              </div>
              <h3 className="text-xl font-bold text-[#AFD5F8]">Adeline</h3>
              <p className="mt-2 text-[10px] font-mono uppercase tracking-[0.25em] text-[#6E92F2]">Co-Founder / Technical Architect</p>
              <p className="mt-4 rounded-xl border border-[#2E5DE6]/40 bg-[#0F2270]/50 p-4 text-sm italic leading-relaxed text-[#AFD5F8]/80">
                “We harness algorithmic precision and artificial intelligence to turn ambiguous problems into robust pipelines.”
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-[#2E5DE6]/40 bg-[#1A3BB8]/40 p-8 transition-all duration-300 hover:border-[#6E92F2]">
            <div className="mb-5 text-4xl">🎯</div>
            <h3 className="mb-3 text-2xl font-black text-[#AFD5F8]">Our Mission</h3>
            <p className="text-base leading-relaxed text-[#AFD5F8]/80">
              To architect fully secure, highly integrated digital frameworks that safeguard business assets, optimize transactional workflows, and reveal invisible anomalies through rigid Quality Assurance and predictive algorithmic models.
            </p>
          </div>

          <div className="rounded-2xl border border-[#2E5DE6]/40 bg-[#1A3BB8]/40 p-8 transition-all duration-300 hover:border-[#6E92F2]">
            <div className="mb-5 text-4xl">🚀</div>
            <h3 className="mb-3 text-2xl font-black text-[#AFD5F8]">Our Vision</h3>
            <p className="text-base leading-relaxed text-[#AFD5F8]/80">
              To stand as an elite technological vanguard where user-centric journeys seamlessly mesh with Artificial Intelligence for good, proving that every organizational problem possesses an elegant, secure, and predictable technological solution.
            </p>
          </div>
        </div>
      </section>

      <section id="contacts" className="px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.35em] text-[#6E92F2]">Connect With Us</span>
          <h2 className="text-3xl font-black tracking-tight text-[#AFD5F8] md:text-5xl">Let's Secure & Build Your Vision</h2>

          <div className="mx-auto mt-12 grid max-w-xl gap-6 text-left sm:grid-cols-2">
            <div className="rounded-2xl border border-[#2E5DE6]/40 bg-[#1A3BB8]/40 p-4">
              <div className="flex items-center gap-4">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#6E92F2]">Headquarters</p>
                  <p className="mt-1 text-sm text-[#AFD5F8]">Kigali Innovation City, Rwanda</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#2E5DE6]/40 bg-[#1A3BB8]/40 p-4">
              <div className="flex items-center gap-4">
                <span className="text-2xl">✉️</span>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#6E92F2]">Secured Email</p>
                  <p className="mt-1 text-sm text-[#AFD5F8]">operations@nexus.tech</p>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-12 text-[11px] font-mono uppercase tracking-[0.35em] text-[#6E92F2]">// END TRANSMISSION. ALL SYSTEMS GREEN.</p>
        </div>
      </section>
    </div>
  );
}
