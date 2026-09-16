# A helping hand

Responsive single-page family guide for the supplied PLA hand orthosis kit. Built for GitHub Pages; no backend, tracking or external runtime scripts. All photo assets and the QR library are served locally.

## Preview

```powershell
npm.cmd ci --cache .npm-cache
npm.cmd run build
npm.cmd run check
npm.cmd run dev
```

Open http://127.0.0.1:4173. Source is in `site/`; the build produces `dist/`. Rebuild and reload the preview after edits.

## Status: draft, not ready for family fitting

Implemented: full supplied inventory (54 printed pieces plus straps), category filters, accessible expandable setup sections, responsive layout, source photos and attribution, heating warning, care notes, complete-guide printing, and permanent-URL QR generation with printable label and SVG download.

Outstanding information:

- Family language confirmed: Polish. All page content, controls, image descriptions and printable labels default to Polish (HTML lang="pl").
- Received and integrated all seven package photographs, including the flat main part and a pre-assembly layout. Still needed: supplied straps and a confirmed threaded/assembled reference; exact size labels where photographs alone do not establish them.
- Confirm exactly what is shipped for the elastic: finger bands, hand band, wrist fastening, widths, lengths and quantities; whether it is pre-cut or pre-threaded.
- Confirm a safe PLA heating and fitting method, including water temperature, time, cooling and hand position. No temperatures or wear schedule have been invented.
- Confirm threading and compatibility of scaled holder variants. The model author generally recommends not scaling the strap/tension-adjustment file.
- Confirm therapist guidance on suitability, fit, tension and wear.
- GitHub destination confirmed: `hubertlim/hand-orthosis-guide`. Planned Pages URL: https://hubertlim.github.io/hand-orthosis-guide/ (not yet deployed).

The sender confirmed the finger-elastic connection: cut a separate length for each finger, tie an individual knot at the finger end, then join the four finger elastics with a common knot at one strap holder. The thumb has its own elastic and a separate holder. This is now reflected in the Polish guide. Exact lengths, knot type and routing through holes remain unspecified. This confirmation did not include PLA heating temperature, duration or cooling method.

Do not remove the draft notice or enable the QR label until the content is complete and checked. `site/config.js` deliberately has `readyForFamily: false` and the planned Pages URL in `publicUrl`. Finish the actual instructions before setting these values. QR generation is local using qrcode-generator (MIT); a four-module quiet zone is preserved. The label includes the literal URL and is approximately 90 mm wide, with a 45 mm code. Scan-test the final printed label on a phone before shipping.

## Publish on GitHub Pages

The workflow `.github/workflows/pages.yml` runs on pushes to `main` or manually, builds `dist/`, checks local assets and links, then deploys via official Pages actions. Draft publication keeps the visible draft notice and disables the package label button. Setting `readyForFamily: true` additionally requires all unfinished fitting sections to have been completed. To finish the family guide:

1. Set the permanent HTTPS URL in `site/config.js`, including the repository subpath when applicable.
2. Replace every unfinished fitting section and enable `readyForFamily`.
3. Push this project to the chosen repository.
4. In repository Settings → Pages select GitHub Actions as the build source.
5. Run **Publish family guide** from Actions.
6. Verify the live page on a phone, then print the label from the page.

GitHub authentication was verified outside the restricted sandbox; the saved login is valid. The public repository is https://github.com/hubertlim/hand-orthosis-guide. The site is being published as an explicitly labelled draft until the remaining fitting details are complete.

## Sources and image attribution

Reviewed 16 September 2026.

- [Piotrownik: Improving fine motor skills, 3D printed orthosis](https://makerworld.com/en/models/479608-improving-fine-motor-skills-3d-printed-orthosis#profileId-391009). Browser inspection confirmed the creator, alpha-project status, flat wrist stabilizer shaping description, elastic force adjustment, and license.
- The author lists 6 mm finger elastic, 19 mm hand elastic and 25 mm wrist Velcro. These describe the original design, not confirmed contents of this package.
- [Instagram reference](https://www.instagram.com/reel/DdTQ9sOAYs5/): visible caption identifies a MITHRIL cock-up splint from creaid_labs / lordofthesplints. It is a different product. The video’s complete demonstration and thermal settings were not verified and no PLA procedure was derived from it.
- [UHCW splint information](https://www.uhcw.nhs.uk/download/clientfiles/files/Patient%20Information%20Leaflets/Clinical%20Support%20Services/Therapies/Hand%20Therapy/Splint%20information.pdf): general skin and sensation precautions.
- [University Hospitals Sussex splint advice](https://www.uhsussex.nhs.uk/wp-content/uploads/2024/05/2206.1-Splint-advice-2025.pdf): general symptoms that require advice.

The following images are by Piotrownik, from the MakerWorld project under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/):

- `site/assets/orthosis.webp`: original `2024-05-30_a6101bfd8441c.webp`, acquired at 1000 px width.
- `site/assets/detail.webp`: original `2024-05-30_3729a42fdb7e9.webp`, acquired at 400 px width.

Images are resized/display-cropped for layout and labelled as original-project references, not package photographs. The adapted guide content is shared under CC BY-NC-SA 4.0. The included QR library retains its own MIT license, copied to `dist/vendor/QR-LICENSE.txt`. No endorsement by the model author or the clinical sources is implied.

## Package photographs

Seven sender-supplied photos were integrated on 16 September 2026. `scripts/import-photos.mjs` maps the supplied filenames to descriptive assets. It creates correctly oriented, metadata-free WebP copies at up to 1400 px without modifying the originals. Gallery images link to larger views; the main-part photo also illustrates the heating note. Finger photographs are labelled as examples, not a complete count. Package photographs are separate from the MakerWorld licensed reference photographs.

Video follow-up: playback was inspected. Visible stages show water heating, dabbing dry and shaping on the hand; a caption mentions 70 degrees Celsius. This is not a validated temperature for the supplied PLA. Exact immersion time and material equivalence remain unverified.

## Confirmed materials and strap preparation (16 September 2026)

Filament is Bambu Lab PLA Basic. Manufacturer TDS V3.0 lists Tg 60°C, Vicat 57°C, and HDT 57°C at 0.45 MPa. These are material test values, not validated home orthosis shaping or skin-contact parameters. Existing heat guidance and draft status are preserved. Source: https://store.bblcdn.com/s7/default/b189de92249a4b9ebed28b8ea1f080f0/Bambu_PLA_Basic_Technical_Data_Sheet.pdf

The sender supplies a full spool of white 10 mm tension elastic. Cut to length with scissors and narrow lengthwise with a knife and ruler to fit finger-cover/main-plate holes. Dimensions depend on the selected print; no fixed cut widths or lengths were supplied. Knots must hold in place: individual finger-end knots, four finger elastics sharing a knot/holder, thumb on its own elastic/holder. Earlier requests to confirm knot type and pre-cut status are superseded. Wrist-strap photo will follow. The eighth package photo, IMG_20260916_134924.jpg, is optimized as site/assets/kit/tension-strap.webp; original unchanged.
