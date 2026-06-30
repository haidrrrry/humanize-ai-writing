# Before / after — the skill in action

Real slop rewritten by the rules. The "before" lines are deliberately full of
tells; the "after" lines are what the skill produces.

## 1. Product copy
**Before (slop):**
> In today's fast-paced world, our cutting-edge platform stands as a testament to innovation. It's not just a tool, it's a vibrant ecosystem that seamlessly leverages robust technology to unlock your team's full potential.

**After:**
> Our platform helps your team plan work, track it, and ship faster. It connects to Slack, GitHub, and Linear, so updates sync without copy-paste.

Tells removed: "in today's fast-paced world", "cutting-edge", "stands as a testament", "it's not just X, it's Y", "vibrant", "seamlessly leverages", "robust", "unlock full potential", em dashes.

## 2. Bio / about page
**Before:**
> Jane is a renowned expert who has been profiled in major outlets and maintains an active social media presence. She is passionate about leveraging data to foster meaningful change.

**After:**
> Jane is a data scientist. Her 2024 talk on election models has 400,000 views, and she writes a weekly newsletter on forecasting.

Tells removed: "renowned", media-coverage padding, "active social media presence", "passionate about", "leveraging", "foster meaningful change".

## 3. Encyclopedic / factual
**Before:**
> The library stands as a testament to the city's enduring commitment to learning, playing a pivotal role in fostering a rich cultural heritage.

**After:**
> The library opened in 1931. It holds 200,000 volumes and runs free adult-literacy classes on weekends.

Tells removed: "stands as a testament", "enduring commitment", "playing a pivotal role", "fostering", "rich cultural heritage". Replaced vagueness with facts.

## 4. The "challenges" formula
**Before:**
> Despite its industrial prosperity, the town faces challenges typical of urban areas. Looking ahead, future initiatives could further enhance its standing.

**After:**
> The town's main employer, a textile mill, cut 300 jobs in 2023. The council has not announced a replacement plan.

Tells removed: "Despite its… faces challenges typical of", "Looking ahead/future initiatives", "further enhance".

## 5. Email
**Before:**
> I wanted to reach out and underscore how excited we are to partner with you. Our team is deeply committed to delivering world-class, seamless solutions.

**After:**
> Thanks for the call yesterday. We can start the pilot on the 14th and have the first report to you two weeks later.

Tells removed: "underscore", "excited to", "deeply committed", "world-class", "seamless", filler opener.

## 6. Conclusion paragraph
**Before:**
> In conclusion, this approach not only saves time but also improves quality, ultimately representing a pivotal shift in how teams work.

**After:**
> Teams that tried it cut review time by about a third. Two of them have made it their default.

Tells removed: "In conclusion", "not only… but also", "ultimately", "pivotal shift".

---

Want to check your own draft? Run the bundled tell-scanner:
```bash
node bin/humanize-check.mjs your-draft.md
```
It prints each tell with a line number and a fix, then a summary count.
