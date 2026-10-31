# AdSense policy rules

Read this before adding, moving or changing any ad, ad-block check, or page that shows ads.

## Implementation

- Use the shared `src/shared/components/AdSlot.tsx` only. Never paste raw AdSense snippets into pages.
- Each slot is pushed once per mount (guard against StrictMode double-run). Reserve height with `minHeight` to avoid layout shift.
- The AdSense `<script>` goes in the `<head>` of every HTML entry that shows ads.
- `public/ads.txt` must be served at `https://utility.siddharthprakashan.com/ads.txt`.
- Ad IDs come from `.env` (`VITE_ADSENSE_CLIENT`, `VITE_ADSENSE_SLOT_*`). Never hard-code them.
- Set `data-adtest="on"` in development. Never click live ads while developing.

## Prohibited

- **Never** refresh ads automatically or on a timer.
- **Never** trigger, reload or force an ad when the user clicks a button (for example "Process file").
- **Never** ask users to click ads, offer rewards for ad interaction, or use wording that encourages clicks.
- **Never** place ads where users may click by accident, such as next to or overlapping Process, Download or other action buttons.

## Placement

- Place ads in a sidebar or content area beside real content, away from action buttons.
- No ads on legal and site pages (about, privacy, terms, contact, credits).
- No ads on loading, error, empty or bare-upload screens.

## Ad-block check (`useAdBlockCheck`)

- Best-effort only. Detection gives false positives (privacy browsers, DNS filters, flaky networks).
- It may gate processing with an honest message that asks users to **allow** ads, plus a retry button.
- It must never permanently block a tool or interfere with normal interactions.

## Consent

- Visitors in the EEA, UK and Switzerland need a certified consent management platform (for example Google Funding Choices) before personalised ads.
- Keep the Privacy Policy accurate about Google ads and cookies.
