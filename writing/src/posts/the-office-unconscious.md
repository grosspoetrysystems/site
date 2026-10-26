---
title: The Office Acquires a New Unconscious
date: 2026-10-26
---

## The room

There was a time when knowing Google Docs seemed like a skill.

Not a serious skill, exactly. Not C++. Not plumbing. But a recognizable office competence: sharing the document, finding version history, leaving comments without making a mess, knowing when to suggest and when to edit. For a while, this fluency could be named. Then it became too ordinary. To put Google Docs on a resume now would sound like listing “writes email” or “has a positive attitude.”

This is how working media disappear. A tool becomes a skill; a skill becomes an expectation; an expectation becomes part of the room. Nobody needs to know what `.png` stands for to send an image. Nobody needs to know the history of MP3 compression to feel nostalgia through a bad speaker. Practical innocence is not stupidity. It is what infrastructure feels like once it has succeeded.

David Foster Wallace opened his [2005 Kenyon commencement speech](https://bulletin-archive.kenyon.edu/x4280.html) with the old story of two fish who do not know what water is because water is the condition they live inside. It is now a cliché, which is annoying because it remains useful. Office software is mostly water. The formats, permissions, comments, defaults, notifications, and version histories become visible only when they break, or when something new enters the room and makes the old room strange again.

Agentic work is doing that now.

## The handle

A repository gets an `AGENTS.md` file. It tells a coding agent how to set up the project, which tests to run, which folders to ignore, and what not to touch. It looks like documentation because documentation is the nearest existing category. It is also a small instruction surface for a machine that can act.

OpenAI says [Codex reads `AGENTS.md` files before doing work](https://developers.openai.com/codex/guides/agents-md). GitHub says its Copilot coding agent supports [`AGENTS.md` custom instructions](https://github.blog/changelog/2025-08-28-copilot-coding-agent-now-supports-agents-md-custom-instructions/). Anthropic’s Claude Code uses [`CLAUDE.md` files and auto memory](https://docs.anthropic.com/en/docs/claude-code/memory) for persistent project instructions across sessions. The names differ; the pattern does not. Coding agents need local instructions, and teams are beginning to write them down.

The file is not profound. That is why it is worth watching.

Small things end up naming the larger system around them. A file becomes a workflow. A button becomes a habit. A format becomes a way of thinking. The literary word is synecdoche. The office version is less graceful.

That is the role `AGENTS.md` plays here. Not the whole apparatus. The handle.

Markdown is a useful ancestor because it became powerful by seeming almost too plain to govern anything. John Gruber described [Markdown](https://daringfireball.net/projects/markdown/) as an easy-to-read, easy-to-write plain-text format that converts to structurally valid HTML. Its syntax felt close to ordinary writing habits: asterisks, dashes, brackets, indentation. It spread partly because it did not feel like submitting to a system. It felt like punctuation had quietly learned office work.

Google’s [Open Knowledge Format](https://cloud.google.com/blog/products/data-analytics/how-the-open-knowledge-format-can-improve-data-sharing/) is almost too perfect a specimen. It turns a familiar builder pattern — Markdown files with YAML frontmatter — into a proposed standard for AI-readable knowledge. The useful part is also the funny part. People feel around in the dark. An institution arrives later and publishes the shape of the wall.

`AGENTS.md` borrows that plainness and points it at something stranger: not a reader, not a browser, not a human maintainer skimming a README at 1 a.m., but an agent that may edit code, run commands, open a pull request, or obey an obsolete instruction with very expensive sincerity.

This is the level at which the thing becomes interesting. Not because `AGENTS.md` is the future. It may not be. The future enjoys humiliating filenames. The interest is that a new working medium is appearing while it is still awkward enough to notice.

A file like this contains obvious instructions: install dependencies, run tests, follow style rules. It also starts to collect less obvious material: which test people actually trust, which migration everyone avoids, which directory is generated, which README is aspirational, which command is official but useless, which shortcut saves the afternoon and which one creates a weekend.

If you work near these things, the absurdity is immediate. You spend the day thinking about agent memory, model routing, context windows, stale instructions, and whether a machine has been over-instructed into incompetence. Then you go to a bar and someone asks what you do. Everyone has an opinion about AI. Almost nobody wants to hear that you are half-watching six remote agents from a barstool. That your night has a background process.

Fair enough.

But this is often how office history works. The boring object arrives first as an irritation, then as a workaround, then as etiquette, then as competence, then as substrate. Git was once exotic. Markdown was once a preference. Shared documents were once a trick. Memes became ordinary when people learned not to explain them. Explanation is where the meme goes to die.

The developer layer is not morally deeper than the public AI panic. It is just closer to the plumbing while the wall is open. The public layer is jobs, schools, cheating, slop, data centers, therapy, landlord emails, family replies, and the private uses people do not confess because they still want to believe they are a certain kind of person. The developer layer is stranger but less theatrical: prompts, agents, shell scripts, context exclusions, token bills, generated diffs, CI failures, local rules.

Both layers are speaking different dialects of the same disorientation.

## The leak

This is where Melvin Conway becomes useful. In 1968, Conway argued that organizations designing systems tend to produce designs that mirror their own communication structures. The shorthand became [Conway’s Law](https://www.melconway.com/Home/Committees_Paper.html). It matters here because agent instruction files are not only technical guidance. They are small organizational self-portraits: what a team trusts, what it fears, where authority lives, which mistakes became policy, and which parts of the work depend on somebody remembering why the official path is wrong.

No one writes instructions from nowhere. The org chart leaks. The review culture leaks. The compliance anxiety leaks. A company with confused ownership will tend to write confused agent permissions. A team that treats review as theater will teach the agent to produce review-shaped theater. Conway’s Law was never only about software modules. It was about the fantasy that technical systems are separate from the social systems that produce them.

The apparatus lives in that leak.

By apparatus, I mean the working arrangement that gathers around agentic work before anyone quite knows what to call it: instruction files, memories, defaults, recovery paths, permissions, model choices, local habits, and the little refusals by which people keep automation from becoming weather. Some of it is company-specific. Some of it is team culture. Some of it is personal craft. Some of it is nonsense that survived because it was copied by someone in a hurry, which is also how civilization works more often than advertised.

## The apparatus

The apparatus is personal before it is institutional.

This is easy to miss because the visible pieces look technical. It looks like a pile of parts. It is a pile of parts. But so is a hobby car in a garage. The point is not machinery as romance. The point is fit.

A person’s working apparatus begins to wear to the shape of them. Their shortcuts, refusals, rhythms, anxieties, ambitions, irritations, and private theories of what good work feels like. Which model they trust for first passes. Which agent they never let near migrations. Which commands they run before showing anyone. Which files they keep out of context. Which parts of the day they protect. Which parts they sacrifice and later call productivity.

This is why the boundary question is not only legal. It is social and ergonomic. What can be shared with a coworker? What belongs in the repo? What belongs to the employer? What belongs to the team because the team made it better? What belongs to the worker because it is the accumulated shape of how they move through work?

The old developer status games made this easier to hide. There was a hierarchy around esoteric knowledge: Big O, LeetCode, framework fluency, shell magic, obscure build errors, the ability to pull a rabbit from a hat during an incident while everyone else watched Slack get tense. Open source complicated that hierarchy in the best way. It made practice visible, copied, argued over, improved, forked. It raised the floor.

Agentic tools raise the floor again, unevenly and all at once.

Now everyone has some version of the rabbit. Or at least everyone has access to a rabbit-shaped event. A prompt, a Figma file, a Linear ticket, a repo, a question, and suddenly there is a credible path forward. Not always correct. Not always safe. But credible enough to change the tempo of the room.

The old magic is partly gone because the trick is exposed. Some knowledge that once signaled study now appears on demand. Some fluency that once distinguished a person now arrives as autocomplete with opinions. A junior person can ask a model the question they were afraid to ask in standup. A designer can get close enough to code to be useful or volatile, depending on the hour. A backend developer can generate the frontend they would rather not spiritually inhabit. The boundaries blur, and everyone performs excitement in the register their employment situation requires.

But the new magic is real. It is not nothing that a person can attach a design, a ticket, and a repo and get a useful answer. It is not nothing to move faster through the mud. It is not nothing to have a second mind that is often wrong but rarely tired. The mistake is gawking at the miracle for too long, as if astonishment were a workflow.

The next problem is ordinary and worse: what does the day become?

If one ticket becomes five, if one role becomes four, if the worker is now designer, reviewer, developer, documentarian, account manager, coworker, remote employee, parent, partner, tenant, patient, and person with a body, then the question is not only whether the agent can do the task. The question is whether the apparatus helps the person carry the multiplication without turning the day into paste.

By ergonomics I do not only mean furniture. I mean the design of a day that now contains too many contexts. How is the day entered? How is context staged? Which agents are allowed to act? What should remain local? What should expire? What belongs to the team? What belongs to the worker? What did the machine learn that should not become a permanent institutional fact?

## The loop

The labor question enters through the loop.

“Human in the loop” is one of the gentler, and therefore stickier, phrases in the current vocabulary. In the mania, it sounds grounding. A safety mechanism. Proof that somewhere inside the machine there is still a person with judgment, hesitation, liability, a pulse.

Sometimes that is true. Sometimes the person keeps agency, or has a chance to, in spite of auto mode.

The phrase also hides a smaller, stranger fact: many people want to stay in the loop. Not because they distrust automation in some abstract way, but because the work is better when they nurse it. They steer, prune, restart, compare, interrupt, redirect. The agent is sold as delegation and experienced as supervision.

This is the part that does not fit cleanly into the demos. The story is long-running tasks, loops, background agents, token spend, come back later.

A marble statue sculpted with a fire hose.

The practice is often more intimate and less impressive: watching three or four processes, forgetting which one knows what, checking whether the clever answer is actually attached to the right problem, feeling the cost of every context switch in the base of the skull. Recent interview research on [developers using software agents](https://arxiv.org/abs/2606.05391) makes a similar point in less barstool language: oversight work is not only reactive review, but also a priori control, co-planning, real-time monitoring, and post hoc review.

This is why spec and verification keep returning. A spec is not paperwork; it is a defense against vibes. Verification is how the loop learns whether anything real happened.

When the system works, it looks autonomous. When it fails, you remember how much tending was involved.

That may still be progress. It probably is. But it changes the work into something closer to orchestration, or plate-spinning, or tending several machines that are overconfident and relentless. The limit may not be model capability. It may be human attention.

## The work

The product begins here, if it begins anywhere, but quietly. Not with another platform for “AI productivity,” a phrase already so smooth it has stopped meaning anything. With the apparatus itself. What instructions exist? Who wrote them? Which tools read them? Are they stale, conflicting, or too broad? Do they expose secrets? Do they encode company policy, team convention, or one person’s private workaround? Can the environment be rebuilt? Are updates governed? Can the worker leave without donating their whole method to the institution by accident?

Early research suggests this layer is real enough to measure and messy enough to distrust. A study of [`AGENTS.md` and `CLAUDE.md` configuration smells](https://arxiv.org/abs/2606.15828) found common issues including lint leakage, context bloat, and skill leakage. An [`Instructions-as-Code` paper](https://arxiv.org/abs/2606.13449) analyzed 15,549 agentic pull requests across 148 projects and found mixed outcomes after projects adopted instruction files: 27.7% of projects increased merge rate by at least 20%, while 26.35% decreased it. A separate evaluation of [repository-level context files](https://arxiv.org/abs/2602.11988) found they can reduce task success and increase inference cost by over 20% when they add unnecessary requirements. This is not proof that instruction files are good. It is proof that they are already behaving like software: useful, fragile, measurable, and capable of rotting.

The adjacent tooling tells the same story from another angle. [Nix flakes](https://nix.dev/concepts/flakes.html) declare inputs and outputs with a standard structure to help build programs with the same versions. [`mise.lock`](https://mise.jdx.dev/dev-tools/mise-lock.html) pins exact tool versions and checksums for reproducible environments. Renovate’s [`minimumReleaseAge`](https://docs.renovatebot.com/key-concepts/minimum-release-age/) waits before suggesting dependency updates to reduce supply-chain risk. These are not glamorous things. They are part of the boring machinery that makes agentic work less like a séance and more like engineering.

If you know what half of those are, you may need a nap. But thank you for your participation.

The sandbox should work. Secrets should not leak. Permissions should be narrow. That is table stakes, not the soul of the matter. The studio does not only want to describe this apparatus. It wants to build for it: sandboxes, secrets brokers, recovery paths, memory tools, small local systems, better starts to the day. Some of this is security. Some of it is ergonomics. Some of it is just making the obvious thing easier before it becomes another ritual no one remembers choosing.

How does automation become invisible in the good way: named while dangerous, shaped while awkward, and then allowed to recede without becoming unaccountable?

This is the difference between gawking at the printing press and learning the print shop.

Company code is company code. Company data is company data. The blurrier object is the generalized method around the work: how someone checks, delegates, refuses, prompts, recovers, protects context, and knows when the machine should stop. When that method is private, it looks like craft. When written down for an agent, it starts to look like infrastructure. When infrastructure helps the organization, someone eventually asks whether it is an asset.

The answer may vary. It should at least be asked before procurement, telemetry, or a default employment agreement answers it by accident.

The [OECD](https://www.oecd.org/en/publications/algorithmic-management-in-the-workplace_287c13c4-en.html) calls this nearby problem algorithmic management: software, sometimes AI, taking over tasks once done by human managers. Its 2025 report treats both productivity claims and worker risks as live issues. An `AGENTS.md` file is not algorithmic management. But once the path to output becomes visible to software, it can also become visible to management. The gap between assistance and measurement is not infinite.

A healthy organization should not want every trace of practice to become property. That sounds pious until you imagine the actual workplace. People will hide what helps them. They will sanitize the record. They will move experiments into unofficial tools. They will contribute dead templates because dead templates are safe. The organization will obtain standardization and lose practice.

This is not rebellion. It is office physics.

Gross Poetry Systems begins from this almost futile place. It cannot stop working media from becoming invisible. The more plausible work is smaller: notice the medium while it is still awkward; build tools that expose assumptions; write down enough language that later convenience does not completely erase earlier choice.

There is humor in this because there has to be. The file is called `AGENTS.md`. The stakes are labor, memory, ownership, competence, daily overload, and whether your future manager can export your shell habits from some enterprise product with a name like Workforce Intelligence Pro. The form is ridiculous. The stakes are not. This is one of the basic humiliations of office life: history arrives as admin.

Maybe this all becomes normal. Probably it does. People will say “add the agent instructions” the way they now say “share the doc.” A junior person will learn the ritual without knowing it was once contested. Someone will put “AI workflow orchestration” on a resume until, mercifully, that too becomes embarrassing. Some format will win, or several will settle into an ugly peace. The protocol will become manners. The manners will become competence. The competence will become invisible.

That is not a reason to look away. It is the reason to look now.

The work is not to keep the apparatus strange. The work is to decide, while it is still visible, what ordinary should mean.

## Notes

1. David Foster Wallace’s “This Is Water” was delivered as the 2005 Kenyon College commencement address. The fish story is the opening frame of the speech. See Kenyon College’s archived version of “[This Is Water](https://bulletin-archive.kenyon.edu/x4280.html).”
2. OpenAI’s Codex documentation describes `AGENTS.md` as a custom-instructions file that Codex reads before beginning work. GitHub’s Copilot coding agent documentation and changelog describe support for root and nested `AGENTS.md` files. Anthropic’s Claude Code documentation describes `CLAUDE.md` files and auto memory as persistent project context loaded into sessions. See OpenAI, “[Custom instructions with AGENTS.md](https://developers.openai.com/codex/guides/agents-md),” GitHub, “[Copilot coding agent now supports AGENTS.md custom instructions](https://github.blog/changelog/2025-08-28-copilot-coding-agent-now-supports-agents-md-custom-instructions/),” and Anthropic, “[How Claude remembers your project](https://docs.anthropic.com/en/docs/claude-code/memory).”
3. John Gruber’s original Markdown documentation describes Markdown as an easy-to-read, easy-to-write plain-text format that converts to structurally valid HTML. See “[Markdown](https://daringfireball.net/projects/markdown/).”
4. Google Cloud’s Open Knowledge Format announcement describes OKF v0.1 as a vendor-neutral format for AI-readable knowledge, represented as a directory of Markdown files with YAML frontmatter. See “[How the Open Knowledge Format can improve data sharing](https://cloud.google.com/blog/products/data-analytics/how-the-open-knowledge-format-can-improve-data-sharing/).”
5. Melvin Conway’s 1968 paper, “How Do Committees Invent?,” argues that organizations tend to design systems that mirror their own communication structures. The idea later became known as Conway’s Law. See “[How Do Committees Invent?](https://www.melconway.com/Home/Committees_Paper.html)”
6. Shipi Dhanorkar, Samir Passi, and Mihaela Vorvoreanu’s 2026 paper, “Human oversight of agentic systems in practice,” reports interview research with developers using software agents and identifies four forms of oversight work: a priori control, co-planning, real-time monitoring, and post hoc review. See “[Human oversight of agentic systems in practice](https://arxiv.org/abs/2606.05391).”
7. Helio Victor F. dos Santos, Vitor Costa, João Eduardo Montandon, Luciana Lourdes Silva, and Marco Tulio Valente’s 2026 paper, “Configuration Smells in AGENTS.md Files,” studies `AGENTS.md` and `CLAUDE.md` files and identifies recurring configuration smells including lint leakage, context bloat, and skill leakage. See “[Configuration Smells in AGENTS.md Files](https://arxiv.org/abs/2606.15828).”
8. Ali Arabat and Mohammed Sayagh’s 2026 paper, “Toward Instructions-as-Code,” analyzes 15,549 agentic pull requests across 148 projects. The paper reports that after projects adopted instruction files, 27.7% increased merge rate by at least 20%, while 26.35% decreased it. See “[Toward Instructions-as-Code](https://arxiv.org/abs/2606.13449).”
9. Thibaud Gloaguen, Niels Mündler, Mark Müller, Veselin Raychev, and Martin Vechev’s 2026 paper, “Evaluating AGENTS.md,” finds that repository-level context files can reduce coding-agent task success and increase inference cost by more than 20% when they add unnecessary requirements. See “[Evaluating AGENTS.md](https://arxiv.org/abs/2602.11988).”
10. Nix’s documentation describes flakes as files declaring inputs and outputs with a standard structure to help projects use consistent versions. The `mise.lock` documentation describes the lockfile as pinning exact tool versions and checksums for reproducible environments. Renovate’s documentation describes `minimumReleaseAge` as a delay before suggesting dependency updates, intended to reduce supply-chain risk. See Nix, “[Flakes](https://nix.dev/concepts/flakes.html),” mise, “[mise.lock](https://mise.jdx.dev/dev-tools/mise-lock.html),” and Renovate, “[Minimum Release Age](https://docs.renovatebot.com/key-concepts/minimum-release-age/).”
11. The OECD’s 2025 report “Algorithmic Management in the Workplace” defines and studies software systems, including AI-enabled systems, that perform managerial functions, and discusses both productivity claims and worker-risk concerns. See OECD, “[Algorithmic Management in the Workplace](https://www.oecd.org/en/publications/algorithmic-management-in-the-workplace_287c13c4-en.html).”
