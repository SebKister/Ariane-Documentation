---
title: Profiles
sidebar_label: Overview
---

The **PROFILE** tab plots depth against distance along the cave — the elevation view of the survey.

| Button | Effect |
| --- | --- |
| **UPDATE** | Recomputes the profile from current data |
| **ON SCALE** | Draws the profile to a chosen scale |
| **PRINT** | Prints it |
| **EXPORT SVG** | Writes it as vector graphics |

## Build modes

| Mode | Behaviour |
| --- | --- |
| `PROGRESSION` | Distance is measured along the survey path, following the cave |
| `GEOMETRIC` | Distance is measured geometrically |

## Cross-sections

How the passage *shape* is described at each station is a separate question from the elevation
profile:

- By default a cross-section is four numbers — the **LRUD** dimensions entered with each shot.
- Turning on **USE COMPLEX PROFILE** in [Options](Options.md) replaces LRUD with a full vectorial
  cross-section, edited in the [complex profile editor](Complex-Profiles.md).

**LR PROFILE ONLY** in Options restricts profile building to the left and right dimensions, ignoring
up and down.
