# A Cute Website 🌸

A beautiful, minimal Eid card platform that lets you send personalised digital cards to the people you love — straight to their inbox.

Built with Next.js 15, Supabase, and Brevo. Deployed on Vercel.

🔗 **[Visit the live site](https://a-cute-website.vercel.app)**

---

## What it does
- Browse a curated collection of card designs
- Personalise your card with a custom message, recipient name, and sender name
- Send the card directly to someone's email
- The receiver gets a beautiful email with a link to open their card
- The card flips on click to reveal the message on the back
- The receiver can download the card as a PDF or image (front + back)
- Cards auto-expire after 30 days with a gentle reminder to download

---

## Tech Stack
| Layer | Tool |
|---|---|
| Framework | Next.js 15 (App Router, TypeScript) |
| Styling | Tailwind CSS v4 |
| Database | Supabase (PostgreSQL) |
| Email | Brevo (transactional email REST API) |
| Email templates | React Email |
| PDF/Image export | html2canvas + jsPDF |
| Animation | Framer Motion |
| Deployment | Vercel |

---

## How Cards Work
1. Sender picks a template → fills in fields → enters emails → hits send
2. API route generates a unique 12-character card ID via `nanoid`
3. Card data (template, fields, sender email) is saved to Supabase with a 30-day TTL
4. Brevo sends two emails — one to the receiver with the card link, one confirmation to the sender
5. Receiver opens `/card/[cardId]` — card is fetched from Supabase and rendered
6. Receiver clicks the card to flip it and read the message
7. Receiver can download as PDF (2 pages: front + back) or image (stitched vertically)
8. A Supabase cron job deletes expired cards nightly at 2am

---

## Card Expiry
Cards are available for **30 days** after sending. The receiver sees a countdown on their card page and is encouraged to download it before it expires. Expired card links show a gentle "this card has floated away" message.

---

## Colour Palette
| Name | Hex | Usage |
|---|---|---|
| Cream | `#fffaf5` | Page background |
| Blush 200 | `#ffb3c1` | Primary buttons |
| Petal 200 | `#ffd6e7` | Borders, accents |
| Butter 100 | `#fff9d6` | Highlights |
| Rose | `#e8637a` | Text accents, labels |
| Dark | `#3d2a2a` | Body text |
| Muted | `#9a7070` | Secondary text |

---

## Fonts
- **Playfair Display** — headings, card back text (serif, elegant)
- **DM Sans** — body, labels, UI elements (clean, modern)

---

## Usage
This project is public for portfolio and reference purposes.
- 💌 **Want to send a card?** Head to the [live site](https://a-cute-website.vercel.app) — it's free to use.
- 🎨 **Want a specific occasion or card design added?** Get in touch and I'll add it.
- 🔒 **This codebase is not open for replication or self-hosting.** Please do not deploy your own instance of this project.

---

## Contact
Made by [Manahil Atif](https://github.com/manahilatif) — feel free to reach out if you'd like to collaborate or have a card request!

---

made with love ♡
