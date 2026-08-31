---
title: Interface Overview
sidebar_label: Interface Overview
---

Ariane uses a custom window frame. The top strip is the **header**: drag it to move the window,
double-click it to maximise or restore, and use the buttons at its right to minimise, maximise and
close. There is a resize grip in the bottom-right corner.

## Toolbar

| Button | Action |
| --- | --- |
| **START A NEW PROJECT** | Clears the current data and opens the [Data Wizard](Data-Wizard.md) |
| **OPEN A PROJECT (TML, XLS, DAT)** | Opens a survey file — see [Import and Export](Import-Export.md) |
| **SAVE PROJECT** / **SAVE AS … (TML)** | Writes the project as an Ariane TML file |
| **MERGE A PROJECT INTO CURRENT ONE** | Adds another TML file's data to the open project |
| **UNDO** / **REDO** | Steps through the edit history |
| **IMPORT** | Import formats contributed by [plugins](Plugins-And-Languages.md) |
| **EXPORT** | SVG, KML, OBJ, MAK, Excel CSV, GIF, HTML, filtered TML |
| **PLUGINS** | Plugin Manager, Add Plugin |
| **ABOUT / LICENSE** | Version, licence manager, data usage policy, build demo file, restore defaults |

The toolbar also shows the project name and unit, a progress indicator with a cancel button for long
tasks, a memory and system readout (click it to refresh), and the
[linked-video](Linked-Video.md) transport controls when a video is attached.

When a newer version has been downloaded, an **INSTALL UPDATE** button appears here as well.

## Main tabs

| Tab | Purpose |
| --- | --- |
| **MAP** | The 2D plan view — [survey editing](Map-Overview.md) and [cartography](Carto-Mode.md) |
| **3D** | The [3D cave model](Map-3D.md) |
| **DATA TABLE** | The [full survey table](Data-Table.md), with filters |
| **DATA WIZARD** | [Guided data entry](Data-Wizard.md) and device import |
| **STATISTICS** | [Totals and charts](Statistics-And-Report.md) |
| **REPORT** | A [printable text summary](Statistics-And-Report.md) |
| **PROFILE** | [Depth/distance elevation profile](Profiles.md) |
| **DATA TOOLS** | [Bulk edit operations](Data-Tools.md) |

## Left panel

A collapsible panel on the far left holds three tools. Click the top tab to collapse it again.

- **AGGREGATOR** — [combine several projects](Aggregator.md) into one view
- **DATA MIXER** — [average repeated surveys](Data-Mixer.md) of the same passage
- **PROFILE** — the [complex profile editor](Complex-Profiles.md)

Data-server plugins add their own tabs here.

## Presentation mode

The **PRESENTATION MODE** button in the header hides the interface chrome so the map can be shown to
an audience without distraction.
