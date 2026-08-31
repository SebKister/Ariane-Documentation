---
title: The Display Panel
sidebar_label: Display panel
---

The right-hand panel in survey mode controls what the map shows. Each label is a toggle.

## What to draw

| Toggle | Shows |
| --- | --- |
| **STATION** | Station markers |
| **SECTION** | Section names |
| **NAME-ID** | Station names and IDs |
| **DP** | Depth of each station |
| **AZ** | Azimuth of each shot |
| **L** | Length of each shot |
| **EOL DISTANCE** | End-of-line distances |
| **COMMENT** | Station comments |
| **WALL** | Computed passage walls |
| **GRID** | The coordinate grid |
| **SCALE** | The scale bar |
| **LOOP ERROR** | Misclosure indicators on loops |
| **ANNOTATION** | [Annotations](Station-Actions.md) |
| **CARTO** | The [drawn map](Carto-Mode.md) underneath the survey |
| **START** | Start points |

## Line size and colour

**TYPE OF LINE** chooses how shots are drawn:

| Mode | Effect |
| --- | --- |
| `STANDARD` | One colour per section |
| `BY_DEPTH` | Colour graded by depth |
| `BY_REMOTENESS` | Colour graded by distance from the entrance |
| `REMOTE_THRESHOLD` | Two-tone split at a remoteness threshold |
| `DEPTH_THRESHOLD` | Two-tone split at a depth threshold |
| `DEPTH_RANGE` | Only the depth band between the low and high values |
| `BY_DATE` | Colour graded by survey date |
| `WITH_DIRECTION` | Arrows showing the survey direction |

The threshold and range modes use the **Low depth value**, **High depth value** and
**Depth threshold value** fields underneath.

## Satellite imagery

**SAT. IMAGERY** overlays satellite tiles behind the survey, using the project's geographic
coordinates. The provider is chosen in [Options](Options.md):

- Google Maps
- Google Maps Hybrid
- Azure Maps
- HERE Maps
- Mapbox

Tiles are cached under `~/.ariane/Cache`. **DYNAMIC SAT. IM. REFRESH** unloads tiles that are not
visible to reduce memory use, and **RESET SAT IMAGE CACHE** empties the cache.

## Performance

**BIG DATA MODE** draws only part of the data when you zoom out, so large projects stay readable and
responsive.

**REDRAW** forces a full redraw when you want to be sure you are looking at current geometry.

## Floating panels

Four buttons open panels over the map:

| Button | Panel |
| --- | --- |
| **OPTIONS** | [Application settings](Options.md) |
| **LOOPS** | [Loop closure](Loop-Closure.md) |
| **PROJECTS** | [Project Library](Project-Library.md) |
| **ANNOTATIONS** | The annotation list, with refresh and remove |
