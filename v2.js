/* Pavla Patlis — portfolio v2 · home (data in v2-data.js) */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const pad = n => String(n + 1).padStart(2, "0");

/* ---------- WORK GRID ---------- */
const grid = $("#grid");
function buildGrid(filter) {
  const list = filter === "all" ? PROJECTS : PROJECTS.filter(p => p.cat === filter);
  grid.innerHTML = list.map((p, i) => `
    <a class="card" href="case.html?p=${encodeURIComponent(p.id)}" style="--i:${i}">
      <span class="card-img"><img src="${p.cover}" alt="${p.title} — ${p.sub}" loading="${i < 4 ? "eager" : "lazy"}"></span>
      <span class="card-meta">
        <span class="card-num">${pad(PROJECTS.indexOf(p))}</span>
        <span class="card-title">${p.title}</span>
        <span class="card-sub">${p.sub}</span>
      </span>
    </a>`).join("");
}
$$(".filters button").forEach(btn => btn.addEventListener("click", () => {
  $$(".filters button").forEach(b => b.classList.remove("is-on"));
  btn.classList.add("is-on");
  grid.classList.add("swap");
  setTimeout(() => { buildGrid(btn.dataset.filter); grid.classList.remove("swap"); }, reduced ? 0 : 200);
}));
buildGrid("all");

/* ---------- REVEAL ---------- */
const io = new IntersectionObserver(es => es.forEach(en => {
  if (en.isIntersecting) en.target.classList.add("visible");
}), { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
$$(".reveal").forEach(el => reduced ? el.classList.add("visible") : io.observe(el));

/* ---------- HERO: the blurred VISUAL drifts a little with the cursor ---------- */
const vis = $(".lk-visual");
if (!reduced && vis && matchMedia("(pointer:fine)").matches) {
  let tx = 0, ty = 0, x = 0, y = 0;
  addEventListener("mousemove", e => {
    tx = (e.clientX / innerWidth - 0.5) * 30;
    ty = (e.clientY / innerHeight - 0.5) * 20;
  });
  (function loop() {
    x += (tx - x) * 0.06; y += (ty - y) * 0.06;
    vis.setAttribute("transform", `translate(${x.toFixed(1)} ${y.toFixed(1)})`);
    requestAnimationFrame(loop);
  })();
}

/* nav background after hero */
const nav = $(".nav");
addEventListener("scroll", () => nav.classList.toggle("solid", scrollY > innerHeight * 0.5), { passive: true });
