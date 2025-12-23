"use strict";

/* ========= Helpers ========= */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

function escapeText(s) {
  return String(s).replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[ch]));
}

/* ========= Navigation (mobile) ========= */
const navToggle = $("#navToggle");
const navMenu = $("#navMenu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  $$("#navMenu a").forEach((a) => {
    a.addEventListener("click", () => {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* ========= Footer year ========= */
$("#year").textContent = String(new Date().getFullYear());

/* ========= Animated stats ========= */
function animateNumber(el, target, duration = 900) {
  const start = 0;
  const startTime = performance.now();
  function tick(now) {
    const p = Math.min((now - startTime) / duration, 1);
    const val = Math.floor(start + (target - start) * p);
    el.textContent = String(val);
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

const stat1 = $("#stat1"), stat2 = $("#stat2"), stat3 = $("#stat3");
if (stat1 && stat2 && stat3) {
  animateNumber(stat1, 18);
  animateNumber(stat2, 24);
  animateNumber(stat3, 1);
}

/* ========= Programs data ========= */
const programs = [
  {
    title: "برنامج (مبتدئ): زيادة الانتباه المشترك",
    level: "easy",
    goals: [
      "زيادة مدة تواصل العين لعدة ثوانٍ",
      "الاستجابة لاسم الطفل",
      "اتباع تعليمات بسيطة (واحدة/اثنتان)"
    ],
    steps: [
      "اختاري لعبة يحبها الطفل (فقاعات/سيارة/دمية).",
      "قولي اسم الطفل مرة واحدة بصوت هادئ، ثم انتظري ثانية.",
      "عند نظر الطفل لك، امنحيه اللعبة/شغّلي الفقاعات فورًا (تعزيز فوري).",
      "كرّري 10 محاولات يوميًا، ثم زيدي مدة الانتظار تدريجيًا."
    ],
    note: "إذا كان الطفل لا ينظر إطلاقًا، ابدئي بتعزيز أي اتجاه للوجه نحوك ولو لحظة."
  },
  {
    title: "برنامج (مبتدئ): تدريب مخارج الحروف (س/ش) بطريقة لطيفة",
    level: "easy",
    goals: [
      "تمييز الصوت الصحيح في كلمات قصيرة",
      "تقليل الاستبدال الصوتي تدريجيًا",
      "تكرار منظم دون إجهاد"
    ],
    steps: [
      "استخدمي مرآة صغيرة: الطفل يرى لسانه وشفتيه.",
      "ابدئي بالصوت منفردًا (ســـ) 5 مرات فقط.",
      "انتقلي لمقاطع: سا/سو/سي (3 دورات).",
      "ثم كلمات: سمك/سلم/سوق (اختاري 3 كلمات فقط).",
      "انتهي بجملة قصيرة: (أنا أحب السمك) حسب قدرة الطفل."
    ],
    note: "اجعلي التدريب قصيرًا (3–5 دقائق) يوميًا بدل جلسة طويلة تسبب رفضًا."
  },
  {
    title: "برنامج (متوسط): توسيع الجملة (كلمتين → ثلاث كلمات)",
    level: "mid",
    goals: [
      "تحويل طلبات الطفل إلى جمل أطول",
      "استخدام فعل + اسم + صفة/مكان",
      "تحسين وضوح المعنى"
    ],
    steps: [
      "إذا قال الطفل: (ماء) أعيدي صياغتها: (أريد ماء).",
      "إذا قال: (أريد ماء) وسّعي: (أريد ماء بارد).",
      "استخدمي صورًا أو أشياء حقيقية: ماء/عصير/تفاحة.",
      "امنحي الطلب بعد محاولة واحدة صحيحة فقط، مع تشجيع لفظي."
    ],
    note: "لا تُكرهي الطفل على تكرار زائد. هدفنا عادة لغوية تدريجية."
  },
  {
    title: "برنامج (متوسط): روتين يومي لتقليل نوبات الرفض",
    level: "mid",
    goals: [
      "تقليل المفاجآت",
      "رفع قابلية التعاون",
      "تحسين الانتقال بين الأنشطة"
    ],
    steps: [
      "اعملي جدول مصوّر (صورة: أكل/لعب/حمام/نوم).",
      "قبل الانتقال: أعطي تنبيه (بعد دقيقتين سننهي اللعب).",
      "استخدمي مؤقّت مرئي (Timer) إن توفر.",
      "ثبّتي قاعدة واحدة: الانتقال بهدوء = مكافأة صغيرة."
    ],
    note: "الروتين لا يعني الجمود، بل يعني توقع الخطوات الأساسية."
  },
  {
    title: "برنامج (متقدم): مهارات فهم التعليمات المتسلسلة",
    level: "adv",
    goals: [
      "اتباع تعليمات من 2–3 خطوات",
      "تحسين الذاكرة العاملة",
      "تقليل التشتت أثناء المهمة"
    ],
    steps: [
      "ابدئي بخطوتين: (هات الكرة ثم ضعها على الكرسي).",
      "استخدمي أدوات قليلة أمام الطفل لتقليل المشتتات.",
      "إذا أخطأ: أعيدي التعليمات ببطء مع الإشارة.",
      "بعد النجاح 5 مرات، أضيفي خطوة ثالثة تدريجيًا."
    ],
    note: "إذا كان الطفل يعاني من ADHD بدرجة عالية، اجعلي المهمة قصيرة جدًا مع تعزيز متكرر."
  },
  {
    title: "برنامج (متقدم): مهارات تواصل بديل (للأطفال غير اللفظيين)",
    level: "adv",
    goals: [
      "تقليل الإحباط الناتج عن عدم القدرة على التعبير",
      "تعليم الطفل طلب احتياجاته بطريقة واضحة",
      "رفع فرص ظهور الكلام لاحقًا"
    ],
    steps: [
      "اختاري 5 صور أساسية: ماء/أكل/لعب/حمام/مساعدة.",
      "علّمي الطفل تبادل الصورة مقابل الشيء (يدًا بيد في البداية).",
      "عززي فورًا بمجرد تبادل الصورة (بدون تأخير).",
      "توسيع الصور لاحقًا حسب الاحتياج."
    ],
    note: "التواصل البديل لا يمنع الكلام؛ غالبًا يقلل الضغط ويُحسّن فرص التطور."
  }
];

function renderPrograms(level = "all") {
  const grid = $("#programGrid");
  if (!grid) return;
  grid.innerHTML = "";

  const filtered = level === "all" ? programs : programs.filter(p => p.level === level);

  filtered.forEach((p) => {
    const card = document.createElement("article");
    card.className = "card";

    card.innerHTML = `
      <h3>${escapeText(p.title)}</h3>
      <p class="muted"><strong>أهداف البرنامج:</strong></p>
      <ul class="checklist">
        ${p.goals.map(g => `<li>${escapeText(g)}</li>`).join("")}
      </ul>
      <div class="divider"></div>
      <details>
        <summary><strong>خطوات التنفيذ (اضغط للعرض)</strong></summary>
        <ol class="ol">
          ${p.steps.map(s => `<li>${escapeText(s)}</li>`).join("")}
        </ol>
      </details>
      <p class="muted" style="margin-top:10px"><strong>تنبيه:</strong> ${escapeText(p.note)}</p>
    `;

    grid.appendChild(card);
  });

  // Add simple ordered list styling
  $$(".ol").forEach((ol) => {
    ol.style.color = "var(--muted)";
    ol.style.lineHeight = "1.9";
    ol.style.marginTop = "10px";
    ol.style.paddingRight = "18px";
  });
}

const levelFilter = $("#levelFilter");
if (levelFilter) {
  levelFilter.addEventListener("change", (e) => renderPrograms(e.target.value));
}
renderPrograms("all");

const printBtn = $("#printPrograms");
if (printBtn) {
  printBtn.addEventListener("click", () => window.print());
}

/* ========= Tips data ========= */
const tips = [
  { title:"قاعدة ذهبية: عززي أي محاولة تواصل", cat:"family", text:"أي محاولة من الطفل للتواصل (نظرة/إشارة/كلمة) تستحق تعزيزًا فوريًا: ابتسامة، مدح، أو منح الشيء المطلوب. التعزيز السريع يبني السلوك المرغوب." },
  { title:"تأخر الكلام: تجنبي الأسئلة الكثيرة", cat:"speech", text:"بدل (ما هذا؟ ما لونه؟) استخدمي وصفًا بسيطًا: (هذه كرة… كرة حمراء… نلعب بالكرة). الطفل يتعلم من النمذجة أكثر من الاستجواب." },
  { title:"اضطرابات النطق: التدريب القصير أفضل", cat:"speech", text:"التدريب 3–5 دقائق يوميًا أفضل من 30 دقيقة مرة أسبوعيًا. القصر يقلل الملل ويرفع الالتزام ويمنع الرفض." },
  { title:"طيف التوحد: ابدئي بالاهتمام المشترك", cat:"autism", text:"قبل الكلمات، ركّزي على مشاركة الاهتمام: لعبة قصيرة، تبادل نظرة، ثم تعزيز. الكلام يتطور أسرع عندما تتأسس مهارات الانتباه المشترك." },
  { title:"فرط الحركة: قللي المشتتات في وقت التدريب", cat:"behavior", text:"وقت التمرين يحتاج بيئة بسيطة: لعبة واحدة على الطاولة، إغلاق التلفاز، وتحديد مدة قصيرة بمؤقت مرئي. هذا يزيد فرص النجاح." },
  { title:"إرشاد أسري: روتين ثابت يقلل الصراخ", cat:"family", text:"الطفل يستجيب أفضل عندما يتوقع ما سيحدث. جدول يومي مبسط (صورة/كلمة) يقلل نوبات الرفض ويُسهل الانتقال بين الأنشطة." },
];

function catLabel(cat){
  switch(cat){
    case "speech": return "تخاطب";
    case "behavior": return "سلوك/انتباه";
    case "autism": return "طيف التوحد";
    case "family": return "إرشاد أسري";
    default: return "عام";
  }
}

function renderTips(search = "", cat = "all") {
  const grid = $("#tipsGrid");
  if (!grid) return;

  const s = search.trim().toLowerCase();

  const filtered = tips.filter(t => {
    const matchesText = !s || (t.title + " " + t.text).toLowerCase().includes(s);
    const matchesCat = cat === "all" || t.cat === cat;
    return matchesText && matchesCat;
  });

  grid.innerHTML = filtered.map(t => `
    <article class="tip">
      <h3>${escapeText(t.title)}</h3>
      <p>${escapeText(t.text)}</p>
      <span class="tag">${escapeText(catLabel(t.cat))}</span>
    </article>
  `).join("");

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="card"><p class="muted">لا توجد نتائج مطابقة. جرّبي كلمة بحث أخرى.</p></div>`;
  }
}

const tipSearch = $("#tipSearch");
const tipCategory = $("#tipCategory");
if (tipSearch) tipSearch.addEventListener("input", () => renderTips(tipSearch.value, tipCategory.value));
if (tipCategory) tipCategory.addEventListener("change", () => renderTips(tipSearch.value, tipCategory.value));
renderTips("", "all");

/* ========= Booking form ========= */
const PHONE_LOCAL = "01116484181";
const PHONE_INTL = "+20" + PHONE_LOCAL.replace(/^0/, "");
const WHATS_NUMBER = PHONE_INTL.replace(/\D/g, ""); // 201116484181

function setError(name, msg) {
  const el = document.querySelector(`[data-error-for="${name}"]`);
  if (el) el.textContent = msg || "";
}

function validate(form) {
  let ok = true;

  const parentName = form.parentName.value.trim();
  const childName = form.childName.value.trim();
  const childAge = form.childAge.value.trim();
  const serviceType = form.serviceType.value.trim();
  const preferredTime = form.preferredTime.value.trim();
  const country = form.country.value.trim();

  setError("parentName", "");
  setError("childName", "");
  setError("childAge", "");
  setError("serviceType", "");
  setError("preferredTime", "");
  setError("country", "");

  if (parentName.length < 2) { setError("parentName", "يرجى إدخال اسم ولي الأمر."); ok = false; }
  if (childName.length < 2) { setError("childName", "يرجى إدخال اسم الطفل."); ok = false; }
  const ageNum = Number(childAge);
  if (!Number.isFinite(ageNum) || ageNum < 1 || ageNum > 18) { setError("childAge", "يرجى إدخال عمر صحيح (1–18)."); ok = false; }
  if (!serviceType) { setError("serviceType", "يرجى اختيار نوع الخدمة."); ok = false; }
  if (preferredTime.length < 2) { setError("preferredTime", "يرجى كتابة وقت مناسب (تقريبي)."); ok = false; }
  if (country.length < 2) { setError("country", "يرجى كتابة الدولة/المدينة."); ok = false; }

  return ok;
}

function buildWhatsMessage(form) {
  const data = {
    "الاسم": form.parentName.value.trim(),
    "اسم الطفل": form.childName.value.trim(),
    "العمر": form.childAge.value.trim(),
    "الخدمة": form.serviceType.value.trim(),
    "وقت مناسب": form.preferredTime.value.trim(),
    "الدولة/المدينة": form.country.value.trim(),
    "ملاحظات": form.notes.value.trim() || "—"
  };

  const lines = [
    "مرحبًا د. صابرين، أرغب بحجز جلسة أونلاين. هذه بياناتي:",
    ...Object.entries(data).map(([k, v]) => `- ${k}: ${v}`),
    "",
    "شكرًا."
  ];

  return lines.join("\n");
}

function openWhatsApp(message) {
  const url = `https://wa.me/${WHATS_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener");
}

/* Local storage for saved bookings */
const STORAGE_KEY = "sabrin_bookings_v1";

function getSaved() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveBooking(obj) {
  const all = getSaved();
  all.unshift(obj);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all.slice(0, 12))); // keep latest 12
}

function renderSaved() {
  const box = $("#savedBookings");
  if (!box) return;

  const all = getSaved();
  if (!all.length) {
    box.innerHTML = `<div class="muted">لا توجد طلبات محفوظة بعد.</div>`;
    return;
  }

  box.innerHTML = all.map((b) => `
    <div class="savedItem">
      <strong>${escapeText(b.serviceType)} • ${escapeText(b.childName)} (${escapeText(String(b.childAge))} سنوات)</strong>
      <div class="muted">ولي الأمر: ${escapeText(b.parentName)} — ${escapeText(b.country)}</div>
      <div class="muted">وقت مقترح: ${escapeText(b.preferredTime)}</div>
      <div class="muted">تاريخ: ${escapeText(b.createdAt)}</div>
    </div>
  `).join("");
}

const bookingForm = $("#bookingForm");
const sendWhatsBtn = $("#sendWhatsApp");

if (bookingForm && sendWhatsBtn) {
  sendWhatsBtn.addEventListener("click", () => {
    if (!validate(bookingForm)) return;
    const msg = buildWhatsMessage(bookingForm);
    openWhatsApp(msg);
  });

  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validate(bookingForm)) return;

    const obj = {
      parentName: bookingForm.parentName.value.trim(),
      childName: bookingForm.childName.value.trim(),
      childAge: bookingForm.childAge.value.trim(),
      serviceType: bookingForm.serviceType.value.trim(),
      preferredTime: bookingForm.preferredTime.value.trim(),
      country: bookingForm.country.value.trim(),
      notes: bookingForm.notes.value.trim(),
      createdAt: new Date().toLocaleString("ar-EG")
    };

    saveBooking(obj);
    renderSaved();
    bookingForm.reset();
    alert("تم حفظ الطلب داخل الموقع على هذا الجهاز. يمكنك أيضًا إرساله عبر واتساب من زر الإرسال.");
  });
}

const clearSaved = $("#clearSaved");
if (clearSaved) {
  clearSaved.addEventListener("click", () => {
    localStorage.removeItem(STORAGE_KEY);
    renderSaved();
  });
}
renderSaved();

/* Quick WhatsApp buttons */
const fab = $("#fabWhats");
const quick = $("#whatsQuick");
const quickMsg = "مرحبًا د. صابرين، أود الاستفسار عن حجز جلسة أونلاين من فضلك.";

if (fab) fab.addEventListener("click", (e) => { e.preventDefault(); openWhatsApp(quickMsg); });
if (quick) quick.addEventListener("click", (e) => { e.preventDefault(); openWhatsApp(quickMsg); });
