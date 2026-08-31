---
title: Data Table
sidebar_label: Data Table
---

The **DATA TABLE** tab shows the full survey, one row per station, fully editable.

## Display modes

**DISPLAY MODE** chooses how many columns are shown.

| Mode | Columns |
| --- | --- |
| **MINIMAL** | Excluded, ID, Name, FromID, Section, Type, Length, Azimut, Depth, Longitude, Latitude, Comment |
| **COMPACT** | …plus ClosureToID, Explorer, DepthIn, Left, Right, Up, Down, Locked |
| **COMPLETE** | …plus Date, Color, ProfileType |

## Filters

Filters do more than narrow the table — they drive the whole application. What the filters hide is
hidden from the map, the statistics and the exports too.

| Filter | Notes |
| --- | --- |
| **SECTION** | Tick the sections to show; **ALL/NONE** toggles them together |
| **DATE** | A **FROM** / **TO** range |
| **EXPLORER** | Tick the explorers to show |
| **COLOR** | Tick the colours to show |

When any filter is active, a tag appears in the application header — click it to clear all filters.

**FILTERED TML** under the toolbar's **EXPORT** menu writes out a TML file containing only what the
filters currently show. This is how you publish a subset of a project.

## Row actions

| Action | Effect |
| --- | --- |
| **DELETE STATION** | Removes the selected rows permanently |
| **EXCLUDE STATION** | Keeps the rows in the file but leaves them out of geometry, statistics and display |
| **INCLUDE STATION** | Puts excluded rows back |
| **INVERT EXCLUSION STATE** | Flips the exclusion of the selection |

**Delete** and **Backspace** delete the selected rows.

:::tip
Exclusion is the clean way to park suspect data. Nothing is lost, the survey still balances, and you
can bring the shots back once you have checked the notebook.
:::

## Excel sheet mode

Turning on **EXCEL SHEET MODE** in [Options](Options.md) gives spreadsheet keyboard behaviour:

| Key | Action |
| --- | --- |
| **F2** | Edit the focused cell |
| Any character | Start editing, replacing the cell content |
| **Enter** / **Shift+Enter** | Move down / up |
| **Tab** / **Shift+Tab** | Move right / left |
| **Delete** / **Backspace** | Clear the cell |

Every edit is undoable from the toolbar's **UNDO**.
