---
title: Drawing Tools
sidebar_label: Drawing tools
---

| Tool | Use |
| --- | --- |
| **Hand** | Pan the map |
| **Select** | Select and move elements; drag a rubber band to select several |
| **Line** | Straight segments |
| **Rectangle** | Rectangles |
| **Ellipse** | Ellipses |
| **Spline** | Freeform curves through control points — the main tool for passage outlines |
| **Control point editor** | Edit an existing spline |
| **Constraint** | Constraint geometry that other elements snap to |
| **Eraser** | Delete elements |
| **Page adjust** | Position and size the printable [page](Page-Setup.md) |
| **Overlay adjust** | Position, scale and rotate a raster [overlay](Overlays.md) |
| **Linked surface** | Attach a surface to the drawing |

## Editing splines

With the **control point editor** active, the cursor tells you which operation is armed:

| Input | Effect |
| --- | --- |
| Drag a grip | Move that control point |
| **Shift** + click the curve | Add a control point at that position |
| **Ctrl** + click the curve | Cut the spline into two independent splines there |
| **Shift** + click a grip | Remove that control point |

Splines are Catmull-Rom based, so moving one point reshapes the curve smoothly through its
neighbours.

## Selection and clipboard

| Input | Effect |
| --- | --- |
| **Escape** | Clear the selection |
| **Delete** / **Backspace** | Erase the selected elements from the current layer |
| **Ctrl+X** | Cut the selection |
| **Ctrl+C** | Copy the selection |
| **Ctrl+V** | Paste |

## Constraints

Constraint elements are guides: they are drawn in their own colour, they can be hidden with
**SHOW CONSTRAINTS**, and other geometry snaps to them when **MAGNET** is on. Use them to keep
passage walls parallel to the survey line or to align repeated features.
