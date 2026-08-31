---
title: Data Tools
sidebar_label: Data Tools
---

The **DATA TOOLS** tab applies one operation to many rows at once. Pick a tool from the list, fill in
its fields, and press **APPLY**.

## Section tools

| Tool | Effect |
| --- | --- |
| **SECTION → RENAME** | Rename a section |
| **SECTION → CHANGE THE COLOR** | Recolour every station of a section |
| **SECTION → RENAME EXPLORER** | Set the explorer and surveyor names on a whole section |
| **SECTION → DELETE** | Remove a section and its stations |
| **SECTION → MERGE** | Merge two sections into one |

## Station tools

| Tool | Effect |
| --- | --- |
| **STATION → DELETE ALL NAMES** | Strip station names project-wide |
| **STATION → LOCK RANGE** | Lock every station between two stations, so [closure](Loop-Closure.md) will not move them |
| **STATION → UNLOCK RANGE** | The reverse |

## Project tools

| Tool | Effect |
| --- | --- |
| **PROJECT → RENAME** | Rename the project |
| **PROJECT → CHANGE GEOCODE** | Set the `AREA,CITY,STATE,COUNTRY` geocode used by the [Project Library](Project-Library.md) |
| **PROJECT → CHANGE UNIT** | Switch the declared unit between metres and feet |
| **PROJECT → CHANGE DECLINATION CORRECTION MODE** | Choose whether magnetic declination is applied. Ariane computes declination from the IGRF model using each station's position and date, converting magnetic azimuths into true azimuths |
| **PROJECT → MAKE ANONYMOUS** | Strip personal names from the project |
| **PROJECT → AUTO-CORRECT INCOHERENT DATA** | Adjust shot lengths that are inconsistent with their depth change — see [Data Errors](Data-Errors.md) |
| **PROJECT → REPLACE COLOR** | Swap one colour for another throughout |
| **PROJECT → ADD DEFAULT WALLS** | Generate default wall geometry where none exists |

:::note
*PROJECT → CHANGE UNIT* changes the unit the project declares. It does **not** convert the numbers —
use the [conversion buttons](Unit-Conversions.md) in the Data Wizard for that.
:::
