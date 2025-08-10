<!doctype html>
<html lang="ro">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Inferno Escape House</title>
  <meta name="theme-color" content="#D7263D" />
  <style>
    :root { --red:#D7263D; --amber:#F5A623; --bg:#0b0b0d; }
    *{box-sizing:border-box} body{margin:0;background:var(--bg);color:#fff;font-family:system-ui,Segoe UI,Roboto,Arial}
    .wrap{max-width:1100px;margin:0 auto;padding:16px}
    header{position:sticky;top:0;backdrop-filter:blur(6px);background:#0008;border-bottom:1px solid #ffffff22}
    .brand{display:flex;align-items:center;gap:8px;font-weight:900;letter-spacing:.18em}
    .brand b{color:var(--amber)}
    .btn{display:inline-block;padding:10px 14px;border-radius:14px;font-weight:700;text-decoration:none}
    .btn.outline{border:1px solid #ffffff40}
    .btn.fill{background:var(--red);color:#fff}
    .hero{position:relative;min-height:80vh;display:grid;align-items:center}
    .bg{position:absolute;inset:0;background:
      radial-gradient(1000px 500px at 50% -10%, #d7263d22, transparent),
      radial-gradient(800px 600px at 120% 10%, #ff6b0020, transparent),
      url('https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1600&auto=format&fit=crop')
      center/cover no-repeat;opacity:.35}
    .shade{position:absolute;inset:0;background:linear-gradient(#0008,#000)}
    h1{font-size:48px;margin:0 0 8px}
    p.lead{opacity:.8;font-size:18px}
    .card{background:#ffffff0d;border:1px solid #ffffff22;border-radius:18px;padding:12px;margin-top:14px}
    .row{display:grid;gap:8px;grid-template-columns:2fr 1fr 1fr 1fr 1fr}
    input,select{width:100%;padding:10px;border-radius:10px;border:1px solid #ffffff22;background:#0008;color:#fff}
    .cta{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px}
    .gallery{display:grid;gap:8px;grid-template-columns:repeat(4,1fr)}
    .tile{aspect-ratio:1/1;border-radius:16px;overflow:hidden;border:1px solid #ffffff22}
    .tile img{width:100%;height:100%;object-fit:cover;transition:transform .3s}
    .tile img:hover{transform:scale(1.05)}
    footer{opacity:.6;text-align:center;padding:24px}
    @media (max-width:800px){ .row{grid-template-columns:1fr 1fr 1fr 1fr 1fr} h1{font-size:36px} .gallery{grid-template-columns:repeat(2,1fr)} }
  </style>
</head>
<body>
  <header>
    <div class="wrap" style="display:flex;justify-content:space-between;align-items:center;padding:10px 0">
      <div class="brand"><b>INFERNO</b><span>Escape House</span></div>
      <div style="display:flex;gap:8px">
        <a class="btn outline" href="tel:0755">Sună acum</a>
        <a id="waTop" class="btn fill" href="#" target="_blank" rel="noreferrer">WhatsApp</a>
      </div>
    </div>
  </header>

  <section class="hero">
    <div class="bg"></div><div class="shade"></div>
    <div class="wrap" style="position:relative;z-index:2">
      <h1>Inferno Escape House</h1>
      <p class="lead">Horror real, fum, lanțuri, șoapte. Crezi că poți scăpa? Rezervă acum și intră în joc.</p>

      <div class="card">
        <div class="row">
          <input id="nume" placeholder="Nume" />
          <input id="persoane" type="number" min="1" max="12" placeholder="Pers" value="2" />
          <input id="data" type="date" />
          <input id="ora" type="time" />
          <select id="experienta">
            <option>Horror 90</option>
            <option>Crime 60</option>
            <option>Kid-friendly</option>
          </select>
        </div>
        <div class="cta">
          <a class="btn outline" href="tel:0755">Rezervă (Sună)</a>
          <a id="waBtn" class="btn fill" href="#" target="_blank" rel="noreferrer">Rezervă pe WhatsApp</a>
          <small style="opacity:.6">Mesajul WhatsApp se completează automat.</small>
        </div>
      </div>
    </div>
  </section>

  <section class="wrap" style="padding:32px 16px">
    <h3>Din subteranele Inferno</h3>
    <div class="gallery">
      <div class="tile"><img src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1200&auto=format&fit=crop" alt=""></div>
      <div class="tile"><img src="https://images.unsplash.com/photo-1600740927332-613cf7578e3c?q=80&w=1200&auto=format&fit=crop" alt=""></div>
      <div class="tile"><img src="https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?q=80&w=1200&auto=format&fit=crop" alt=""></div>
      <div class="tile"><img src="https://images.unsplash.com/photo-1516542076529-1ea3854896e1?q=80&w=1200&auto=format&fit=crop" alt=""></div>
    </div>
  </section>

  <section style="padding:24px 0;background:radial-gradient(600px 200px at 50% 0, #d7263d22, transparent)">
    <div class="wrap" style="text-align:center">
      <h3 style="margin:0 0 8px">Ești gata să intri?</h3>
      <div class="cta" style="justify-content:center">
        <a class="btn outline" href="tel:0755">Sună și rezervă</a>
        <a id="waBtn2" class="btn fill" href="#" target="_blank" rel="noreferrer">Rezervă pe WhatsApp</a>
      </div>
      <p style="opacity:.6;margin-top:8px">Program: L–D 12:00–23:00 • Locație: Str. Bujorilor, Timișoara</p>
    </div>
  </section>

  <footer>© <span id="y"></span> Inferno Escape House — Toate drepturile rezervate</footer>

  <script>
    const WA_NUMBER = "40755"; // fără +
    function buildWA(){
      const n = document.getElementById('nume').value || "_____";
      const p = document.getElementById('persoane').value || "__";
      const d = document.getElementById('data').value || "____-__-__";
      const o = document.getElementById('ora').value || "__:__";
      const e = document.getElementById('experienta').value || "Inferno Horror";
      const text = `Salut! Mă numesc ${n}. Vrem să rezervăm ${p} persoane pe data de ${d} la ora ${o} pentru experiența ${e}. Mulțumesc!`;
      return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
    }
    const y=document.getElementById('y'); y.textContent=new Date().getFullYear();
    const applyLinks = () => {
      const link = buildWA();
      document.getElementById('waBtn').href = link;
      document.getElementById('waBtn2').href = link;
      document.getElementById('waTop').href = link;
    };
    ['nume','persoane','data','ora','experienta'].forEach(id=>{
      document.getElementById(id).addEventListener('input', applyLinks);
    });
    applyLinks();
  </script>
</body>
</html>
