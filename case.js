/* Pavla Patlis — portfolio v2 · case page */
const $ = s => document.querySelector(s);
const pad = n => String(n + 1).padStart(2, "0");
const id = new URLSearchParams(location.search).get("p");
let i = PROJECTS.findIndex(p => p.id === id);
if (i < 0) i = 0;
const p = PROJECTS[i];

document.title = `${p.title} — Pavla Patlis`;
$(".case-num").textContent = `${pad(i)} / ${pad(PROJECTS.length - 1)}`;
$(".case-title").textContent = p.title;
$(".case-sub").textContent = p.sub;
$(".case-text").textContent = p.text;
$(".case-tags").textContent = p.tags;

const media = [];
if (p.video) media.push(`<div class="case-video"><iframe src="${p.video}" allow="autoplay; fullscreen" allowfullscreen title="${p.title}"></iframe></div>`);
p.imgs.forEach(src => media.push(`<figure><img src="${src}" alt="${p.title} — ${p.sub}" loading="lazy"></figure>`));
$(".case-media").innerHTML = media.join("");

const prev = PROJECTS[(i - 1 + PROJECTS.length) % PROJECTS.length];
const next = PROJECTS[(i + 1) % PROJECTS.length];
const pl = $(".case-prev-link"), nl = $(".case-next-link");
pl.href = `case.html?p=${encodeURIComponent(prev.id)}`;
pl.innerHTML = `<small>← Previous</small><span>${prev.title}</span>`;
nl.href = `case.html?p=${encodeURIComponent(next.id)}`;
nl.innerHTML = `<small>Next project →</small><span>${next.title}</span>`;

document.addEventListener("keydown", e => {
  if (e.key === "ArrowRight") location.href = nl.href;
  if (e.key === "ArrowLeft") location.href = pl.href;
  if (e.key === "Escape") location.href = "v2.html#work";
});
