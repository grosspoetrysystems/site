# AGENTS.md

- Copy comes from the owner. Don't write new copy; ask.
- GPS is the author. No person's name anywhere.
- Keep it plain. Prefer removing what doesn't earn its place to adding more.
- `robots.txt` blocks AI training crawlers on purpose. Don't relax it for a better score.

## Process

1. Change tokens in `tokens/gps.tokens.json`, never the generated `src/tokens.css`.
2. Look at what you changed in a browser: phone and desktop widths, more than one palette, keyboard only.
3. `pnpm check` must pass. The commit hook only lints.
4. Deploy only when the owner says so, then load the changed pages on grosspoetry.systems.

Contribution governance comes from Helicopter (.github/helicopter/version.json). Use the helicopter skill to update or check it: npx skills add grosspoetrysystems/helicopter
