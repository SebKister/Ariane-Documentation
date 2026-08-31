---
title: Troubleshooting
sidebar_label: Troubleshooting
---

## Messages

### "You must define a Start Point (GPS or From existing station)."

The section has no anchor. Complete the [start point](Start-Point.md) panel of the Data Wizard.

### "Name or unit have not been defined for the project."

Fill in the [project name and unit](Project-Setup.md) at the top of the Data Wizard and press
**APPLY**.

### "The length of the shot are not coherent with the depth variation."

A shot's depth change exceeds its length, so it has no possible plan position. Fix the shot in the
[Data Table](Data-Table.md), or use **AUTO CORRECT LENGTHS** on the map or *PROJECT →
AUTO-CORRECT INCOHERENT DATA* in [Data Tools](Data-Tools.md). See [Data Errors](Data-Errors.md).

### "The Excel sheet is misformatted."

The workbook does not match the layout Ariane expects. Export a working project to
[Excel CSV](Import-Export.md) to see the expected column layout, then match it.

### "The file could not be merged. Make sure it is a TML file from Ariane v3"

Merge only accepts Ariane v3 TML files. Open the other file in Ariane and re-save it as TML first.

### "NOT CONNECTED" when measuring swim distance or gas

There is no path through the survey between the two stations. Add the missing
[closure](Loop-Closure.md) or the missing shots.

### "The member is not located in the same folder or a subfolder of the agregator file"

An [aggregation](Aggregator.md) member must live beside the `.agr` file or below it. Move the member
file into that tree.

### "The Easting(X) or Northing(Y) are not formatted correctly."

The [UTM converter](Start-Point.md) could not parse the coordinates. Check for stray characters and
decimal separators.

## Devices

### No device found, or "COM error"

Check the cable and that the device is switched on, and make sure no second copy of Ariane is
running.

On Windows, if the serial library reports an access-denied error in the temp folder:

1. Close every instance of Ariane.
2. Check the permissions on your temp folder.

## Performance

### The application feels slow on a large project

- Turn on **BIG DATA MODE**.
- Turn off satellite imagery.
- Turn off **SHOW WALL**, or set **DEACTIVATE 3D WALL**.
- Lower the **DETAILS** level in the [3D view](Map-3D.md), and use `WIRE` instead of `FILL`.

### Loop closure is slow

Least-squares closure uses CUDA where available. If CUDA was disabled automatically after a crash,
re-enable acceleration in [Options](Options.md). You can also lower the solver iteration count with
`--iterations` on the [command line](Files-And-Command-Line.md).

## Startup

### Ariane will not start

Run it once with `--reset-prefs`. If that does not help, `--reset-all` clears the whole `~/.ariane`
directory, including the cached licence blob and settings.

Both are safe for your survey files, which live wherever you saved them.

### A plugin change did not take effect

Plugin enable/disable and installation take effect **after a restart**. If a plugin file was in use,
its removal is scheduled for the next launch.
