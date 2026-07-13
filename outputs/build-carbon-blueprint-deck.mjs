import fs from "node:fs/promises";
import { Presentation, PresentationFile } from "@oai/artifact-tool";

const OUT = "/Users/rshea/Documents/Website Updated/outputs/carbon-program-service-blueprint-case-study.pptx";
const PREVIEW_DIR = "/Users/rshea/Documents/Website Updated/outputs/carbon-blueprint-preview";
const ASSET_PATHS = {
  discovery: "/Users/rshea/Downloads/Screenshot 2024-01-05 at 12.47.37 AM.png",
  payment: "/Users/rshea/Downloads/Screenshot 2024-01-05 at 12.49.17 AM.png",
  postHarvest: "/Users/rshea/Downloads/Screenshot 2024-01-05 at 12.48.27 AM.png",
  enrollment: "/Users/rshea/Downloads/Screenshot 2024-01-05 at 12.48.05 AM.png",
  verification: "/Users/rshea/Downloads/Screenshot 2024-01-05 at 12.48.58 AM.png",
  overview: "/Users/rshea/Downloads/Screenshot 2024-01-05 at 12.30.03 AM.png",
};
const W = 1280;
const H = 720;
const C = {
  paper: "#F4EFE5",
  ink: "#191713",
  muted: "#756F64",
  panel: "#FFFAF0",
  rule: "#D8CAB7",
  accent: "#A64F2B",
  moss: "#465B3D",
  softAccent: "#EEE4D4",
};

async function writeBlob(path, blob) {
  await fs.writeFile(path, new Uint8Array(await blob.arrayBuffer()));
}

async function loadAssets() {
  return Object.fromEntries(
    await Promise.all(Object.entries(ASSET_PATHS).map(async ([key, path]) => [key, await fs.readFile(path)])),
  );
}

function addText(slide, text, pos, style = {}) {
  const shape = slide.shapes.add({
    geometry: "textbox",
    position: pos,
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  shape.text = text;
  shape.text.style = {
    fontFace: style.fontFace ?? "Source Sans Pro",
    fontSize: style.fontSize ?? 22,
    color: style.color ?? C.ink,
    bold: style.bold ?? false,
    alignment: style.alignment,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
  };
  return shape;
}

function addBox(slide, pos, fill = C.panel, line = C.rule) {
  return slide.shapes.add({
    geometry: "rect",
    position: pos,
    fill,
    line: { style: "solid", fill: line, width: line === "none" ? 0 : 1 },
  });
}

function addRule(slide, x, y, w, color = C.rule, width = 1) {
  slide.shapes.add({
    geometry: "line",
    position: { left: x, top: y, width: w, height: 0 },
    fill: "none",
    line: { style: "solid", fill: color, width },
  });
}

function addFooter(slide, n) {
  addRule(slide, 42, 656, 1196, C.rule, 1);
  addText(slide, "Carbon Program Service Blueprint", { left: 42, top: 674, width: 360, height: 22 }, { fontSize: 13, color: C.muted, bold: true });
  addText(slide, String(n).padStart(2, "0"), { left: 1198, top: 674, width: 40, height: 22 }, { fontSize: 13, color: C.muted, bold: true, alignment: "right" });
}

function title(slide, text, sub = "", n = "") {
  addText(slide, text, { left: 42, top: 46, width: 900, height: 96 }, { fontSize: 44, bold: false, fontFace: "Georgia" });
  if (sub) addText(slide, sub, { left: 42, top: 144, width: 920, height: 52 }, { fontSize: 20, color: C.muted });
  if (n) addFooter(slide, n);
}

function bulletList(slide, items, x, y, w, gap = 45) {
  items.forEach((item, i) => {
    const top = y + i * gap;
    addBox(slide, { left: x, top: top + 8, width: 8, height: 8 }, C.accent, "none");
    addText(slide, item, { left: x + 24, top, width: w - 24, height: 34 }, { fontSize: 23, color: C.ink });
  });
}

function card(slide, label, body, x, y, w, h, accent = false) {
  addBox(slide, { left: x, top: y, width: w, height: h }, accent ? C.softAccent : C.panel, accent ? C.accent : C.rule);
  if (label) addText(slide, label, { left: x + 18, top: y + 18, width: w - 36, height: 30 }, { fontSize: 17, bold: true, color: accent ? C.accent : C.muted });
  addText(slide, body, { left: x + 18, top: y + (label ? 58 : 16), width: w - 36, height: h - (label ? 70 : 28) }, { fontSize: label ? 24 : 17, color: C.ink, bold: !label });
}

function processStep(slide, label, x, y, w = 142) {
  addBox(slide, { left: x, top: y, width: w, height: 84 }, "white", C.rule);
  addText(slide, label, { left: x + 12, top: y + 22, width: w - 24, height: 42 }, { fontSize: 18, bold: true, alignment: "center" });
}

function addScreenshot(slide, image, pos, alt, crop) {
  addBox(slide, { left: pos.left - 10, top: pos.top - 10, width: pos.width + 20, height: pos.height + 20 }, "white", C.rule);
  slide.images.add({
    blob: image,
    contentType: "image/png",
    alt,
    fit: "contain",
    ...(crop ? { crop } : {}),
    position: pos,
  });
}

function makeDeck(assets) {
  const p = Presentation.create({ slideSize: { width: W, height: H } });

  let s = p.slides.add();
  s.background.fill = C.paper;
  addText(s, "Carbon Program\nService Blueprint", { left: 42, top: 62, width: 700, height: 160 }, { fontSize: 58, bold: true });
  addText(s, "Mapping a multi-year enterprise service across growers, dealers, field teams, operations, finance, and digital platforms.", { left: 42, top: 250, width: 640, height: 88 }, { fontSize: 24, color: C.muted });
  addBox(s, { left: 782, top: 54, width: 456, height: 540 }, C.panel, "none");
  ["Grower", "Dealer", "Field team", "Operations", "Finance", "Digital systems"].forEach((label, i) => {
    addBox(s, { left: 820 + (i % 2) * 198, top: 110 + Math.floor(i / 2) * 118, width: 156, height: 64 }, i === 0 ? C.softAccent : "white", i === 0 ? C.accent : C.rule);
    addText(s, label, { left: 834 + (i % 2) * 198, top: 130 + Math.floor(i / 2) * 118, width: 128, height: 26 }, { fontSize: 18, bold: true, alignment: "center", color: i === 0 ? C.accent : C.ink });
  });
  addText(s, "Senior UX Designer | Service Design | UX Research | Systems Thinking", { left: 42, top: 606, width: 720, height: 28 }, { fontSize: 18, bold: true });

  s = p.slides.add(); s.background.fill = C.paper;
  title(s, "The program had many owners, but no shared view", "Each function understood its own work. No one could see the full customer journey across a process lasting more than a year.", 2);
  bulletList(s, ["Duplicated work across teams", "Disconnected systems and handoffs", "Inconsistent grower communication", "Unclear ownership at key moments", "Poor visibility into customer progress"], 84, 238, 520, 52);
  addBox(s, { left: 724, top: 224, width: 424, height: 270 }, C.panel, "none");
  addText(s, "Core problem", { left: 756, top: 254, width: 220, height: 26 }, { fontSize: 18, bold: true, color: C.accent });
  addText(s, "The experience looked like enrollment to customers, but operated like a long-running service ecosystem behind the scenes.", { left: 756, top: 302, width: 340, height: 120 }, { fontSize: 28, bold: true });

  s = p.slides.add(); s.background.fill = C.paper;
  title(s, "The goal was a single source of truth for the service", "The blueprint needed to document the visible journey and the hidden operational work that made it possible.", 3);
  card(s, "Customer", "Understand every touchpoint and expectation.", 64, 240, 250, 178, true);
  card(s, "Operations", "Reveal hidden work, ownership gaps, and handoffs.", 356, 240, 250, 178);
  card(s, "Systems", "Map dependencies across CRM, DMP, automation, and payment tools.", 648, 240, 250, 178);
  card(s, "Alignment", "Create a shared foundation for process improvements.", 940, 240, 250, 178);

  s = p.slides.add(); s.background.fill = C.paper;
  title(s, "My role covered research, facilitation, synthesis, and leadership alignment", "I worked with two additional UX designers across three design sprints.", 4);
  bulletList(s, ["Planned research activities", "Interviewed stakeholders across business units", "Facilitated service blueprint workshops", "Mapped frontstage and backstage processes"], 70, 236, 480, 50);
  bulletList(s, ["Identified system dependencies", "Synthesized operational pain points", "Validated findings with teams", "Presented recommendations to leadership"], 690, 236, 480, 50);

  s = p.slides.add(); s.background.fill = C.paper;
  title(s, "Discovery moved from individual views to a validated service map", "The work combined interviews, synthesis, blueprinting, and review cycles with the teams responsible for the service.", 5);
  const steps = ["Research", "Stakeholder\ninterviews", "Journey\nmapping", "Affinity\nmapping", "Blueprint\ncreation", "Validation\nworkshops", "Leadership\nreviews"];
  steps.forEach((label, i) => processStep(s, label, 58 + i * 171, 280, 134));
  for (let i = 0; i < steps.length - 1; i++) addRule(s, 192 + i * 171, 322, 37, C.accent, 2);
  addText(s, "Participants included growers, dealers, field representatives, operations, finance, product, customer support, and leadership.", { left: 120, top: 476, width: 1040, height: 52 }, { fontSize: 23, color: C.muted, alignment: "center" });

  s = p.slides.add(); s.background.fill = C.paper;
  title(s, "The blueprint made the whole service visible at once", "It captured customer-facing moments, internal work, systems, handoffs, waits, and decision points across the full program lifecycle.", 6);
  addScreenshot(s, assets.overview, { left: 68, top: 222, width: 1144, height: 374 }, "Current state service blueprint overview", { left: 0, top: 0.02, right: 0, bottom: 0.08 });

  s = p.slides.add(); s.background.fill = C.paper;
  title(s, "Two entry paths created different expectations before converging", "Self-guided discovery and advisor-led discovery introduced different expectations before the journey moved into the same enrollment workflow.", 7);
  addScreenshot(s, assets.discovery, { left: 74, top: 214, width: 1132, height: 382 }, "Service blueprint discovery paths", { left: 0.03, top: 0.03, right: 0.02, bottom: 0.06 });

  s = p.slides.add(); s.background.fill = C.paper;
  title(s, "Enrollment revealed how quickly digital steps became operational work", "Account creation, contract signing, FieldView setup, and DMP updates created a chain of visible and invisible work.", 8);
  addScreenshot(s, assets.enrollment, { left: 66, top: 214, width: 1148, height: 382 }, "Service blueprint enrollment workflow", { left: 0, top: 0.04, right: 0.02, bottom: 0.16 });

  s = p.slides.add(); s.background.fill = C.paper;
  title(s, "Most of the service happened where customers could not see it", "The blueprint separated the simple external experience from the dense internal ecosystem required to deliver it.", 9);
  addText(s, "Customer sees", { left: 104, top: 214, width: 420, height: 34 }, { fontSize: 26, bold: true });
  addText(s, "Customer never sees", { left: 700, top: 214, width: 420, height: 34 }, { fontSize: 26, bold: true });
  ["Website", "Emails", "Enrollment", "Payments"].forEach((t, i) => card(s, "", t, 94, 276 + i * 76, 380, 52, i === 0));
  ["Marketing automation", "CRM and DMP", "Verification", "Operations approvals", "Finance and legal", "Field scheduling"].forEach((t, i) => card(s, "", t, 670 + (i % 2) * 244, 276 + Math.floor(i / 2) * 92, 214, 58, i === 2));

  s = p.slides.add(); s.background.fill = C.paper;
  title(s, "Waiting was often a seasonal dependency, not a broken experience", "Post-harvest and data collection steps showed why customer quiet periods could represent expected agricultural timing.", 10);
  addScreenshot(s, assets.postHarvest, { left: 74, top: 214, width: 1132, height: 382 }, "Service blueprint post-harvest and data collection workflow", { left: 0, top: 0.12, right: 0, bottom: 0.08 });

  s = p.slides.add(); s.background.fill = C.paper;
  title(s, "Decision points exposed the real workflow complexity", "Payment eligibility depended on approvals, verification outcomes, reconciliation loops, and re-review across teams.", 11);
  addScreenshot(s, assets.payment, { left: 86, top: 214, width: 1108, height: 382 }, "Service blueprint payment and reconciliation workflow", { left: 0, top: 0.09, right: 0, bottom: 0.06 });

  s = p.slides.add(); s.background.fill = C.paper;
  title(s, "Verification connected back-office data to customer readiness", "Data review, soil collection, payout readiness, and missing documentation created multiple points where ownership had to be explicit.", 12);
  addScreenshot(s, assets.verification, { left: 86, top: 214, width: 1108, height: 382 }, "Service blueprint data verification workflow", { left: 0, top: 0.04, right: 0, bottom: 0.08 });

  s = p.slides.add(); s.background.fill = C.paper;
  title(s, "The findings grouped into process, technology, and experience themes", "This framing helped teams see which issues were operational, which were system-driven, and which were felt by the customer.", 13);
  card(s, "Process", "Duplicated activities\nManual handoffs\nUndefined ownership", 80, 238, 330, 230, true);
  card(s, "Technology", "Systems lacked integration\nData was not shared\nCustomer status was hard to determine", 475, 238, 330, 230);
  card(s, "Customer experience", "Long periods without communication\nMultiple entry points\nInconsistent expectations", 870, 238, 330, 230);

  s = p.slides.add(); s.background.fill = C.paper;
  title(s, "The work gave the organization a foundation for service improvement", "Even without a single product release metric, the service blueprint created practical alignment and exposed where improvements should start.", 14);
  bulletList(s, ["Created the organization's first end-to-end service blueprint", "Aligned business units around one shared customer journey", "Revealed duplicated operational work", "Identified automation opportunities", "Improved visibility into cross-functional dependencies", "Established a foundation for future service improvements"], 130, 218, 900, 48);

  s = p.slides.add(); s.background.fill = C.paper;
  addText(s, "Portfolio takeaway", { left: 42, top: 58, width: 440, height: 44 }, { fontSize: 24, color: C.accent, bold: true });
  addText(s, "This was not only a map of a service. It was a shared operating model for teams that had been optimizing separate pieces of one customer journey.", { left: 42, top: 150, width: 970, height: 190 }, { fontSize: 47, bold: true });
  addText(s, "The case study demonstrates service design, systems thinking, research synthesis, facilitation, and the ability to make enterprise complexity usable.", { left: 42, top: 462, width: 820, height: 70 }, { fontSize: 24, color: C.muted });
  addBox(s, { left: 1008, top: 94, width: 160, height: 160 }, C.softAccent, C.accent);
  addText(s, "15", { left: 1032, top: 122, width: 112, height: 70 }, { fontSize: 62, bold: true, color: C.accent, alignment: "center" });
  addText(s, "slides", { left: 1032, top: 202, width: 112, height: 30 }, { fontSize: 20, bold: true, color: C.accent, alignment: "center" });
  addFooter(s, 15);

  return p;
}

async function main() {
  await fs.mkdir(PREVIEW_DIR, { recursive: true });
  const assets = await loadAssets();
  const presentation = makeDeck(assets);
  for (const [index, slide] of presentation.slides.items.entries()) {
    const stem = `slide-${String(index + 1).padStart(2, "0")}`;
    await writeBlob(`${PREVIEW_DIR}/${stem}.png`, await presentation.export({ slide, format: "png", scale: 1 }));
    await fs.writeFile(`${PREVIEW_DIR}/${stem}.layout.json`, await (await slide.export({ format: "layout" })).text());
  }
  await writeBlob(`${PREVIEW_DIR}/deck-montage.webp`, await presentation.export({ format: "webp", montage: true, scale: 1 }));
  const pptx = await PresentationFile.exportPptx(presentation);
  await pptx.save(OUT);
  console.log(OUT);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
