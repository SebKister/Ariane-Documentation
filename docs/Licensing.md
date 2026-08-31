---
title: Licensing
sidebar_label: Licensing
---

Ariane is licensed per **email address**.

## Trial versus permanent

| | Trial | Permanent |
| --- | --- | --- |
| View, edit and analyse data | yes | yes |
| **SAVE** / **SAVE AS** | no | yes |
| Export SVG, KML, OBJ, MAK, CSV, GIF | no | yes |
| Export HTML | yes | yes |
| Plugin exports | no | yes |

Under a trial licence, **SAVE**, **SAVE AS**, **EXCEL CSV** and **MAK** are disabled outright, and
the remaining export commands report that a permanent licence is required.

## Registering

The first launch asks for your email address and registers a trial licence against it. If you already
own a full licence for that address, it is activated on the installation within 24 hours.

**LICENSE MANAGER**, in the toolbar's **ABOUT** menu, clears the current licence and re-runs
registration — use it to register the installation under a different address. It asks for
confirmation first.

**ABOUT** shows the version number and the data usage policy.

## Validation

Ariane validates the licence at startup and revalidates it whenever a permanent-only feature is used.

| Situation | Behaviour |
| --- | --- |
| Server reachable | Normal validation |
| Server unreachable | A limited number of **offline days** is granted |
| Signature verification fails | Treated as hostile — offline mode is **not** offered |

A signature failure means the server's response could not be authenticated. That can indicate a
network attacker tampering with traffic, or a misconfigured licence server. Reconnect from a trusted
network and retry.

Since v26.4.0 the macOS build is signed with an Apple Developer ID, notarized and stapled, so first
launch works offline.
