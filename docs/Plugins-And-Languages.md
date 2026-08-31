---
title: Plugins and Languages
sidebar_label: Plugins & Languages
---

## Plugins

Plugins are `.jar` files in the `Plugins` folder of the
[Ariane directory](Files-And-Command-Line.md). They provide import formats, export formats,
data-server panels and UI translations.

| Command | Effect |
| --- | --- |
| **PLUGIN MANAGER** | Lists installed plugins, each with an enable/disable switch |
| **ADD PLUGIN** | Installs a `.jar` into the plugin folder |
| **Reset Plugin Folder** | Removes everything and restores the bundled set on the next start |

Plugin changes take effect **after a restart** — Ariane confirms with *"PLUGIN CHANGES SAVED. RESTART
TO APPLY."* If a reset cannot remove a file that is currently in use, the removal is scheduled for
the next launch.

Plugins are resolved through the module names embedded in each jar, so discovery works even when a
file has been renamed.

### Bundled plugins

| Plugin | Provides |
| --- | --- |
| ENC2Import | ENC2 import |
| DATExport | Compass DAT export |
| KMLBoundingExport | KML bounding-box export |
| StationCoordinateExport | Station coordinate export |
| xyzexport | Plain XYZ coordinate export, for point-cloud and GIS tools |
| i18n.French / German / Spanish | UI translations |

Exports contributed by plugins are subject to the same [licence gate](Licensing.md) as the built-in
ones.

## Languages

The interface language is chosen in [Options](Options.md) and takes effect **after a restart**.

| Language | Code |
| --- | --- |
| English | `en` |
| French | `fr` |
| German | `de` |
| Spanish | `es` |

Translations are delivered as separate plugin modules, so additional languages can be shipped
independently of the application.

:::note
The non-English translations are machine-generated and may contain minor wording inaccuracies.
:::

The language can also be forced for one run with the `ariane.language` system property — see
[Files and Command Line](Files-And-Command-Line.md).
