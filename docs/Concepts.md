---
title: Concepts
sidebar_label: Concepts
---

Five terms make everything else in Ariane obvious.

## Station

One measured point. Every station carries:

| Field | Meaning |
| --- | --- |
| `ID` | Unique numeric identifier |
| `Name` | Optional label you choose |
| `FromID` | The station this one was measured from |
| `Length`, `Azimut`, `Depth` | The shot that reaches this station |
| `DepthIn` | Depth at the start of the shot |
| `Left`, `Right`, `Up`, `Down` | LRUD passage dimensions |
| `Section`, `Explorer`, `Date`, `Color`, `Comment` | Descriptive data |
| `ClosureToID` | Set when this station closes onto another one |
| `Locked` | Excluded from loop-closure adjustment |
| `Excluded` | Kept in the file but left out of geometry, statistics and display |

## Depth, not inclination

Ariane's native geometry is **dive-survey shaped**: a shot is defined by its *slope length*, its
*azimuth* and the *depth* of the station it reaches. The horizontal projection is computed as:

```
horizontal = √(Length² − Δdepth²)
```

Two consequences follow directly from that formula:

- A shot whose depth change exceeds its length is geometrically impossible. Ariane reports
  *"The length of the shot are not coherent with the depth variation"* and offers to correct it —
  see [Data Errors](Data-Errors.md).
- Surveys recorded with **inclination** instead of depth must be converted. The Data Wizard has
  **INCLINATION(°)→DEPTH** and **INCLINATION(%)→DEPTH** buttons for that, and applies the conversion
  automatically for JedEye data. See [Unit Conversions](Unit-Conversions.md).

## Section

A named group of stations — normally one survey trip or one branch of the cave. Sections are the
unit you filter by, colour by, rename, merge and delete. Each section starts either from GPS
coordinates or from an existing station in another section.

## Start point

A station with no parent, anchored to a latitude, a longitude and a depth. A project needs at least
one. Additional sections normally branch off an existing station instead of defining a new anchor.

## Loop, connection and closure

When two branches of the survey meet at the same physical place, you tell Ariane by adding a
**closure** between the two stations:

- A **loop** is a closed circuit inside one connected survey.
- A **connection** ties a surveyed endpoint to a station whose position is already fixed.

Ariane then distributes the misclosure error across the shots. See [Loop Closure](Loop-Closure.md).

## Units and declination

A project is either in **metres** or in **feet**; the unit is set once in the Data Wizard and can be
changed later from [Data Tools](Data-Tools.md).

Azimuths are recorded as measured. Ariane computes **magnetic declination** from the IGRF model
using each station's position and date, and adds it to convert magnetic azimuths into true azimuths.
Whether the correction is applied is controlled by *PROJECT → CHANGE DECLINATION CORRECTION MODE* in
[Data Tools](Data-Tools.md).
