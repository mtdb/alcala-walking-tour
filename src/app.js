const STOPS = [
  {
    id: 1, slug: "colegio-mayor-san-ildefonso", name: "Colegio Mayor de San Ildefonso",
    shortName: "San Ildefonso", subtitle: "Universidad de Alcalá · Plaza de San Diego",
    coordinates: { lat: 40.482855, lng: -3.363075 }, duration: "10–15 min", price: "Exterior gratuito",
    description: "Comienza frente a la espectacular fachada renacentista del antiguo Colegio Mayor, núcleo histórico de la Universidad de Alcalá fundada por el cardenal Cisneros a finales del siglo XV.",
    curiosity: "Aquí se celebra la entrega del Premio Cervantes, uno de los grandes reconocimientos de la literatura en español.",
    source: "https://cultura.uah.es/es/evento/Servicio-de-Visitas-Guiadas-00004/", image: "images/san-ildefonso.webp", alt: "Fachada del Colegio Mayor de San Ildefonso al atardecer"
  },
  {
    id: 2, slug: "plaza-de-cervantes", name: "Plaza de Cervantes", shortName: "Plaza de Cervantes", subtitle: "El centro del casco histórico",
    coordinates: { lat: 40.48255, lng: -3.36425 }, duration: "10–15 min", price: "Gratuita",
    description: "El gran espacio central de Alcalá funciona como transición natural entre la ciudad universitaria y el antiguo núcleo urbano. Alrededor aparecen el Ayuntamiento, el Corral de Comedias y la estatua del escritor.",
    curiosity: "La estatua de Miguel de Cervantes preside la plaza desde el siglo XIX.", source: "https://www.turismoalcala.es/turismo/plaza-de-cervantes-alcala-de-henares/", image: "images/plaza-cervantes.webp", alt: "Estatua de Cervantes en la plaza histórica de Alcalá"
  },
  {
    id: 3, slug: "capilla-del-oidor", name: "Capilla del Oidor", shortName: "Capilla del Oidor", subtitle: "Plaza de Rodríguez Marín",
    coordinates: { lat: 40.481703, lng: -3.363425 }, duration: "10–15 min", price: "Entrada gratuita",
    description: "Pequeña pero esencial parada cervantina. Conserva la pila bautismal vinculada al bautismo de Miguel de Cervantes y un facsímil de su partida de bautismo.",
    curiosity: "Formaba parte de la antigua iglesia de Santa María la Mayor, gravemente destruida durante la Guerra Civil.", source: "https://www.turismoalcala.es/turismo/monumento-capilla-del-oidor/", image: "images/capilla-oidor.webp", alt: "Exterior de la Capilla del Oidor en una plaza histórica"
  },
  {
    id: 4, slug: "hospital-de-antezana", name: "Hospital de Antezana", shortName: "Hospital de Antezana", subtitle: "Calle Mayor · microparada",
    coordinates: { lat: 40.48229, lng: -3.36686 }, duration: "3–5 min", price: "Exterior gratuito",
    description: "Mira hacia este edificio mientras recorres Calle Mayor bajo sus característicos soportales. Está prácticamente junto a la Casa Natal de Cervantes.",
    curiosity: "Fue fundado en 1483 y mantiene una extraordinaria continuidad de su función asistencial a lo largo de los siglos.", source: "https://alcalafilmoffice.ayto-alcaladehenares.es/localizaciones/hospital-de-antezana/", image: "images/calle-mayor.webp", alt: "Soportales de la Calle Mayor de Alcalá de Henares"
  },
  {
    id: 5, slug: "casa-natal-de-cervantes", name: "Museo Casa Natal de Cervantes", shortName: "Casa Natal de Cervantes", subtitle: "Calle Mayor, 48",
    coordinates: { lat: 40.48225, lng: -3.36705 }, duration: "20–30 min", price: "Entrada gratuita",
    description: "El museo ocupa el emplazamiento tradicionalmente identificado con la vivienda de la familia de Miguel de Cervantes y recrea el ambiente de una casa acomodada de los siglos XVI y XVII.",
    curiosity: "Las esculturas de Don Quijote y Sancho Panza esperan delante del museo para una de las fotos más reconocibles del paseo.", source: "https://museocasanataldecervantes.org/informacion-general/", image: "images/casa-natal.webp", alt: "Exterior de la Casa Natal de Cervantes en Calle Mayor"
  },
  {
    id: 6, slug: "catedral-magistral", name: "Catedral Magistral", shortName: "Catedral Magistral", subtitle: "Plaza de los Santos Niños",
    coordinates: { lat: 40.48063, lng: -3.36881 }, duration: "10–15 min", price: "Exterior gratuito",
    description: "La ruta continúa hasta la Plaza de los Santos Niños, donde la Catedral Magistral recuerda los orígenes religiosos de la ciudad medieval y la tradición del martirio de Justo y Pastor.",
    curiosity: "El título de “Magistral” estaba relacionado con que sus canónigos fueran maestros universitarios.", source: "https://catedralmagistral.com/visita-cultural/", image: "images/catedral-magistral.webp", alt: "Fachada de la Catedral Magistral de Alcalá de Henares"
  },
  {
    id: 7, slug: "palacio-arzobispal", name: "Palacio Arzobispal", shortName: "Palacio Arzobispal", subtitle: "Plaza de las Bernardas · recinto amurallado",
    coordinates: { lat: 40.48244, lng: -3.36965 }, duration: "10–15 min", price: "Exterior gratuito",
    description: "Antigua residencia de los arzobispos de Toledo y uno de los grandes centros históricos de poder de Alcalá. La plaza marca la transición hacia la muralla.",
    curiosity: "Un enorme incendio en 1939 destruyó parte de sus dependencias y archivos. El acceso interior puede variar.", source: "https://www.turismoalcala.es/turismo/palacio-arzobispal/", image: "images/palacio-arzobispal.webp", alt: "Palacio Arzobispal junto al recinto amurallado"
  },
  {
    id: 8, slug: "puerta-de-madrid", name: "Puerta de Madrid", shortName: "Puerta de Madrid", subtitle: "Final · acceso occidental",
    coordinates: { lat: 40.480646, lng: -3.372770 }, duration: "10 min", price: "Gratuita",
    description: "El paseo termina junto al recinto amurallado. La puerta monumental del siglo XVIII cierra el recorrido después de cruzar el centro histórico de este a oeste.",
    curiosity: "Su entorno se ha utilizado como localización cinematográfica para recrear escenarios históricos.", source: "https://www.turismoalcala.es/turismo/puerta-de-madrid-alcala-de-henares-y-recinto-amurallado/", image: "images/puerta-madrid.webp", alt: "Puerta de Madrid al final de una calle histórica"
  },
  {
    id: 9, slug: "museo-arqueologico", name: "Museo Arqueológico y Paleontológico", shortName: "Museo Arqueológico", subtitle: "Plaza de las Bernardas · parada opcional",
    coordinates: { lat: 40.4845, lng: -3.3695 }, duration: "30–45 min", price: "Colección permanente gratuita",
    description: "Una parada opcional para conocer la historia anterior a Cervantes y a la Universidad, incluida la Alcalá romana y medieval.",
    curiosity: "Añádela solo si dispones de al menos media hora extra; el trazado principal continúa sin ella.", source: "https://www.turismoalcala.es/turismo/museo-arqueologico-regional/", optional: true
  }
];

const KEYS = { visited: "alcala-tour:visited-stops", provider: "alcala-tour:map-provider", optional: "alcala-tour:include-optional-stop" };
const read = (key, fallback) => { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } };
const write = (key, value) => localStorage.setItem(key, JSON.stringify(value));
const state = { visited: read(KEYS.visited, []), provider: read(KEYS.provider, "ask"), optional: read(KEYS.optional, false), active: 0 };
function mainStops() {
  const stops = STOPS.filter((stop) => !stop.optional || state.optional);
  if (!state.optional) return stops;
  const optional = stops.find((stop) => stop.optional);
  const palaceIndex = stops.findIndex((stop) => stop.id === 7);
  if (optional && palaceIndex >= 0) { stops.splice(stops.indexOf(optional), 1); stops.splice(palaceIndex, 0, optional); }
  return stops;
}
const $ = (selector, root = document) => root.querySelector(selector);

function googlePlace(stop) { return `https://www.google.com/maps/search/?api=1&query=${stop.coordinates.lat},${stop.coordinates.lng}`; }
function googleDirections(from, to) {
  const origin = from ? `&origin=${from.coordinates.lat},${from.coordinates.lng}` : "";
  return `https://www.google.com/maps/dir/?api=1${origin}&destination=${to.coordinates.lat},${to.coordinates.lng}&travelmode=walking`;
}
function osmandPoint(stop) { return `https://osmand.net/map/?pin=${stop.coordinates.lat},${stop.coordinates.lng}#18/${stop.coordinates.lat}/${stop.coordinates.lng}`; }
function osmandNavigate(from, to) {
  const start = from ? `&start=${from.coordinates.lat},${from.coordinates.lng}` : "";
  return `https://osmand.net/map/navigate/?${start ? start.slice(1) : ""}${start ? "&" : ""}finish=${to.coordinates.lat},${to.coordinates.lng}&type=osmand&profile=pedestrian`;
}
function geoLink(stop) { return `geo:${stop.coordinates.lat},${stop.coordinates.lng}?z=18`; }
function intentLink(stop) { return `intent:${stop.coordinates.lat},${stop.coordinates.lng}#Intent;scheme=geo;package=net.osmand.plus;end`; }

function mapUrl(action, stop, next) {
  if (state.provider === "google") return action === "place" ? googlePlace(stop) : googleDirections(null, next || stop);
  if (state.provider === "osmand") return action === "place" ? osmandPoint(stop) : osmandNavigate(null, next || stop);
  return action === "place" ? googlePlace(stop) : googleDirections(null, next || stop);
}

function stopTemplate(stop, index, visibleStops) {
  const next = visibleStops[index + 1];
  const isVisited = state.visited.includes(stop.id);
  const image = stop.image ? `<div class="stop__image"><img src="${stop.image}" alt="${stop.alt}" loading="lazy" width="1536" height="1024" data-parallax /></div>` : `<div class="stop__image stop__image--fallback" data-mark="${String(stop.id).padStart(2, "0")}" aria-hidden="true"></div>`;
  const nextBlock = next ? `<div class="stop__next"><small>Siguiente · ${next.duration}</small><a href="#parada-${next.id}">${next.name} <span aria-hidden="true">↘</span></a></div>` : `<div class="stop__next"><small>Has llegado</small><span>Puerta de Madrid</span></div>`;
  const optionalClass = stop.optional ? " stop--optional" : "";
  return `<article class="stop${optionalClass}${isVisited ? " is-visited" : ""}" id="parada-${stop.id}" data-stop-id="${stop.id}">
    <div class="stop__grid">
      <div class="stop__copy">
        <p class="stop__number" aria-hidden="true">${String(stop.id).padStart(2, "0")}</p>
        <p class="stop__tag">${stop.optional ? "Parada opcional" : `Parada ${String(stop.id).padStart(2, "0")}`}</p>
        <h2>${stop.name}</h2>
        <p class="stop__subtitle">${stop.subtitle}</p>
        <p class="stop__description">${stop.description}</p>
        <div class="stop__meta"><span>◷ ${stop.duration}</span><span>◌ ${stop.price}</span></div>
        <aside class="stop__curiosity"><strong>Dato curioso</strong><p>${stop.curiosity}</p></aside>
        <div class="stop__actions">
          <button class="button button--accent" type="button" data-navigate="${stop.id}"${next ? "" : " disabled"}>${next ? "Caminar a la siguiente" : "Fin del paseo"} <span aria-hidden="true">↗</span></button>
          <button class="button button--outline" type="button" data-place="${stop.id}">Ver este lugar</button>
          <button class="button button--outline" type="button" data-copy="${stop.id}">Copiar coordenadas</button>
          <button class="visit-toggle" type="button" data-visit="${stop.id}" aria-pressed="${isVisited}"><span class="visit-toggle__box" aria-hidden="true"></span>${isVisited ? "Visitada" : "Marcar como visitada"}</button>
        </div>
        <a class="source-link" href="${stop.source}" target="_blank" rel="noreferrer">Información oficial ↗</a>
        ${nextBlock}
      </div>
      <div class="stop__media">${image}</div>
    </div>
  </article>`;
}

function render() {
  const visible = mainStops();
  $("[data-stops]").innerHTML = visible.map((stop, index) => stopTemplate(stop, index, visible)).join("");
  const denominator = visible.filter((stop) => !stop.optional || state.optional).length;
  const count = visible.filter((stop) => state.visited.includes(stop.id)).length;
  $("[data-progress]").textContent = `${count} / ${denominator}`;
  const optionalToggle = $("[data-optional-toggle]");
  if (optionalToggle) optionalToggle.textContent = state.optional ? "Quitar parada opcional" : "Añadir parada opcional";
  bindStopEvents();
  observeStops();
}

function openProviderDialog(action, stopId) {
  const dialog = $("[data-map-dialog]");
  dialog.dataset.action = action; dialog.dataset.stopId = stopId;
  if (typeof dialog.showModal === "function") dialog.showModal(); else dialog.setAttribute("open", "");
}

function launchMap(action, stopId) {
  const stop = STOPS.find((item) => item.id === Number(stopId));
  const visible = mainStops(); const index = visible.findIndex((item) => item.id === stop.id); const next = visible[index + 1];
  if (!stop) return;
  if (state.provider === "ask") return openProviderDialog(action, stop.id);
  let url = mapUrl(action, stop, next);
  if (state.provider === "osmand" && action === "place") url = intentLink(stop);
  window.location.href = url;
}

function bindStopEvents() {
  document.querySelectorAll("[data-visit]").forEach((button) => button.addEventListener("click", () => {
    const id = Number(button.dataset.visit); const position = state.visited.indexOf(id);
    if (position === -1) state.visited.push(id); else state.visited.splice(position, 1);
    write(KEYS.visited, state.visited); render();
    document.getElementById(`parada-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }));
  document.querySelectorAll("[data-place], [data-navigate]").forEach((button) => button.addEventListener("click", () => launchMap(button.dataset.place ? "place" : "navigate", button.dataset.place || button.dataset.navigate)));
  document.querySelectorAll("[data-copy]").forEach((button) => button.addEventListener("click", async () => {
    const stop = STOPS.find((item) => item.id === Number(button.dataset.copy));
    if (!stop) return;
    const coordinates = `${stop.coordinates.lat}, ${stop.coordinates.lng}`;
    try { await navigator.clipboard.writeText(coordinates); } catch { window.prompt("Copia estas coordenadas", coordinates); }
    const original = button.textContent; button.textContent = "Coordenadas copiadas"; window.setTimeout(() => { button.textContent = original; }, 1800);
  }));
}

function observeStops() {
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    state.active = Number(entry.target.dataset.stopId);
    const stop = STOPS.find((item) => item.id === state.active);
    $("[data-current-label]").textContent = stop?.shortName || "Ruta";
  }), { rootMargin: "-35% 0px -55%", threshold: 0 });
  document.querySelectorAll("[data-stop-id]").forEach((section) => observer.observe(section));
}

let parallaxFrame;
function updateParallax() {
  parallaxFrame = undefined;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  document.querySelectorAll("[data-parallax]").forEach((image) => {
    const box = image.closest(".stop__media").getBoundingClientRect(); const distance = (box.top + box.height / 2 - window.innerHeight / 2) / window.innerHeight;
    image.style.setProperty("--parallax", `${Math.max(-5, Math.min(5, distance * -3))}%`);
  });
}
window.addEventListener("scroll", () => { if (!parallaxFrame) parallaxFrame = requestAnimationFrame(updateParallax); }, { passive: true });
window.addEventListener("load", updateParallax, { once: true });

document.querySelector("[data-settings]").addEventListener("click", () => openProviderDialog("settings", 0));
document.querySelector("[data-optional-toggle]").addEventListener("click", () => {
  state.optional = !state.optional; write(KEYS.optional, state.optional); render();
});
document.querySelectorAll("[data-provider]").forEach((button) => button.addEventListener("click", () => {
  if (button.dataset.provider === "copy") {
    const stop = STOPS.find((item) => item.id === Number($("[data-map-dialog]").dataset.stopId));
    if (stop) navigator.clipboard?.writeText(`${stop.coordinates.lat}, ${stop.coordinates.lng}`);
    $("[data-map-dialog]").close();
    return;
  }
  state.provider = button.dataset.provider; write(KEYS.provider, state.provider);
  const dialog = $("[data-map-dialog]"); const action = dialog.dataset.action; const stopId = dialog.dataset.stopId;
  dialog.close();
  if (action && ["place", "navigate"].includes(action)) launchMap(action, stopId);
}));

$("[data-download-gpx]").addEventListener("click", () => {
  const stops = mainStops();
  const waypoints = stops.map((stop) => `    <wpt lat="${stop.coordinates.lat}" lon="${stop.coordinates.lng}"><name>${stop.id}. ${stop.name}</name><desc>${stop.subtitle}</desc></wpt>`).join("\n");
  const gpx = `<?xml version="1.0" encoding="UTF-8"?>\n<gpx version="1.1" creator="Alcalá paseo a pie" xmlns="http://www.topografix.com/GPX/1/1">\n${waypoints}\n</gpx>`;
  const link = document.createElement("a"); link.href = URL.createObjectURL(new Blob([gpx], { type: "application/gpx+xml" })); link.download = state.optional ? "alcala-ruta-ampliada.gpx" : "alcala-ruta-base.gpx"; link.click(); URL.revokeObjectURL(link.href);
});

$("[data-map-dialog]").addEventListener("click", (event) => { if (event.target === event.currentTarget) event.currentTarget.close(); });
const topbar = $("[data-topbar]");
window.addEventListener("scroll", () => topbar.classList.toggle("is-scrolled", window.scrollY > 20), { passive: true });
render();
if ("serviceWorker" in navigator) window.addEventListener("load", () => navigator.serviceWorker.register("sw.js"));
