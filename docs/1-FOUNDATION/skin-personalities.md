# SUAI Skins — Character Spec

Four skins, four animals. Each SUAI skin is more than a palette swap: it borrows the
nature of the Thai animal it is named for as its design language, and lands on a
familiar UI lineage. The names are romanized Thai words.

| Skin | Animal | Lineage | Character in one line |
|------|--------|---------|-----------------------|
| **PLA** | fish | Material Design | Fluid and buoyant — light through water. |
| **NOK** | bird | Bootstrap | Nested and perched — a tidy structure. |
| **MAA** | dog  | Apple HIG | Alert and territorial — a marked margin. |
| **KOB** | fox  | crimson wildcard | Sharp and red-coated — pointed and cunning. |

The design goal is that a single element — a button, a checkbox, a scrollbar —
should be enough to tell the skins apart. Where two skins could share a treatment,
they don't.

---

## PLA — the fish (Material Design)

Water has depth and buoyancy. PLA's surfaces float on soft elevation; the deeper a
heading sits in the hierarchy the more its colour dissolves toward the text, the way
light dims with depth. Corners are soft and motion settles rather than snaps.

- **Shape:** soft radius. **Depth:** layered elevation shadows.
- **Colour:** accent-graded heading hierarchy (h1 full accent → h5 near-text).
- **Signature:** depth — surfaces you could lift off the page.

## NOK — the bird (Bootstrap)

A bird builds. In NOK everything perches inside a tidy bordered container, and every
raised surface casts the soft shadow of something in flight. Fields are pressed-in
hollows — the cup of a nest. Content reads left, down the branch.

- **Shape:** rounded. **Depth:** drop shadows on cards, *inset* shadows in fields.
- **Structure:** content sections become bordered, rounded, shadowed containers.
- **Signature:** the nest — pill containers and pressed-in inputs.

## MAA — the dog (Apple HIG)

A dog is alert and territorial. MAA marks each section with a vertical accent down the
left margin — a scent-line. Its stance is lean and condensed; its surfaces are frosted,
like breath on glass.

- **Shape:** rounded, condensed spacing. **Surface:** translucent / frosted.
- **Marker:** vertical accent bar on headings and the active nav tab.
- **Signature:** the mark — the vertical accent line.

## KOB — the fox (crimson)

The fox is sharp and red-coated. KOB's corners come to a point (zero radius) and colour
bleeds in gradients like fur catching light. It slips in translucent, quiet at dusk.

- **Shape:** sharp — no border radius anywhere. **Colour:** in-palette crimson gradients.
- **Surface:** translucent slide-ins (the drawer).
- **Signature:** the point — sharp corners and fur-gradients.

---

## Extended elements (CSS only)

Every treatment below is pure CSS — no scripts, no images. Most read the `--su-*`
tokens, so they re-skin automatically; the per-skin rows are the deliberate extremes.

### Buttons — primary vs secondary

Primary is the filled call to action; secondary is the quieter alternative. They are
never the same weight.

| Skin | Primary | Secondary |
|------|---------|-----------|
| PLA | filled, elevated | outlined (Material) |
| NOK | filled + drop shadow | amber outline that floods to filled on hover |
| MAA | filled pill | accent-tinted (iOS tinted button) |
| KOB | crimson gradient, sharp | crimson outline that floods to gradient on hover |

*(Secondary = `button[type="reset"]` / `input[type="reset"]`, matching the demos.)*

### Inputs

Fields are capped to a comfortable measure instead of stretching full-bleed. NOK adds
an **inset shadow** — the nest's cup. KOB fields are square; MAA fields are condensed
and filled; PLA keeps the Material bottom-line.

### Checkbox & radio

Custom-drawn with `appearance: none`: a token box/dot, accent-filled when checked, with
a CSS checkmark (no glyphs). KOB squares *both* the box and the radio — the fox has no
round edges. NOK adds an inset shadow. MAA and PLA keep the round radio.

### File input

`::file-selector-button` wears the skin's primary button — gradient in KOB, shadowed in
NOK, and so on.

### Scrollbar

A themed thumb (accent) on a subtle track. The thumb's corners follow the skin's radius
(square in KOB, rounded elsewhere); MAA's is thin and translucent to match its frost.
