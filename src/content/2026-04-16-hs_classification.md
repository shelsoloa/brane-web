---
title: What we learned building HS classification for Canadian forwarders
date: 2026-04-16
slug: hs-classification-findings
author: Sheldon Soloa
description: "Two HS codes for a remanufactured Ford F-150 transmission. One is wrong. Here's how that edge case shaped our classification engine."
---

Two HS codes for a remanufactured Ford F-150 transmission: 848340 and 870840. One is wrong. The wrong one is the one that looks right if you're searching by keyword, and the one a confident model will hand back to you 9 times out of 10.

It's close, but we all know that in the freight biz, "close" isn't an option. You're either right, or you're paying for it. 

That's the case that turned an internal tool into the cornerstone of `brane-classify`, BraneBridge's HS Classification engine.

## The Section Notes are the rules that tell you how to use the rules

We created an evaluation harness with dozens of real product cases to test our system against. In one case: "6-speed automatic transmission assembly, remanufactured, for Ford F-150 pickup trucks", our engine kept returning _848340_ instead of 870840.

> 848340: gearboxes / power transmission components
>
> 870840: gearboxes and their parts **for motor vehicles**

One of those subtle differences that doesn't show up until CBSA reassesses the entry months later, and the K84 correction lands on someone's desk. This became our primary benchmark.

A seasoned customs broker would know what the differentiating factor is in this case: that this particular transmission good is a vehicle part. However, our system was missing the context in the Section Notes. Experienced brokers learn this context over years, and only consult the Section Notes for edge cases. Our system had no such intuition, so we fed it the same reference doc a senior broker reaches for, the entire set of Section Notes.

The Section Notes provided vital context that helps clear up the constant ambiguity in the tariff schedule. While most cases don't need them, we knew that we needed to be covered even in the fringe scenarios.

## The model can't be uncertain about codes it never saw

While our model was selecting the wrong code, it was also professing ~86% confidence. This exposed a major issue; our first model wasn't just wrong, it was **confident** and wrong.

This is why this went from a short project to a cornerstone. We realized that if we couldn't trust our outputs, we didn't have a tool; we had a liability.

So we dug into our model's outputs to figure out why it reached its conclusion, and we found that when our model read "transmission", it considered Chapter 84 (Machinery) with 86% confidence, and dismissed Chapter 87 (Vehicle parts) with 14% confidence.

Within the chapters it was given, 848340 was the most reasonable answer. We learned it's not about _how sure is your model_, but _how sure is your model within the slice it's been given_.

## Classification is a funnel problem, not a lookup problem

From the start, we knew we had two problems to solve:

1. Accuracy
2. Cost

Feeding the entire HS schedule into an LLM and asking for it to spit out the applicable code was wasteful, slow, and inaccurate. So we devised a multistage approach where we filtered down from chapters, then to headings, then to subheadings.

The problem with the lookup method was that it required us to find a matching code in a flat space. With over 7000 codes, that wasn't feasible. So instead, we iterated at each layer of the HS tariff, eliminating codes that didn't match, trimming the fat until we were left with a small enough problem space.

This funnel approach reduced our costs significantly, and provided us additional context space at each step to add Section Notes, which then solved our accuracy problem.

---

This is the work behind `brane-classify`, the HS classification API we're opening up soon. If you work with the Canadian Customs Tariff for a living, I'd genuinely like to hear how you handle the edge cases.
