import React, { useState } from 'react';

export default function App() {
  const [activeFolder, setActiveFolder] = useState(0);

  const services = [
    {
      title: 'Cybersecurity',
      icon: '🛡️',
      short: 'Securing your digital perimeter comprehensively.',
      desc: 'To ensure the security of your enterprise is what we aim to do. We proactively isolate, neutralize, and prevent malicious actors or hackers before they can compromise your business ecosystem.'
    },
    {
      title: 'QA Testing',
      icon: '🔍',
      short: 'More than test scripts.',
      desc: 'Quality Assurance is not merely about executing test matrices, it is an analytical pursuit. We look for hidden anomalies, edge cases, and architectural friction points that easily slip past standard reviews.'
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
    <div className="min-h-screen bg-[#F0F4F8] text-[#0F2270] antialiased selection:bg-[#2E5DE6] selection:text-white">
      <nav className="sticky top-0 z-50 border-b border-[#2E5DE6]/15 bg-[#F0F4F8]/95 backdrop-blur-md">
        <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#2E5DE6] shadow-[0_0_14px_rgba(46,93,230,0.5)]" />
            <span className="text-sm font-semibold tracking-[0.22em] text-[#0F2270]">NEXUS</span>
          </div>

          <div className="hidden items-center gap-8 text-[11px] font-medium tracking-[0.18em] text-[#0F2270]/70 md:flex">
            <a href="#what-we-do" className="transition-colors hover:text-[#2D3A2E]">SERVICES</a>
            <a href="#featured-projects" className="transition-colors hover:text-[#2D3A2E]">PROJECTS</a>
            <a href="#who-we-are" className="transition-colors hover:text-[#2D3A2E]">WHO WE ARE</a>
            <a href="#contacts" className="transition-colors hover:text-[#2D3A2E]">CONTACT</a>
          </div>
        </div>
      </nav>

      <main>
        <section id="philosophy" className="relative w-screen overflow-hidden">
          <div className="relative flex h-[70vh] min-h-[520px] w-full flex-col items-center justify-center overflow-hidden">
            <div className="absolute inset-0 flex">
              <video
                src="/assets/philo.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="animate-drift-left h-full w-full object-cover"
              />
              <video
                src="/assets/phi.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="animate-drift-right h-full w-full object-cover"
              />
            </div>

            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,34,112,0.45),rgba(15,34,112,0.30),rgba(15,34,112,0.45))]" />
            <div className="absolute inset-0 backdrop-brightness-90" />

            <div className="relative z-10 mx-auto w-full max-w-7xl px-6 text-center">
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#f8f8ff]">Tech to the world</p>
              <h1 className="text-3xl font-black leading-tight tracking-wider text-[#E0B6E4] drop-shadow-[0_2px_12px_rgba(255,255,255,0.85)] sm:text-4xl md:text-5xl lg:text-6xl">
              We are not robots.<br className="hidden sm:inline" /> We are coding girls.
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#f8f8ff]/90 md:text-lg">
               Technology makes the world smaller, but it is the human touch that makes it better. We build secure, reliable, and scalable digital systems that connect people to what matters most.
              </p>
            </div>
          </div>

          <div className="w-full border-y border-[#2E5DE6]/15 bg-[#E2E8F0]/60 py-8 md:py-10">
            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 px-6 sm:grid-cols-3 sm:gap-8">
              <div className="text-center">
                <p className="text-3xl font-black tracking-wider text-[#2E5DE6] sm:text-4xl">#01</p>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#0F2270]/65">Core Target: Cybersecurity Systems</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-black tracking-wider text-[#2E5DE6] sm:text-4xl">12+</p>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#0F2270]/65">Active Global Frameworks Deployed</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-black tracking-wider text-[#2E5DE6] sm:text-4xl">100%</p>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#0F2270]/65">Operational Integrity Guaranteed</p>
              </div>
            </div>
          </div>
        </section>

        <section id="what-we-do" className="px-6 py-16 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#2E5DE6]">What We Do</p>
              <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[#0F2270] md:text-3xl">Capability Architecture</h2>
            </div>

            <div className="grid items-start gap-8 lg:grid-cols-[1.25fr_0.75fr]">
              <div className="relative h-[420px] overflow-hidden rounded-[32px] border border-[#2E5DE6]/12 bg-white shadow-[0_18px_40px_rgba(15,34,112,0.06)]">
                {services.map((service, index) => {
                  const positions = [
                    { left: '12%', top: '18%' },
                    { left: '44%', top: '10%' },
                    { left: '70%', top: '22%' },
                    { left: '18%', top: '62%' },
                    { left: '48%', top: '60%' },
                    { left: '72%', top: '66%' }
                  ];

                  const current = positions[index];
                  const isActive = index === activeFolder;

                  return (
                    <button
                      key={index}
                      onClick={() => setActiveFolder(index)}
                      className={`orbit-card ${isActive ? 'is-active' : ''} absolute flex h-[150px] w-[210px] flex-col justify-between rounded-[24px] border p-4 text-left transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isActive
                          ? 'border-[#2E5DE6]/60 bg-[#2E5DE6]/95 shadow-[0_18px_40px_rgba(46,93,230,0.28)]'
                          : 'border-[#2E5DE6]/15 bg-white hover:border-[#2E5DE6]/30 hover:shadow-[0_12px_28px_rgba(46,93,230,0.10)]'
                      }`}
                      style={{
                        left: current.left,
                        top: current.top,
                        animationDuration: `${12 + index * 1.5}s`,
                        animationDelay: `${index * 0.4}s`
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`flex h-10 w-10 items-center justify-center rounded-xl border text-lg ${isActive ? 'border-white/40 bg-white/10 text-white' : 'border-[#2E5DE6]/15 bg-[#F0F4F8] text-[#0F2270]'}`}>
                          {service.icon}
                        </span>
                        <div>
                          <h3 className={`text-sm font-semibold ${isActive ? 'text-white' : 'text-[#0F2270]'}`}>{service.title}</h3>
                          <p className={`mt-1 text-[10px] leading-4 ${isActive ? 'text-white/75' : 'text-[#0F2270]/65'}`}>{service.short}</p>
                        </div>
                      </div>

                      <div className={`text-[9px] font-medium uppercase tracking-[0.2em] ${isActive ? 'text-white/80' : 'text-[#0F2270]/60'}`}>
                        // Active
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="rounded-[28px] border border-[#2E5DE6]/12 bg-white p-7 shadow-[0_12px_30px_rgba(15,34,112,0.05)]">
                <div className="mb-5 flex items-center justify-between border-b border-[#2E5DE6]/10 pb-4">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#2E5DE6]">System Console</span>
                  <span className="rounded-full border border-[#2E5DE6]/20 bg-[#2E5DE6]/8 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#0F2270]">
                    Online
                  </span>
                </div>

                <div className="mb-4 text-4xl leading-none text-[#2E5DE6]">{services[activeFolder].icon}</div>
                <h3 className="mb-4 text-2xl font-semibold tracking-[-0.04em] text-[#0F2270]">{services[activeFolder].title}</h3>
                <p className="text-base leading-7 text-[#0F2270]/72">{services[activeFolder].desc}</p>

                <div className="mt-8 border-t border-[#2E5DE6]/10 pt-5">
                  <div className="flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.2em] text-[#0F2270]/60">
                    <span>Status: Operational</span>
                    <span>ID: 00{activeFolder + 1}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="featured-projects" className="px-6 py-16 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#2E5DE6]">Featured Work</p>
              <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[#0F2270] md:text-3xl">Featured Engineering Projects</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="group flex h-full flex-col rounded-[26px] border border-[#2E5DE6]/12 bg-white p-5 shadow-[0_10px_24px_rgba(15,34,112,0.06)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#2E5DE6]/30 hover:shadow-[0_18px_40px_rgba(46,93,230,0.12)]"
                >
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2E5DE6] text-base font-semibold text-white">
                      {project.title.charAt(0)}
                    </span>
                    <span className="rounded-full border border-[#2E5DE6]/20 bg-[#2E5DE6]/8 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0F2270]">
                      {project.badge}
                    </span>
                  </div>

                  <div className="mb-4 flex-1">
                    <h3 className="mb-3 text-lg font-semibold text-[#0F2270]">{project.title}</h3>
                    <p className="text-sm leading-6 text-[#0F2270]/70">{project.description}</p>
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-[#2E5DE6] px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#1A3BB8]"
                  >
                    <span>View Project</span>
                    <span aria-hidden="true">→</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="who-we-are" className="bg-[#fbfaf7] px-6 py-24 md:py-32">
          <div className="mx-auto max-w-4xl">
            <div className="mb-14 text-center">
              <h2 className="font-editorial text-4xl font-medium leading-tight tracking-[-0.02em] text-[#2D3A2E] md:text-5xl">
                Meet the Team
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
              <div className="flex flex-col items-center rounded-[24px] bg-white p-10 text-center shadow-[0_8px_30px_rgba(45,58,46,0.07)] transition-shadow duration-300 hover:shadow-[0_14px_40px_rgba(45,58,46,0.12)]">
                <div className="mb-8 flex h-64 w-44 items-end justify-center overflow-hidden team-capsule bg-[#E8E4DE]">
                  <img
                    src="/assets/umwali.png"
                    alt="Umwali"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="font-editorial text-2xl font-bold leading-tight text-[#2D3A2E]">
                  Umwali
                </h3>
                <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.24em] text-[#5A6B7C] font-sans-clean">
                UX Researcher / Product Designer
                </p>
                <p className="mt-5 max-w-xs text-sm leading-relaxed italic text-[#5A6B7C]/80 font-sans-clean">
                  “Mapping intentional human journeys into complex digital infrastructure is how we create scalable value.”
                </p>
              </div>

              <div className="flex flex-col items-center rounded-[24px] bg-white p-10 text-center shadow-[0_8px_30px_rgba(45,58,46,0.07)] transition-shadow duration-300 hover:shadow-[0_14px_40px_rgba(45,58,46,0.12)]">
                <div className="mb-8 flex h-64 w-44 items-end justify-center overflow-hidden team-capsule bg-[#E8E4DE]">
                  <img
                    src="/assets/adeline.png"
                    alt="Adeline"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="font-editorial text-2xl font-bold leading-tight text-[#2D3A2E]">
                  Adeline
                </h3>
                <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.24em] text-[#5A6B7C] font-sans-clean">
                Technical Architect / Software Engineer
                </p>
                <p className="mt-5 max-w-xs text-sm leading-relaxed italic text-[#5A6B7C]/80 font-sans-clean">
                  “We harness algorithmic precision and artificial intelligence to turn ambiguous problems into robust pipelines.”
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="mission" className="bg-[#fbfaf7] px-6 py-24 md:py-32">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.3em] text-[#5A6B7C] font-sans-clean">Our Purpose</p>
              <h2 className="font-editorial text-4xl font-medium leading-tight tracking-[-0.02em] text-[#2D3A2E] md:text-5xl">
                Mission &amp; Vision
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
              <div className="group relative overflow-hidden rounded-[28px] border border-white/60 bg-white/40 p-8 backdrop-blur-xl backdrop-saturate-150 shadow-[0_8px_32px_rgba(15,34,112,0.08)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02] hover:border-white/80 hover:shadow-[0_20px_50px_rgba(15,34,112,0.16)]">
                <div className="absolute -left-14 -top-14 h-40 w-40 rounded-full bg-gradient-to-br from-[#2E5DE6]/25 to-[#6E92F2]/15 blur-2xl" />

                <div className="relative mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2E5DE6] to-[#4A78E8] text-3xl icon-pulse">
                  🎯
                </div>

                <h3 className="mb-4 bg-gradient-to-r from-[#0F2270] to-[#2E5DE6] bg-clip-text font-editorial text-3xl font-bold leading-tight tracking-[-0.03em] text-transparent">
                  Our Mission
                </h3>
                <p className="text-base leading-relaxed text-[#0F2270]/78 font-sans-clean">
                  To architect <span className="font-semibold text-[#0F2270]">fully secure</span>, highly integrated digital frameworks that safeguard business assets, optimize transactional workflows, and reveal invisible anomalies through rigorous <span className="text-[#2E5DE6]">Quality Assurance</span> and <span className="text-[#2E5DE6]">predictive design</span>.
                </p>
              </div>

              <div className="group relative overflow-hidden rounded-[28px] border border-white/60 bg-white/40 p-8 backdrop-blur-xl backdrop-saturate-150 shadow-[0_8px_32px_rgba(15,34,112,0.08)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02] hover:border-white/80 hover:shadow-[0_20px_50px_rgba(15,34,112,0.16)]">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-[#2E5DE6]/25 to-[#6E92F2]/15 blur-2xl" />

                <div className="relative mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2E5DE6] to-[#4A78E8] text-3xl icon-lift">
                  🚀
                </div>

                <h3 className="mb-4 bg-gradient-to-r from-[#0F2270] to-[#2E5DE6] bg-clip-text font-editorial text-3xl font-bold leading-tight tracking-[-0.03em] text-transparent">
                  Our Vision
                </h3>
                <p className="text-base leading-relaxed text-[#0F2270]/78 font-sans-clean">
                  To stand as an elite technological vanguard where user-centered journeys seamlessly mesh with <span className="font-semibold text-[#0F2270]">AI for good</span>, proving that every organizational problem possesses a <span className="text-[#2E5DE6]">secure</span>, <span className="text-[#2E5DE6]">elegant</span>, and <span className="text-[#2E5DE6]">measurable</span> solution.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contacts" className="px-6 py-16 md:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#2E5DE6]">Connect With Us</p>
            <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[#0F2270] md:text-3xl">Let's Secure & Build Your Vision</h2>

            <div className="mx-auto mt-10 grid max-w-xl gap-4 text-left sm:grid-cols-2">
              <div className="rounded-[24px] border border-[#2E5DE6]/12 bg-white p-4">
                <div className="flex items-center gap-4">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#2E5DE6]">Headquarters</p>
                    <p className="mt-1 text-sm text-[#0F2270]">Kigali City, Rwanda</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[24px] border border-[#2E5DE6]/12 bg-white p-4">
                <div className="flex items-center gap-4">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#2E5DE6]">Secured Email</p>
                    <p className="mt-1 text-sm text-[#0F2270]">operations@nexus.tech</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-10 text-[10px] font-medium uppercase tracking-[0.3em] text-[#2E5DE6]">// End transmission. All systems green.</p>
          </div>
        </section>
      </main>
    </div>
  );
}