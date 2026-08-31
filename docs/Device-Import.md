---
title: Importing from a Device
sidebar_label: Device import
---

The **Device** pane of the [Data Wizard](Data-Wizard.md) reads survey instruments and dump files.
It is renamed to the detected device — **MNemo @** or **JedEye @** — as soon as data is loaded.

## Loading data

| Button | Action |
| --- | --- |
| **Load Data** | Downloads directly from a connected device over its serial port |
| **Load DMP** | Reads a `.dmp` dump file, or a `.csv` file exported from a spreadsheet or another tool |
| **Save DMP** | Writes the device memory out to a file |

Status messages appear next to the device name:

- *No device connected* — nothing was found on the serial ports.
- *COM error* — the transfer failed. Check the cable, and make sure no second copy of Ariane is
  running.

Loaded sections are listed. Click one to load its shots into the wizard grid, then complete the
[description](Section-Description.md) and press **ADD SECTION** as usual.

## Depth source

Ariane picks the depth source from the device that wrote the file, and does it as soon as the file is
loaded rather than waiting for the first section click.

| Device | DMP version | Depth source | Conversion |
| --- | --- | --- | --- |
| MNemo | up to v5 | PRESSURE | none — depths are used as recorded |
| JedEye | v6 and above | DAV | [inclination→depth](Unit-Conversions.md) applied automatically |

Loading an MNemo section after a JedEye one restores the pressure source automatically. If you chose
a depth source **by hand**, your choice is left untouched.

Sections that contain pitch data but no depth at all — CSV files, typically — fall back to the same
automatic conversion workflow.

:::note
After an automatic conversion, the manual **INCLINATION→DEPTH** buttons are disabled until the table
is reloaded, so freshly converted data cannot be double-converted out of habit. If the section start
point is not defined yet, the raw inclination values are kept and the manual buttons stay available.
:::

## Related manuals

- [MNemo v2 User Manual](https://manuals.arianesline.com/mnemo/)
- [JedEye User Manual](https://manuals.arianesline.com/jedeye/)
