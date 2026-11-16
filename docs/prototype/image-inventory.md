# Image Inventory

## Important: image resolution
The only photographs available are **thumbnails cropped from Facebook album screenshots** (about 240 px). For the prototype, each was upscaled 3× (Lanczos with light sharpening) and the layouts were designed to show them at moderate sizes. They are good enough to present the design direction, but **they are not production quality.** The client should supply the original full-resolution photos. The new files drop into the same paths with no code changes.

## Folders
- `assets/original/facebook-album-screenshots/`: the 5 screenshots exactly as supplied (untouched)
- `assets/original/facebook-album-crops/`: the 45 individual photos cropped from them (untouched crops)
- `prototype/assets/images/{gates,fencing,awnings,pool-fencing,balustrades}/`: upscaled copies used by the prototype

The brief's suggested `hero/`, `slatted-screens/` and `gallery/` folders were not created as duplicates. Hero and gallery use the category folders directly, and slatted work lives in `gates/` and `fencing/`, so each image exists once.

## Inventory (45 photos)

Quality is relative to the thumbnail source. "Hero" means suitable as a primary hero image once the high-resolution original is supplied.

| File | Size (original → prototype) | Category | Quality | Placement in prototype | Hero? | Featured? | Prototype path | Note / to confirm |
|---|---|---|---|---|---|---|---|---|
| balustrade-01.jpg | 241×240 → 723×720 | Balustrades | Fair — interior light | Balustrades hero side | No | No | `assets/images/balustrades/balustrade-01.jpg` |  |
| balustrade-02.jpg | 240×240 → 720×720 | Balustrades | Good | Balustrades hero side | No | No | `assets/images/balustrades/balustrade-02.jpg` |  |
| balustrade-03.jpg | 241×240 → 723×720 | Balustrades | Good | Gallery | No | No | `assets/images/balustrades/balustrade-03.jpg` |  |
| balustrade-04.jpg | 241×240 → 723×720 | Balustrades | Fair | Gallery | No | No | `assets/images/balustrades/balustrade-04.jpg` |  |
| balustrade-05.jpg | 240×240 → 720×720 | Balustrades | Good — strong shadows | Home hero strip 5, Balustrades hero, About collage | Yes | Yes | `assets/images/balustrades/balustrade-05.jpg` |  |
| balustrade-06.jpg | 241×240 → 723×720 | Balustrades | Good | Gallery | No | No | `assets/images/balustrades/balustrade-06.jpg` |  |
| balustrade-07.jpg | 241×240 → 723×720 | Balustrades | Fair | Gallery | No | No | `assets/images/balustrades/balustrade-07.jpg` |  |
| balustrade-08.jpg | 240×240 → 720×720 | Balustrades | Fair | Gallery | No | No | `assets/images/balustrades/balustrade-08.jpg` |  |
| balustrade-09.jpg | 241×240 → 723×720 | Balustrades | Fair — distant | Gallery | No | No | `assets/images/balustrades/balustrade-09.jpg` |  |
| balustrade-10.jpg | 241×200 → 723×600 | Balustrades | Poor — partly cropped by app bar in screenshot | Gallery (last) | No | No | `assets/images/balustrades/balustrade-10.jpg` | Replace with original |
| custom-01.jpg | 241×240 → 723×720 | Slat fencing / Custom | Good | Slat fencing hero, Featured project 2, About collage | Yes | Yes | `assets/images/fencing/custom-01.jpg` |  |
| custom-02.jpg | 240×240 → 720×720 | Slat fencing / Custom | Fair | Project story | No | No | `assets/images/fencing/custom-02.jpg` |  |
| custom-03.jpg | 241×240 → 723×720 | Gates / Custom | Good — wide context | Custom Fabrication hero, Project story | No | Yes | `assets/images/gates/custom-03.jpg` | Confirm same project as custom-04..08 |
| custom-04.jpg | 241×240 → 723×720 | Custom | Fair — distant | Project story, gallery | No | No | `assets/images/gates/custom-04.jpg` |  |
| custom-05.jpg | 240×240 → 720×720 | Gates / Custom | Good — strong sky, clean composition | Home hero strip 1, Gates hero, Project: Vertical blade frontage | Yes (primary) | Yes | `assets/images/gates/custom-05.jpg` |  |
| custom-06.jpg | 241×240 → 723×720 | Slat fencing / Custom | Good | Project story, gallery | No | Yes | `assets/images/fencing/custom-06.jpg` |  |
| custom-07.jpg | 241×240 → 723×720 | Slat fencing / Custom | Good | Why section, Slat fencing hero side, Project story | Yes | Yes | `assets/images/fencing/custom-07.jpg` |  |
| custom-08.jpg | 240×240 → 720×720 | Gates / Custom | Good — framed entry | Gates hero side, Project story | No (portrait subject) | Yes | `assets/images/gates/custom-08.jpg` |  |
| pool-01.jpg | 241×240 → 723×720 | Pool fencing | Good — waterfront | Home hero strip 2, Pool hero, Why section | Yes | Yes | `assets/images/pool-fencing/pool-01.jpg` |  |
| pool-02.jpg | 240×240 → 720×720 | Pool fencing | Fair | Gallery | No | No | `assets/images/pool-fencing/pool-02.jpg` |  |
| pool-03.jpg | 241×240 → 723×720 | Pool fencing | Good | Gallery | No | No | `assets/images/pool-fencing/pool-03.jpg` |  |
| pool-04.jpg | 241×240 → 723×720 | Pool fencing | Good | Pool hero side | No | No | `assets/images/pool-fencing/pool-04.jpg` |  |
| pool-05.jpg | 240×240 → 720×720 | Pool fencing | Good | Project story (waterfront glass) | No | Yes | `assets/images/pool-fencing/pool-05.jpg` | Confirm pool-05/06 are one project |
| pool-06.jpg | 241×240 → 723×720 | Pool fencing | Fair | Project story | No | No | `assets/images/pool-fencing/pool-06.jpg` |  |
| pool-07.jpg | 241×240 → 723×720 | Pool fencing | Good — colour | Gallery | No | No | `assets/images/pool-fencing/pool-07.jpg` |  |
| pool-08.jpg | 240×240 → 720×720 | Pool fencing | Fair | Gallery | No | No | `assets/images/pool-fencing/pool-08.jpg` |  |
| pool-09.jpg | 241×240 → 723×720 | Pool fencing | Good | Pool hero side | No | No | `assets/images/pool-fencing/pool-09.jpg` |  |
| screens-01.jpg | 241×240 → 723×720 | Screens & awnings | Good — graphic | Gallery | No | No | `assets/images/awnings/screens-01.jpg` |  |
| screens-02.jpg | 240×240 → 720×720 | Screens & awnings | Good — commercial proof | Home hero strip 3, Screens hero, Featured project 3, Why section | Yes | Yes | `assets/images/awnings/screens-02.jpg` |  |
| screens-03.jpg | 241×240 → 723×720 | Screens & awnings | Good | Project story | No | No | `assets/images/awnings/screens-03.jpg` |  |
| screens-04.jpg | 241×240 → 723×720 | Screens & awnings | Good | Gallery | No | No | `assets/images/awnings/screens-04.jpg` |  |
| screens-05.jpg | 240×240 → 720×720 | Screens & awnings | Fair | Gallery | No | No | `assets/images/awnings/screens-05.jpg` |  |
| screens-06.jpg | 241×240 → 723×720 | Screens & awnings | Good | Screens hero side | No | No | `assets/images/awnings/screens-06.jpg` | Confirm: awning vs fixed louvre screen |
| screens-07.jpg | 241×240 → 723×720 | Screens & awnings | Good | Screens hero side, About collage | No | Yes | `assets/images/awnings/screens-07.jpg` |  |
| screens-08.jpg | 240×240 → 720×720 | Screens & awnings | Fair | Gallery | No | No | `assets/images/awnings/screens-08.jpg` |  |
| screens-09.jpg | 241×240 → 723×720 | Screens & awnings | Good — view framing | Gallery | No | No | `assets/images/awnings/screens-09.jpg` |  |
| slatted-01.jpg | 241×240 → 723×720 | Gates | Good — bright | Home hero strip 4, Gates hero side | Yes | Yes | `assets/images/gates/slatted-01.jpg` |  |
| slatted-02.jpg | 240×240 → 720×720 | Slat fencing | Fair | Gallery | No | No | `assets/images/fencing/slatted-02.jpg` |  |
| slatted-03.jpg | 241×240 → 723×720 | Slat fencing | Fair — overcast | Slat fencing hero side | No | No | `assets/images/fencing/slatted-03.jpg` |  |
| slatted-04.jpg | 241×240 → 723×720 | Gates | Fair | Custom Fabrication hero side, gallery | No | No | `assets/images/gates/slatted-04.jpg` | Function (side gate vs enclosure) to confirm |
| slatted-05.jpg | 240×240 → 720×720 | Gates | Good — colour interest | Gallery | No | Yes | `assets/images/gates/slatted-05.jpg` | Confirm colour name (deep teal) |
| slatted-06.jpg | 241×240 → 723×720 | Gates | Good | Gallery | No | No | `assets/images/gates/slatted-06.jpg` |  |
| slatted-07.jpg | 241×240 → 723×720 | Slat fencing | Fair — dark | Gallery | No | No | `assets/images/fencing/slatted-07.jpg` |  |
| slatted-08.jpg | 240×240 → 720×720 | Gates | Fair | Gallery | No | No | `assets/images/gates/slatted-08.jpg` | Confirm it is a sliding gate |
| slatted-09.jpg | 241×240 → 723×720 | Gates | Good — handover bow | Gallery | No | No | `assets/images/gates/slatted-09.jpg` |  |

## Not included
No stock, AI-generated or third-party images are used anywhere. Map and colour swatches are drawn in code.
