---
title: Loops, Connections and Closure
sidebar_label: Loop closure
---

Open the **LOOPS** panel from the [display panel](Display-Settings.md).

## Loops and connections

- A **loop** is a closed circuit inside one connected survey.
- A **connection** ties a surveyed endpoint to a station whose position is already fixed.

Both are created the same way: select the two stations that are physically the same point on the
[map](Station-Actions.md), then choose **CLOSURE → ADD**. The panel then lists every loop and
connection in the project.

## Correcting

| Button | Effect |
| --- | --- |
| **CORRECT (CLOSE) SELECTED LOOPS AND CONNECTIONS** | Adjusts the selected loops |
| **REMOVE ALL CORRECTIONS** | Reverts to the raw measured geometry |
| **AUTO CLOSE** | Corrects every loop and connection automatically whenever the data changes |

Two display options help you judge a correction:

- **DISPLAY NON CORRECTED PROJECT IN BACKGROUND** draws the raw survey behind the corrected one, so
  you can see exactly how far each station moved.
- The companion option hides non-corrected data entirely.

## Algorithms

The **ALGORITHM** list selects how the misclosure is distributed.

### UNIFORM — linear distribution

Distributes the closure error linearly along the loop, proportional to the length of each shot — the
Compass or Bowditch rule. Shots attached to locked stations, or already corrected by another loop,
are excluded from the distribution.

**Pros:** fast, simple, preserves the general shape of the survey.
**Cons:** does not distinguish angular accuracy from distance accuracy.

### LEASTSQUARE — 2D variation of coordinates

Models the network as a system of springs and solves for the coordinate changes that minimise the
weighted sum of squared residuals. Observations are weighted by the inverse of shot length, so long
shots are "softer" and absorb more of the adjustment.

**Pros:** statistically rigorous; solves many interlocking loops simultaneously.
**Cons:** more computation than uniform.

### POLAR_LEASTSQUARE — condition method

Solves for corrections to the **measurements** — azimuth and length — rather than to the coordinates,
using the condition method with Lagrange multipliers. Weighting reflects real cave instruments:

| Observation | Standard deviation |
| --- | --- |
| Azimuth | 1.0° (constant) |
| Length | 1% of the measured length, minimum 0.01 m |

**Pros:** works directly on the measurements, and shows whether azimuth or length uncertainty
dominates the closure error.
**Cons:** more complex cycle-basis construction.

This has been the default since v26.2. Projects created with an earlier version are switched over on
first launch after the update, with a notice.

:::info
The full mathematical treatment, with references, is in
[`doc/loop_closure_methods.md`](https://github.com/SebKister/ariane/blob/master/doc/loop_closure_methods.md)
in the source repository.
:::

## Solvers

Least-squares closure runs on a native Rust solver, and on **CUDA** where a suitable GPU is present.
CUDA can be turned off in [Options](Options.md); if a CUDA initialisation ever crashes, Ariane
disables it by itself for the next launch.

The iteration count of the native solver defaults to 60000 and can be changed on the
[command line](Files-And-Command-Line.md).

## Locked stations

A station marked `Locked` is treated as fixed and is never moved by closure — use it for stations
tied to a known surface point. Lock and unlock ranges of stations from
[Data Tools](Data-Tools.md).
