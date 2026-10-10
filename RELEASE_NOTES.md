# DEVI — The Journey Within (दशमहाविद्या)
## Official Release Notes — Version 1.0.0

**Release Tag:** `v1.0.0`  
**Release Date:** October 10, 2026  
**Build Target:** Production Distribution  
**Architecture:** Zero-Dependency Vanilla Web Stack (HTML5, SVG, CSS, ES6 JS)  

---

### 1. Project Purpose
**DEVI — The Journey Within (दशमहाविद्या)** is an animated, spiritual, and educational single-page web experience depicting an inner pilgrimage through the Ten Mahavidyas (Kali, Tara, Tripura Sundari, Bhuvaneshwari, Chhinnamasta, Bhairavi, Dhumavati, Bagalamukhi, Matangi, Kamala). 

The journey follows two traditional travelers—**Purush** and **Stree**—walking side by side as equal pilgrims through ten sacred gateways, collecting ten symbolic flowers of wisdom, reflecting upon practical life inquiries, and offering their insights at an eleventh sanctuary before returning to everyday life anchored in the Four Purusharthas (Dharma, Artha, Kama, Moksha).

---

### 2. Main Features
* **Ten Mahavidya Sanctuaries & Eleventh Return Sanctuary:**
  - Distinct architectural silhouettes, mandalas, sacred symbols, and color accents for each sanctuary.
  - Eleventh Sanctuary featuring the Pavamāna Vedic prayer and the Four Purusharthas.
* **Animated Character Rigging:**
  - Synchronized Purush and Stree vector character system.
  - Phase-specific choreography: walking approach, gate opening, Pranam prayer bow, flower reception, and final offering.
  - Phase-aware replay control with seamless coordinate alignment and zero position snapping.
* **Resilient Navigation & State Persistence:**
  - Deadlock-free transition engine using robust `try...finally` lifecycle management.
  - Non-linear path navigation allowing pilgrims to revisit previous sanctuaries without erasing furthest progress (`state.highestVisited`).
  - Automatic migration from legacy storage schemas.
* **Dual-Language Narration Engine:**
  - Opt-in Web Speech API narration in both English (`en-IN`) and Hindi (`hi-IN`).
  - Natural, reverent Hindi and English texts for entrance, all ten temples, and the final sanctuary.
  - Instantaneous audio cancellation on language change or navigation.
  - Graceful fallback to on-screen captions when system voice synthesis engines are unavailable.
* **Local Reflection Journaling:**
  - Private reflection input on each temple, saved strictly to the user's browser.
  - One-click print summary generator without external network calls.
  - Explicit confirmation-gated data deletion control.
* **Accessibility & Responsive Usability:**
  - WCAG 2.2 AA compliant with WCAG AAA color contrast ratios ($> 9.8:1$).
  - Responsive 5-column touch grid on screens $\le 680\text{px}$, guaranteeing $\ge 44 \times 44\text{px}$ touch targets across all mobile viewports (320px–1280px).
  - First-class support for `prefers-reduced-motion` and an explicit in-app motion toggle.

---

### 3. Supported Browsers & Runtimes
Tested and verified across modern evergreen desktop and mobile browsers:
* **Google Chrome / Chromium:** Version 110 or higher
* **Mozilla Firefox:** Version 110 or higher
* **Apple Safari / WebKit:** Version 16 or higher (macOS & iOS)
* **Microsoft Edge:** Version 110 or higher
* **Local Static Servers:** Any HTTP server (`python -m http.server`, `npx serve`, or direct file browsing where local storage permits).

---

### 4. Privacy & Security Architecture
* **Zero Remote Network Dependencies:** The application does not load external fonts, third-party libraries, CSS frameworks, or tracking scripts.
* **100% Client-Side Data Isolation:** Personal reflections never transmit across the network. All entries reside in `localStorage` under key `devi-journey-v1`.
* **Injection-Proof Rendering:** User inputs are strictly escaped via programmatic DOM methods and character entity translation.
* **Data Rights:** Users can purge all saved reflections with a single click via the privacy controls.

---

### 5. Scripture Attribution Policy
* **Durga Saptashati Verses:** All Sanskrit passages are verified against the standard 700-verse Gītā Press recension (Gorakhpur) with exact chapter and verse citations:
  1. *Śakti (Aparājitā Stuti / Devī Sūkta):* Chapter 5, vv. 32–34.
  2. *Buddhi (Aparājitā Stuti):* Chapter 5, vv. 20–22.
  3. *Maṅgala (Nārāyaṇī Stuti):* Chapter 11, v. 9.
* **Transparent Reused Verse Badging:** Temples reusing one of the three core passages clearly display an editorial badge explaining that the verse is selected for thematic contemplation rather than an individual canonical verse.
* **Canonical Distinction Disclaimer:** The pedagogical association between the Three Charitas and the Ten Mahavidyas is clearly labeled as `THEMATIC CONNECTION — EDITORIAL INTERPRETATION`. It explicitly notes that the Ten Mahavidyas form an independent tantric mandala, preserved separately from the Durga Saptashati narrative structure.
* **Upanishadic Attribution:** The final sanctuary inscription `तमसो मा ज्योतिर्गमय` is formally attributed to its canonical source: **Bṛhadāraṇyaka Upaniṣad 1.3.28 (Pavamāna Mantra)**.

---

### 6. Known Limitations
1. **Physical Voice Synthesis Availability:** The Web Speech API depends on the client operating system having installed speech engines (e.g., Google TTS, Apple Siri, or Microsoft Natural Voices). Where hardware voices are absent, synchronized on-screen captions provide the complete teaching.
2. **Origin-Specific Storage:** Browser `localStorage` is isolated per origin. Navigating via `http://localhost:8000` vs `http://127.0.0.1:8000` will maintain independent reflection stores.
3. **Print Dialog Pop-ups:** Reflection summary printing utilizes the native browser print dialogue (`window.open` + `window.print()`), requiring browser permission for pop-up windows.
