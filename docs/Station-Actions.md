---
title: Selecting Stations and Acting on Them
sidebar_label: Station actions
---

## The two-click selection

Click a station once — it is highlighted and animated. Click a **second** station and:

- a curve is drawn between the two;
- the survey rows between them are listed in the **action pane** at the bottom of the map;
- the action pane's menus become available.

Clicking a **third** station clears the pair and starts a new selection from it.

Hold **Ctrl** while clicking to add stations to a multi-selection instead of driving the pair.

The padlock at the right of the action pane keeps the pane open between selections.

:::tip
The table inside the action pane is editable. It is the fastest way to fix one bad shot without
leaving the map.
:::

## Action pane menus

### STATION

| Item | Effect |
| --- | --- |
| **DELETE STATION** | Deletes the rows selected in the action table |

### CLOSURE

| Item | Effect |
| --- | --- |
| **ADD** | Declares that the two selected stations are the same physical place, creating a loop or a connection. See [Loop Closure](Loop-Closure.md) |

### RELINK

| Item | Effect |
| --- | --- |
| **RELINK** | Re-parents the second station onto the first, restructuring the survey tree. Use it when a branch was entered hanging off the wrong station |

### SECTION

| Item | Effect |
| --- | --- |
| **PUSH** | Appends the selected stations to an existing section |
| **ADD NEW** | Makes a new section out of the selection |

### DATAMIXER

| Item | Effect |
| --- | --- |
| **ADD** | Sends the run between the two stations to the [Data Mixer](Data-Mixer.md) as a data set |

### INSERT

| Item | Effect |
| --- | --- |
| **STATION AT DISTANCE** | Inserts a new station along the shot at the distance you give |
| **TRIANGULATION** | Places a station from two measured distances. Enter *distance A* and *distance B* — the two legs from the selected pair — taken clockwise `(Pa, Pb, d)` |

### ANNOTATION

| Item | Effect |
| --- | --- |
| **DISTANCE** | Annotates the straight-line distance between the two stations |
| **SWIM DISTANCE** | Annotates the shortest distance *through the cave*. Reports `NOT CONNECTED` if no path exists |
| **GAS REQUIREMENTS** | Estimates the gas needed for that swim |

**GAS REQUIREMENTS** takes two inputs:

| Input | Range | Meaning |
| --- | --- | --- |
| **SAC** | 5–100 | Surface air consumption, l/min/bar |
| **PROGRESSION SPEED/MIN** | 2–200 | Distance covered per minute, in the project unit |

The result is written as an annotation reading, for example,
`gas= 1240l @SAC=20.0l/min/bar @speed=10.0m/min`.

Annotations created here are listed in the floating **ANNOTATIONS** panel, where they can be
refreshed and removed.

### CONFIDENCE ZONE

| Item | Effect |
| --- | --- |
| **ADD** | Draws a statistical uncertainty zone around the selection |

Inputs: the **CONFIDENCE %** (default 95), the standard deviations of **length**, **depth** and
**azimuth**, and the **GRID SIZE** used to compute the density. The result shows how much the true
position of the far station could differ from the plotted one, given the stated instrument accuracy.

### LIDAR

| Item | Effect |
| --- | --- |
| **LIDAR DATA SET** | Attaches a JedEye LIDAR scan to the selection |

LIDAR points are displayed in the [3D view](Map-3D.md), where right-clicking one removes it.
