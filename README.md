# 🌌 Project Axiom Analytics

[![Live Dashboard](https://img.shields.io/badge/Live-Dashboard-aa3bff?style=for-the-badge&logo=react&logoColor=white)](https://project-axiom-analytics.surge.sh)
[![Documentation Portal](https://img.shields.io/badge/Intelligence-Outpost-blueviolet?style=for-the-badge&logo=gitbook&logoColor=white)](https://project-axiom-portal.surge.sh)
[![GDPR Compliant](https://img.shields.io/badge/GDPR-Compliant-success?style=for-the-badge)](https://gdpr.eu)

### Ultra-premium, cookie-less, GDPR-compliant web analytics engine. 
Build for speed, beauty, and privacy-first intelligence. Project Axiom provides real-time traffic visualization without sacrificing user privacy.

---

## 🏛️ The Outpost
- **Live Dashboard**: [project-axiom-analytics.surge.sh](https://project-axiom-analytics.surge.sh)
- **Documentation & Playbook**: [project-axiom-portal.surge.sh](https://project-axiom-portal.surge.sh)

---

## ⚡ The Standard
- **Cookie-less**: No persistent identifiers, no tracking cookies.
- **Ultra-lightweight**: The ingestion script is under 1KB.
- **Privacy-first**: Anonymous data collection by design.
- **High-fidelity**: Real-time SVG charts and a glassmorphic dashboard.

---

## 🚀 One-Click Deploy 🏁
Deploy your own Axiom instance in seconds:
1. Fork this repository.
2. Add your `SURGE_TOKEN` and `SURGE_DOMAIN` to GitHub Secrets.
3. Push to `main` — your dashboard goes live instantly.

---

---

## 🛠️ Universal Ingestion
Embed the **Project Axiom** protocol into any website's `<head>` to begin real-time, privacy-hardened event capture.

```html
<script 
  defer 
  src="https://project-axiom-analytics.surge.sh/axiom.js" 
  data-id="YOUR_SITE_ID"
  data-endpoint="https://your-axiom-instance.surge.sh/api/collect">
</script>
```

### 🧠 The `data-id` Parameter
The `data-id` (UUID) is your unique protocol identifier. Upon ingestion, Axiom's Sentinel brain verifies the ID and begins streaming metrics to your high-fidelity dashboard. No cookies are set, and no private data (IP/UA) is ever recorded.

### ⚡ Advanced Events
Track custom interactions using the global `axiom` object:
```javascript
axiom.collect('conversion', { value: 99.00 });
```

---

## 🏗️ Architecture
- **Frontend**: Vite + React + Tailwind CSS v4
- **Charts**: Custom SVG Path/Rect components (Zero dependencies)
- **Deployment**: GitHub Actions + Surge.sh
- **Brain**: The Pilot (Logic), The Catalyst (Execution), and The Sentinel (Observability).

---

## 🛡️ License
MIT © 2026 Project Axiom. Build for speed, beauty, and massive viral adoption.
