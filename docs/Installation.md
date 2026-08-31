---
title: Installation and First Launch
sidebar_label: Installation
---

## Installing

Download the installer for your platform from the
[latest release](https://github.com/Ariane-s-Line/Ariane-Release/releases/latest):

| Platform | Package |
| --- | --- |
| Windows | `.msi` |
| macOS (Apple Silicon and Intel) | `.dmg` — signed and notarized by Apple |
| Linux | `.deb` or `.rpm` |

## First launch

The first time Ariane starts it asks for an **email address**. It registers a trial licence against
that address on the licence server and confirms the registration. If you already own a full licence
for that address, it is activated on the installation within 24 hours.

Ariane needs internet access at startup to validate the licence:

- If the server cannot be reached, you are offered an **offline mode** for a limited number of days.
- If validation fails with a **signature** error, offline mode is *not* offered. That error means the
  server's response could not be authenticated, so reconnect from a trusted network and retry.

See [Licensing](Licensing.md) for what a trial licence can and cannot do.

## Automatic updates

At startup Ariane checks GitHub for a newer release. When one is found, the installer matching your
platform is downloaded in the background into `~/.ariane/updates/`, and an **INSTALL UPDATE** button
appears in the toolbar with the new version number in its tooltip.

Clicking it asks for confirmation, launches the installer and closes Ariane. If the installer cannot
be launched, Ariane stays open and shows a status message instead.

## Optional GPU acceleration

Ariane can use **CUDA** to accelerate least-squares loop closure on large networks. It is detected
automatically at startup and can be turned off in [Options](Options.md). If a CUDA initialisation
crashes, Ariane disables it by itself for the next launch so the application always starts.
