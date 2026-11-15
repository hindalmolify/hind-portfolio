/* ==========================================================================
   Hind Almolify — Portfolio · script.js
   1) Projects data (popup content)     4) Mobile menu
   2) Project popup                      5) Language switch (EN / AR) + translations
   3) Project filters                    6) Certificate viewers
   ========================================================================== */

/* --------------------------------------------------------------------------
   1) Projects data — shown inside the popup when a project card is clicked.
      The key must match the card's data-project attribute in index.html.
   -------------------------------------------------------------------------- */
const projects = {
  "siyaq": {
    "label": "DATA ANALYTICS / POWER BI",
    "title": "SIYAQ Sales Dashboard",
    "description": "An interactive sales analytics dashboard developed using Excel and Power BI. It presents key performance indicators and enables exploration of sales performance across time, countries, and products.",
    "bullets": [
      "Prepared and organized sales data for reporting.",
      "Created KPI cards for revenue, profit, units sold, and profit margin.",
      "Built interactive visuals and year/country filters to support comparisons."
    ],
    "tags": [
      "Excel",
      "Power BI",
      "Data Visualization"
    ],
    "image": "assets/images/siyaq-dashboard.jpg"
  },
  "sports": {
    "label": "DIGITAL SOLUTIONS / VOLUNTEER PROJECT",
    "title": "University Sports Club Platform",
    "description": "Developed a digital membership website for a university sports club. The website reads information from Supabase so changes to database records are reflected on the website without manually editing its content.",
    "bullets": [
      "Connected the website to a managed Supabase database.",
      "Displayed updated membership information from the database.",
      "Reduced repetitive manual updates to the website."
    ],
    "tags": [
      "Supabase",
      "Web Development",
      "Database Integration"
    ],
    "image": "assets/images/sports-club-platform.jpg",
    "extraImage": "assets/images/sports-club-platform-2.jpg"
  },
  "manara": {
    "label": "INNOVATION / TEAM PROJECT",
    "title": "MANARA",
    "description": "A collaborative institutional innovation management platform project designed to bring idea submission, review, documentation, and progress tracking into one structured digital experience.",
    "bullets": [
      "Contributed to developing the digital solution as part of a team.",
      "Helped structure the journey of ideas through review and follow-up.",
      "Focused on digitizing workflows; automated stage transitions are not claimed."
    ],
    "tags": [
      "Digital Workflows",
      "Team Collaboration",
      "Innovation"
    ],
    "image": "assets/images/manara-logo.jpg"
  },
  "forecast": {
    "label": "DATA ANALYTICS / STC × MISK VIRTUAL WORK EXPERIENCE",
    "title": "Viewing Hours Analysis & Forecasting",
    "description": "A Python-based analytics project completed during a data analytics virtual work experience in collaboration with stc and Misk.",
    "bullets": [
      "Analyzed more than one million records.",
      "Developed a Prophet-based forecast of viewing hours for a 60-day horizon.",
      "Presented visualizations and analytical findings."
    ],
    "tags": [
      "Python",
      "Prophet",
      "Time Series",
      "Data Analysis"
    ],
    "image": "assets/images/viewing-hours-forecast.jpg",
    "extraImage": "assets/images/viewing-hours-forecast-2.jpg"
  }
};

/* --------------------------------------------------------------------------
   2) Project popup
   -------------------------------------------------------------------------- */
const dialog = document.getElementById('projectDialog');
const dialogContent = document.getElementById('dialogContent');

document.querySelectorAll('[data-project]').forEach((button) => {
  button.addEventListener('click', () => {
    const p = projects[button.dataset.project];
    dialogContent.innerHTML = `<div class="dialog-inner"><div class="section-kicker">${p.label}</div><h2 id="dialogTitle">${p.title}</h2><p>${p.description}</p>${p.image ? `<img src="${p.image}" alt="${p.title} visual">` : ''}${p.extraImage ? `<img src="${p.extraImage}" alt="Additional sports club project visual">` : ''}<h3>Highlights</h3><ul>${p.bullets.map((b) => `<li>${b}</li>`).join('')}</ul><div class="tags">${p.tags.map((t) => `<span>${t}</span>`).join('')}</div></div>`;
    dialog.showModal();
  });
});

document.getElementById('closeDialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (e) => {
  if (e.target === dialog) dialog.close();
});

/* --------------------------------------------------------------------------
   3) Project filters (data-filter on the buttons ↔ data-category on the cards)
   -------------------------------------------------------------------------- */
document.querySelectorAll('.filter').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach((x) => x.classList.remove('active'));
    button.classList.add('active');
    document.querySelectorAll('.project-card').forEach((card) => {
      card.classList.toggle('hidden', button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter);
    });
  });
});

/* --------------------------------------------------------------------------
   4) Mobile menu
   -------------------------------------------------------------------------- */
const menu = document.getElementById('menu');
const nav = document.getElementById('nav');

menu.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
  menu.textContent = open ? '✕' : '☰';
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
    menu.textContent = '☰';
  });
});

/* --------------------------------------------------------------------------
   5) Language switch (English / Arabic)
      The page is written in English. In Arabic mode every text on the page is
      looked up in `translations` below: the KEY is the exact English text and
      the VALUE is its Arabic translation. If you edit an English text in
      index.html (or in `projects` above), update its key here too.
   -------------------------------------------------------------------------- */
const translations = {
  "Media & Graphic Design Member · 2025": "عضو في الإعلام والتصميم · 2025",
  "Web Developer · 2026": "مطورة موقع الويب · 2026",
  "Innovation & Entrepreneurship Unit": "وحدة الابتكار وريادة الأعمال",
  "Chair of the Media Committee": "رئيسة اللجنة الإعلامية",
  "Part of the College of Computer and Information Sciences": "تابعة لكلية الحاسب والمعلومات",
  "University Sports Club Platform": "منصة النادي الرياضي الجامعي",
  "Viewing Hours Analysis & Forecasting": "تحليل ساعات المشاهدة والتنبؤ بها",
  "MANARA": "منارة",
  "An interactive sales analytics dashboard developed using Excel and Power BI. It presents key performance indicators and enables exploration of sales performance across time, countries, and products.": "لوحة معلومات تفاعلية لتحليل المبيعات طُوّرت باستخدام Excel وPower BI. تعرض مؤشرات الأداء الرئيسية وتتيح استكشاف أداء المبيعات عبر الزمن والدول والمنتجات.",
  "Developed a digital membership website for a university sports club. The website reads information from Supabase so changes to database records are reflected on the website without manually editing its content.": "طورت موقعًا رقميًا لعضويات نادٍ رياضي جامعي. يقرأ الموقع بياناته من Supabase، فتنعكس أي تغييرات في قاعدة البيانات عليه دون الحاجة إلى تعديل محتواه يدويًا.",
  "A collaborative institutional innovation management platform project designed to bring idea submission, review, documentation, and progress tracking into one structured digital experience.": "مشروع تعاوني لمنصة إدارة الابتكار المؤسسي، صُمم ليجمع تقديم الأفكار ومراجعتها وتوثيقها ومتابعة تقدمها في تجربة رقمية واحدة منظمة.",
  "A Python-based analytics project completed during a data analytics virtual work experience in collaboration with stc and Misk.": "مشروع تحليلي بلغة Python أُنجز خلال تجربة العمل الافتراضي في تحليل البيانات بالتعاون بين stc ومسك.",
  "Contributed to developing the digital solution as part of a team.": "ساهمت في تطوير الحل الرقمي ضمن فريق العمل.",
  "Helped structure the journey of ideas through review and follow-up.": "ساعدت في تنظيم رحلة الأفكار عبر مراحل المراجعة والمتابعة.",
  "Focused on digitizing workflows; automated stage transitions are not claimed.": "ركزت على رقمنة مسارات العمل، دون ادّعاء أتمتة الانتقال بين المراحل.",
  "Data Visualization": "عرض البيانات بصريًا",
  "Database Integration": "ربط قواعد البيانات",
  "Digital Workflows": "مسارات العمل الرقمية",
  "Team Collaboration": "العمل الجماعي",
  "Time Series": "السلاسل الزمنية",
  "Data Analysis": "تحليل البيانات",
  "Web Development": "تطوير المواقع",
  "Product Development": "تطوير المنتجات",
  "Workflows": "مسارات العمل",
  "Forecasting": "التنبؤ",
  "View certificate ↗": "عرض الشهادة ↗",
  "CERTIFICATION": "شهادة",
  "IBM SkillsBuild — AI Experiential Learning Lab: Industry Immersion": "IBM SkillsBuild — مختبر التعلم التجريبي للذكاء الاصطناعي: الانغماس الصناعي",
  "IBM SkillsBuild · 10-week program": "IBM SkillsBuild · برنامج مدته 10 أسابيع",
  "Completed a 10-week applied AI industry immersion program, including the team MediaLens prototype.": "أكملت برنامجًا تطبيقيًا في الذكاء الاصطناعي مدته 10 أسابيع، تضمن العمل الجماعي على نموذج MediaLens الأولي.",
  "Data Analytics Virtual Work Experience — STC × Misk": "تجربة العمل الافتراضي في تحليل البيانات — STC × مسك",
  "Misk Foundation · stc · 7 hours": "مؤسسة مسك · stc · 7 ساعات",
  "Completed a virtual work experience in data analytics covering user behavior analysis, machine learning, prediction, and data visualization.": "أكملت تجربة عمل افتراضية في تحليل البيانات شملت تحليل سلوك المستخدم وتعلم الآلة والتنبؤ وعرض البيانات.",
  "Awards": "الجوائز",
  "03 / ACHIEVEMENTS & AWARDS": "03 / الإنجازات والجوائز",
  "First place.": "المركز الأول.",
  "Digital innovation.": "في الابتكار الرقمي.",
  "MANARA — Digital & Open Innovation Hackathon": "منارة — هاكثون الابتكار الرقمي والمفتوح",
  "Organized by Majmaah University in collaboration with King Abdullah City for Atomic and Renewable Energy (K.A.CARE).": "بتنظيم جامعة المجمعة بالتعاون مع مدينة الملك عبدالله للطاقة الذرية والمتجددة.",
  "Team achievement · MANARA project": "إنجاز جماعي · مشروع منارة",
  "Team achievement · MANARA project · 28 June 2026": "إنجاز جماعي · مشروع منارة · ٢٨ يونيو ٢٠٢٦",
  "04 / EXPERIENCE & LEARNING": "04 / الخبرات والتعلّم",
  "06 / CONNECT": "06 / التواصل",
  "About": "عني",
  "Projects": "المشاريع",
  "Experience": "الخبرات",
  "Contact": "التواصل",
  "Download CV ↗": "تحميل السيرة ↗",
  "PORTFOLIO / 2026": "معرض الأعمال / 2026",
  "OPEN TO OPPORTUNITIES": "متاحة للفرص",
  "DATA ANALYTICS · DIGITAL SOLUTIONS": "تحليل البيانات · الحلول الرقمية",
  "Turning data": "تحويل البيانات",
  "into ": "إلى ",
  "clarity.": "رؤية واضحة.",
  "Explore my work": "استعرض أعمالي",
  "Get in touch ↗": "تواصل معي ↗",
  "ANALYZE": "أحلّل",
  "BUILD": "أطوّر",
  "IMPROVE": "أحسّن",
  "BASED IN SAUDI ARABIA": "المملكة العربية السعودية",
  "SCROLL TO EXPLORE ↓": "مرّر للاستكشاف ↓",
  "01 / INTRODUCTION": "01 / نبذة",
  "Curious about the": "أبحث عن",
  "why": "السبب",
  " behind the numbers.": " وراء الأرقام.",
  "02 / SELECTED WORK": "02 / أعمال مختارة",
  "Projects that": "مشاريع",
  "tell a story.": "تحكي قصة.",
  "All projects": "كل المشاريع",
  "Data Analytics": "تحليل البيانات",
  "Digital Solutions": "الحلول الرقمية",
  "Innovation": "الابتكار",
  "03 / EXPERIENCE & LEARNING": "03 / الخبرات والتعلم",
  "Always learning.": "أتعلّم باستمرار.",
  "Always building.": "وأطبّق ما أتعلّمه.",
  "Have a project": "عندك مشروع",
  "in ": "في ",
  "mind?": "بالك؟",
  "Email me": "راسلني",
  "GitHub": "GitHub",
  "Download CV": "تحميل السيرة",
  "BACK TO TOP ↑": "العودة للأعلى ↑",
  "VOLUNTEER WORK": "عمل تطوعي",
  "TEAM PROJECT": "مشروع جماعي",
  "POWER BI DASHBOARD": "لوحة Power BI",
  "REAL WEBSITE SCREENSHOT": "صورة من الموقع الفعلي",
  "MANARA IDENTITY": "هوية منارة",
  "TEMPORARY VISUAL": "رسم مؤقت",
  "SIYAQ Sales Dashboard": "لوحة سياق للمبيعات",
  "Sports Club Platform": "منصة النادي الرياضي",
  "Viewing Hours Forecast": "التنبؤ بساعات المشاهدة",
  "01 / DATA ANALYTICS": "01 / تحليل البيانات",
  "02 / DIGITAL SOLUTIONS": "02 / حلول رقمية",
  "03 / INNOVATION": "03 / ابتكار",
  "04 / DATA ANALYTICS": "04 / تحليل البيانات",
  "Highlights": "أبرز الأعمال",
  "I'm Hind Almolify, a Computer Science student specializing in Data Science. I explore how data, thoughtful design, and digital tools can make everyday work more effective.": "أنا هند المليفي، طالبة علوم حاسب بمسار علم البيانات. أهتم بتوظيف البيانات والتصميم والحلول الرقمية لتسهيل العمل وتحسينه.",
  "My work brings together data analysis, visual storytelling, and practical web development. From interactive dashboards to database-connected platforms, I enjoy making complex information easier to understand and use.": "تجمع أعمالي بين تحليل البيانات وعرضها بصريًا وتطوير المواقع، من لوحات المعلومات التفاعلية إلى المنصات المرتبطة بقواعد البيانات.",
  "Currently pursuing a B.Sc. in Computer Science (Data Science Track) at Majmaah University, with experience from collaborative training and volunteer projects.": "أدرس البكالوريوس في علوم الحاسب (مسار علم البيانات) بجامعة المجمعة، ولدي تجارب في التدريب والمشاريع التطوعية.",
  "Selected work in analytics, digital platforms, and innovation. Select a project to explore the details.": "مجموعة من أعمالي في التحليل والمنصات الرقمية والابتكار. اضغط على أي مشروع لعرض التفاصيل.",
  "Transforming sales data into a clear view of revenue, profit, trends, and product performance.": "تحويل بيانات المبيعات إلى مؤشرات واضحة للإيرادات والأرباح والاتجاهات وأداء المنتجات.",
  "A database-connected membership website with automatically reflected data updates.": "موقع عضويات مرتبط بقاعدة بيانات تظهر تحديثاتها تلقائيًا.",
  "Helping organize the journey of innovative ideas through a structured digital workflow.": "تنظيم رحلة الأفكار الابتكارية عبر مسار عمل رقمي واضح.",
  "Python-based analysis and a 60-day Prophet forecast during virtual work experience.": "تحليل باستخدام Python والتنبؤ لمدة 60 يومًا باستخدام Prophet ضمن تجربة العمل الافتراضي.",
  "Analysis, visualization, and forecasting on a project dataset.": "تحليل البيانات وعرضها بصريًا والتنبؤ باستخدام بيانات المشروع.",
  "IBM SkillsBuild — AI Industry Immersion Bootcamp": "معسكر IBM SkillsBuild للتجربة التطبيقية في الذكاء الاصطناعي",
  "Completed a 10-week applied AI program and collaborated on MediaLens, a prototype for turning social media data into insights. The project was not launched.": "تجربة جماعية في التعلم التطبيقي للذكاء الاصطناعي وتطوير نموذج أولي.",
  "Built a practical digital membership solution for the club.": "تطوير حل رقمي لإدارة عضويات النادي.",
  "Supported club communication and design work.": "المساهمة في التصميم والتواصل الإعلامي للنادي.",
  "I'm interested in opportunities where data and digital solutions make a meaningful difference.": "أهتم بالفرص التي توظف البيانات والحلول الرقمية لإحداث أثر عملي.",
  "Data Analytics Virtual Work Experience": "تجربة العمل الافتراضي في تحليل البيانات",
  "University Sports Club": "النادي الرياضي الجامعي",
  "TechHub Club": "نادي TechHub",
  "Vice Chair of the Media Committee · 2026": "نائبة رئيسة اللجنة الإعلامية · 2026",
  "Media Committee Member · 2025": "عضو اللجنة الإعلامية · 2025",
  "Supporting media committee coordination and communication activities.": "المساهمة في تنسيق أعمال اللجنة الإعلامية وأنشطتها الاتصالية.",
  "Contributed to the club’s media committee activities.": "المشاركة في أعمال وأنشطة اللجنة الإعلامية بالنادي.",
  "Volunteer Web Developer · 2026": "متطوعة في تطوير المواقع · 2026",
  "Media & Graphic Design Volunteer · 2025": "متطوعة في الإعلام والتصميم · 2025",
  "stc × Misk collaboration": "بالتعاون بين stc ومسك",
  "Industry Immersion · 10-week program": "برنامج تطبيقي · 10 أسابيع",
  "DATA ANALYTICS / POWER BI": "تحليل البيانات / Power BI",
  "DIGITAL SOLUTIONS / VOLUNTEER PROJECT": "الحلول الرقمية / مشروع تطوعي",
  "INNOVATION / TEAM PROJECT": "الابتكار / مشروع جماعي",
  "DATA ANALYTICS / STC × MISK VIRTUAL WORK EXPERIENCE": "تحليل البيانات / تجربة العمل الافتراضي stc × مسك",
  "Prepared and organized sales data for reporting.": "تجهيز بيانات المبيعات وتنظيمها لإعداد التقارير.",
  "Created KPI cards for revenue, profit, units sold, and profit margin.": "إنشاء مؤشرات للإيرادات والأرباح والوحدات وهامش الربح.",
  "Built interactive visuals and year/country filters to support comparisons.": "إنشاء رسوم تفاعلية وفلاتر للسنة والدولة.",
  "Connected the website to a managed Supabase database.": "ربط الموقع بقاعدة بيانات Supabase.",
  "Displayed updated membership information from the database.": "عرض بيانات العضوية المحدثة من قاعدة البيانات.",
  "Reduced repetitive manual updates to the website.": "تقليل الحاجة إلى تحديث محتوى الموقع يدويًا.",
  "Analyzed more than one million records.": "تحليل أكثر من مليون سجل.",
  "Developed a Prophet-based forecast of viewing hours for a 60-day horizon.": "إنشاء نموذج Prophet للتنبؤ بساعات المشاهدة لمدة 60 يومًا.",
  "Learning": "التطوير المهني",
  "05 / CERTIFICATIONS & PRACTICAL LEARNING": "05 / الشهادات والتطبيق العملي",
  "WORKSHOP · 13 JULY 2026": "ورشة · 13 يوليو 2026",
  "Learning by ": "التعلم من خلال ",
  "building.": "التطبيق.",
  "A focused workshop followed by hands-on exploration of AI-assisted website creation.": "ورشة تدريبية تبعها تطبيق عملي لتطوير المواقع بمساعدة أدوات الذكاء الاصطناعي.",
  "01 / PROFESSIONAL DEVELOPMENT": "01 / التطوير المهني",
  "Vibe Coding Workshop": "ورشة Vibe Coding",
  "Artificial Intelligence Pioneers · Summer Program": "فريق رواد الذكاء الاصطناعي · البرنامج الصيفي",
  "I attended a Vibe Coding workshop, where I learned to build websites with Claude by describing an idea and refining it step by step. This portfolio is a practical example of that approach, developed in the same way and improved further after the workshop.": "حضرت ورشة Vibe Coding، وتعلمت خلالها كيف أبني موقعًا بمساعدة Claude عن طريق وصف الفكرة وتطويرها خطوة بخطوة. وهذا البورتفوليو مثال تطبيقي على ذلك، طورته بنفس الأسلوب وواصلت تحسينه بعد الورشة.",
  "Explore this portfolio": "استعرضي هذا البورتفوليو",
  "View workshop certificate ↗": "عرض شهادة الورشة ↗",
  "AI-assisted Development": "التطوير بمساعدة الذكاء الاصطناعي",
  "Portfolio Prototyping": "نمذجة البورتفوليو",
  "Presented visualizations and analytical findings.": "عرض الرسوم البيانية والنتائج التحليلية."
};

// Longest keys first so long sentences are translated before short words.
const translationEntries = Object.entries(translations).sort((a, b) => b[0].length - a[0].length);

const LANGUAGE_STORAGE_KEY = 'hind-portfolio-lang';
let currentLanguage = 'en';
const englishText = new WeakMap(); // remembers the original English of every text node

function translateText(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    if (node.parentElement?.closest('script,style')) continue;
    const en = englishText.get(node) ?? node.nodeValue;
    englishText.set(node, en);
    if (currentLanguage === 'en') {
      node.nodeValue = en;
      continue;
    }
    let ar = en;
    for (const [from, to] of translationEntries) ar = ar.split(from).join(to);
    node.nodeValue = ar;
  }
}

function setLanguage(lang) {
  currentLanguage = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.body.classList.toggle('arabic', lang === 'ar');
  translateText(document.body);
  document.querySelector('#langToggle').textContent = lang === 'ar' ? 'English' : 'العربية';
  try { localStorage.setItem(LANGUAGE_STORAGE_KEY, lang); } catch (e) { /* storage unavailable */ }
}

// Language button (added to the top bar, before the mobile menu button)
const langButton = document.createElement('button');
langButton.id = 'langToggle';
langButton.className = 'lang-toggle';
langButton.type = 'button';
langButton.textContent = 'العربية';
document.querySelector('.topbar').insertBefore(langButton, document.querySelector('.menu'));
langButton.addEventListener('click', () => setLanguage(currentLanguage === 'en' ? 'ar' : 'en'));

// Translate the project popup every time its content is rebuilt.
const dialogObserver = new MutationObserver(() => {
  dialogObserver.disconnect();
  translateText(dialogContent);
  dialogObserver.observe(dialogContent, { childList: true, subtree: true });
});
dialogObserver.observe(dialogContent, { childList: true, subtree: true });

let savedLanguage = 'en';
try { savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) === 'ar' ? 'ar' : 'en'; } catch (e) { /* storage unavailable */ }
setLanguage(savedLanguage);

/* --------------------------------------------------------------------------
   6) Certificate viewers
   -------------------------------------------------------------------------- */
// 6a) Vibe Coding workshop certificate (fixed image inside #certOverlay)
const workshopOverlay = document.getElementById('certOverlay');

function openWorkshopCert() {
  workshopOverlay.classList.add('show');
  document.body.style.overflow = 'hidden';
}
function closeWorkshopCert() {
  workshopOverlay.classList.remove('show');
  document.body.style.overflow = '';
}

document.getElementById('openWorkshopCert').addEventListener('click', openWorkshopCert);
workshopOverlay.addEventListener('click', (e) => {
  if (e.target === workshopOverlay) closeWorkshopCert();
});
workshopOverlay.querySelector('.cert-close').addEventListener('click', closeWorkshopCert);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeWorkshopCert();
});

// 6b) IBM / stc-Misk certificates (image path comes from data-cert-src on the button)
(() => {
  const overlay = document.getElementById('extraCertOverlay');
  const image = document.getElementById('extraCertImage');

  document.querySelectorAll('.cert-view').forEach((button) => {
    button.addEventListener('click', () => {
      image.src = button.dataset.certSrc;
      image.alt = button.dataset.certTitle;
      overlay.classList.add('show');
      document.body.style.overflow = 'hidden';
    });
  });

  function close() {
    overlay.classList.remove('show');
    document.body.style.overflow = '';
    image.removeAttribute('src');
  }

  overlay.querySelector('.cert-close').addEventListener('click', close);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('show')) close();
  });
})();
