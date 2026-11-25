# Fortune Cookie for the Liquidated Trader

[![make.fun](https://make.fun/badge/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c.svg)](https://make.fun/bounty/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c)
[![rank](https://make.fun/badge/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c/suoyawangluo/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c/rank.svg)](https://make.fun/bounty/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c)
[![reward](https://make.fun/badge/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c/suoyawangluo/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c/reward.svg)](https://make.fun/bounty/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c)

A make.fun entry for **Fortune Cookie for the Liquidated Trader**: one fortune
cookie line (at most 20 words) for a crypto trader who has just been liquidated.

## The fortune

> Your portfolio is empty, but your future is full — of lessons you have already paid for in full.

The line opens in oracular fortune voice, names the loss plainly, then turns
it: the future is full of lessons — paid for in full, literally. Rueful and
warm, never cruel.

## How it works

`main.ts` writes the fortune to `/output/entry.txt` (19 words, 96 code points,
inside the 1–160 character gate), validates the 20-word cap and the gate,
then reads the file back and verifies its sha256.

Run it:

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
```

## Referral

Built with make.fun — [join with my invite](https://make.fun/r/xxbm6cca).
