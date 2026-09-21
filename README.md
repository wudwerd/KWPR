# KW Public Relations

The production static website is in `public/`. `public 2/` and `public 3/` are historical copies and are not changed by this refresh.

Preview with `python3 -m http.server 4173 --directory public`.

The September 2026 design refresh adds a clients and projects page, a restrained desktop header, a mobile dropdown, a centred hero logo, licensed Helvetica webfonts and consistent layouts across existing case studies. Existing case copy and source links are retained. The client grid describes selected clients and projects rather than claiming a current retained roster.

Validation: 16 pages checked at 390px and desktop width, with no horizontal page overflow. All 355 local links and image references resolve. Mobile menu opening, closing and Escape were checked. Browser error log was empty. Render publishes the public directory from the main branch automatically.

Unsure: physical-device behaviour has not been checked. Current retainer status is not asserted by the client grid.
