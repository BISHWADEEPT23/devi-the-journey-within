# DEVI — The Journey Within (दशमहाविद्या)

Open `index.html` in any modern web browser. No build tools, external accounts, or server runtimes required.

## Build 10 Overview (Phases 02A, 02B & 02C Complete — Release Candidate)

### 1. Navigation and Progress Stability (Phase 02A)
- **Resolved ISS-01:** Navigation button deadlock remediated. A robust `try/finally` lifecycle in `choreograph()` ensures the Next and Back controls are restored after every transition, preventing lockup under standard motion.
- **Resolved ISS-02:** Furthest temple progression is now tracked and persisted via `state.highestVisited`. Pilgrims can jump back to earlier sanctuaries without erasing forward progress. Unlocked temples remain accessible, future temples stay locked, and Temple 1 is correctly disabled prior to journey commencement.
- **Data Migration:** Backward-compatible migration preserves legacy `localStorage` entries and keeps personal reflections intact on restart ("Begin again ↺").

### 2. Scriptural Integrity & Narration Remediation (Phase 02B)
- **Resolved ISS-04 (Hindi Narration Fallback):** Natural Hindi narration and synchronized captions implemented for the Entrance, Eleventh Sanctuary, and each Mahavidya temple. English mode uses English audio/captions; Hindi mode uses Hindi audio/captions. Speech cancels cleanly on navigation or language change without crashes if system voices are missing.
- **Resolved ISS-05 (Sacred Mantra Attribution):** The eleventh sanctuary inscription (`तमसो मा ज्योतिर्गमय`) is formally attributed to **Bṛhadāraṇyaka Upaniṣad 1.3.28 (Pavamāna Mantra)** both in the visual SVG shrine and in an accessible editorial citation card, clearly distinguished from the Durga Saptashati.
- **Resolved ISS-06 (Scriptural Citations & Editorial Distinction):**
  - All three Durga Saptashati verses verified against the standard 700-verse Gītā Press recension (Gorakhpur) with exact chapter and verse numbering (Chapter 5, vv. 20–22 & 32–34; Chapter 11, v. 9).
  - The misleading label `TRADITIONAL NARRATIVE CONNECTION` has been replaced with `THEMATIC CONNECTION — EDITORIAL INTERPRETATION`.
  - Transparent notices clarify that the three scriptural verses are curated thematic selections reused across the ten sanctuaries, not individual canonical verses unique to each Mahavidya.
  - Explicitly documents that the 2–4–4 mapping across the Three Charitas is an original pedagogical harmonization, maintaining clear separation between the Ten Mahavidya tantric mandala, Durga Saptashati narrative text, and modern psychological reflections.

### 3. Animation, CSS & Mobile Optimization (Phase 02C)
- **Resolved ISS-03 (Replay Animation Position Snapping):**
  - Choreography replay now dynamically respects the active pilgrimage phase (`approach`, `open`, `shrine`, `flower`, `final`).
  - Terminal keyframe transforms align perfectly with the resting CSS coordinates of each phase (e.g. `translate(450px, 375px)` in approach, `translate(450px, 351px) scale(0.94)` in gate open, `translate(450px, 339px) scale(0.88)` in shrine, `translate(450px, 339px) scale(0.9)` in flower, `translate(450px, 341px) scale(0.9)` in final offering).
  - Visible position snapping is completely eliminated.
  - Controls are disabled during replay to prevent overlapping transitions, and replay cancels cleanly if navigation occurs or reduced motion is engaged.
- **Resolved ISS-07 (CSS Consolidation & Deduplication):**
  - Consolidated duplicate `#travellers`, `.gate`, and walking animation declarations into authoritative single-source rules.
  - Removed superseded/dead keyframes (`step-leg`, `flower-rise`).
  - Unified scattered `@media (prefers-reduced-motion: reduce)` and `body.reduce-motion` declarations into a coherent, conflict-free block.
- **Resolved ISS-08 (Mobile Touch Target Usability):**
  - Refactored `.temple-path` into a responsive 5-column × 2-row layout on mobile and narrow tablet viewports (≤ 680px), guaranteeing every temple node exceeds the WCAG 2.1 44×44px touch target minimum (e.g., 52×44px at 320px, 60×44px at 360px).
  - Desktop viewports (> 680px) maintain 10 columns at 44px min-height.
  - Enforced 44px min-height on all interactive controls (`.quiet`, `.primary`, `#voiceLanguage`, narration buttons).
  - Zero horizontal overflow across all tested viewports (320px, 360px, 390px, 450px, 600px, 768px, 1024px, 1280px).

---

## Architecture & Privacy
- **Zero Remote Dependencies:** Pure HTML5, SVG, CSS, and ES6 JavaScript. No CDNs, tracking scripts, or analytics.
- **Local Data Only:** Pilgrimage progression and personal reflections remain strictly in client `localStorage` (`devi-journey-v1`).
- **Data Rights:** Explicit deletion control requires user confirmation to purge all saved notes.

---

## Release Gates (Pending Final Production Sign-off)
1. **Physical Mobile Hardware Review:** Touch testing on actual physical Android and iOS handsets under touch interaction.
2. **Physical Device Speech Synthesis:** Field audit with OS-installed Hindi voice synthesizers across various mobile vendor distributions.

---

## Run Locally
Serve the directory with:
```bash
python3 -m http.server 8000
```
Then navigate to `http://localhost:8000`. Note that browser `localStorage` is origin-specific.
