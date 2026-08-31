---
title: Data Errors
sidebar_label: Data errors
---

When the survey geometry is inconsistent, an error list appears over the map naming the stations
concerned.

## Incoherent length and depth

The most common entry is a shot whose depth change is larger than its length. Because Ariane derives
the horizontal projection from `√(Length² − Δdepth²)` (see [Concepts](Concepts.md)), such a shot has
no possible plan position.

Three ways to fix it:

| Where | Action |
| --- | --- |
| Map | **AUTO CORRECT LENGTHS** — lengthens offending shots by the minimum amount needed to make them consistent |
| [Data Tools](Data-Tools.md) | *PROJECT → AUTO-CORRECT INCOHERENT DATA* — the same operation across the whole project |
| [Data Table](Data-Table.md) | Correct the length or the depth by hand |

Ariane applies a small tolerance automatically: a shot that is only marginally too short is nudged
rather than reported.

:::note
Automatic correction changes your measured lengths. If the real problem is a mistyped depth, fix the
depth instead — the auto-correction is a convenience for rounding noise, not a substitute for
checking the data.
:::

## Excluding suspect data

If a shot is wrong and you do not yet know the right value, **exclude** it rather than deleting it.
Excluded stations stay in the file but are left out of the geometry, statistics and display. Use
**EXCLUDE STATION** in the [Data Table](Data-Table.md).
