---
title: The 3D View
sidebar_label: 3D View
---

The **3D** tab renders the cave as a three-dimensional model.

## Navigation

| Action | How |
| --- | --- |
| Orbit | Drag with the **left** mouse button |
| Move / dolly | Drag with the **right** mouse button |
| Zoom | Mouse wheel — an animated field-of-view change |
| Centre on a station | **Left-click** the station |
| Station information | **Right-click** the station |
| Reveal stations temporarily | Hold **Ctrl** — stations appear and filled walls are hidden while held |
| Continuous rotation | **AUTO ROTATE** |

Hovering a station inverts its colour so you can see which one you are about to click.

Holding **Ctrl** is the quickest way to find a station inside a filled model: the walls drop away and
the stations appear for as long as you hold the key.

## What to draw

| Toggle | Shows |
| --- | --- |
| **STATIONS** | Station markers |
| **LINES** | Survey lines |
| **WALL** | Passage walls |
| **GRID** | Reference grid |
| **SECTION** | Section names |
| **LIDAR** | LIDAR point clouds |
| **NURBS** | NURBS corridor surfaces |
| **RAYS** | Measurement rays |

## Appearance

| Control | Effect |
| --- | --- |
| **SIZE** | Station size |
| **THICKNESS** | Line thickness |
| **COLOR** | Wall colour |
| **OPACITY** | Wall transparency |
| **FOV** | Camera field of view |
| **DETAILS** | Mesh detail level: `LOWEST`, `LOW`, `MEDIUM`, `HIGH`, `HIGHEST` |
| Display type | `WIRE` or `FILL` |

## Vertical scale and georeferencing

| Option | Effect |
| --- | --- |
| **DEPTH x10** | Exaggerates the vertical scale tenfold, which makes shallow-gradient systems readable |
| **WALL ELEVATION SHIFT (m)** | Offsets the support plane. The offset scales with the cave's vertical extent, so deep caves keep their support plane in the right place |
| **USE UTM** | Georeferences exported coordinates in UTM |
| **FIRST START ELEVATION (m)** | The surface elevation of the first start point, used to place the model absolutely |

## Exports

| Command | Result |
| --- | --- |
| **OBJ** | 3D mesh |
| **KML** | Google Earth |
| **EXPORT WALLS** | The computed wall geometry |
| **TAKE A SNAPSHOT** | PNG image of the current view |

## LIDAR

LIDAR data sets attached from the [map action pane](Station-Actions.md) are displayed here.
Right-clicking a LIDAR point removes that record.

## Performance

If the 3D view is slow, lower the **DETAILS** level, switch from `FILL` to `WIRE`, turn off **WALL**,
or set **DEACTIVATE 3D WALL** in [Options](Options.md) to skip wall computation altogether.
