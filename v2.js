/* Pavla Patlis — portfolio v2 */
const A = "v2-assets/";
const PROJECTS = [
  {
    id: "visa2au", cat: "brand", title: "Visa2AU", sub: "Visual identity system",
    tags: "Internship · Melbourne · 2026 · Brand guidelines",
    cover: A+"visa2au.webp",
    imgs: [A+"visa2au.webp"],
    text: "Four months on site at Visa2AU, a migration agency in Melbourne. I built its visual system from scratch: logo usage, colour palette, typography, a set of line illustrations drawn from Australian landmarks and wildlife, supporting graphic elements and templates. Then I used it every week on website content and the company's LinkedIn."
  },
  {
    id: "mostro", cat: "brand", title: "Mostro", sub: "Social media for a music platform",
    tags: "Internship · Paris · 2025 · Social media · Web assets",
    cover: A+"mostro-2.webp",
    imgs: [A+"mostro-1.webp", A+"mostro-2.webp", A+"mostro-3.webp", A+"mostro-4.webp", A+"mostro-5.webp"],
    text: "During my internship at MOSTRO, a Web3 music platform in Paris, I designed social media posts, web assets and newsletters around the brand's blue monster mascot: waitlist campaigns, an educational \"Web3 term of the day\" series and seasonal updates. Bold acid-green layouts, big type, one character carrying the whole voice."
  },
  {
    id: "unseen", cat: "poster", title: "Unseen", sub: "Film posters",
    tags: "Poster series · Photoshop",
    cover: "gallery2/poster_big2.jpg",
    imgs: ["gallery2/poster_big2.jpg", A+"psycho-banner.webp", A+"fightclub-banner.webp"],
    text: "Posters and streaming banners for well-known films. In the poster series, the main characters never appear: colour, light and atmosphere carry the story, so the scene itself reveals which film it is."
  },
  {
    id: "calm", cat: "art", title: "Calm", sub: "Letters in the forest",
    tags: "Installation · Photography",
    cover: A+"calm-1.webp",
    imgs: [A+"calm-1.webp", A+"calm-2.webp", A+"calm-3.webp", A+"calm-4.webp", A+"calm-5.webp", A+"calm-6.webp", A+"calm-7.webp", A+"calm-8.webp"],
    text: "Four white letters, C-A-L-M, carried through a forest and photographed from day into night: on a fallen trunk, in a mossy stump, lost in dry grass, scattered in the dark."
  },
  {
    id: "dune", cat: "poster", title: "PUB 2A", sub: "Class posters",
    tags: "Poster · Photo compositing · 2025",
    cover: A+"dune-1.webp",
    imgs: [A+"dune-1.webp", A+"dune-2.webp"],
    text: "A Dune-inspired poster for my advertising class at IUT Bordeaux Montaigne, plus a matching individual poster for each student. Desert light, a giant moon and a custom wide-set title."
  },
  {
    id: "jardin", cat: "art", title: "Jardin Translucide", sub: "Installation",
    tags: "BHSAD Moscow · 2020–21 · Screen print on plastic",
    cover: A+"jardin-1.webp",
    imgs: [A+"jardin-1.webp", A+"jardin-2.webp", A+"jardin-3.webp"],
    text: "Final project of the Pre-Foundation Art & Design programme. Inspired by the feeling of standing inside a greenhouse, surrounded by transparency, colour and light: screen-printed blue and clear plastic sheets, suspended to form a fragile, shifting landscape, both artificial and alive."
  },
  {
    id: "faust", cat: "editorial", title: "Faust", sub: "Book cover",
    tags: "Book design · Photo manipulation",
    cover: A+"faust-2.webp",
    imgs: [A+"faust-3.webp", A+"faust-2.webp", A+"faust-1.webp"],
    text: "A cover for Goethe's Faust: a couple on the stairs of a dark castle, gold serif title glowing out of the night. A study in mood, light and classic typography."
  },
  {
    id: "uffizi", cat: "art", title: "Uffizi", sub: "3D environment",
    tags: "3D · Environment",
    cover: A+"uffizi.webp",
    imgs: [A+"uffizi.webp"],
    text: "The courtyard of the Uffizi Gallery in Florence, rebuilt as a 3D environment."
  },
  {
    id: "wad", cat: "editorial", title: "WAD, Recut", sub: "Magazine cover",
    tags: "Editorial · Art direction · Photoshop",
    cover: A+"wad-5.webp",
    imgs: [A+"wad-3.webp", A+"wad-4.webp", A+"wad-5.webp", A+"wad-6.webp", A+"ware.webp", "gallery2/mag1.jpg", "gallery2/mag2.jpg"],
    text: "A reinterpretation of a WAD magazine cover: same photograph, new story. By changing the crop, composition and treatment, I explored how one image can say completely different things depending on how it's framed, coloured and placed."
  },
  {
    id: "run", cat: "poster", title: "Run the City", sub: "Campaign poster",
    tags: "Group project · 3D · Poster",
    cover: "gallery2/poster_big1.jpeg",
    imgs: ["gallery2/poster_big1.jpeg", A+"run-2.webp"],
    text: "Part of a group project on how running took over urban life. I modelled the 3D shoe at the centre and drew the orange trajectory that gives the composition its speed. Running isn't just a sport anymore: it's a way of living, a connection, the rhythm of the modern city."
  },
  {
    id: "light", cat: "print", title: "Slow Light", sub: "Cyanotype · Photogram · Screen print",
    tags: "Alternative print · Darkroom",
    cover: A+"print-1.webp",
    imgs: [A+"print-1.webp", A+"print-2.webp", A+"print-3.webp", A+"print-4.webp", "gallery2/impression1.jpg", A+"microscope.webp"],
    text: "Experiments with old photographic processes. Architectural details and sculpture printed as cyanotypes and toned prints, photogram series and screen prints: each print a small test of how a 19th-century technique turns something ordinary into something timeless."
  },
  {
    id: "shore", cat: "print", title: "Frames", sub: "Photography",
    tags: "Portrait · Landscape · Street",
    cover: A+"portrait-3.webp",
    imgs: [A+"portrait-3.webp", A+"portrait-1.webp", A+"portrait-2.webp", A+"shore-1.webp", A+"shore-2.webp", A+"shore-3.webp", A+"shore-4.webp", A+"shore-5.webp", "photo1.JPG", A+"photo-window.webp"],
    text: "Studio portraits in hard light, fog over tidal flats, quiet street details. Most of my design work starts behind a camera."
  },
  {
    id: "5h55", cat: "film", title: "5h55", sub: "Cinematography",
    tags: "Short film · Director of photography · 2:48",
    cover: A+"5h55-1.webp",
    video: "https://drive.google.com/file/d/1dgR9VjUnljTGCdyYEjhEMJOx_zXBq_10/preview",
    imgs: [A+"5h55-20.webp", A+"5h55-30.webp", A+"5h55-70.webp", A+"5h55-140.webp"],
    text: "I shot this three-minute short as director of photography. One ordinary student day: a bathroom mirror, a smoke break under the canopy, the coffee machine, a silent meeting room. Cold daylight, tight close-ups and a bold yellow title card."
  },
  {
    id: "kong", cat: "brand", title: "House of Kong", sub: "Event collage",
    tags: "Social media · Collage · NYC 2026",
    cover: A+"kong.webp",
    imgs: [A+"kong.webp"],
    text: "A scrapbook-style post from the Gorillaz House of Kong exhibition in New York: torn paper, tape, neon type and stickers in the band's own graphic language."
  },
  {
    id: "yudaev", cat: "brand", title: "Beyond Design", sub: "Self-promo posts",
    tags: "Social media · Typography",
    cover: A+"beyond-post.webp",
    imgs: [A+"beyond-post.webp", A+"yudaev.webp"],
    text: "Posts presenting my own work: black, chrome and oversized vertical type, with a single red accent."
  },
  {
    id: "sound", cat: "ui", title: "Sound", sub: "Headphones landing page",
    tags: "UI concept · Figma",
    cover: A+"sound-mac.webp",
    imgs: [A+"sound-mac.webp", "gallery2/ux2.png"],
    text: "A landing page concept for wireless earbuds, built around the product as an object: dark surface, warm metal, one clear call to action."
  },
  {
    id: "simplon", cat: "ui", title: "Simplon", sub: "Website redesign",
    tags: "UI · Figma",
    cover: "gallery2/uxv.png",
    imgs: ["gallery2/ux1.png", "gallery2/uxv.png"],
    text: "A redesign of the Simplon bicycles website in Figma, built around large product imagery, strong contrast and clean typography."
  },
  {
    id: "audi", cat: "ui", title: "Audi F1", sub: "Concept page",
    tags: "UI concept · Figma",
    cover: "gallery2/ux3.png",
    imgs: ["gallery2/ux3.png"],
    text: "A personal concept for an Audi Formula 1 page: how the brand could translate speed and precision into a digital format. A study in contrast, light and type."
  }
];

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- SHELF ---------- */
const shelf = $("#shelf");
let list = PROJECTS.slice();
let active = 0;

function pad(n) { return String(n + 1).padStart(2, "0"); }

function buildShelf() {
  shelf.innerHTML = "";
  list.forEach((p, i) => {
    const b = document.createElement("button");
    b.className = "spine";
    b.style.setProperty("--img", `url("${p.cover}")`);
    b.setAttribute("aria-label", `${p.title}, ${p.sub}`);
    b.innerHTML = `
      <span class="spine-face">
        <span class="spine-num">${pad(i)}</span>
        <span class="spine-title">${p.title}</span>
        <span class="spine-cat">${p.cat}</span>
      </span>
      <span class="spine-cover"><img src="${p.cover}" alt="${p.title}" loading="lazy"></span>`;
    b.addEventListener("click", () => {
      if (i === active) openModal(i); else setActive(i);
    });
    shelf.appendChild(b);
  });
  setActive(Math.min(active, list.length - 1), true);
}

function setActive(i, instant) {
  active = (i + list.length) % list.length;
  $$(".spine", shelf).forEach((el, k) => {
    el.classList.toggle("is-active", k === active);
    el.style.setProperty("--d", Math.abs(k - active));
  });
  const p = list[active];
  const cap = $("#caption");
  cap.classList.remove("show");
  void cap.offsetWidth;
  $(".cap-num", cap).textContent = `${pad(active)} / ${pad(list.length - 1)}`;
  $(".cap-title", cap).textContent = `${p.title} — ${p.sub}`;
  $(".cap-tags", cap).textContent = p.tags;
  cap.classList.add("show");
  const el = $$(".spine", shelf)[active];
  if (el) el.scrollIntoView({ behavior: instant || reduced ? "auto" : "smooth", inline: "center", block: "nearest" });
}

$(".shelf-arrow.prev").addEventListener("click", () => setActive(active - 1));
$(".shelf-arrow.next").addEventListener("click", () => setActive(active + 1));
$(".cap-open").addEventListener("click", () => openModal(active));

$$(".filters button").forEach(btn => btn.addEventListener("click", () => {
  $$(".filters button").forEach(b => b.classList.remove("is-on"));
  btn.classList.add("is-on");
  const f = btn.dataset.filter;
  list = f === "all" ? PROJECTS.slice() : PROJECTS.filter(p => p.cat === f);
  active = 0;
  shelf.classList.add("swap");
  setTimeout(() => { buildShelf(); shelf.classList.remove("swap"); }, reduced ? 0 : 220);
}));

/* ---------- MODAL ---------- */
const modal = $("#modal");
let mIndex = 0;
function openModal(i) {
  mIndex = i;
  const p = list[i];
  $(".modal-num", modal).textContent = pad(i);
  $(".modal-title", modal).textContent = `${p.title} — ${p.sub}`;
  $(".modal-tags", modal).textContent = p.tags;
  $(".modal-text", modal).textContent = p.text;
  $(".modal-imgs", modal).innerHTML = (p.video ? `<div class="modal-video"><iframe src="${p.video}" allow="autoplay; fullscreen" allowfullscreen loading="lazy" title="${p.title}"></iframe></div>` : "") + p.imgs.map(src => `<img src="${src}" alt="${p.title}" loading="lazy">`).join("");
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  $(".modal-card", modal).scrollTop = 0;
  $(".modal-close", modal).focus();
}
function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
$$("[data-close]", modal).forEach(el => el.addEventListener("click", closeModal));
$(".modal-prev", modal).addEventListener("click", () => openModal((mIndex - 1 + list.length) % list.length));
$(".modal-next", modal).addEventListener("click", () => openModal((mIndex + 1) % list.length));

document.addEventListener("keydown", e => {
  const open = modal.classList.contains("open");
  if (e.key === "Escape" && open) closeModal();
  if (e.key === "ArrowRight") open ? openModal((mIndex + 1) % list.length) : setActive(active + 1);
  if (e.key === "ArrowLeft") open ? openModal((mIndex - 1 + list.length) % list.length) : setActive(active - 1);
});

/* ---------- REVEAL ---------- */
const io = new IntersectionObserver(es => es.forEach(en => {
  if (en.isIntersecting) en.target.classList.add("visible");
}), { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
$$(".reveal").forEach(el => reduced ? el.classList.add("visible") : io.observe(el));

/* ---------- HERO GLOW: follows the cursor a little ---------- */
const glow = $(".hero-glow");
if (!reduced && glow && matchMedia("(pointer:fine)").matches) {
  let tx = 0, ty = 0, x = 0, y = 0;
  addEventListener("mousemove", e => {
    tx = (e.clientX / innerWidth - 0.5) * 60;
    ty = (e.clientY / innerHeight - 0.5) * 40;
  });
  (function loop() {
    x += (tx - x) * 0.06; y += (ty - y) * 0.06;
    glow.style.setProperty("--mx", x + "px");
    glow.style.setProperty("--my", y + "px");
    requestAnimationFrame(loop);
  })();
}

/* nav background after hero */
const nav = $(".nav");
addEventListener("scroll", () => nav.classList.toggle("solid", scrollY > innerHeight * 0.6), { passive: true });

buildShelf();
