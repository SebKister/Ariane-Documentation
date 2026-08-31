---
title: Unit and Depth Conversions
sidebar_label: Conversions
---

The conversion buttons in the [Data Wizard](Data-Wizard.md) act on the whole grid **before** you
commit the section with **ADD SECTION**. They rewrite the values in place.

## Unit conversions

| Button | Effect |
| --- | --- |
| **LENGTH: FT→M** / **LENGTH: M→FT** | Convert shot lengths |
| **DEPTH: FT→M** / **DEPTH: M→FT** | Convert depths |
| **LRUD: FT→M** / **LRUD: M→FT** | Convert passage dimensions |

Ariane uses 0.3048 m per foot.

## Inclination to depth

| Button | Effect |
| --- | --- |
| **INCLINATION(°)→DEPTH** | Treats the depth column as degrees of inclination and integrates it into absolute depths |
| **INCLINATION(%)→DEPTH** | The same, with the grade expressed as a percentage |

Both need the section's [start point](Start-Point.md) to be defined first, because the conversion
integrates from the starting depth. If no start depth is available the buttons stay inactive and the
raw inclination values are left untouched.

:::tip Automatic for JedEye data
JedEye sections are recognised by their DMP file-format version (v6 and above). For those, Ariane
switches the depth source to DAV and applies the inclination-to-depth conversion **automatically** on
import — no manual step needed. After an automatic conversion the manual buttons are disabled until
the table is reloaded, so the data cannot be converted twice by habit. Loading an MNemo
(pressure-based) section afterwards restores the pressure depth source by itself. See
[Device Import](Device-Import.md).
:::

## Other corrections

| Button | Effect |
| --- | --- |
| **REVERSE AZIMUT** | Flips every azimuth by 180°, for a section surveyed in the opposite direction |
| **DEPTH REFERENCE CORRECTION** | Shifts every depth by a constant, for example to re-reference a gauge that was zeroed at the wrong level |
