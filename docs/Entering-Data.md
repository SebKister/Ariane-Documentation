---
title: Entering the Data
sidebar_label: Entering data
---

The grid at the bottom of the [Data Wizard](Data-Wizard.md) takes one row per shot.

| Column | Meaning |
| --- | --- |
| **ID** | Assigned automatically |
| **Name** | Station name — filled in automatically if you set an auto-naming code |
| **Type** | Shot type: `REAL` or `VIRTUAL` |
| **L** | Slope length of the shot |
| **AZ** | Azimuth in degrees |
| **DP** | Depth of the station reached by the shot |
| **Left**, **Right**, **Up**, **Down** | LRUD passage dimensions |
| **Comment** | Free text |

A new row is added as you complete the last one. **DELETE LINE** removes the selected row.

:::info Depth, not inclination
Remember that Ariane's geometry is built from *length + azimuth + depth*, not from an inclination
angle — see [Concepts](Concepts.md). If your instrument recorded inclination, enter it in the depth
column and use the [inclination conversions](Unit-Conversions.md) before committing the section.
:::

## Excel sheet mode

Turning on **EXCEL SHEET MODE** in [Options](Options.md) gives the grid spreadsheet keyboard
behaviour, which is much faster for typing a long section:

| Key | Action |
| --- | --- |
| **F2** | Edit the focused cell |
| Any character | Start editing, replacing the cell content |
| **Enter** / **Shift+Enter** | Move down / up |
| **Tab** / **Shift+Tab** | Move right / left |
| **Delete** / **Backspace** | Clear the cell |

## Validation

When you press **ADD SECTION**, Ariane checks that each shot is geometrically possible — that its
depth change does not exceed its length. Inconsistent shots are reported:

> The length of the shot are not coherent with the depth variation.

Fix the offending row, or let Ariane adjust it for you with **AUTO CORRECT LENGTHS** on the map or
*PROJECT → AUTO-CORRECT INCOHERENT DATA* in [Data Tools](Data-Tools.md). See
[Data Errors](Data-Errors.md).
