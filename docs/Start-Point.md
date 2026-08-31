---
title: Start of the New Section
sidebar_label: Start point
---

Every section must be anchored. The **START** panel of the [Data Wizard](Data-Wizard.md) offers two
ways to do it, chosen from the type list.

## Defined by GPS coordinates

Use this for the first section of a project, or for an entrance that is not connected to anything
already surveyed.

| Field | Range |
| --- | --- |
| **LATITUDE** | −70 to 70, decimal degrees |
| **LONGITUDE** | −180 to 180, decimal degrees |
| **DEPTH** | The depth of the starting station |

Press **APPLY**. A summary line confirms the values, the panel collapses, and the surveyor and
explorer lists are filled in ready for the [description](Section-Description.md).

### UTM converter

If your coordinates are UTM rather than decimal degrees, open the **UTM CONVERTER**:

1. Enter the **ZONE** and choose the **HEMISPHERE**.
2. Enter the easting (**X**) and northing (**Y**).
3. Press **CONVERT**.

Malformed values are rejected with *"The Easting(X) or Northing(Y) are not formatted correctly."*

## Starting from another section

Use this for every subsequent branch — it is what keeps the cave a single connected network.

1. Choose the **FROM SECTION**.
2. Choose the **FROM STATION** within it.
3. Press **APPLY**.

The **SEARCH** button finds a station by name when the list is long, and **VIEW ON MAP** jumps to the
chosen station on the [map](Map-Overview.md) so you can confirm you picked the right one before
committing.

This option only appears once the project contains data; on an empty project Ariane falls back to the
GPS type.

:::warning
If you press **ADD SECTION** without a start point, Ariane refuses with
*"You must define a Start Point (GPS or From existing station)."*
:::
