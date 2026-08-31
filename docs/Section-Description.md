---
title: Description of the New Section
sidebar_label: Section description
---

The description panel records who surveyed the section, when, and what it should be called.

| Field | Notes |
| --- | --- |
| **Name of the section** | Used everywhere as the section label. A duplicate name prompts Ariane to offer *push into the existing section* instead |
| **DATE** | The survey date; drives the date filter and the chronological GIF export |
| **Surveyor** | Who took the measurements |
| **Explorer** | Who explored the passage |
| **Description** | Free text |

Surveyor and explorer are combo boxes pre-filled with the names already used in the project, so
repeat entries stay consistent. Two helper buttons reformat a typed name into the project's standard
capitalisation.

## Geocoding

The optional **GEOCODING** field uses the format:

```
AREA,CITY,STATE,COUNTRY
```

This is what the [Project Library](Project-Library.md) groups projects by, so filling it in is what
lets you later display "everything surveyed in this area" as a background. It can also be set or
changed afterwards from *PROJECT → CHANGE GEOCODE* in [Data Tools](Data-Tools.md).

## Automatic station naming

Two fields automate station names as you type shots:

- **Auto Naming Code** — the prefix given to each new station.
- **Numeration Start** — the number the sequence starts from.

New rows in the data grid are then named automatically, which saves naming a long section by hand.
