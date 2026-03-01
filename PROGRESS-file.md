# Teacher Attendance & Academic Management System (PWA)

Teacher-focused, mobile-first PWA for timetable, attendance, class management, history, and statistics.

## Status

Last updated: 2026-02-28

### Module Status

| Module | Status | Notes |
|---|---|---|
| Dashboard | Implemented | Today schedule, take-attendance flow, timetable shortcut |
| Timetable | Implemented | Weekly timetable, add/edit/delete, practical batch support |
| Class & Student Management | Implemented | Manual + Excel student input, class save, optional batches |
| Attendance (Theory/Practical/Common Override) | Implemented | Pre-attendance setup, manual/voice flow, final override, explicit save |
| History | Implemented | Filters, attendance correction, practical grade edit popup |
| Statistics | Implemented | Read-only computed analytics, defaulter filter, class search + suggestions, Excel export |

## Core Rules Enforced

- No student login
- No auto-save for attendance
- Attendance starts only after explicit action
- Duplicate session save blocked for same lecture key
- Post-save corrections through History

## Recent Work Log

### 2026-02-28

- Replaced statistics class typing with dropdown-only class selection populated from created classes.
- Ensured Statistics table renders from selected class dropdown context and remains read-only.
- Hardened Export to Excel: uses `.xlsx` when SheetJS is available and an offline Excel-compatible `.xls` fallback when it is not.
- Statistics now requires clicking the 'View Statistics' button after selecting class type/name to load the class table.
- Statistics table UI now shows roll-number formatted rows (001), classes attended (x out of y), and warm-theme row highlighting for regular/defaulter rows.
- Statistics class selection in Module VI now uses dropdown-only (no type-to-search input).
- Fixed schedule/statistics/practical flow regressions: restored statistics view button behavior and added fallback practical batch (All Students) so timetable/practical attendance can proceed when explicit batches are not defined.
- Statistics dropdown now force-syncs from saved classes before rendering, and View Statistics repopulates selection before table generation.
- Hardened startup bindings to prevent one missing element from disabling all buttons, and bumped service-worker cache version for fresh JS loading.
- Added in-session fallback when browser storage is blocked: class/timetable/attendance/history updates now continue instead of silently failing.
- Updated manifest to standard 192x192 and 512x512 icons and refreshed service-worker shell assets for Chrome compatibility.
- Removed UTF-8 BOM from manifest.webmanifest to avoid strict JSON parse failures in some environments.
- Updated service worker shell cache to 	aams-shell-v4 so Chrome pulls the latest fixed scripts and icon metadata.
### 2026-02-27

- Added separate Timetable module with weekly listing and slot CRUD.
- Added dedicated timetable-level button to open extra lecture mechanism.
- Updated timetable screen to show scheduled lectures first by default.
- Implemented theory attendance (manual + voice roll-call).
- Implemented practical attendance with graded/non-graded branches.
- Implemented shared live preview + manual override list.
- Implemented attendance history editing and practical marks popup.
- Aligned attendance cards with provided lecture/practical layout templates.
- Aligned preview/override visuals with the warm beige/tan project theme.

- Reworked Module V History with dynamic filters: class type, class-name search, class dropdown, single-date, and from-to range.
- Updated history lecture cards to read-only summaries with class, subject, type, date/time, batch, and average attendance percentage.
- Added dedicated "Edit Attendance" popup with full student list and Present/Absent toggle overrides (explicit save only).
- Upgraded practical "Add / Edit Grade" popup with contextual header, one-student navigation, roll/name search, and Enter-to-next flow.
- Added history audit trail entries (`auditTrail`) on attendance and grade edits.
- Refined History filters with strict OR behavior: class search vs class dropdown, and single-date vs from-to range (live dynamic updates).
- Changed History view to default to today's attendance, added side 'Filter View' button, and moved filters into an Apply-based filter dialog with date-mode toggle.
- Removed Class Drop-down from History filters; class filtering now uses class-name search with autosuggest only.
- Timetable updated with an 'Add Schedule' button that opens a popup form; timetable module now defaults to scheduled timetable view.
- Implemented Module VI Statistics as a read-only dynamic analytics layer with class type/class selection, defaulter toggle filter, theory marks rules settings, practical graded columns, and Excel export of visible table data.

## How To Run

- Serve project from a local HTTP server for full PWA/browser API behavior.
- Voice attendance requires browser speech-recognition support and mic permission.

## Ongoing Update Policy

For every change, append an entry to **Recent Work Log** with:

1. Date
2. What changed
3. Affected module
4. Pending follow-up (if any)













