---
title: Data Mixer
sidebar_label: Data Mixer
---

When a passage has been surveyed several times, the **DATA MIXER** in the
[left panel](Interface-Overview.md) averages the runs into one better data set.

## Workflow

1. On the [map](Station-Actions.md), select the two stations that bound the run and choose
   **DATAMIXER → ADD**. Repeat for each survey of the same passage.
   The **first set added becomes the reference**.
2. Press **CALCULATE AVERAGE**.
3. Press **ADD AVG** to place the averaged set on the map alongside the originals, so you can compare
   before committing.
4. Press **REPLACE REF** to substitute the averaged data for the reference set in the project.

## Buttons

| Button | Effect |
| --- | --- |
| **CALCULATE AVERAGE** | Computes the averaged survey from the current sets |
| **ADD AVG** | Adds the averaged set to the map |
| **REPLACE REF** | Replaces the reference set on the map with the calculated average |
| **REMOVE NON REF** | Removes every set except the reference from the map |
| **CLEAR SETS** | Empties the mixer list |
| **DELETE** | Removes the selected set |

## Requirements

| Condition | Message if unmet |
| --- | --- |
| At least two sets | *NOT ENOUGH DATA SETS* |
| All sets the same number of shots | *SETS WITH DIFFERENT DATA COUNT* |

## Azimuth handling

Azimuths are normalised against the reference before averaging. Without that step, two readings
either side of north — say 359° and 1° — would average to 180° instead of 0°. Normalisation makes
runs across north average correctly.
