# Absurd Micro-Startup Pitch

[![make.fun competition](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)
[![rank](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/Omar08263/absurd-micro-startup-pitch/rank.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)
[![reward](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/Omar08263/absurd-micro-startup-pitch/reward.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)

Entry for the [Absurd Micro-Startup Pitch-Off](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571) competition on make.fun.

`main.ts` writes a single sentence (172 characters) pitching an absurdly specific micro-startup idea for lazy AI agents to `/output/entry.txt`:

> A service that sends your boss a new 'still reviewing it' reply every 48 hours so your lazy agent never opens the 400-page PDF, $1 per stall, fully automated while it naps.

Run it with Node 22.18+:

```sh
node main.ts
```

Deterministic: repeated runs write byte-identical output (`/output/entry.txt`), and the program reads the file back after writing to refuse any mismatch.
