---
title: Aggregator
sidebar_label: Aggregator
---

The **AGGREGATOR** tab in the [left panel](Interface-Overview.md) builds a single view from several
separate project files — the usual case being a cave system surveyed as a set of independent files,
one per branch or per team.

Unlike **MERGE**, which copies data into the current project, an aggregation keeps the member files
independent. Each team goes on editing its own file, and the aggregation shows the whole system.

## Building an aggregation

1. **NEW** starts an aggregation, or **LOAD** opens an existing `.agr` file.
2. **ADD** adds member projects.
3. Set the aggregation's **UNIT**.
4. Tick which members participate.
5. **BUILD DISPLAY** merges them into one view.
6. Add **CLOSURES** between stations of different members, exactly as you would inside one project,
   to tie the system together. The closure list is stored in the aggregation.
7. **SAVE** writes the `.agr` file.

:::warning Member location
Members must live in the same folder as the `.agr` file, or in a subfolder of it. Ariane refuses a
member outside that tree with *"The member is not located in the same folder or a subfolder of the
agregator file"*, so that an aggregation stays portable when the folder is moved or shared.
:::

## Opening an aggregation

Opening an `.agr` file from the toolbar takes you straight to this tab with the aggregation loaded.

Aggregated data behaves like a normal project for display, [statistics](Statistics-And-Report.md) and
[3D](Map-3D.md). Closures added across members are corrected by the usual
[loop closure](Loop-Closure.md) algorithms.

Members can also carry [linked videos](Linked-Video.md), which are re-associated with their stations
when the display is built.
