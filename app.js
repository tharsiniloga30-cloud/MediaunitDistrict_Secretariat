function escapeHTML(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderStaff(list) {
  const grid = document.getElementById("staffGrid");

  if (!list.length) {
    grid.innerHTML = `
      <div class="empty-state">
        <h3>No staff found</h3>
        <p>Try another name or section.</p>
      </div>`;
    return;
  }

  grid.innerHTML = list.map(staff => `
    <article class="staff-card" data-theme="${escapeHTML(staff.theme || 'royalNavy')}">
      <div class="card-photo-wrap">
        <img src="${escapeHTML(staff.photo)}" class="card-photo"
             alt="${escapeHTML(staff.name.en)}">
        <span class="media-chip">MEDIA UNIT</span>
      </div>

      <div class="card-body">
        <div class="name-en">${escapeHTML(staff.name.en)}</div>
        <div class="name-ta">${escapeHTML(staff.name.ta)}</div>
        <div class="name-si">${escapeHTML(staff.name.si)}</div>

        <div class="card-divider"></div>

        <div class="card-designation">
          ${escapeHTML(staff.designation.en)}
        </div>

        <a class="profile-button" href="staff.html?id=${encodeURIComponent(staff.id)}">
          View Profile
        </a>
      </div>
    </article>
  `).join("");
}

function filterStaff() {
  const search = document.getElementById("searchInput").value.toLowerCase().trim();
  const section = document.getElementById("departmentFilter").value;

  const filtered = staffData.filter(staff => {
    const searchable = [
      staff.name.en,
      staff.name.ta,
      staff.name.si,
      staff.designation.en,
      staff.designation.ta,
      staff.designation.si,
      staff.section
    ].join(" ").toLowerCase();

    const matchesSearch = searchable.includes(search);
    const matchesSection = section === "all" || staff.section.toLowerCase().replaceAll(" ", "") === section.replaceAll(" ", "");

    return matchesSearch && matchesSection;
  });

  renderStaff(filtered);
}

document.addEventListener("DOMContentLoaded", () => {
  renderStaff(staffData);
  document.getElementById("searchInput").addEventListener("input", filterStaff);
  document.getElementById("departmentFilter").addEventListener("change", filterStaff);
});
