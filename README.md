#Teacher Attendance & Academic Management System
An experienced-grade, teacher-centric Progressive Web Application (PWA) designed for daily classroom use. This system focuses on high-efficiency attendance management, voice-assisted tracking, and clear academic statistics while maintaining a distraction-free, academic aesthetic.

📖 Project Overview
The Teacher Attendance & Academic Management System is a mini-project built with real-world architectural principles. It provides a single, streamlined interface for educators to manage timetables, take attendance (manual or voice), and analyze student participation without the complexity of student-facing logins.
Key Objectives
	Efficiency: Instant attendance initiation via dashboard or timetable.
	Data Integrity: Strict separation between attendance taking, manual overrides, and statistical analysis.
	Audit Safety: History is the only authoritative layer for corrections.
	Accessibility: Mobile-first, offline-friendly, and optimized for low-end devices.

	🎨 Design & Aesthetic
The UI is designed to be warm, calm, and distraction-free, ensuring high readability in bright classroom environments.
Element               Specification 						 Hex Code
BackgroundSoft			  warm beige / cream 			  #F6E3CD
Primary Action 			  Muted tan / light brown   #C9A172
Secondary Accent		 	Soft terracotta           #C26A4A
Primary Text          Dark brown / charcoal     #3B2F2A
Success State         Muted sage green          #7FA88
EError State          Muted red                 #C96A5B

UI Guidelines:
No Pure Black/White: Soft contrast for reduced eye strain.
Component Style: Rounded cards, soft shadows, and large tap targets.
Navigation: Vertical sidebar with circular icons (expandable on hover/long-press).


🏗️ System Architecture
Application Type
PWA: Installable on mobile/desktop with offline support.
Mobile-First: Vertical scrolling, card-based layouts, and Floating Action Buttons (FAB).

Data Strategy
Local-First, Cloud-Ready: Currently utilizes local persistence, but architected for seamless migration.
Database: Integrated with Supabase for multi-device synchronization and data persistence.
Abstraction: Data access logic is decoupled from the UI to allow future backend swaps.


🧩 Module Breakdown
1. Dashboard & Timetable
Today’s View: Shows the current timetable with "Current Class Detection."
Quick Start: One-tap attendance initiation from the schedule.
Scheduling: Weekly timetable management with buffer detection for overlapping classes.

2. Class & Student Management
Dual-Type Logic: Supports Theory Lectures and Practical Batches (e.g., Class Division 'F' linked to batches F1, F2, F3).
Onboarding: Add students via manual entry or Excel (.xlsx) import.

3. Attendance Engine
Dual Mode: Manual toggle or Voice-Assisted (Web Speech API).
Live Preview: A mandatory manual override screen acts as the final validation before saving.
No Auto-Save: Explicit user confirmation is required to ensure data accuracy.

4. History & Corrections
Authoritative Layer: The only module where saved attendance can be modified.
Practical Grader: Add or edit practical marks and grades.

5. Statistics & Analytics (Read-Only)
Defaulter Tracking: Instant filtering for students with <75% attendance.
Auto-Calculation: Theory marks (out of 5) are generated automatically.
Export: Generate and download comprehensive Excel reports.


🛠️ Global Rules & Constraints
Teacher-Only: No student login or interface exists.
Strict Separation: Statistics are read-only; no editing is allowed within the analytics module.
Mobile Priority: Horizontal scrolling is strictly prohibited on mobile views.


🚀 Future Integration
While currently operating as a robust mini-project, the architecture is Database-Ready, expecting further integration with backend services for advanced administrative auditing.
