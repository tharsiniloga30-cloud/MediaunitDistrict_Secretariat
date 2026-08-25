function escapeHTML(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function listHTML(items) {
  return (items || []).map(item => `<li>${escapeHTML(item)}</li>`).join("");
}

function tagsHTML(items) {
  return `<div class="tag-row">${(items || [])
    .map(item => `<span class="tag">${escapeHTML(item)}</span>`)
    .join("")}</div>`;
}

function languagesHTML(items) {
  return `<div class="lang-row">${(items || [])
    .map(item => `<div class="lang-chip"><strong>${escapeHTML(item.lang)}</strong><span>${escapeHTML(item.level)}</span></div>`)
    .join("")}</div>`;
}

function experienceHTML(items) {
  return `<ul class="timeline">${(items || [])
    .map(item => `
      <li>
        <div class="t-period">${escapeHTML(item.period)}</div>
        <div class="t-role">${escapeHTML(item.role)}</div>
        <div class="t-place">${escapeHTML(item.place)}</div>
      </li>`)
    .join("")}</ul>`;
}

function qrSVG() {
  return `
    <svg viewBox="0 0 60 60" width="54" height="54" aria-hidden="true">
      <g fill="#071a3d">
        <rect x="4" y="4" width="14" height="14"/><rect x="8" y="8" width="6" height="6" fill="#fff"/>
        <rect x="42" y="4" width="14" height="14"/><rect x="46" y="8" width="6" height="6" fill="#fff"/>
        <rect x="4" y="42" width="14" height="14"/><rect x="8" y="46" width="6" height="6" fill="#fff"/>
        <rect x="22" y="4" width="4" height="4"/><rect x="30" y="4" width="4" height="4"/>
        <rect x="22" y="24" width="4" height="4"/><rect x="30" y="24" width="4" height="4"/>
        <rect x="22" y="32" width="4" height="4"/><rect x="38" y="24" width="4" height="4"/>
        <rect x="24" y="42" width="4" height="4"/><rect x="32" y="50" width="4" height="4"/>
        <rect x="42" y="34" width="4" height="4"/><rect x="50" y="42" width="4" height="4"/>
      </g>
    </svg>`;
}

function getStaff() {
  const id = new URLSearchParams(window.location.search).get("id");
  return staffData.find(staff => staff.id === id) || staffData[0];
}

function renderProfile(staff) {
  document.title = `${staff.name.en} | District Secretariat, Jaffna`;

  const profilePage = document.getElementById("profilePage");
  profilePage.dataset.theme = staff.theme || "royalNavy";

  profilePage.innerHTML = `
    <section class="profile-hero">
      <div class="profile-photo-column">
        <div class="profile-photo-frame">
          <img src="${escapeHTML(staff.photo)}" alt="${escapeHTML(staff.name.en)}">
        </div>
      </div>

      <div class="profile-identity">
        <span class="eyebrow">MEDIA UNIT • STAFF PROFILE</span>
        <h1>${escapeHTML(staff.name.en)}</h1>
        <div class="profile-name-ta">${escapeHTML(staff.name.ta)}</div>
        <div class="profile-name-si">${escapeHTML(staff.name.si)}</div>

        <div class="identity-divider"></div>

        <h2>${escapeHTML(staff.designation.en)}</h2>
        <div class="designation-ta">${escapeHTML(staff.designation.ta)}</div>
        <div class="designation-si">${escapeHTML(staff.designation.si)}</div>
        <div class="profile-section-tag">${escapeHTML(staff.section)}</div>
      </div>
    </section>

    <section class="details-layout">
      <div class="section-label designation-label">
        <span class="section-icon">◈</span>
        <strong>DESIGNATION</strong>
      </div>
      <div class="detail-content language-lines">
        <p><strong>தமிழ்:</strong> ${escapeHTML(staff.designation.ta)}</p>
        <p><strong>සිංහල:</strong> ${escapeHTML(staff.designation.si)}</p>
        <p><strong>English:</strong> ${escapeHTML(staff.designation.en)}</p>
      </div>

      <div class="section-label qualifications-label">
        <span class="section-icon">◆</span>
        <strong>QUALIFICATIONS</strong>
      </div>
      <div class="detail-content">
        <ul>${listHTML(staff.qualifications)}</ul>
      </div>

      <div class="section-label position-label">
        <span class="section-icon">✪</span>
        <strong>CURRENT POSITION /<br>SERVICE INFORMATION</strong>
      </div>
      <div class="detail-content">
        <p>${escapeHTML(staff.currentPosition)}</p>
      </div>

      <div class="section-label work-label">
        <span class="section-icon">▣</span>
        <strong>WORK DETAILS</strong>
      </div>
      <div class="detail-content">
        <ul>${listHTML(staff.workDetails)}</ul>
      </div>

      <div class="section-label responsibility-label">
        <span class="section-icon">♙</span>
        <strong>AREAS OF<br>RESPONSIBILITY</strong>
      </div>
      <div class="detail-content">
        <ul>${listHTML(staff.responsibilities)}</ul>
      </div>

      <div class="section-label expertise-label">
        <span class="section-icon">✦</span>
        <strong>AREAS OF<br>EXPERTISE</strong>
      </div>
      <div class="detail-content">
        ${tagsHTML(staff.expertise)}
      </div>

      <div class="section-label languages-label">
        <span class="section-icon">☰</span>
        <strong>LANGUAGE<br>SKILLS</strong>
      </div>
      <div class="detail-content">
        ${languagesHTML(staff.languages)}
      </div>

      <div class="section-label experience-label">
        <span class="section-icon">⏲</span>
        <strong>PROFESSIONAL<br>EXPERIENCE</strong>
      </div>
      <div class="detail-content">
        ${experienceHTML(staff.experience)}
      </div>

      <div class="section-label contact-label">
        <span class="section-icon">☎</span>
        <strong>OFFICIAL<br>CONTACT</strong>
      </div>
      <div class="detail-content contact-details">
        <p><span>Telephone</span><strong>${escapeHTML(staff.contact.office)}</strong></p>
        <p><span>Extension</span><strong>${escapeHTML(staff.contact.extension)}</strong></p>
        <p><span>Official Email</span><strong>${escapeHTML(staff.contact.email)}</strong></p>
      </div>
    </section>

    <div class="profile-bottom">
      <a class="back-button" href="index.html">← Back to Staff Directory</a>
      <div class="profile-qr">
        <div class="qr-box">${qrSVG()}</div>
        <div class="profile-unit">
          <strong>DISTRICT SECRETARIAT, JAFFNA</strong>
          <span>MEDIA UNIT | ஊடகப் பிரிவு | මාධ්‍ය ඒකකය</span>
        </div>
      </div>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  renderProfile(getStaff());
});
