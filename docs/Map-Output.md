---
title: Snapshots, SVG and Printing
sidebar_label: Map output
---

| Command | Result |
| --- | --- |
| **TAKE A SNAPSHOT (.PNG)** | Saves the current map view as a PNG image |
| **EXPORT SVG** | Writes a vector map, suitable for further editing in a drawing program |
| **EXPORT WALLS** | Writes the computed passage walls |
| **PRINT MAP** | Asks for a print scale, then sends the map to a printer |

When printing, Ariane asks *"Indicate the scale at which the image should be printed"*. The page
itself — format and orientation — is set in the [page setup](Page-Setup.md) of carto mode.

## Display settings versus export settings

[Options](Options.md) keeps two sets of drawing settings: one for the screen and one for exports.
This lets you work with thick, legible lines on screen and still export a fine-lined map.

Tick **USE DISPLAY SETTINGS** to export with whatever is currently on screen instead of the export
settings.

## Other exports

Whole-project exports — KML, OBJ, Compass MAK, Excel CSV, animated GIF and HTML — live under the
toolbar's **EXPORT** menu. See [Import and Export](Import-Export.md).
