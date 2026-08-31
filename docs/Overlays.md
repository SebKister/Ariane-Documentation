---
title: Overlays
sidebar_label: Overlays
---

An **overlay** is a raster image placed under the drawing — a scan of an old survey, a sketch from
the trip, or an aerial photograph — so you can trace or register against it.

## Adding an overlay

1. Press **CREATE OVERLAY**.
2. Choose an image file (PNG, JPEG or BMP).
3. Select it in the overlay list to make it the active one.

| Control | Effect |
| --- | --- |
| **OPACITY** | How strongly the image shows through the drawing |
| **ROT.** | Rotation angle |
| **AUTO RESIZE** | Fits the image to the current view |
| **REMOVE** | Deletes the selected overlay |

Use the **overlay adjust** tool from the [tool set](Drawing-Tools.md) to drag, scale and rotate the
image directly on the map until its features line up with the survey.

## Where overlay images live

Ariane records each overlay's path in the project file. When a project is opened and an image is not
found at its recorded absolute path, Ariane looks for it **next to the project file** instead. This
means a project folder containing the `.tml` and its images stays intact when it is moved or shared.

:::tip
Keep overlay images in the same folder as the project file, or in a subfolder of it, so the project
remains portable.
:::
