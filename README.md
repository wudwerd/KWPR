# KW Public Relations

The production static website is in `public/`. `public 2/` and `public 3/` are historical copies and are not changed by this refresh.

Preview with `python3 -m http.server 4173 --directory public`.

The September 2026 design refresh adds a clients and projects page, a restrained desktop header, a mobile dropdown, a centred hero logo, licensed Helvetica webfonts and consistent layouts across existing case studies. Existing case copy and source links are retained. The client grid describes selected clients and projects rather than claiming a current retained roster.

Validation: 16 pages checked at 390px and desktop width, with no horizontal page overflow. All 355 local links and image references resolve. Mobile menu opening, closing and Escape were checked. Browser error log was empty. Render publishes the public directory from the main branch automatically.

The latest editorial update adds approved client testimonials beneath paired wellness and fashion campaign photography, a Chris Woodward portrait on About, and refreshed Services and Contact imagery. Nada and Umar testimonials are newly authored from the commissioning client’s supplied accounts and publication approval. Gary’s testimonial reproduces verbatim the replacement wording from Brianna’s message supplied by Chris on 21 September 2026. Updated validation: all 16 pages fit a 320px viewport; primary pages reviewed at 390px and desktop. All 349 local references resolve. Three testimonial states and mobile menu Escape behaviour verified.


Agency positioning update: Home, About, Services and Contact now lead with KW capabilities and client objectives. Chris is introduced once in the About copy. The approved testimonials and black-and-white portrait remain. The four changed pages were checked at 320px, with visual review at mobile and desktop widths.

Unsure: physical-device behaviour has not been checked. Current retainer status is not asserted by the client grid.

Design review, 25 September 2026: on desktop the hero lockup now sits in the lower third, clear of both faces (checked at 1024x768, 1280x720, 1440x900 and 2560x1080; mobile unchanged). The homepage headline is "From breathwork to Caviar Kaspia.", set above the two campaign photographs it names, with a three-sentence intro and larger calls to action. The hero credits the PrettyLittleThing rebrand, Paris, photographed by German Larkin. Selected Work on the homepage no longer repeats the two campaign features and ends with an All work link. The work and client grids now sit on the page margin, as other sections do. All 385 local references resolve.
Grid update, 25 September 2026: every grid row is now full. Clients shows three across on desktop (two rows of three). Work leads with two large features (The Telegraph, Caviar Kaspia) followed by two rows of four; all ten case studies are kept.
About update, 25 September 2026: the About page now presents both co-founders, Chris Woodward (Co-founder & CEO) and Umar Kamani (Co-founder), as a matched black-and-white pair, with rewritten copy. Umar's portrait is frame 103 of the Arabian Business studio session (photographer's black-and-white grade); Chris's portrait is regraded to the same near-black ground.

Scroll update, October 2026: the site uses the Scrollcraft engine (`scrollcraft-*.js` and `.css`, MIT, unmodified apart from a licence line) with the page layer in `kw-scroll-*.css` and `kw-scroll-*.js`. Home: the Paris photograph recedes into a framed print, then the breathwork and Caviar Kaspia photographs close from opposite edges until they touch; the work rail travels sideways; the page ends on a full-height contact close. Case studies carry an index of all ten cases and reveal their photograph on load. About, Clients, Services, Contact and Work fade their content in. All copy is unchanged; the only added lines reuse existing site copy. Reduced motion drops the pinned scroll and rests each scene in a complete state. Brief and fingerprint in `scrollcraft/` (not published). Validation: 16 pages at 1440x900 and 390x844, home also at 1280x720, 2560x1080, 360x640 and reduced motion; no horizontal overflow; no console errors or failed requests; all 550 local references resolve. Keyboard focus through the work rail brings each card into view.

Unsure: no physical phone has been checked.
