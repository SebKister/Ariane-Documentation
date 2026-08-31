---
title: Import and Export
sidebar_label: Import & Export
---

## Opening a file

**OPEN A PROJECT** accepts:

| Extension | Format |
| --- | --- |
| `.tml`, `.tmlu` | Ariane project |
| `.json` | Ariane JSON |
| `.xlsx` | Excel worksheet in Ariane's layout |
| `.dat` | Compass |
| `.tro` | Visual Topo |
| `.srv` | Walls survey |
| `.wpj` | Walls project |
| `.agr` | Ariane [aggregation](Aggregator.md) |

Only `.srv` accepts a multiple selection — several survey files are imported together. For the other
formats Ariane warns that just the first selected file will be opened.

A file path can also be given on the [command line](Files-And-Command-Line.md) to open it at startup.

## Merging

**MERGE A PROJECT INTO CURRENT ONE** adds a second TML file's data to the open project, and asks
whether to preserve the original station IDs.

It requires an **Ariane v3** TML file; anything else is refused with *"The file could not be merged.
Make sure it is a TML file from Ariane v3"*.

## Saving and exporting

| Command | Output |
| --- | --- |
| **SAVE PROJECT** / **SAVE AS …** | Ariane TML |
| **FILTERED TML** | TML containing only the rows the current [filters](Data-Table.md) show |
| **SVG** | Vector map |
| **KML** | Google Earth |
| **OBJ (3D)** | 3D mesh |
| **MAK (Compass)** | Compass project |
| **EXCEL CSV** | Spreadsheet |
| **GIF (DEPTH TH.)** | Animated GIF sweeping a depth threshold through the cave |
| **GIF (TIME)** | Animated GIF replaying the survey in chronological order |
| **HTML** | Report as a web page |

:::warning Licence
Saving, and every export in that table except HTML, requires a **permanent licence**. Under a trial
licence the buttons are disabled or report that a permanent licence is required. See
[Licensing](Licensing.md).
:::

## Export settings

[Options](Options.md) keeps a separate set of drawing settings for export, so screen and exported
output can differ. Tick **USE DISPLAY SETTINGS** to export with whatever is currently on screen
instead.

## Plugin formats

[Plugins](Plugins-And-Languages.md) add further formats to the **IMPORT** and **EXPORT** menus. The
bundled set provides ENC2 import, and DAT, KML bounding-box, station coordinate and XYZ exports.
