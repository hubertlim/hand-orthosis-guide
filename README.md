# Pomocna dłoń

Polish family guide for the supplied PLA hand orthosis kit, published at https://hubertlim.github.io/hand-orthosis-guide/.

Static, responsive single-page app with local photographs, inventory filters, expandable instructions, printable guide and package label, and SVG QR download. No backend, tracking or external runtime scripts.

## Development

```powershell
npm.cmd ci
npm.cmd run build
npm.cmd run check
npm.cmd run dev
```

Preview: http://127.0.0.1:4173. Source: `site/`; output: `dist/`. Rebuild after editing. GitHub Actions builds, checks and deploys pushes to main.

## Final package contents

62 printed pieces: 6 main plates, 20 elastic holders, 8 thumb covers, 20 finger covers and 8 rectangular Velcro connectors. Three full rolls: white 10 mm tension elastic, hook tape and loop tape. Exact scales and quantities are listed on the page.

Elastic is cut to length with scissors and narrowed lengthwise using a knife and ruler on a cutting surface. Each finger end has a retaining knot. Four finger elastics share one knot and holder; the thumb uses a separate elastic and holder. No fixed cut lengths or knot type were supplied.

The recommended wrist fastening joins hook and loop tape using a connector, as shown in the sender's photograph. An alternative uses connectors as strap stops. Cut each fastening to the hand or forearm separately, retaining allowance for routing, closure and adjustment. Stops do not replace hook-and-loop closure.

## Fitting limits

`readyForFamily: true` enables the completed guide's QR label; it does not signify clinical validation. Suitability, position, tension, wear schedule and safe heat-fitting method require guidance from a hand therapist. Only the detached main plate may be heat formed. Covers, holders, connectors and straps must not be heated.

The Instagram demonstration shows a MITHRIL splint and a 70°C caption; it does not validate that temperature or an immersion time for this kit. Bambu Lab PLA Basic TDS V3.0 reports Tg 60°C, Vicat 57°C and HDT 57°C at 0.45 MPa. These are material test values, not a home shaping protocol or skin-safe temperatures. The guide retains these distinctions.

## Sources and attribution

Reviewed 16 September 2026:

- [Piotrownik's original model](https://makerworld.com/en/models/479608-improving-fine-motor-skills-3d-printed-orthosis#profileId-391009), a student alpha project at the Academy of Fine Arts in Krakow.
- [Instagram technique demonstration](https://www.instagram.com/reel/DdTQ9sOAYs5/), creaid_labs / lordofthesplints. Playback showed heating, drying and shaping; exact immersion duration and material equivalence were not verified.
- [Bambu Lab PLA Basic TDS](https://store.bblcdn.com/s7/default/b189de92249a4b9ebed28b8ea1f080f0/Bambu_PLA_Basic_Technical_Data_Sheet.pdf).
- [UHCW splint information](https://www.uhcw.nhs.uk/download/clientfiles/files/Patient%20Information%20Leaflets/Clinical%20Support%20Services/Therapies/Hand%20Therapy/Splint%20information.pdf).
- [University Hospitals Sussex splint advice](https://www.uhsussex.nhs.uk/wp-content/uploads/2024/05/2206.1-Splint-advice-2025.pdf).

Original-project photographs `site/assets/orthosis.webp` (2024-05-30_a6101bfd8441c.webp) and `site/assets/detail.webp` (2024-05-30_3729a42fdb7e9.webp) are by Piotrownik under CC BY-NC-SA 4.0. They are resized/display-cropped and labelled as reference photographs. Adapted guide text uses the same license. No endorsement is implied. The QR library retains its MIT license in `dist/vendor/QR-LICENSE.txt`.

The twelve sender-supplied package photographs are separate from the MakerWorld photographs. `scripts/import-photos.mjs` maps original filenames and produces correctly oriented, metadata-free WebP copies up to 1400 px; originals remain unchanged.

## QR label

The permanent URL is configured in `site/config.js`. The page generates the QR locally, with a four-module quiet zone, SVG download and printable label (approximately 90 mm wide with a 45 mm QR).

```powershell
node scripts/make-qr.mjs
node scripts/check-qr.mjs
```

The second command independently decodes the generated SVG to verify its destination. Scan-test the actual printed label before attaching it to the package.
