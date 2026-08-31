---
title: Complex Profiles
sidebar_label: Complex profiles
---

Enabling **USE COMPLEX PROFILE** in [Options](Options.md) replaces the four LRUD numbers with a full
vectorial cross-section per station, edited in the **PROFILE** tab of the
[left panel](Interface-Overview.md).

## Drawing a cross-section

Select a station — its name and the shot azimuth are shown at the top of the editor — then describe
the passage outline as a set of radius vectors:

| Action | How |
| --- | --- |
| Add a vector | Click in the drawing pane, or type an **angle** and **length** pair and press **ADD NEW VECTOR** |
| Reshape | Drag the manipulators |
| Remove a vector | Select it and press **Delete** or **Backspace** |
| Clear the section | **CLEAR** |
| Convert an absolute bearing | **Aº→Rº** turns an absolute azimuth into an angle relative to the shot |

**LOAD BG** places a background image behind the editor so you can trace a sketch, and the clear
button removes it again.

## Tension

Two sliders control how the vectors are smoothed into a surface:

| Control | Effect |
| --- | --- |
| **Pr. Tension** | NURBS tension *within* one cross-section |
| **Cor. Tension** | NURBS tension *along* the corridor, between consecutive cross-sections |

A global slider sets the corridor tension for the whole passage at once. **RESET TENSIONS** restores
the defaults.

Low tension gives rounded, organic passage; high tension follows the entered points more tightly.

## Overriding the section orientation

By default a cross-section is placed perpendicular to the shot. Where the passage turns sharply, that
is not what you want:

| Option | Effect |
| --- | --- |
| **OVERRIDE PROFILE DIRECTION** | Aim the section along an azimuth you specify |
| **OVERRIDE PROFILE TILT** | Set the section's tilt explicitly |

The available orientation types are `VERTICAL`, `HORIZONTAL`, `PERPENDICULAR` and `BISECTION` —
bisection splitting the angle between the incoming and outgoing shots, which is usually the right
choice at a bend.

The resulting corridor is rendered in the [3D view](Map-3D.md) when **NURBS** is enabled.
