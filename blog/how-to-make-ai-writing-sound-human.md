# How to make ChatGPT and Claude stop sounding like AI

You can usually tell when text came from a chatbot. The grammar is fine, every paragraph is competent, and somehow none of it sticks. It reads like it was sanded smooth until any edge fell off. There's a reason for that feeling, and it's fixable in about thirty seconds.

I spent last week reading Wikipedia's page "Signs of AI writing." The editors there have been drowning in machine-generated articles, so they sat down and cataloged the tells: the specific words, sentence shapes, and habits that give a bot away. I took that catalog and turned it into a prompt you can paste into any model. This is what I found.

## The slop has a fingerprint

Bad AI writing isn't random. It's the same handful of habits, over and over.

There's the vocabulary. Words like *delve*, *tapestry*, *testament*, *underscore*, *pivotal*, and *leverage* show up far more in AI text than in anything a person wrote by hand. They travel in packs, too. One *delve* usually means a *vibrant* and a *meticulous* are nearby.

There's the fake significance. A bot can't describe a thing without telling you it "stands as a testament" to something or "marks a pivotal moment." A library stops being a building that opened in 1931 and becomes a symbol of the city's enduring commitment to learning.

There's the construction everyone now recognizes: "It's not just X, it's Y." Not just a phone, a lifestyle. Not merely a tool, a movement. Once you see it you can't unsee it, and models reach for it constantly.

And there's the padding. Sentences end with a trailing "-ing" clause that sounds like analysis but says nothing, like "…, highlighting its importance in the broader landscape." Cut that clause and you lose zero information.

## Why models do this

None of this is a bug. Models are trained to sound fluent and agreeable, and the safest way to sound fluent is to reach for the phrasing that appeared most often in training. That phrasing is the average of a billion blog posts and press releases. The average is bland by definition.

So the default output isn't wrong. It's just generic, inflated, and identical to everyone else's default output. That's the slop.

## The fix is a list of rules

You don't need a special tool or a paid "humanizer." You need to tell the model what to avoid, specifically enough that it can check its own work.

That's the whole idea behind the repo I put together. It's a single prompt with ten rules: ban the vocabulary, kill the fake significance, drop the "-ing" padding, no "not just X but Y," stop forcing everything into lists of three, go easy on em dashes and bold, no marketing tone, name a source instead of saying "experts say," and never end on "In conclusion."

The last rule matters more than it sounds: vary your rhythm. Bots write in one tempo, sentence after sentence at the same medium length. People don't. Some sentences run long. Some are four words. Mixing it up does more for the human feel than any single word swap.

Here's the difference in practice:

> **Before:** Our cutting-edge platform stands as a testament to innovation, delivering not just speed but a seamless, world-class experience.
>
> **After:** The platform loads in under a second and works offline.

Same claim, minus the costume.

## How to use it

Paste the prompt into whatever you use. In ChatGPT it goes in Custom Instructions or a custom GPT. In Claude it goes in a Project or a Style. Gemini has Gems. Grok, Kimi, and DeepSeek all take a system instruction or a first message. After that the model runs its own check before each reply and strips the tells on its way out.

One warning: don't overcorrect. Stuffing in slang to "sound human" is its own tell. The goal isn't casual, it's plain. Say what you mean, cut what you don't, and let the writing be a little uneven the way real writing is.

The repo is free and MIT licensed. The full catalog of tells, the fix for each one, and the paste-in prompt are all in there: [github.com/haidrrrry/humanize-ai-writing](https://github.com/haidrrrry/humanize-ai-writing).

---

*Written with the skill applied to itself — no delve, no tapestry, no "in conclusion."*
