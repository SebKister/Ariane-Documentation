---
title: Options
sidebar_label: Options
---

Open **OPTIONS** from the [display panel](Display-Settings.md). The panel has a **GENERAL** and an
**EXPORT** section — the export settings mirror the display settings but apply to exported output.

## Display

| Option | Effect |
| --- | --- |
| **STATION SIZE** | Size of station markers |
| **LINE SIZE**, **LINE THICKNESS** | Survey line weight |
| **TEXT** size | Label font size |
| **AUTO HIDE TEXT** | Hides labels that would overlap |
| **BACKGROUND**, **COLOR** | Background and drawing colours |
| **UNICOLOR MODE** | Draws every element in one chosen colour |
| **SCALE OF DASHED LINE**, **SCALE OF LINE PATTERN** | Pattern scaling |
| **GRID SIZE** | Map grid spacing |
| **BIG DATA MODE** | Draw data partially when zoomed out, to keep large projects readable |
| **DEPTH x10** | Exaggerate the vertical scale |

## Walls and profiles

| Option | Effect |
| --- | --- |
| **SHOW WALL** | Draw computed passage walls |
| **WALL COLOR** | Wall colour |
| **DEACTIVATE 3D WALL** | Skip 3D wall calculations entirely |
| **WALL ELEVATION SHIFT (m)** | Offset of the 3D support plane |
| **Max LRUD Size** | Caps outlying LRUD values |
| **LR PROFILE ONLY** | Build profiles from left and right dimensions only |
| **USE COMPLEX PROFILE** | Full vectorial cross-sections instead of LRUD — see [Complex Profiles](Complex-Profiles.md) |

## Behaviour

| Option | Effect |
| --- | --- |
| **EXCEL SHEET MODE** | Spreadsheet keyboard navigation in the data tables |
| **PEN MODE** | Input tuned for pen and tablet use |
| **START IN FULLSCREEN** | Start the application maximised |
| **LANGUAGE** | Interface language — *requires a restart* |
| **AUTO CLOSE** | Correct all loops and connections automatically whenever data changes |
| **DISABLE CUDA ACCELERATION** | Turn off GPU acceleration of the least-squares solver — *requires a restart* |

## Satellite imagery

| Option | Effect |
| --- | --- |
| **USE SATELLITE IMAGERY** | Show satellite tiles behind the map |
| **CHOOSE SATELLITE IMAGERY PROVIDER** | Google Maps, Google Maps Hybrid, Azure Maps, HERE Maps or Mapbox |
| **DYNAMIC SAT. IM. REFRESH** | Unload tiles that are not visible, to lower the memory footprint |
| **RESET SAT IMAGE CACHE** | Empty the downloaded tile cache |

## Export

| Option | Effect |
| --- | --- |
| **EXPORT SETTINGS** | The drawing settings used when exporting |
| **USE DISPLAY SETTINGS** | Export with the current on-screen settings instead |

## Loop closure

| Option | Effect |
| --- | --- |
| **DISPLAY NON CORRECTED PROJECT IN BACKGROUND** | Draw the raw survey behind the corrected one |
| Hide non-corrected data | Show only corrected geometry |

## Resetting

**RESTORE DEFAULT SETTINGS**, in the toolbar's **ABOUT** menu, resets every setting to its default.
