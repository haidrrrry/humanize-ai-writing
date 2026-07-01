# I got tired of AI slop, so I built a tool that kills it

Last month I read a paragraph a friend wrote for her startup's About page. It was fine. Grammatically clean, on topic, competent. And I knew within two sentences that a chatbot wrote it.

I couldn't say why at first. Then I started counting. The word "vibrant." A sentence that ended with "highlighting its commitment to innovation." The phrase "it's not just a product, it's a movement." A closing line that began with "Ultimately." None of it was wrong. All of it was slop.

That feeling has a name now. People call it AI slop: text that is fluent and empty at the same time. It passes a spellcheck and fails a human. And once you learn the pattern, you see it on half the internet.

So I built a small open-source project to fix it. This is what I learned making it.

## The slop is not random

The useful discovery came from Wikipedia. Their editors have spent two years fighting a flood of machine-written articles, and they wrote down what gives a bot away. The page is called "Signs of AI writing," and it is long, specific, and unglamorous. Exactly what I needed.

The tells fall into a few groups.

There is the vocabulary. Words like delve, tapestry, underscore, and leverage appear far more often in AI text than in anything a person types by hand. They cluster, too. One "vibrant" tends to bring a "meticulous" and a "seamless" with it.

There is fake significance. A chatbot struggles to describe a thing without telling you it "stands as a testament" to something or "marks a pivotal moment." A library stops being a building from 1931 and becomes a symbol of the city's commitment to learning.

There is the construction everyone now recognizes: "it's not just X, it's Y." Not just a phone, a lifestyle. Not merely a tool, a movement. Models reach for it constantly.

And there is the padding. Sentences trail off with an "-ing" clause that sounds like analysis and carries no fact. "…, reflecting a broader shift in the industry." Cut it and you lose nothing.

There are more. Rule-of-three lists ("fast, reliable, and scalable"). The overuse of em dashes. The hollow "In conclusion" that restates what you just read. Marketing tone where a plain sentence would do.

## Why models do it

None of this is a bug. A language model is trained to produce the most probable next word, and the most probable word is the average of everything it read. The average of a billion blog posts and press releases is bland by construction. So the default voice of every model is the same slightly inflated, slightly hollow register. That register is the slop.

Which means you can fix it the same way for every model: tell it, specifically, what to avoid.

## Turning the list into rules

I took the Wikipedia catalog and rewrote it as 12 rules a model can check itself against. Ban these words. Don't fake significance. No "-ing" padding. No "not just X, but Y." Use plain "is" instead of "serves as." Name a source or cut the claim. Stop on the last real point instead of writing a conclusion.

One rule mattered more than I expected: vary your rhythm. Bots write in one tempo, sentence after sentence at the same medium length. People don't. Some sentences run long. Some are three words. That variation does more for the human feel than any single word swap.

Here is the difference in practice.

Before: "Our cutting-edge platform stands as a testament to innovation, seamlessly leveraging robust technology to unlock your team's full potential."

After: "Our platform helps your team plan work and ship it faster. It syncs with Slack, GitHub, and Linear."

Same claim, minus the costume.

## Making it work everywhere

The rules are only useful if they run in the tool you already use. So the project ships in a few forms.

For Claude, it installs as a skill and triggers when you say "humanize this." For ChatGPT, Gemini, Grok, and Kimi, you paste one prompt into the custom-instructions box. For coding tools like Cursor and Google Antigravity, you drop a single AGENTS.md file in your project and several tools read it at once.

I also wrote a command-line scanner. Point it at any draft and it prints every tell with a line number and a fix, then a count. I run it on my own writing now, including this post. It caught two em dashes and a stray "leverage" before I published.

## One honest caveat

The Wikipedia page is careful about something, and I kept it in the project: a single flagged word proves nothing. AI detectors are unreliable and flag human writing all the time. The goal is not to purge every instance of a word at the cost of meaning. The goal is to stop producing the *clusters* of tells that make text read as machine-made. Keep the facts, keep the voice, cut the costume.

That distinction is the whole thing. Slop is not any one word. It is the accumulation of small default choices that no one chose. Name those choices and a writer, human or AI, can make different ones.

The project is free and MIT licensed. The rules, the per-tool setup, and the scanner are all in the repo: [github.com/haidrrrry/humanize-ai-writing](https://github.com/haidrrrry/humanize-ai-writing). Run it on your next draft and read the before and after side by side. You'll start seeing the pattern too.
