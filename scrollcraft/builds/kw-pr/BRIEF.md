# kw-pr.com: Scrollcraft brief

Self-authored under explicit creative delegation. Chris answered one question
(aesthetic: "stay premium-minimal") and delegated the rest ("the rest use your
judgment"), 12 October 2026. Scope (whole site), assets (existing photography
only, no generation) were chosen by Chris earlier in the same session.

Evidence is the live site at commit 7267881. Every word of existing copy, every
client name, date, figure and photo credit is kept as published. Testimonials
are quoted verbatim.

## The eight topics

1. **Vibe.** Quiet, exact, well connected, unhurried. References: a Vogue
   Paris front-of-book spread; the hush of a private members' club; a gallery
   wall with one picture on it. (Authored.)
2. **Journey (homepage).** The Paris photograph first. Then the claim: from
   breathwork to Caviar Kaspia. Then what clients say. Then the work. Then the
   press it produced. Last, how to get in touch. (Authored, from the order the
   approved site already uses.)
3. **Energy.** Calm at the open. One lift at the claim. Calm again for the
   testimonials. Steady through the work and coverage. Still at the close.
4. **Feeling, and the one moment.** See the curve below. The moment: the two
   campaign photographs, wellness and fashion, slide together into one frame.
5. **The one thing no other site does.** The headline happens physically: the
   breathwork photograph and the Caviar Kaspia photograph start at opposite
   edges and close under the visitor's hand until they touch.
6. **Range.** Premium-minimal (Chris, verbatim: "stay premium-minimal"). Paper
   ground, KW black, Neue Helvetica, no accent colour beyond ink.
7. **One world or scenes.** Distinct scenes. A PR agency's story is a set of
   separate rooms, not one place.
8. **Assets.** Existing photography in `public/img` only. No video. No
   generated imagery. No subject cutouts: none of the photographs has a clean
   background plate, so the hero's depth comes from planes that do not need
   one (photograph, mark, paper mat, credit).

## Feeling curve (homepage)

```
1  Arrival      the Paris photograph full screen, the KW mark on it
2  Settling     the photograph recedes into a framed print on paper; the mark lifts away
3  Delight      PEAK. breathwork at one edge, Caviar Kaspia at the other; they close and touch
4  Trust        plain prose and three client testimonials, nothing moving
5  Appetite     selected work travelling sideways, one case at a time
6  Confidence   the mastheads that ran the work
7  Resolve      the page stops: new business and press enquiries, one email link, the footer
```

Authored silence: the end of act 2 (framed print on empty paper) is deliberate
quiet before the peak. It is not dead scroll.

## The peak

"The guy breathing in the garden and the dinner in Paris slid together into one
picture." Act 3, the largest scroll span on the page.

## Tell-someone sentence

It's the site where the wellness photo and the Paris fashion photo close in on
each other as you scroll, until they are one picture.

## Grammar

- **Homepage: filmic one-shot.** It is a single linear argument (picture,
  claim, proof, ask). Why the other seven lost: chaptered editorial requires a
  title page with no media above the fold, and the full-bleed Paris photograph
  is the approved brand opening; live surface needs a product; continuous world
  needs real geography; typographic poster wastes the photography, which is the
  asset; gallery is used for the Work section, where the case studies are the
  collection; split stage needs one side to win, and KW does both (its device is
  borrowed for the peak only); rhythmic cutlist is the wrong energy for
  premium-minimal.
- **Case studies and the Work index: gallery / catalog.** Every case already
  carries the same label schema (THE BRIEF, OUR CONTRIBUTION, THE RESULT, a
  stat and a masthead). The schema is what makes it a collection. The nav is an
  index of all ten cases on every case page.
- **About, Clients, Services, Contact:** the gallery's flow reveals only. These
  are information, so they are compressed, not staged.

## Score (homepage)

| Act | Feeling | Device | Span |
|---|---|---|---|
| 1 to 2 Hero | Arrival, settling | `pin` + page-local planes off `--sc-p` (photo scale, clip-path mat, mark lift) | 1.9 |
| 3 Seam | Delight (peak) | `pin` + signature move off `--sc-p` | 2.8 |
| 4 Lead and testimonials | Trust | `flow` + `in` | natural |
| 5 Selected work | Appetite | `pan` | 2.2 |
| 6 Coverage | Confidence | `flow` + `in`, the existing marquee | natural |
| 7 Close | Resolve | `flow`, full-height, footer inside it | natural |

Device families: pin, page-local parallax planes, pan, flow, reveal-by-entry.
Known deviation: the hero and the seam are both pinned acts, back to back. They
do different things (planes receding, then the signature move), and the framed
print on empty paper is the authored quiet between them. The close was planned
as a pin and built as a full-height flow section, because a pinned close with
nothing changing measured as dead scroll.

## Signature move

**The seam.** Two campaign photographs close together under scroll and meet.
Page-local CSS off `--sc-p`. The engine is untouched.

## Not covered

- No real phone was used. Headless Chromium only.
- No subject cutouts or rebuilt background plates.
