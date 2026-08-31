---
title: Files, Folders and Command Line
sidebar_label: Files & command line
---

## Where Ariane keeps its data

Ariane keeps its own data under `~/.ariane` — `C:\Users\<you>\.ariane` on Windows.

| Path | Contents |
| --- | --- |
| `~/.ariane/` | Settings, licence cache, magnetic declination cache |
| `~/.ariane/Cache/` | Downloaded [satellite tiles](Display-Settings.md) |
| `~/.ariane/Plugins/` | Installed [plugin](Plugins-And-Languages.md) jars |
| `~/.ariane/updates/` | Downloaded installers awaiting installation |

Your survey files live wherever you saved them; none of the reset options below touch them.

## Command line

```bash
Ariane [options] [file_path]
```

| Flag | Effect |
| --- | --- |
| `--profiling` | Log internal performance metrics |
| `--single-thread` | Force single-threaded execution |
| `--iterations <n>` | Iteration count for the native [loop-closure](Loop-Closure.md) solver — default `60000` |
| `--reset-prefs` | Clear stored preferences, then start normally |
| `--erase-prefs` | Clear stored preferences and exit immediately |
| `--reset-all` | Clear preferences **and** delete `~/.ariane` — a full clean slate |

The first non-flag argument is a survey file to open at startup.

## System properties

When launching through `java` directly, these can be set with `-D`:

| Property | Effect |
| --- | --- |
| `ariane.force.cuda` | `true` forces CUDA on even if it was disabled after a previous crash |
| `ariane.single_thread` | `true` forces single-threaded execution |
| `ariane.iterations` | Native solver iteration count |
| `ariane.language` | Overrides the stored UI language (`en`, `fr`, `de`, `es`) |
