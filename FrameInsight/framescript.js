// Optional: put your published link here (GitHub Pages, etc.)
//const artifactLink = ""; // e.g. "https://YOUR-USERNAME.github.io/YOUR-REPO/"
//const topic = "Know People findings (Insights Sorting)";

// Edit these sections to match YOUR notes exactly.
const pages = {
  overview: {
    label: "Overview",
    html: `
      <h1>Insights Sorting summary</h1>
      <p>
        I grouped observations into themes and wrote short insights that explain the pattern.
      </p>
      <p><b>Key idea:</b> Different user types want different things, but they all judge success by whether the experience feels worth the effort.</p>
    `
  },

  personas: {
    label: "Personas",
    html: `
      <h1>Personas</h1>
      <ul>
        <li><b>Value-seeker</b>: wants the best deal.</li>
        <li><b>Planner</b>: wants fewer trips and better prep.</li>
        <li><b>Time-saver</b>: wants quick, low-effort actions.</li>
        <li><b>Service user</b>: uses extra services as the main reason.</li>
      </ul>
      <p><b>Insight:</b> Even with different motivations there is still one goal: make the experience feel worth it.</p>
    `
  },

  jobs: {
    label: "Jobs",
    html: `
      <h1>Jobs</h1>
      <ul>
        <li>Get essentials with less effort.</li>
        <li>Save money or feel confident about spending.</li>
        <li>Use add-on services when helpful.</li>
        <li>Switch between in-person and online when needed.</li>
      </ul>
      <p><b>Insight:</b> Users optimize for speed, confidence, and less repeating steps.</p>
    `
  },

  gains: {
    label: "Gains",
    html: `
      <h1>Gains</h1>
      <ul>
        <li>Lower costs or better value.</li>
        <li>Convenience and time saved.</li>
        <li>More options through services/features.</li>
      </ul>
      <p><b>Insight:</b> Convenience is part of the value, and not a bonus.</p>
    `
  },

  pains: {
    label: "Pains",
    html: `
      <h1>Pains</h1>
      <ul>
        <li>Upfront cost or barriers to access.</li>
        <li>Rules, limits, or unclear conditions.</li>
        <li>Extra effort (time, planning, confusion).</li>
      </ul>
      <p><b>Insight:</b> Value breaks down when effort or confusion gets too high.</p>
    `
  },

  insights: {
    label: "Insights",
    html: `
      <h1>Top insights and opportunities</h1>
      <p><b>Insight 1:</b> Users constantly between effort and payoff.</p>
      <p><b>Insight 2:</b> Clarity matters as much as the features.</p>

      <p><b>Opportunities:</b></p>
      <ul>
        <li>Make the value clearer like showing payoff, and not just features.</li>
        <li>Reduce the confusion with simple rules and previews.</li>
        <li>Support fast paths for common tasks.</li>
      </ul>
    `
  },

  method: {
    label: "Method",
    html: `
      <h1>How I used Insights Sorting</h1>
      <ul>
        <li>Wrote each observation as a short note.</li>
        <li>Grouped similar notes into themes.</li>
        <li>Named each theme with a clear label.</li>
        <li>Wrote 1 to 2 insight statements per theme.</li>
        <li>Added a few opportunities from the biggest pains.</li>
      </ul>
    `
  }
};

const order = ["overview", "personas", "jobs", "gains", "pains", "insights", "method"];

const tabsEl = document.getElementById("tabs");
const contentEl = document.getElementById("content");
const metaLeft = document.getElementById("metaLeft");
const metaRight = document.getElementById("metaRight");

function setActive(key) {
  [...tabsEl.querySelectorAll("button")].forEach(btn => {
    btn.setAttribute("aria-selected", btn.dataset.key === key ? "true" : "false");
  });

  contentEl.innerHTML = pages[key].html;

  metaLeft.textContent = `Topic: ${topic}`;
  metaRight.innerHTML = artifactLink
    ? `Artifact link: <a href="${artifactLink}" target="_blank" rel="noreferrer">${artifactLink}</a>`
    : `Artifact link: (add if you publish)`;
}

order.forEach((key) => {
  const btn = document.createElement("button");
  btn.className = "tab";
  btn.type = "button";
  btn.textContent = pages[key].label;
  btn.dataset.key = key;
  btn.setAttribute("aria-selected", "false");
  btn.addEventListener("click", () => setActive(key));
  tabsEl.appendChild(btn);
});

setActive("overview");
