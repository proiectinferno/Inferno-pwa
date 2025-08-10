'use client'
import { useMemo, useState } from 'react'

const BRAND = {
  phone: '0755 000 000',        // <- pune numărul final aici
  wa: '40755000000',            // <- WhatsApp fără plus
  primary: '#D7263D',
  surface: '#0b0b0d',
  accent: '#F5A623',
}

function buildWA({ name, persons, date, time, experience }: any) {
  const text = `Salut! Mă numesc ${name || '_____'}.
Vrem să rezervăm ${persons || '__'} persoane pe data de ${date || '____-__-__'} la ora ${time || '__:__'} pentru experiența ${experience || 'Inferno Horror'}. Mulțumesc!`
  return `https://wa.me/${BRAND.wa}?text=${encodeURIComponent(text)}`
}

export default function Page() {
  const [name, setName] = useState('')
  const [persons, setPersons] = useState(2)
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [experience, setExperience] = useState('Horror 90')

  const waLink = useMemo(() => buildWA({ name, persons, date, time, experience }), [name, persons, date, time, experience])

  return (
    <main>
      {/* HERO cu background spectaculos */}
      <section className="relative min-h-[82vh] flex items-center">
        <div className="absolute inset-0 opacity-40 bg-cover bg-center" style={{backgroundImage: `url('https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1600&auto=format&fit=crop')`}}/>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black"/>

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
          <div>
            <div className="text-sm uppercase tracking-widest opacity-70">Timișoara</div>
            <h1 className="text-5xl md:text-6xl font-black leading-tight">Inferno Escape House</h1>
            <p className="mt-4 text-white/80 text-lg">Horror real, fum, lanțuri, șoapte. Crezi că poți scăpa? Rezervă acum și intră în joc.</p>

            {/* Rezervare rapidă */}
            <div className="mt-6 p-4 rounded-2xl border border-white/10 bg-white/5">
              <div className="grid md:grid-cols-5 gap-3">
                <input placeholder="Nume" className="col-span-2 px-3 py-2 bg-black/40 rounded-lg border border-white/10 outline-none" value={name} onChange={e=>setName(e.target.value)} />
                <input type="number" min={1} max={12} placeholder="Pers" className="px-3 py-2 bg-black/40 rounded-lg border border-white/10 outline-none" value={persons} onChange={e=>setPersons(parseInt(e.target.value || '0'))} />
                <input type="date" className="px-3 py-2 bg-black/40 rounded-lg border border-white/10 outline-none" value={date} onChange={e=>setDate(e.target.value)} />
                <input type="time" className="px-3 py-2 bg-black/40 rounded-lg border border-white/10 outline-none" value={time} onChange={e=>setTime(e.target.value)} />
              </div>
              <div className="mt-3 flex items-center gap-3 flex-wrap">
                <select className="px-3 py-2 bg-black/40 rounded-lg border border-white/10 outline-none" value={experience} onChange={e=>setExperience(e.target.value)}>
                  <option>Horror 90</option>
                  <option>Crime 60</option>
                  <option>Kid-friendly</option>
                </select>
                <a href={`tel:${BRAND.phone.replace(/\s/g,'')}`} className="px-4 py-3 rounded-xl font-bold border border-white/20 hover:border-white/40 transition">Rezervă (Sună)</a>
                <a href={waLink} target="_blank" className="px-4 py-3 rounded-xl font-bold" style={{background: BRAND.primary}}>Rezervă pe WhatsApp</a>
              </div>
              <p className="mt-2 text-xs text-white/60">Butonul WhatsApp deschide conversația cu mesajul completat automat.</p>
            </div>
          </div>

          {/* Card vizual */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl glow-red" style={{background: 'linear-gradient(160deg, #1a1a1d, #000)'}}>
              <div className="absolute inset-0 bg-cover bg-center mix-blend-screen opacity-70" style={{backgroundImage: `url('https://images.unsplash.com/photo-1546549957-165152cb5f03?q=80&w=1200&auto=format&fit=crop')`}}/>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-sm uppercase tracking-widest opacity-70">„Can you escape the darkness?”</div>
                <div className="text-2xl font-extrabold">Rezervă și află.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6">Din subteranele Inferno</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              'https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1600740927332-613cf7578e3c?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1516542076529-1ea3854896e1?q=80&w=1200&auto=format&fit=crop',
            ].map((src, i) => (
              <div key={i} className="aspect-square rounded-2xl overflow-hidden border border-white/10">
                <img src={src} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            ))}
          </div>
          <p className="text-sm text-white/60 mt-2">Pozele sunt provizorii — le înlocuim cu imaginile generate pentru Inferno.</p>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-14 bg-gradient-to-b from-transparent to-black/60">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-extrabold">Ești gata să intri?</h3>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href={`tel:${BRAND.phone.replace(/\s/g,'')}`} className="px-6 py-3 rounded-2xl font-bold border border-white/20 hover:border-white/40 transition">Sună și rezervă</a>
            <a href={waLink} target="_blank" className="px-6 py-3 rounded-2xl font-bold" style={{background: BRAND.primary}}>Rezervă pe WhatsApp</a>
          </div>
          <p className="mt-3 text-white/60 text-sm">Program: L–D 12:00–23:00 • Locație: Str. Bujorilor, Timișoara</p>
        </div>
      </section>
    </main>
  )
}
