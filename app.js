const navButtons = document.querySelectorAll('.nav-item[data-target]');
const views = document.querySelectorAll('.view');
const title = document.getElementById('viewTitle');
const todayLabel = document.getElementById('todayLabel');
const installBtn = document.getElementById('installBtn');
const lectureList = document.getElementById('lectureList');
const greetingText = document.getElementById('greetingText');
const overviewDateText = document.getElementById('overviewDateText');
const overviewDayText = document.getElementById('overviewDayText');
const dashboardAddTimetableBtn = document.getElementById('dashboardAddTimetableBtn');
const addLectureFab = document.getElementById('addLectureFab');
const extraLectureDialog = document.getElementById('extraLectureDialog');
const extraLectureForm = document.getElementById('extraLectureForm');
const extraClassSubjectSelect = document.getElementById('extraClassSubjectSelect');
const classSelectionHint = document.getElementById('classSelectionHint');
const extraStartTimeInput = document.getElementById('extraStartTime');
const extraEndTimeInput = document.getElementById('extraEndTime');
const extraBatchSelect = document.getElementById('extraBatchSelect');
const batchSelectionHint = document.getElementById('batchSelectionHint');
const addLectureSubmitBtn = document.getElementById('addLectureSubmitBtn');
const cancelExtraLectureBtn = document.getElementById('cancelExtraLectureBtn');
const batchField = document.getElementById('batchField');
const menuDialog = document.getElementById('menuDialog');
const menuSheet = document.getElementById('menuSheet');
const classSummaryDialog = document.getElementById('classSummaryDialog');
const classSummaryContent = document.getElementById('classSummaryContent');
const attendanceContext = document.getElementById('attendanceContext');
const toast = document.getElementById('toast');

const createClassBtn = document.getElementById('createClassBtn');
const savedClassList = document.getElementById('savedClassList');
const classSummaryView = document.getElementById('classSummaryView');
const classWizardDialog = document.getElementById('classWizardDialog');
const classWizardForm = document.getElementById('classWizardForm');
const wizardHint = document.getElementById('wizardHint');
const nextToStudentsBtn = document.getElementById('nextToStudentsBtn');
const manualModeBtn = document.getElementById('manualModeBtn');
const excelModeBtn = document.getElementById('excelModeBtn');
const manualEntryPane = document.getElementById('manualEntryPane');
const excelEntryPane = document.getElementById('excelEntryPane');
const addStudentBtn = document.getElementById('addStudentBtn');
const studentCountLabel = document.getElementById('studentCountLabel');
const studentPreviewList = document.getElementById('studentPreviewList');
const toBatchBtn = document.getElementById('toBatchBtn');
const enableBatchToggle = document.getElementById('enableBatchToggle');
const batchPane = document.getElementById('batchPane');
const addBatchBtn = document.getElementById('addBatchBtn');
const batchPreviewList = document.getElementById('batchPreviewList');
const batchValidationText = document.getElementById('batchValidationText');
const saveClassBtn = document.getElementById('saveClassBtn');
const downloadSampleBtn = document.getElementById('downloadSampleBtn');
const excelFileInput = document.getElementById('excelFileInput');
const excelImportStatus = document.getElementById('excelImportStatus');
const timetableDialog = document.getElementById('timetableDialog');
const timetableDialogTitle = document.getElementById('timetableDialogTitle');
const timetableForm = document.getElementById('timetableForm');
const timetableClassSubjectSelect = document.getElementById('timetableClassSubjectSelect');
const timetableLectureTypeSelect = document.getElementById('timetableLectureType');
const timetableBatchSelect = document.getElementById('timetableBatchSelect');
const timetableClassroomInput = document.getElementById('timetableClassroomInput');
const timetableDaySelect = document.getElementById('timetableDaySelect');
const timetableStartTimeInput = document.getElementById('timetableStartTime');
const timetableEndTimeInput = document.getElementById('timetableEndTime');
const timetableFormHint = document.getElementById('timetableFormHint');
const timetableAddBtn = document.getElementById('timetableAddBtn');
const timetableSaveBtn = document.getElementById('timetableSaveBtn');
const timetableCancelEditBtn = document.getElementById('timetableCancelEditBtn');
const timetableWeekGrid = document.getElementById('timetableWeekGrid');
const attendanceSetupForm = document.getElementById('attendanceSetupForm');
const attendanceLectureTypeSelect = document.getElementById('attendanceLectureType');
const attendanceClassSubjectSelect = document.getElementById('attendanceClassSubject');
const attendanceSubjectInput = document.getElementById('attendanceSubject');
const attendanceBatchGroup = document.getElementById('attendanceBatchGroup');
const attendanceBatchSelect = document.getElementById('attendanceBatch');
const attendanceDateInput = document.getElementById('attendanceDate');
const attendanceStartTimeInput = document.getElementById('attendanceStartTime');
const attendanceEndTimeInput = document.getElementById('attendanceEndTime');
const attendanceVoiceToggle = document.getElementById('attendanceVoiceToggle');
const attendanceSetupHint = document.getElementById('attendanceSetupHint');
const attendanceStartBtn = document.getElementById('attendanceStartBtn');
const practicalConfigPanel = document.getElementById('practicalConfigPanel');
const practicalGradedToggle = document.getElementById('practicalGradedToggle');
const practicalMaxMarksGroup = document.getElementById('practicalMaxMarksGroup');
const practicalMaxMarksInput = document.getElementById('practicalMaxMarksInput');
const practicalMarkDuringGroup = document.getElementById('practicalMarkDuringGroup');
const practicalMarkDuringToggle = document.getElementById('practicalMarkDuringToggle');
const attendanceRunState = document.getElementById('attendanceRunState');
const voiceStatusPanel = document.getElementById('voiceStatusPanel');
const voiceCurrentRoll = document.getElementById('voiceCurrentRoll');
const voiceCallType = document.getElementById('voiceCallType');
const voiceCountdown = document.getElementById('voiceCountdown');
const voiceListeningState = document.getElementById('voiceListeningState');
const currentStudentCard = document.getElementById('currentStudentCard');
const pauseVoiceBtn = document.getElementById('pauseVoiceBtn');
const resumeVoiceBtn = document.getElementById('resumeVoiceBtn');
const switchToManualBtn = document.getElementById('switchToManualBtn');
const overrideList = document.getElementById('overrideList');
const attendanceSummaryBox = document.getElementById('attendanceSummaryBox');
const saveAttendanceBtn = document.getElementById('saveAttendanceBtn');
const openHistoryFiltersBtn = document.getElementById('openHistoryFiltersBtn');
const historyActiveFilterText = document.getElementById('historyActiveFilterText');
const historyFilterDialog = document.getElementById('historyFilterDialog');
const historyFilterForm = document.getElementById('historyFilterForm');
const historyTypeFilter = document.getElementById('historyTypeFilter');
const historyClassSearch = document.getElementById('historyClassSearch');
const historyClassSuggest = document.getElementById('historyClassSuggest');
const historyUseDateRangeToggle = document.getElementById('historyUseDateRangeToggle');
const historySingleDateGroup = document.getElementById('historySingleDateGroup');
const historySingleDateFilter = document.getElementById('historySingleDateFilter');
const historyDateRangeGroup = document.getElementById('historyDateRangeGroup');
const historyFromDateFilter = document.getElementById('historyFromDateFilter');
const historyToDateFilter = document.getElementById('historyToDateFilter');
const historyApplyFiltersBtn = document.getElementById('historyApplyFiltersBtn');
const historySessionList = document.getElementById('historySessionList');
const historyAttendanceDialog = document.getElementById('historyAttendanceDialog');
const historyAttendanceContext = document.getElementById('historyAttendanceContext');
const historyAttendanceList = document.getElementById('historyAttendanceList');
const historyAttendanceSaveBtn = document.getElementById('historyAttendanceSaveBtn');
const historyGradeDialog = document.getElementById('historyGradeDialog');
const historyGradeContext = document.getElementById('historyGradeContext');
const historyGradeSearch = document.getElementById('historyGradeSearch');
const historyPrevStudentBtn = document.getElementById('historyPrevStudentBtn');
const historyNextStudentBtn = document.getElementById('historyNextStudentBtn');
const historyGradeStudentCard = document.getElementById('historyGradeStudentCard');
const historyGradePresentToggle = document.getElementById('historyGradePresentToggle');
const historyGradeMarksInput = document.getElementById('historyGradeMarksInput');
const historyGradeSaveBtn = document.getElementById('historyGradeSaveBtn');
const statsClassTypeSelect = document.getElementById('statsClassTypeSelect');
const statsClassSelect = document.getElementById('statsClassSelect');
const statsBatchGroup = document.getElementById('statsBatchGroup');
const statsBatchSelect = document.getElementById('statsBatchSelect');
const statsClassContext = document.getElementById('statsClassContext');
const statsTotalLectures = document.getElementById('statsTotalLectures');
const statsAvgAttendance = document.getElementById('statsAvgAttendance');
const statsDefaultersBtn = document.getElementById('statsDefaultersBtn');
const statsDefaultersCount = document.getElementById('statsDefaultersCount');
const statsTable = document.getElementById('statsTable');
const statsHintText = document.getElementById('statsHintText');
const statsExportBtn = document.getElementById('statsExportBtn');
const statsTheorySettingsBtn = document.getElementById('statsTheorySettingsBtn');

const viewTitles = {
  dashboard: 'Dashboard',
  timetable: 'Timetable',
  'class-management': 'Class Management',
  attendance: 'Attendance',
  history: 'History',
  statistics: 'Statistics'
};

const CLASS_STORAGE_KEY = 'taams_classes_v1';
const TIMETABLE_STORAGE_KEY = 'taams_timetable_v1';
const ATTENDANCE_SESSION_STORAGE_KEY = 'taams_attendance_sessions_v1';
const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const classStats = {
  'Class F': { avgAttendance: 82, defaulters: 5, strength: 60 },
  'Class E': { avgAttendance: 86, defaulters: 3, strength: 58 },
  F1: { avgAttendance: 79, defaulters: 4, strength: 20 },
  F2: { avgAttendance: 74, defaulters: 6, strength: 20 },
  F3: { avgAttendance: 81, defaulters: 3, strength: 20 }
};

function getNow() {
  return new Date();
}

function getDateKey() {
  const now = getNow();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

const initialDateKey = getDateKey();

let lectures = [
  {
    id: 'l1',
    date: initialDateKey,
    startTime: '09:00 AM',
    endTime: '10:00 AM',
    subject: 'Software Engineering',
    className: 'Class F',
    batch: '',
    lectureType: 'Theory',
    classroom: 'Room 204',
    attendanceTaken: true,
    presentCount: 52
  },
  {
    id: 'l2',
    date: initialDateKey,
    startTime: '11:00 AM',
    endTime: '12:00 PM',
    subject: 'DBMS Lab',
    className: 'F2',
    batch: 'F2',
    lectureType: 'Practical',
    classroom: 'Lab 2',
    attendanceTaken: false,
    presentCount: null
  },
  {
    id: 'l3',
    date: initialDateKey,
    startTime: '2:00 PM',
    endTime: '3:00 PM',
    subject: 'Computer Networks',
    className: 'Class E',
    batch: '',
    lectureType: 'Theory',
    classroom: 'Room 105',
    attendanceTaken: true,
    presentCount: 55
  }

];

const classRepository = {
  load() {
    try {
      const raw = localStorage.getItem(CLASS_STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  },
  save(classes) {
    try {
      localStorage.setItem(CLASS_STORAGE_KEY, JSON.stringify(classes));
      return true;
    } catch {
      return false;
    }
  }
};

const timetableRepository = {
  load() {
    try {
      const raw = localStorage.getItem(TIMETABLE_STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  },
  save(entries) {
    try {
      localStorage.setItem(TIMETABLE_STORAGE_KEY, JSON.stringify(entries));
      return true;
    } catch {
      return false;
    }
  }
};

const attendanceSessionRepository = {
  load() {
    try {
      const raw = localStorage.getItem(ATTENDANCE_SESSION_STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  },
  save(sessions) {
    try {
      localStorage.setItem(ATTENDANCE_SESSION_STORAGE_KEY, JSON.stringify(sessions));
      return true;
    } catch {
      return false;
    }
  }
};

function ensureClassShape(cls) {
  const students = Array.isArray(cls.students) ? cls.students : [];
  const batches = Array.isArray(cls.batches) ? cls.batches : [];
  const practicalByBatchFromBatches = (batches.length ? batches : [{ name: 'All Students' }]).map((b) => ({
    batchName: b.name || 'Batch',
    percent: 75,
    defaulters: 1
  }));

  return {
    id: cls.id || `c_${Date.now()}`,
    className: cls.className || 'Unnamed Class',
    subjectName: cls.subjectName || 'Unnamed Subject',
    createdAt: cls.createdAt || new Date().toISOString(),
    students,
    batches,
    attendanceSummary: {
      theoryPercent: cls.attendanceSummary?.theoryPercent ?? 78,
      theoryDefaulters: cls.attendanceSummary?.theoryDefaulters ?? Math.max(1, Math.round(students.length * 0.2)),
      practicalByBatch: cls.attendanceSummary?.practicalByBatch ?? practicalByBatchFromBatches
    }
  };
}

let savedClasses = classRepository.load().map(ensureClassShape);
let selectedClassId = savedClasses[0]?.id || null;
classRepository.save(savedClasses);
let timetableEntries = timetableRepository.load();
let editingTimetableId = null;
let attendanceSessions = attendanceSessionRepository.load();
let activeAttendanceSession = null;
let activeStudentIndex = 0;
let voicePaused = false;
let voiceCountdownTimer = null;
let voiceRecognition = null;
let historyAttendanceEditingSessionId = null;
let historyAttendanceDraftRecords = [];
let historyGradeEditingSessionId = null;
let historyGradeStudentIndex = 0;
let historyAppliedFilters = {
  type: '',
  classSearch: '',
  useDateRange: false,
  singleDate: getDateKey(),
  fromDate: '',
  toDate: ''
};
let statsShowDefaultersOnly = false;
let statsVisibleColumns = [];
let statsVisibleRows = [];

const classDraft = {
  className: '',
  subjectName: '',
  students: [],
  batches: [],
  addMode: 'manual',
  divideIntoBatches: false
};

function switchView(target) {
  views.forEach((view) => view.classList.toggle('active', view.id === target));

  navButtons.forEach((btn) => {
    const isActive = btn.dataset.target === target;
    btn.classList.toggle('active', isActive);
    if (isActive) btn.setAttribute('aria-current', 'page');
    else btn.removeAttribute('aria-current');
  });

  title.textContent = viewTitles[target] || 'Dashboard';

  if (target === 'statistics') {
    renderStatisticsView();
  }
}

function timeToMinutes(timeValue) {
  const value = String(timeValue || '').trim();
  if (!value) return NaN;
  if (value.includes('AM') || value.includes('PM') || value.includes('am') || value.includes('pm')) {
    const match = value.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
    if (!match) return NaN;
    let hours = Number(match[1]) % 12;
    const minutes = Number(match[2]);
    const period = match[3].toUpperCase();
    if (period === 'PM') hours += 12;
    return hours * 60 + minutes;
  }
  const [hours, minutes] = value.split(':').map(Number);
  return hours * 60 + minutes;
}

function minutesToTime(totalMinutes) {
  const safeTotal = ((totalMinutes % 1440) + 1440) % 1440;
  const hours = Math.floor(safeTotal / 60);
  const minutes = safeTotal % 60;
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}

function getDefaultEndTime(startTime) {
  if (!startTime) return '';
  return minutesToTime(timeToMinutes(startTime) + 60);
}

function getStatus(lecture) {
  const now = getNow();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const start = timeToMinutes(lecture.startTime);
  const end = timeToMinutes(lecture.endTime);
  const isToday = lecture.date === getDateKey();

  if (isToday && currentMinutes >= start && currentMinutes < end) {
    return 'current';
  }

  if (lecture.attendanceTaken) return 'taken';
  return 'pending';
}

function getCurrentWeekDayName() {
  return new Date().toLocaleDateString(undefined, { weekday: 'long' });
}

function populateTimetableClassOptions(preferredClassId = '') {
  if (!timetableClassSubjectSelect) return;
  if (!savedClasses.length) {
    timetableClassSubjectSelect.innerHTML = '<option value="">No class available</option>';
    timetableClassSubjectSelect.disabled = true;
    timetableFormHint.textContent = 'Create a class first to add timetable entries.';
    updateTimetableBatchOptions();
    return;
  }
  timetableClassSubjectSelect.innerHTML = [
    '<option value="">Select class and subject</option>',
    ...savedClasses.map((cls) => `<option value="${cls.id}">${cls.className} - ${cls.subjectName}</option>`)
  ].join('');
  timetableClassSubjectSelect.disabled = false;
  timetableFormHint.textContent = '';
  if (preferredClassId) timetableClassSubjectSelect.value = preferredClassId;
  updateTimetableBatchOptions();
}

function updateTimetableBatchOptions(preferredBatch = '') {
  if (!timetableBatchSelect) return;
  const isPractical = timetableLectureTypeSelect?.value === 'Practical';
  const classId = String(timetableClassSubjectSelect?.value || '');
  const selectedClass = savedClasses.find((cls) => cls.id === classId);
  if (!isPractical) {
    timetableBatchSelect.innerHTML = '<option value="">Not required for theory</option>';
    timetableBatchSelect.disabled = true;
    return;
  }
  if (!selectedClass) {
    timetableBatchSelect.innerHTML = '<option value="">Select class first</option>';
    timetableBatchSelect.disabled = true;
    return;
  }
  const batches = Array.isArray(selectedClass.batches) ? selectedClass.batches : [];
  if (!batches.length) {
    timetableBatchSelect.innerHTML = '<option value="">No batches configured</option>';
    timetableBatchSelect.disabled = true;
    return;
  }
  timetableBatchSelect.innerHTML = [
    '<option value="">Select batch</option>',
    ...batches.map((batch) => `<option value="${batch.name}">${batch.name}</option>`)
  ].join('');
  timetableBatchSelect.disabled = false;
  if (preferredBatch) timetableBatchSelect.value = preferredBatch;
}

function openTimetableScheduleDialog(preferredDay = '') {
  if (!timetableDialog) return;
  resetTimetableForm();
  if (preferredDay && WEEK_DAYS.includes(preferredDay)) {
    timetableDaySelect.value = preferredDay;
  }
  if (timetableDialogTitle) timetableDialogTitle.textContent = 'Add Schedule';
  timetableDialog.showModal();
  timetableClassSubjectSelect?.focus();
}

function resetTimetableForm() {
  if (!timetableForm) return;
  timetableForm.reset();
  timetableLectureTypeSelect.value = 'Theory';
  timetableDaySelect.value = getCurrentWeekDayName();
  timetableStartTimeInput.value = '09:00';
  timetableEndTimeInput.value = getDefaultEndTime('09:00');
  editingTimetableId = null;
  timetableAddBtn.classList.remove('hidden');
  timetableSaveBtn.classList.add('hidden');
  timetableCancelEditBtn.classList.add('hidden');
  if (timetableDialogTitle) timetableDialogTitle.textContent = 'Add Schedule';
  populateTimetableClassOptions();
}

function getTimetablePayloadFromForm() {
  const classId = String(timetableClassSubjectSelect.value || '');
  const selectedClass = savedClasses.find((cls) => cls.id === classId);
  if (!selectedClass) return { error: 'Select a valid class and subject.' };
  const lectureType = String(timetableLectureTypeSelect.value || 'Theory');
  const batch = lectureType === 'Practical' ? String(timetableBatchSelect.value || '').trim() : '';
  if (lectureType === 'Practical') {
    const names = (Array.isArray(selectedClass.batches) ? selectedClass.batches : []).map((b) => b.name);
    if (!batch || !names.includes(batch)) return { error: 'Select a valid batch for practical lecture.' };
  }
  const classroom = String(timetableClassroomInput.value || '').trim();
  const day = String(timetableDaySelect.value || '');
  const startTime = String(timetableStartTimeInput.value || '');
  const endTime = String(timetableEndTimeInput.value || '');
  if (!classroom || !WEEK_DAYS.includes(day) || !startTime || !endTime) {
    return { error: 'Fill all timetable fields.' };
  }
  if (timeToMinutes(endTime) <= timeToMinutes(startTime)) return { error: 'End time must be after start time.' };
  return {
    classId,
    className: selectedClass.className,
    subjectName: selectedClass.subjectName,
    lectureType,
    batch,
    classroom,
    day,
    startTime,
    endTime
  };
}

function saveTimetableEntries() {
  return timetableRepository.save(timetableEntries);
}

function syncTodayLecturesFromTimetable() {
  const todayKey = getDateKey();
  const dayName = getCurrentWeekDayName();
  const entries = timetableEntries.filter((entry) => entry.day === dayName);
  const validIds = new Set(entries.map((entry) => `tt_${entry.id}_${todayKey}`));
  lectures = lectures.filter((lecture) => lecture.sourceType !== 'timetable' || validIds.has(lecture.id));
  entries.forEach((entry) => {
    const id = `tt_${entry.id}_${todayKey}`;
    const existing = lectures.find((lecture) => lecture.id === id);
    if (existing) {
      Object.assign(existing, {
        startTime: entry.startTime,
        endTime: entry.endTime,
        subject: entry.subjectName,
        className: entry.className,
        batch: entry.batch,
        lectureType: entry.lectureType,
        classroom: entry.classroom
      });
    } else {
      lectures.push({
        id,
        sourceType: 'timetable',
        date: todayKey,
        startTime: entry.startTime,
        endTime: entry.endTime,
        subject: entry.subjectName,
        className: entry.className,
        batch: entry.batch,
        lectureType: entry.lectureType,
        classroom: entry.classroom,
        attendanceTaken: false,
        presentCount: null
      });
    }
  });
}

function openAttendanceFromTimetable(entryId) {
  const entry = timetableEntries.find((item) => item.id === entryId);
  if (!entry) return;
  prefillAttendanceFromLecture({
    classId: entry.classId,
    className: entry.className,
    subject: entry.subjectName,
    lectureType: entry.lectureType,
    batch: entry.batch,
    date: getDateKey(),
    startTime: entry.startTime,
    endTime: entry.endTime
  }, 'dashboard');
  switchView('attendance');
}

function beginTimetableEdit(entryId) {
  const entry = timetableEntries.find((item) => item.id === entryId);
  if (!entry) return;
  editingTimetableId = entry.id;
  populateTimetableClassOptions(entry.classId);
  timetableLectureTypeSelect.value = entry.lectureType;
  updateTimetableBatchOptions(entry.batch);
  timetableClassroomInput.value = entry.classroom;
  timetableDaySelect.value = entry.day;
  timetableStartTimeInput.value = entry.startTime;
  timetableEndTimeInput.value = entry.endTime;
  timetableAddBtn.classList.add('hidden');
  timetableSaveBtn.classList.remove('hidden');
  timetableCancelEditBtn.classList.remove('hidden');
  if (timetableDialogTitle) timetableDialogTitle.textContent = 'Edit Schedule';
  timetableDialog?.showModal();
}

function deleteTimetableEntry(entryId) {
  timetableEntries = timetableEntries.filter((entry) => entry.id !== entryId);
  if (!saveTimetableEntries()) {
    showToast('Could not save timetable');
    return;
  }
  syncTodayLecturesFromTimetable();
  renderTimetableWeekGrid();
  renderLectures();
}

function renderTimetableWeekGrid() {
  if (!timetableWeekGrid) return;
  timetableWeekGrid.innerHTML = WEEK_DAYS.map((day) => {
    const dayEntries = timetableEntries.filter((entry) => entry.day === day)
      .sort((a, b) => timeToMinutes(a.startTime) - timeToMinutes(b.startTime));

    const dayHeader = `
      <div class="tt-day-head">
        <p class="tt-day-title">${day}</p>
        <button
          type="button"
          class="tt-day-add"
          data-tt-action="add-day"
          data-tt-day="${day}"
          aria-label="Add schedule for ${day}"
          title="Add schedule"
        >+</button>
      </div>
    `;

    if (!dayEntries.length) {
      return `<article class="tt-day-card">${dayHeader}<p class="muted">No lectures</p></article>`;
    }

    const rows = dayEntries.map((entry) => `
      <div class="tt-entry">
        <button type="button" class="tt-entry-main" data-tt-action="open" data-tt-id="${entry.id}">
          <span class="tt-entry-time">${entry.startTime} - ${entry.endTime}</span>
          <span class="tt-entry-title">${entry.subjectName}</span>
          <span class="tt-entry-sub">${entry.className}${entry.batch ? ` | Batch ${entry.batch}` : ''} | ${entry.lectureType} | ${entry.classroom}</span>
        </button>
        <div class="tt-entry-actions">
          <button type="button" class="btn tt-mini" data-tt-action="edit" data-tt-id="${entry.id}">Edit</button>
          <button type="button" class="btn tt-mini" data-tt-action="delete" data-tt-id="${entry.id}">Delete</button>
        </div>
      </div>
    `).join('');

    return `<article class="tt-day-card">${dayHeader}${rows}</article>`;
  }).join('');

  timetableWeekGrid.querySelectorAll('[data-tt-action]').forEach((button) => {
    const action = button.getAttribute('data-tt-action');
    button.addEventListener('click', () => {
      if (action === 'add-day') {
        const day = button.getAttribute('data-tt-day') || '';
        openTimetableScheduleDialog(day);
        return;
      }

      const id = button.getAttribute('data-tt-id');
      if (!id) return;
      if (action === 'open') openAttendanceFromTimetable(id);
      if (action === 'edit') beginTimetableEdit(id);
      if (action === 'delete') deleteTimetableEntry(id);
    });
  });
}

function addTimetableEntry() {
  const payload = getTimetablePayloadFromForm();
  if (payload.error) return showToast(payload.error);
  timetableEntries.push({ id: `tt_${Date.now()}`, ...payload });
  if (!saveTimetableEntries()) return showToast('Could not save timetable');
  syncTodayLecturesFromTimetable();
  renderTimetableWeekGrid();
  renderLectures();
  resetTimetableForm();
  timetableDialog?.close();
  showToast('Timetable entry added');
}

function saveEditedTimetableEntry() {
  if (!editingTimetableId) return;
  const payload = getTimetablePayloadFromForm();
  if (payload.error) return showToast(payload.error);
  timetableEntries = timetableEntries.map((entry) => entry.id === editingTimetableId ? { ...entry, ...payload } : entry);
  if (!saveTimetableEntries()) return showToast('Could not save timetable');
  syncTodayLecturesFromTimetable();
  renderTimetableWeekGrid();
  renderLectures();
  resetTimetableForm();
  timetableDialog?.close();
  showToast('Timetable entry updated');
}

function formatLectureSubline(lecture) {
  const batchLabel = lecture.lectureType === 'Practical' && lecture.batch ? ` | Batch ${lecture.batch}` : '';
  return `${lecture.className}${batchLabel} | ${lecture.lectureType} | ${lecture.classroom}`;
}

function getMenuOptions(status) {
  const shared = ['Class Summary', 'View Statistics', 'Edit History'];
  if (status === 'pending') return ['Take Attendance', ...shared];
  return shared;
}

function renderMenu(lecture, status) {
  const options = getMenuOptions(status);
  const optionsHtml = options
    .map((opt) => `<button class="btn menu-item" type="button" data-action="${opt}" data-id="${lecture.id}">${opt}</button>`)
    .join('');

  menuSheet.innerHTML = `<h3>${lecture.subject}</h3><p class="muted">${lecture.className}</p>${optionsHtml}<button class="btn" value="cancel">Close</button>`;

  menuSheet.querySelectorAll('[data-action]').forEach((button) => {
    button.addEventListener('click', () => {
      handleMenuAction(button.dataset.action, lecture.id);
      menuDialog.close();
    });
  });

  menuDialog.showModal();
}

function openClassSummary(lecture) {
  const stats = classStats[lecture.className] || { avgAttendance: 78, defaulters: 0, strength: 40 };
  const todayAttendance = lecture.attendanceTaken && lecture.presentCount !== null
    ? `<p class="summary-value">${lecture.presentCount} / ${stats.strength} students present today</p>`
    : '<p class="muted">Attendance for today not taken yet.</p>';

  classSummaryContent.innerHTML = `
    <h3>Class Summary</h3>
    <p class="muted">${lecture.subject} - ${lecture.className}</p>
    <p>Average Attendance</p>
    <p class="summary-value">${stats.avgAttendance}%</p>
    ${todayAttendance}
    <p>Defaulters (&lt;75%)</p>
    <p class="summary-defaulter">${stats.defaulters} students</p>
    <div class="actions"><button class="btn" value="cancel">Close</button></div>
  `;

  classSummaryDialog.showModal();
}

function startAttendance(lecture) {
  prefillAttendanceFromLecture(lecture, 'dashboard');
  switchView('attendance');
}

function handleMenuAction(action, lectureId) {
  const lecture = lectures.find((item) => item.id === lectureId);
  if (!lecture) return;

  if (action === 'Take Attendance') {
    startAttendance(lecture);
    showToast('Opening attendance module');
    return;
  }

  if (action === 'View Statistics') {
    if (statsClassTypeSelect) {
      statsClassTypeSelect.value = lecture.lectureType === 'Practical' ? 'Practical' : 'Theory';
    }
    populateStatsClassOptions(lecture.classId || '');
    if (lecture.lectureType === 'Practical') {
      refreshStatsBatchOptions(lecture.batch || '__ALL__');
    }
    statsShowDefaultersOnly = false;
    switchView('statistics');
    renderStatisticsView();
    showToast('Navigated to statistics');
    return;
  }

  if (action === 'Edit History') {
    switchView('history');
    showToast('Navigated to history');
    return;
  }

  if (action === 'Class Summary') openClassSummary(lecture);
}

function renderLectures() {
  const todayDateKey = getDateKey();
  const todayLectures = lectures
    .filter((lecture) => lecture.date === todayDateKey)
    .sort((a, b) => timeToMinutes(a.startTime) - timeToMinutes(b.startTime));

  if (!todayLectures.length) {
    lectureList.innerHTML = '<p class="muted">No lectures scheduled for today.</p>';
    return;
  }

  lectureList.innerHTML = todayLectures
    .map((lecture) => {
      const status = getStatus(lecture);
      const statusLabel = status === 'current' ? 'Current' : status === 'taken' ? 'Attendance Taken' : 'Pending Attendance';
      const statusClass = status === 'current' ? 'current' : status === 'taken' ? 'taken' : 'pending';
      const takeButton = status === 'current'
        ? `<button class="btn primary primary-action" data-action="take" data-id="${lecture.id}">Take Attendance</button>`
        : '';

      return `
      <article class="lecture-card ${status === 'current' ? 'current' : ''}">
        <div class="lecture-row">
          <div class="lecture-meta">
            <p class="lecture-time">${lecture.startTime} - ${lecture.endTime}</p>
            <p class="lecture-title">${lecture.subject}</p>
            <p class="muted">${formatLectureSubline(lecture)}</p>
          </div>
          <button class="menu-trigger" data-action="menu" data-id="${lecture.id}" aria-label="More options">?</button>
        </div>
        <div class="lecture-tags">
          <span class="status-badge ${statusClass}">${statusLabel}</span>
          <span class="tag">${lecture.lectureType}</span>
          <span class="tag">${lecture.classroom}</span>
        </div>
        ${takeButton}
      </article>`;
    })
    .join('');

  lectureList.querySelectorAll('[data-action="menu"]').forEach((button) => {
    button.addEventListener('click', () => {
      const lecture = lectures.find((item) => item.id === button.dataset.id);
      if (lecture) renderMenu(lecture, getStatus(lecture));
    });
  });

  lectureList.querySelectorAll('[data-action="take"]').forEach((button) => {
    button.addEventListener('click', () => {
      const lecture = lectures.find((item) => item.id === button.dataset.id);
      if (lecture) startAttendance(lecture);
    });
  });
}

function initializeOverview() {
  const now = getNow();
  const hour = now.getHours();
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';

  greetingText.textContent = `${greeting}, Professor.`;
  overviewDateText.textContent = now.toLocaleDateString(undefined, { day: '2-digit', month: 'long', year: 'numeric' });
  overviewDayText.textContent = now.toLocaleDateString(undefined, { weekday: 'long' });

  todayLabel.textContent = now.toLocaleDateString(undefined, {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('show'), 1400);
}

function seedFormDefaults() {
  const now = getNow();
  extraLectureForm.elements.date.value = getDateKey();
  extraStartTimeInput.value = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  extraEndTimeInput.value = getDefaultEndTime(extraStartTimeInput.value);
}

function populateExtraLectureClassOptions() {
  if (!extraClassSubjectSelect) return;

  if (!savedClasses.length) {
    extraClassSubjectSelect.innerHTML = '<option value=\"\">No class available</option>';
    extraClassSubjectSelect.disabled = true;
    addLectureSubmitBtn.disabled = true;
    classSelectionHint.textContent = 'Create and save a class in Class Management before adding an extra lecture.';
    if (extraBatchSelect) {
      extraBatchSelect.innerHTML = '<option value=\"\">No batches available</option>';
      extraBatchSelect.disabled = true;
    }
    if (batchSelectionHint) batchSelectionHint.textContent = '';
    return;
  }

  extraClassSubjectSelect.innerHTML = [
    '<option value=\"\">Select a class and subject</option>',
    ...savedClasses.map(
      (cls) =>
        `<option value=\"${cls.id}\">${cls.className} - ${cls.subjectName}</option>`
    )
  ].join('');
  extraClassSubjectSelect.disabled = false;
  addLectureSubmitBtn.disabled = true;
  classSelectionHint.textContent = 'Only existing class-subject entries can be selected.';
  updateBatchFieldVisibility();
}

function updateBatchFieldVisibility() {
  const isPractical = extraLectureForm.elements.lectureType.value === 'Practical';
  batchField.style.display = isPractical ? 'grid' : 'none';

  if (!savedClasses.length || extraClassSubjectSelect.disabled) {
    addLectureSubmitBtn.disabled = true;
    if (extraBatchSelect) {
      extraBatchSelect.innerHTML = '<option value=\"\">No class available</option>';
      extraBatchSelect.disabled = true;
    }
    if (batchSelectionHint) batchSelectionHint.textContent = '';
    return;
  }

  const selectedClassId = String(extraClassSubjectSelect.value || '');
  const selectedClass = savedClasses.find((cls) => cls.id === selectedClassId);

  if (!selectedClass) {
    addLectureSubmitBtn.disabled = true;
    if (extraBatchSelect) {
      extraBatchSelect.innerHTML = '<option value=\"\">Select class first</option>';
      extraBatchSelect.disabled = true;
    }
    if (batchSelectionHint) {
      batchSelectionHint.textContent = isPractical
        ? 'Select class + subject to load available batches.'
        : '';
    }
    return;
  }

  if (!isPractical) {
    addLectureSubmitBtn.disabled = false;
    if (extraBatchSelect) {
      extraBatchSelect.innerHTML = '<option value=\"\">Not required for theory</option>';
      extraBatchSelect.disabled = true;
    }
    if (batchSelectionHint) batchSelectionHint.textContent = '';
    return;
  }

  const classBatches = Array.isArray(selectedClass.batches) ? selectedClass.batches : [];
  if (!classBatches.length) {
    addLectureSubmitBtn.disabled = true;
    if (extraBatchSelect) {
      extraBatchSelect.innerHTML = '<option value=\"\">No batches found</option>';
      extraBatchSelect.disabled = true;
    }
    if (batchSelectionHint) {
      batchSelectionHint.textContent = 'No batches are defined for this class. Add batches in Class Management.';
    }
    return;
  }

  if (extraBatchSelect) {
    extraBatchSelect.innerHTML = [
      '<option value=\"\">Select batch</option>',
      ...classBatches.map((batch) => `<option value=\"${batch.name}\">${batch.name}</option>`)
    ].join('');
    extraBatchSelect.disabled = false;
  }
  if (batchSelectionHint) batchSelectionHint.textContent = 'Select one batch for practical lecture.';
  addLectureSubmitBtn.disabled = !extraBatchSelect?.value;
}

function cancelExtraLectureFlow() {
  extraLectureForm.reset();
  seedFormDefaults();
  updateBatchFieldVisibility();
  extraLectureDialog.close();
}

function openExtraLectureFlow() {
  populateExtraLectureClassOptions();
  seedFormDefaults();
  updateBatchFieldVisibility();
  extraLectureDialog.showModal();
}

function resetClassDraft() {
  classDraft.className = '';
  classDraft.subjectName = '';
  classDraft.students = [];
  classDraft.batches = [];
  classDraft.addMode = 'manual';
  classDraft.divideIntoBatches = false;

  classWizardForm.reset();
  setWizardStep('details');
  updateStudentPreview();
  updateBatchPreview();
  updateStudentMode('manual');
  enableBatchToggle.checked = false;
  enableBatchToggle.disabled = true;
  batchPane.classList.add('hidden');
  excelImportStatus.textContent = '';
}

function setWizardStep(stepName) {
  classWizardForm.querySelectorAll('.wizard-step').forEach((step) => {
    step.classList.toggle('hidden', step.dataset.step !== stepName);
  });

  if (stepName === 'details') wizardHint.textContent = 'Step 1: Enter class and subject details.';
  if (stepName === 'students') wizardHint.textContent = 'Step 2: Add students manually or import from Excel.';
  if (stepName === 'batches') wizardHint.textContent = 'Step 3: Optionally divide students into non-overlapping batches, then save.';
}

function updateStudentMode(mode) {
  classDraft.addMode = mode;
  const manual = mode === 'manual';
  manualEntryPane.classList.toggle('hidden', !manual);
  excelEntryPane.classList.toggle('hidden', manual);
  manualModeBtn.classList.toggle('primary', manual);
  excelModeBtn.classList.toggle('primary', !manual);
}

function updateStudentPreview() {
  studentCountLabel.textContent = String(classDraft.students.length);
  studentPreviewList.innerHTML = classDraft.students
    .slice()
    .sort((a, b) => a.rollNumber - b.rollNumber)
    .map((s) => `<li>${s.rollNumber} - ${s.name}</li>`)
    .join('');
}

function getStudentRollSet() {
  return new Set(classDraft.students.map((s) => s.rollNumber));
}

function validateBatches() {
  if (!classDraft.divideIntoBatches) {
    return { ok: true, message: 'Batch division not selected. You can save the class now.' };
  }

  if (!classDraft.batches.length) {
    return { ok: false, message: 'Add at least one batch to continue.' };
  }

  const studentRolls = [...getStudentRollSet()].sort((a, b) => a - b);
  const allocated = new Set();

  for (const batch of classDraft.batches) {
    for (let roll = batch.start; roll <= batch.end; roll += 1) {
      if (!studentRolls.includes(roll)) {
        return { ok: false, message: `Batch ${batch.name} includes roll ${roll}, which does not exist in class.` };
      }
      if (allocated.has(roll)) {
        return { ok: false, message: `Roll ${roll} is assigned to more than one batch.` };
      }
      allocated.add(roll);
    }
  }

  if (allocated.size !== studentRolls.length) {
    return { ok: false, message: 'Every student must belong to exactly one batch. Some roll numbers are unassigned.' };
  }

  return { ok: true, message: 'Batch assignment complete and valid.' };
}

function updateBatchPreview() {
  batchPreviewList.innerHTML = classDraft.batches
    .map((b) => `<li>${b.name}: Roll ${b.start} to ${b.end}</li>`)
    .join('');

  const validation = validateBatches();
  batchValidationText.textContent = validation.message;
  saveClassBtn.disabled = classDraft.students.length === 0 || !validation.ok;
}

function addStudentToDraft(name, rollNumber) {
  if (!name || !rollNumber) {
    showToast('Student name and roll number are required');
    return;
  }

  if (classDraft.students.length >= 100) {
    showToast('Maximum 100 students allowed per class');
    return;
  }

  if (classDraft.students.some((s) => s.rollNumber === rollNumber)) {
    showToast('Duplicate roll number in this class');
    return;
  }

  classDraft.students.push({ name: name.toUpperCase(), rollNumber });
  updateStudentPreview();
  updateBatchPreview();
}

function parseExcel2003Xml(text) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(text, 'text/xml');
  const rows = [...doc.getElementsByTagName('Row')];
  const students = [];

  rows.slice(1).forEach((row) => {
    const cells = [...row.getElementsByTagName('Data')].map((n) => (n.textContent || '').trim());
    if (cells.length >= 2) {
      const roll = Number(cells[0]);
      const name = cells[1].toUpperCase();
      if (!Number.isNaN(roll) && name) students.push({ rollNumber: roll, name });
    }
  });

  return students;
}

function parseXlsxWorkbook(arrayBuffer) {
  if (typeof XLSX === 'undefined') {
    throw new Error('XLSX library not loaded');
  }

  const workbook = XLSX.read(arrayBuffer, { type: 'array' });
  const firstSheetName = workbook.SheetNames[0];
  if (!firstSheetName) return [];

  const sheet = workbook.Sheets[firstSheetName];
  const rows = XLSX.utils.sheet_to_json(sheet, { defval: '' });

  return rows
    .map((row) => {
      const rollRaw = row.ROLL_NUMBER ?? row.Roll_Number ?? row.roll_number ?? row.RollNumber ?? row.rollnumber;
      const nameRaw = row.STUDENT_NAME ?? row.Student_Name ?? row.student_name ?? row.StudentName ?? row.studentname;
      return {
        rollNumber: Number(rollRaw),
        name: String(nameRaw || '').trim().toUpperCase()
      };
    })
    .filter((student) => !Number.isNaN(student.rollNumber) || student.name);
}

function importStudentsFromExcelFile(file) {
  if (!file) return;
  const ext = file.name.split('.').pop()?.toLowerCase();
  if (!['xls', 'xlsx', 'xml'].includes(ext || '')) {
    excelImportStatus.textContent = 'Only Excel files are allowed.';
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    try {
      let imported = [];
      if (ext === 'xlsx') {
        imported = parseXlsxWorkbook(reader.result);
      } else {
        const text = String(reader.result || '');
        imported = parseExcel2003Xml(text);
      }

      if (!imported.length) {
        excelImportStatus.textContent = 'No valid students found. Use the sample Excel format.';
        return;
      }

      if (imported.length > 100) {
        excelImportStatus.textContent = 'Import limit exceeded. Maximum 100 students.';
        return;
      }

      const hasDuplicate = new Set(imported.map((s) => s.rollNumber)).size !== imported.length;
      if (hasDuplicate) {
        excelImportStatus.textContent = 'Duplicate roll numbers found in Excel file.';
        return;
      }

      const hasMissing = imported.some((s) => !s.name || !s.rollNumber);
      if (hasMissing) {
        excelImportStatus.textContent = 'Missing names or roll numbers detected.';
        return;
      }

      classDraft.students = imported;
      updateStudentPreview();
      updateBatchPreview();
      excelImportStatus.textContent = `Imported ${imported.length} students successfully.`;
    } catch {
      excelImportStatus.textContent = 'Could not parse file. Ensure headers are ROLL_NUMBER and STUDENT_NAME.';
    }
  };

  if (ext === 'xlsx') {
    reader.readAsArrayBuffer(file);
  } else {
    reader.readAsText(file);
  }
}

function downloadSampleExcel() {
  const xml = `<?xml version="1.0"?>
<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">
<Worksheet ss:Name="Students"><Table>
<Row><Cell><Data ss:Type="String">ROLL_NUMBER</Data></Cell><Cell><Data ss:Type="String">STUDENT_NAME</Data></Cell></Row>
<Row><Cell><Data ss:Type="Number">1</Data></Cell><Cell><Data ss:Type="String">ADITI SHAH</Data></Cell></Row>
<Row><Cell><Data ss:Type="Number">2</Data></Cell><Cell><Data ss:Type="String">RAHUL PATIL</Data></Cell></Row>
</Table></Worksheet></Workbook>`;

  const blob = new Blob([xml], { type: 'application/vnd.ms-excel' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = 'sample_students.xls';
  anchor.click();
  URL.revokeObjectURL(url);
}

function saveDraftClass() {
  if (!classDraft.className || !classDraft.subjectName) {
    showToast('Class name and subject are required');
    return;
  }

  if (!classDraft.students.length) {
    showToast('Add at least one student before saving');
    return;
  }

  const duplicateClass = savedClasses.some(
    (item) =>
      item.className.trim().toUpperCase() === classDraft.className.trim().toUpperCase() &&
      item.subjectName.trim().toUpperCase() === classDraft.subjectName.trim().toUpperCase()
  );
  if (duplicateClass) {
    showToast('This class and subject already exists');
    return;
  }

  const validation = validateBatches();
  if (!validation.ok) {
    showToast(validation.message);
    return;
  }

  const newClass = {
    id: `c_${Date.now()}`,
    className: classDraft.className,
    subjectName: classDraft.subjectName,
    createdAt: new Date().toISOString(),
    students: classDraft.students.map((student) => ({ ...student })),
    batches: classDraft.divideIntoBatches ? classDraft.batches.map((batch) => ({ ...batch })) : [],
    attendanceSummary: {
      theoryPercent: 78,
      theoryDefaulters: Math.max(1, Math.round(classDraft.students.length * 0.2)),
      practicalByBatch: (classDraft.divideIntoBatches ? classDraft.batches : [{ name: 'All Students', start: 0, end: 0 }]).map((b) => ({
        batchName: b.name,
        percent: 75,
        defaulters: 1
      }))
    }
  };

  savedClasses.push(newClass);
  selectedClassId = newClass.id;
  const saved = classRepository.save(savedClasses);
  if (!saved) {
    savedClasses = savedClasses.filter((item) => item.id !== newClass.id);
    selectedClassId = savedClasses[0]?.id || null;
    showToast('Could not store class in local storage');
    return;
  }
  renderSavedClasses();
  renderClassSummaryView();
  populateExtraLectureClassOptions();
  populateTimetableClassOptions();
  updateAttendanceClassOptions();
  populateHistoryClassOptions();
  populateStatsClassOptions(newClass.id);
  renderStatisticsView();
  classWizardDialog.close();
  resetClassDraft();
  showToast('Class saved successfully');
}

function renderSavedClasses() {
  if (!savedClasses.length) {
    savedClassList.innerHTML = '<p class="muted">No saved classes yet.</p>';
    return;
  }

  savedClassList.innerHTML = savedClasses
    .map((cls) => {
      const studentCount = Array.isArray(cls.students) ? cls.students.length : 0;
      return `<button class="btn saved-class-btn ${selectedClassId === cls.id ? 'active' : ''}" data-class-id="${cls.id}">${cls.className} - ${cls.subjectName} (${studentCount} students)</button>`;
    })
    .join('');

  savedClassList.querySelectorAll('[data-class-id]').forEach((button) => {
    button.addEventListener('click', () => {
      selectedClassId = button.dataset.classId;
      renderSavedClasses();
      renderClassSummaryView();
    });
  });
}

function renderClassSummaryView() {
  const cls = savedClasses.find((c) => c.id === selectedClassId);
  if (!cls) {
    classSummaryView.innerHTML = 'Select a saved class to view attendance summaries.';
    classSummaryView.classList.add('muted');
    return;
  }

  const practicalBlocks = cls.attendanceSummary.practicalByBatch
    .map((row) => `
      <div class="summary-block">
        <p><strong>Batch:</strong> ${row.batchName}</p>
        <p>Practical Attendance: <strong>${row.percent}%</strong></p>
        <p class="summary-defaulter">Defaulters (&lt;75%): ${row.defaulters}</p>
      </div>
    `)
    .join('');

  classSummaryView.classList.remove('muted');
  classSummaryView.innerHTML = `
    <h4>${cls.className} - ${cls.subjectName}</h4>
    <div class="summary-block">
      <p><strong>Theory Attendance (Class-Level)</strong></p>
      <p>Attendance: <strong>${cls.attendanceSummary.theoryPercent}%</strong></p>
      <p class="summary-defaulter">Defaulters (&lt;75%): ${cls.attendanceSummary.theoryDefaulters}</p>
    </div>
    <p><strong>Practical Attendance (Batch-Level)</strong></p>
    ${practicalBlocks}
    <button class="btn inactive-btn" disabled>Add Element (Coming Soon)</button>
  `;
}

function normalizeTimeForForm(timeValue) {
  const minutes = timeToMinutes(timeValue);
  if (Number.isNaN(minutes)) return '09:00';
  return minutesToTime(minutes);
}

function getSelectedAttendanceClass() {
  const classId = String(attendanceClassSubjectSelect?.value || '');
  return savedClasses.find((cls) => cls.id === classId) || null;
}

function getStudentsForBatch(selectedClass, batchName) {
  const students = (selectedClass?.students || []).slice().sort((a, b) => a.rollNumber - b.rollNumber);
  if (!batchName) return students;
  const batch = (selectedClass?.batches || []).find((item) => item.name === batchName);
  if (!batch) return [];
  return students.filter((student) => student.rollNumber >= batch.start && student.rollNumber <= batch.end);
}

function computeAttendancePercent(classId, rollNumber, lectureType) {
  const sessions = attendanceSessions.filter((session) => session.classId === classId && session.lectureType === lectureType);
  if (!sessions.length) return 100;
  let total = 0;
  let present = 0;
  sessions.forEach((session) => {
    const row = (session.records || []).find((record) => record.rollNumber === rollNumber);
    if (!row) return;
    total += 1;
    if (row.present) present += 1;
  });
  if (!total) return 100;
  return Math.round((present / total) * 100);
}


function getSelectedStatsClass() {
  const classId = String(statsClassSelect?.value || '').trim();
  return savedClasses.find((cls) => cls.id === classId) || null;
}

function getTheoryAttendanceMarks(percent) {
  if (percent >= 90) return 5;
  if (percent >= 80) return 4;
  if (percent >= 70) return 3;
  if (percent >= 60) return 2;
  if (percent >= 50) return 1;
  return 0;
}

function formatPercent(percent) {
  return `${Number.isFinite(percent) ? percent.toFixed(2) : '0.00'}%`;
}

function refreshStatsBatchOptions(preferredBatch = '') {
  if (!statsBatchGroup || !statsBatchSelect || !statsClassTypeSelect) return;

  const isPractical = statsClassTypeSelect.value === 'Practical';
  statsBatchGroup.classList.toggle('hidden', !isPractical);

  if (!isPractical) {
    statsBatchSelect.innerHTML = '<option value="__ALL__">All Batches</option>';
    statsBatchSelect.disabled = true;
    return;
  }

  const selectedClass = getSelectedStatsClass();
  if (!selectedClass) {
    statsBatchSelect.innerHTML = '<option value="">Select class first</option>';
    statsBatchSelect.disabled = true;
    return;
  }

  const classBatchNames = (selectedClass.batches || [])
    .map((batch) => String(batch.name || '').trim())
    .filter(Boolean);
  const sessionBatchNames = attendanceSessions
    .filter((session) => session.classId === selectedClass.id && session.lectureType === 'Practical')
    .map((session) => String(session.batch || '').trim())
    .filter(Boolean);

  const batchNames = [...new Set([...classBatchNames, ...sessionBatchNames])].sort((a, b) => a.localeCompare(b));
  const options = [
    '<option value="__ALL__">All Batches</option>',
    ...batchNames.map((name) => `<option value="${name}">${name}</option>`)
  ];

  statsBatchSelect.innerHTML = options.join('');
  statsBatchSelect.disabled = false;

  const desiredValue = String(preferredBatch || statsBatchSelect.value || '__ALL__');
  if ([...statsBatchSelect.options].some((option) => option.value === desiredValue)) {
    statsBatchSelect.value = desiredValue;
  } else {
    statsBatchSelect.value = '__ALL__';
  }
}

function populateStatsClassOptions(preferredClassId = '') {
  if (!statsClassSelect) return;

  if (!savedClasses.length) {
    statsClassSelect.innerHTML = '<option value="">No class available</option>';
    statsClassSelect.disabled = true;
    refreshStatsBatchOptions();
    renderStatisticsView();
    return;
  }

  const currentValue = String(statsClassSelect.value || '');
  statsClassSelect.innerHTML = savedClasses
    .map((cls) => `<option value="${cls.id}">${cls.className} - ${cls.subjectName}</option>`)
    .join('');
  statsClassSelect.disabled = false;

  const desiredValue = preferredClassId || currentValue;
  if (desiredValue && savedClasses.some((cls) => cls.id === desiredValue)) {
    statsClassSelect.value = desiredValue;
  } else {
    statsClassSelect.value = savedClasses[0].id;
  }

  refreshStatsBatchOptions();
}

function getStatisticsSessions(selectedClass, lectureType, batchFilter) {
  return attendanceSessions
    .filter((session) => session.classId === selectedClass.id && session.lectureType === lectureType)
    .filter((session) => {
      if (lectureType !== 'Practical') return true;
      if (!batchFilter || batchFilter === '__ALL__') return true;
      return String(session.batch || '') === batchFilter;
    })
    .sort((a, b) => {
      const aKey = `${a.date}T${normalizeTimeForForm(a.startTime)}`;
      const bKey = `${b.date}T${normalizeTimeForForm(b.startTime)}`;
      return aKey.localeCompare(bKey);
    });
}

function renderStatisticsView() {
  if (!statsTable || !statsClassTypeSelect || !statsClassSelect) return;

  const selectedClass = getSelectedStatsClass();
  const lectureType = statsClassTypeSelect.value === 'Practical' ? 'Practical' : 'Theory';
  const selectedBatch = lectureType === 'Practical' ? String(statsBatchSelect?.value || '__ALL__') : '__ALL__';

  if (statsTheorySettingsBtn) statsTheorySettingsBtn.classList.toggle('hidden', lectureType !== 'Theory');

  const thead = statsTable.querySelector('thead');
  const tbody = statsTable.querySelector('tbody');
  if (!thead || !tbody) return;

  if (!selectedClass) {
    if (statsClassContext) statsClassContext.textContent = 'Select class details to view statistics.';
    if (statsTotalLectures) statsTotalLectures.textContent = '0';
    if (statsAvgAttendance) statsAvgAttendance.textContent = '0%';
    if (statsDefaultersCount) statsDefaultersCount.textContent = '0';
    thead.innerHTML = '';
    tbody.innerHTML = '';
    if (statsHintText) statsHintText.textContent = 'No class selected.';
    statsVisibleColumns = [];
    statsVisibleRows = [];
    return;
  }

  let students = (selectedClass.students || []).slice().sort((a, b) => Number(a.rollNumber) - Number(b.rollNumber));
  if (lectureType === 'Practical' && selectedBatch && selectedBatch !== '__ALL__') {
    students = getStudentsForBatch(selectedClass, selectedBatch);
  }

  const sessions = getStatisticsSessions(selectedClass, lectureType, selectedBatch);
  const totalLectures = sessions.length;
  const gradedSessions = lectureType === 'Practical' ? sessions.filter((session) => session.graded === true) : [];

  const rows = students.map((student) => {
    let attended = 0;
    sessions.forEach((session) => {
      const record = (session.records || []).find((item) => Number(item.rollNumber) === Number(student.rollNumber));
      if (record?.present === true) attended += 1;
    });

    const attendancePercent = totalLectures > 0 ? (attended / totalLectures) * 100 : 0;
    const practicalMarks = gradedSessions.map((session) => {
      const record = (session.records || []).find((item) => Number(item.rollNumber) === Number(student.rollNumber));
      if (!record) return 0;
      if (record.present !== true) return 0;
      const mark = Number(record.mark);
      return Number.isFinite(mark) ? mark : 0;
    });

    return {
      rollNumber: Number(student.rollNumber),
      name: student.name,
      attended,
      attendancePercent,
      theoryMarks: getTheoryAttendanceMarks(attendancePercent),
      practicalMarks
    };
  });

  const defaulters = rows.filter((row) => row.attendancePercent < 75).length;
  const averageAttendance = rows.length
    ? rows.reduce((sum, row) => sum + row.attendancePercent, 0) / rows.length
    : 0;

  const visibleRows = statsShowDefaultersOnly
    ? rows.filter((row) => row.attendancePercent < 75)
    : rows;

  const columns = lectureType === 'Theory'
    ? ['Roll No', 'Student Name', 'Lectures Attended', 'Attendance %', 'Attendance Marks (out of 5)']
    : [
      'Roll No',
      'Student Name',
      'Lectures Attended',
      'Practical Attendance %',
      ...gradedSessions.map((_, index) => `Practical ${index + 1}`)
    ];

  thead.innerHTML = `<tr>${columns.map((col) => `<th>${col}</th>`).join('')}</tr>`;

  if (!visibleRows.length) {
    tbody.innerHTML = `<tr><td colspan="${columns.length}">${statsShowDefaultersOnly ? 'No defaulters for selected filters.' : 'No students found for selected filters.'}</td></tr>`;
  } else {
    tbody.innerHTML = visibleRows.map((row) => {
      const rowClass = totalLectures === 0
        ? 'stats-row-neutral'
        : row.attendancePercent < 75
          ? 'stats-row-risk'
          : 'stats-row-good';

      const theoryOrPracticalCells = lectureType === 'Theory'
        ? `<td>${row.theoryMarks}</td>`
        : row.practicalMarks.map((mark) => `<td>${mark}</td>`).join('');

      return `
        <tr class="${rowClass}">
          <td>${formatRollNo(row.rollNumber)}</td>
          <td>${row.name}</td>
          <td>${row.attended} / ${totalLectures}</td>
          <td>${formatPercent(row.attendancePercent)}</td>
          ${theoryOrPracticalCells}
        </tr>
      `;
    }).join('');
  }

  statsVisibleColumns = columns;
  statsVisibleRows = visibleRows.map((row) => {
    const base = [
      formatRollNo(row.rollNumber),
      row.name,
      `${row.attended} / ${totalLectures}`,
      formatPercent(row.attendancePercent)
    ];

    if (lectureType === 'Theory') {
      base.push(String(row.theoryMarks));
    } else {
      row.practicalMarks.forEach((mark) => base.push(String(mark)));
    }

    return base;
  });

  if (statsClassContext) {
    const batchPart = lectureType === 'Practical' && selectedBatch !== '__ALL__' ? ` | Batch ${selectedBatch}` : '';
    statsClassContext.textContent = `${selectedClass.className} - ${selectedClass.subjectName} | ${lectureType}${batchPart}`;
  }

  if (statsTotalLectures) statsTotalLectures.textContent = String(totalLectures);
  if (statsAvgAttendance) statsAvgAttendance.textContent = formatPercent(averageAttendance);
  if (statsDefaultersCount) statsDefaultersCount.textContent = String(defaulters);
  if (statsDefaultersBtn) statsDefaultersBtn.classList.toggle('active', statsShowDefaultersOnly);

  if (statsHintText) {
    if (!totalLectures) {
      statsHintText.textContent = 'No saved attendance sessions found yet for selected filters.';
    } else if (statsShowDefaultersOnly) {
      statsHintText.textContent = 'Showing only defaulters (<75%).';
    } else {
      statsHintText.textContent = 'Showing statistics up to current date.';
    }
  }
}

function exportStatisticsTableToExcel() {
  if (!statsVisibleColumns.length) {
    showToast('No statistics data available to export.');
    return;
  }

  if (typeof XLSX === 'undefined') {
    showToast('Excel export library not loaded.');
    return;
  }

  const data = [statsVisibleColumns, ...statsVisibleRows];
  const sheet = XLSX.utils.aoa_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, sheet, 'Statistics');

  const selectedClass = getSelectedStatsClass();
  const classLabel = selectedClass ? `${selectedClass.className}_${selectedClass.subjectName}` : 'class';
  const cleanClassLabel = classLabel.replace(/[^a-zA-Z0-9_-]+/g, '_');
  const fileName = `statistics_${cleanClassLabel}_${getDateKey()}.xlsx`;

  XLSX.writeFile(workbook, fileName);
}
function updateAttendanceClassOptions(preferredClassId = '') {
  if (!attendanceClassSubjectSelect) return;
  if (!savedClasses.length) {
    attendanceClassSubjectSelect.innerHTML = '<option value="">No class available</option>';
    attendanceClassSubjectSelect.disabled = true;
    attendanceStartBtn.disabled = true;
    attendanceSetupHint.textContent = 'Create a class first to take attendance.';
    return;
  }

  attendanceClassSubjectSelect.innerHTML = [
    '<option value="">Select class and subject</option>',
    ...savedClasses.map((cls) => `<option value="${cls.id}">${cls.className} - ${cls.subjectName}</option>`)
  ].join('');
  attendanceClassSubjectSelect.disabled = false;

  const classToSet = preferredClassId || attendanceClassSubjectSelect.value;
  if (classToSet && savedClasses.some((cls) => cls.id === classToSet)) {
    attendanceClassSubjectSelect.value = classToSet;
  }

  refreshAttendanceSetupFields();
}

function refreshAttendanceSetupFields() {
  const selectedClass = getSelectedAttendanceClass();
  attendanceSubjectInput.value = selectedClass?.subjectName || '';

  const isPractical = attendanceLectureTypeSelect.value === 'Practical';
  attendanceBatchGroup.classList.toggle('hidden', !isPractical);
  practicalConfigPanel.classList.toggle('hidden', !isPractical);
  attendanceVoiceToggle.checked = isPractical ? false : attendanceVoiceToggle.checked;
  attendanceVoiceToggle.disabled = isPractical;

  if (!isPractical) {
    attendanceBatchSelect.innerHTML = '<option value="">Not required for theory</option>';
    attendanceBatchSelect.disabled = true;
  } else if (!selectedClass) {
    attendanceBatchSelect.innerHTML = '<option value="">Select class first</option>';
    attendanceBatchSelect.disabled = true;
  } else {
    const batches = Array.isArray(selectedClass.batches) ? selectedClass.batches : [];
    if (!batches.length) {
      attendanceBatchSelect.innerHTML = '<option value="">No batches configured</option>';
      attendanceBatchSelect.disabled = true;
    } else {
      attendanceBatchSelect.innerHTML = [
        '<option value="">Select batch</option>',
        ...batches.map((batch) => `<option value="${batch.name}">${batch.name}</option>`)
      ].join('');
      attendanceBatchSelect.disabled = false;
    }
  }

  practicalMaxMarksGroup.classList.toggle('hidden', !isPractical || !practicalGradedToggle.checked);
  practicalMarkDuringGroup.classList.toggle('hidden', !isPractical || !practicalGradedToggle.checked);
  validateAttendanceSetup();
}

function validateAttendanceSetup() {
  if (!attendanceStartBtn) return;

  const selectedClass = getSelectedAttendanceClass();
  const lectureType = attendanceLectureTypeSelect.value;
  const batch = String(attendanceBatchSelect.value || '').trim();
  const date = String(attendanceDateInput.value || '');
  const start = String(attendanceStartTimeInput.value || '');
  const end = String(attendanceEndTimeInput.value || '');
  const isPractical = lectureType === 'Practical';
  const needsMarks = isPractical && practicalGradedToggle.checked;
  const maxMarks = Number(practicalMaxMarksInput.value);

  let message = '';
  let isValid = true;

  if (!selectedClass) {
    isValid = false;
    message = 'Select class and subject.';
  } else if (!date || !start || !end) {
    isValid = false;
    message = 'Fill date and time fields.';
  } else if (timeToMinutes(end) <= timeToMinutes(start)) {
    isValid = false;
    message = 'End time must be after start time.';
  } else if (isPractical && !batch) {
    isValid = false;
    message = 'Select a batch for practical attendance.';
  } else if (needsMarks && (!Number.isFinite(maxMarks) || maxMarks <= 0)) {
    isValid = false;
    message = 'Enter valid maximum marks.';
  } else if (isPractical && getStudentsForBatch(selectedClass, batch).length === 0) {
    isValid = false;
    message = 'No students found for selected batch.';
  }

  attendanceStartBtn.disabled = !isValid;
  attendanceSetupHint.textContent = message;
}

function attendanceSessionKey(session) {
  return [
    session.lectureType,
    session.classId,
    session.date,
    session.startTime,
    session.endTime,
    session.batch || '-'
  ].join('|');
}

function buildSessionFromSetup() {
  const selectedClass = getSelectedAttendanceClass();
  if (!selectedClass) return { error: 'Select class and subject.' };

  const lectureType = attendanceLectureTypeSelect.value;
  const isPractical = lectureType === 'Practical';
  const batch = isPractical ? String(attendanceBatchSelect.value || '').trim() : '';
  const students = isPractical
    ? getStudentsForBatch(selectedClass, batch)
    : (selectedClass.students || []).slice().sort((a, b) => a.rollNumber - b.rollNumber);

  if (!students.length) return { error: 'No students available for this attendance session.' };

  const session = {
    id: `draft_${Date.now()}`,
    source: 'manual',
    lectureType,
    classId: selectedClass.id,
    className: selectedClass.className,
    subject: selectedClass.subjectName,
    batch,
    date: String(attendanceDateInput.value || ''),
    startTime: String(attendanceStartTimeInput.value || ''),
    endTime: String(attendanceEndTimeInput.value || ''),
    mode: lectureType === 'Theory' && attendanceVoiceToggle.checked ? 'voice' : 'manual',
    graded: isPractical ? practicalGradedToggle.checked : false,
    maxMarks: isPractical && practicalGradedToggle.checked ? Number(practicalMaxMarksInput.value) : null,
    addMarksDuringAttendance: isPractical && practicalGradedToggle.checked ? practicalMarkDuringToggle.checked : false,
    createdAt: new Date().toISOString(),
    records: students.map((student) => ({
      rollNumber: student.rollNumber,
      name: student.name,
      present: null,
      mark: null,
      statusSource: 'pending'
    }))
  };
  session.key = attendanceSessionKey(session);
  return { session };
}

function resetAttendanceLivePreview() {
  activeAttendanceSession = null;
  activeStudentIndex = 0;
  clearInterval(voiceCountdownTimer);
  voiceCountdownTimer = null;
  if (voiceRecognition) {
    try { voiceRecognition.abort(); } catch {}
  }
  voicePaused = false;
  attendanceRunState.textContent = 'Not started';
  voiceStatusPanel.classList.add('hidden');
  pauseVoiceBtn.classList.add('hidden');
  resumeVoiceBtn.classList.add('hidden');
  switchToManualBtn.classList.add('hidden');
  currentStudentCard.classList.add('muted');
  currentStudentCard.innerHTML = 'Start attendance to show student roll card.';
  overrideList.classList.add('muted');
  overrideList.innerHTML = 'No active session.';
  attendanceSummaryBox.classList.add('hidden');
  attendanceSummaryBox.innerHTML = '';
  saveAttendanceBtn.classList.add('hidden');
}

function formatRollNo(rollNumber) {
  return String(rollNumber).padStart(3, '0');
}

function renderOverrideTable() {
  if (!activeAttendanceSession) return;
  overrideList.classList.remove('muted');

  overrideList.innerHTML = activeAttendanceSession.records.map((record) => `
    <div class="override-row ${record.present === null ? 'pending-row' : ''}">
      <p class="override-student-line"><strong>Roll No: ${formatRollNo(record.rollNumber)}</strong> - ${record.name}</p>
      <div class="override-toggle-wrap">
        <span class="toggle-side ${record.present !== true ? 'active' : ''}">Absent</span>
        <label class="switch-mini">
          <input type="checkbox" data-override-roll="${record.rollNumber}" ${record.present === true ? 'checked' : ''} />
          <span class="slider-mini"></span>
        </label>
        <span class="toggle-side ${record.present === true ? 'active' : ''}">Present</span>
      </div>
    </div>
  `).join('');

  overrideList.querySelectorAll('[data-override-roll]').forEach((checkbox) => {
    checkbox.addEventListener('change', (event) => {
      const roll = Number(event.currentTarget.getAttribute('data-override-roll'));
      const row = activeAttendanceSession.records.find((record) => record.rollNumber === roll);
      if (!row) return;
      row.present = event.currentTarget.checked;
      row.statusSource = 'override';
      if (activeAttendanceSession.lectureType === 'Practical' && activeAttendanceSession.graded && !row.present) {
        row.mark = 0;
      }
      if (row.present && row.mark === 0 && activeAttendanceSession.lectureType === 'Practical' && activeAttendanceSession.graded) {
        row.mark = null;
      }
      renderOverrideTable();
      renderCurrentStudentCard();
      refreshAttendanceCompletionState();
    });
  });
}

function renderCurrentStudentCard(feedbackText = '', feedbackType = '') {
  if (!activeAttendanceSession) return;

  if (activeStudentIndex >= activeAttendanceSession.records.length) {
    currentStudentCard.classList.remove('muted');
    currentStudentCard.innerHTML = '<p>All students processed. Review override list before saving.</p>';
    refreshAttendanceCompletionState();
    return;
  }

  const current = activeAttendanceSession.records[activeStudentIndex];
  const percent = computeAttendancePercent(activeAttendanceSession.classId, current.rollNumber, activeAttendanceSession.lectureType);
  const canEnterMarksDuringAttendance = activeAttendanceSession.lectureType === 'Practical'
    && activeAttendanceSession.graded
    && activeAttendanceSession.addMarksDuringAttendance;
  const hasPendingPresentMarks = canEnterMarksDuringAttendance && current.present === true && !Number.isFinite(current.mark);
  const currentMarkValue = Number.isFinite(current.mark) ? current.mark : '';

  currentStudentCard.classList.remove('muted');

  if (!canEnterMarksDuringAttendance) {
    currentStudentCard.innerHTML = `
      <div class="attendance-template-card">
        <h4 class="template-title">${activeAttendanceSession.lectureType} Attendance</h4>
        <div class="template-stats-row">
          <div class="template-circle">
            <span class="template-circle-big">${formatRollNo(current.rollNumber)}</span>
            <span class="template-circle-small">Roll No.</span>
          </div>
          <div class="template-circle">
            <span class="template-circle-big">${percent}%</span>
            <span class="template-circle-small">Attendance</span>
          </div>
        </div>
        <div class="template-student-name">${current.name}</div>
        ${feedbackText ? `<p class="feedback-line ${feedbackType}">${feedbackText}</p>` : ''}
        <div class="template-action-buttons">
          <button type="button" class="template-btn-action template-btn-present" id="currentMarkPresentBtn">Present</button>
          <button type="button" class="template-btn-action template-btn-absent" id="currentMarkAbsentBtn">Absent</button>
        </div>
      </div>
    `;
  } else {
    const nextEnabled = current.present === false || (current.present === true && !hasPendingPresentMarks);
    currentStudentCard.innerHTML = `
      <div class="attendance-template-card">
        <h4 class="template-title">Practical Attendance & Marks</h4>
        <div class="template-stats-row">
          <div class="template-circle">
            <span class="template-circle-big">${formatRollNo(current.rollNumber)}</span>
            <span class="template-circle-small">Roll No.</span>
          </div>
          <div class="template-circle">
            <span class="template-circle-big">${percent}%</span>
            <span class="template-circle-small">Attendance</span>
          </div>
        </div>
        ${feedbackText ? `<p class="feedback-line ${feedbackType}">${feedbackText}</p>` : ''}
        <div class="template-controls-row">
          <div class="toggle-group-template">
            <span id="currentStatusLabel" class="toggle-label-template ${current.present === true ? 'present' : 'absent'}">${current.present === true ? 'Present' : 'Absent'}</span>
            <label class="switch-template">
              <input type="checkbox" id="currentPresenceToggle" ${current.present === true ? 'checked' : ''} />
              <span class="slider-template"></span>
            </label>
          </div>
          <div class="marks-group-template">
            <span>Marks</span>
            <input id="currentMarksInput" class="marks-input ${current.present === false ? 'warn' : ''}" type="number" min="0" max="${activeAttendanceSession.maxMarks}" placeholder="/ ${activeAttendanceSession.maxMarks}" value="${currentMarkValue}" ${current.present !== true ? 'disabled' : ''} />
          </div>
        </div>
        <button type="button" class="btn primary" id="currentNextStudentBtn" ${nextEnabled ? '' : 'disabled'}>Enter</button>
      </div>
    `;
  }

  const markPresentBtn = document.getElementById('currentMarkPresentBtn');
  const markAbsentBtn = document.getElementById('currentMarkAbsentBtn');
  const presenceToggle = document.getElementById('currentPresenceToggle');
  const statusLabel = document.getElementById('currentStatusLabel');
  const marksInput = document.getElementById('currentMarksInput');
  const nextStudentBtn = document.getElementById('currentNextStudentBtn');

  markPresentBtn?.addEventListener('click', () => {
    markCurrentStudent(true, activeAttendanceSession.mode === 'voice' ? 'voice' : 'manual');
  });
  markAbsentBtn?.addEventListener('click', () => {
    markCurrentStudent(false, activeAttendanceSession.mode === 'voice' ? 'voice' : 'manual');
  });

  presenceToggle?.addEventListener('change', () => {
    current.present = presenceToggle.checked;
    current.statusSource = 'manual';
    if (!current.present) {
      current.mark = 0;
      marksInput.value = '0';
      marksInput.disabled = true;
      marksInput.classList.add('warn');
    } else {
      if (current.mark === 0) current.mark = null;
      marksInput.value = Number.isFinite(current.mark) ? String(current.mark) : '';
      marksInput.disabled = false;
      marksInput.classList.remove('warn');
    }
    if (statusLabel) {
      statusLabel.textContent = current.present ? 'Present' : 'Absent';
      statusLabel.classList.toggle('present', current.present);
      statusLabel.classList.toggle('absent', !current.present);
    }
    if (nextStudentBtn) {
      const nextEnabled = current.present === false || (current.present === true && Number.isFinite(current.mark));
      nextStudentBtn.disabled = !nextEnabled;
    }
    renderOverrideTable();
    refreshAttendanceCompletionState();
  });

  if (marksInput) {
    marksInput.value = currentMarkValue;
    marksInput.addEventListener('change', () => {
      const value = Number(marksInput.value);
      if (!Number.isFinite(value) || value < 0 || value > activeAttendanceSession.maxMarks) {
        showToast(`Marks must be between 0 and ${activeAttendanceSession.maxMarks}`);
        marksInput.value = Number.isFinite(current.mark) ? String(current.mark) : '';
        return;
      }
      current.mark = value;
      current.statusSource = current.statusSource === 'pending' ? 'manual' : current.statusSource;
      renderOverrideTable();
      if (nextStudentBtn) nextStudentBtn.disabled = !(current.present === true && Number.isFinite(current.mark));
      refreshAttendanceCompletionState();
    });
  }

  nextStudentBtn?.addEventListener('click', () => {
    moveToNextStudentWithMarks();
  });
}

function refreshAttendanceCompletionState() {
  if (!activeAttendanceSession) return;
  const presentCount = activeAttendanceSession.records.filter((record) => record.present === true).length;
  const decidedCount = activeAttendanceSession.records.filter((record) => record.present !== null).length;
  const total = activeAttendanceSession.records.length;
  const marksPending = activeAttendanceSession.lectureType === 'Practical'
    && activeAttendanceSession.graded
    && activeAttendanceSession.addMarksDuringAttendance
    && activeAttendanceSession.records.some((record) => record.present === true && !Number.isFinite(record.mark));
  const complete = decidedCount === total && !marksPending;

  if (complete) {
    attendanceSummaryBox.classList.remove('hidden');
    attendanceSummaryBox.innerHTML = `<strong>${presentCount} / ${total} students present</strong>`;
    saveAttendanceBtn.classList.remove('hidden');
    attendanceRunState.textContent = activeAttendanceSession.mode === 'voice' ? 'Voice run completed' : 'Manual run completed';
  } else {
    attendanceSummaryBox.classList.add('hidden');
    attendanceSummaryBox.innerHTML = '';
    saveAttendanceBtn.classList.add('hidden');
  }
}

function markCurrentStudent(isPresent, source) {
  if (!activeAttendanceSession) return;
  const row = activeAttendanceSession.records[activeStudentIndex];
  if (!row) return;
  const marksDuringAttendance = activeAttendanceSession.lectureType === 'Practical'
    && activeAttendanceSession.graded
    && activeAttendanceSession.addMarksDuringAttendance;

  row.present = isPresent;
  row.statusSource = source;
  if (activeAttendanceSession.lectureType === 'Practical' && activeAttendanceSession.graded && !isPresent) {
    row.mark = 0;
  }

  if (marksDuringAttendance && isPresent) {
    renderOverrideTable();
    renderCurrentStudentCard('Marked Present. Enter marks, then click Next Student.', 'present');
    refreshAttendanceCompletionState();
    return;
  }

  renderOverrideTable();
  const feedback = isPresent ? 'Marked Present ?' : 'Marked Absent ?';
  const feedbackType = isPresent ? 'present' : 'absent';
  activeStudentIndex += 1;
  renderCurrentStudentCard(feedback, feedbackType);
  refreshAttendanceCompletionState();

  if (activeAttendanceSession.mode === 'voice' && !voicePaused && activeStudentIndex < activeAttendanceSession.records.length) {
    processVoiceAttendance();
  }
}

function moveToNextStudentWithMarks() {
  if (!activeAttendanceSession) return;
  const row = activeAttendanceSession.records[activeStudentIndex];
  if (!row) return;
  const marksDuringAttendance = activeAttendanceSession.lectureType === 'Practical'
    && activeAttendanceSession.graded
    && activeAttendanceSession.addMarksDuringAttendance;
  if (!marksDuringAttendance) return;
  if (row.present === null) {
    showToast('Mark present or absent before moving next.');
    return;
  }
  if (row.present === true) {
    const value = Number(row.mark);
    if (!Number.isFinite(value) || value < 0 || value > Number(activeAttendanceSession.maxMarks || 0)) {
      showToast(`Enter marks between 0 and ${activeAttendanceSession.maxMarks}`);
      return;
    }
  } else {
    row.mark = 0;
  }

  activeStudentIndex += 1;
  renderOverrideTable();
  renderCurrentStudentCard('Saved marks and moved to next student.', 'present');
  refreshAttendanceCompletionState();
}

function numberToSpokenRoll(numberValue) {
  const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const number = Number(numberValue);
  if (!Number.isFinite(number)) return String(numberValue);
  if (number < 20) return ones[number];
  if (number < 100) {
    const ten = Math.floor(number / 10);
    const unit = number % 10;
    return unit ? `${tens[ten]} ${ones[unit]}` : tens[ten];
  }
  if (number < 1000) {
    const first = Math.floor(number / 100);
    const tail = number % 100;
    if (tail === 0) return `${ones[first]} zero zero`;
    if (tail < 10) return `${ones[first]} zero ${ones[tail]}`;
    return `${ones[first]} ${numberToSpokenRoll(tail)}`;
  }
  return String(number).split('').map((digit) => ones[Number(digit)]).join(' ');
}

function speakText(text) {
  return new Promise((resolve) => {
    if (!('speechSynthesis' in window)) {
      resolve();
      return;
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.95;
    utterance.onend = () => resolve();
    utterance.onerror = () => resolve();
    window.speechSynthesis.speak(utterance);
  });
}

function hasAffirmativeResponse(transcript, expectedRoll) {
  const text = String(transcript || '').toLowerCase();
  if (!text) return false;
  const affirmatives = ['present', 'yes', 'here', 'sir', 'mam', 'maam', 'yeah', 'yup'];
  const hasAffirmative = affirmatives.some((word) => text.includes(word));
  if (!hasAffirmative) return false;

  const explicitNumber = text.match(/\d+/);
  if (!explicitNumber) return true;
  return Number(explicitNumber[0]) === expectedRoll;
}

function listenForResponse(expectedRoll, timeoutMs) {
  return new Promise((resolve) => {
    const SpeechRecognitionRef = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognitionRef) {
      resolve(false);
      return;
    }

    const recognition = new SpeechRecognitionRef();
    voiceRecognition = recognition;
    recognition.lang = 'en-US';
    recognition.continuous = false;
    recognition.interimResults = false;

    let finished = false;
    const complete = (result) => {
      if (finished) return;
      finished = true;
      try { recognition.stop(); } catch {}
      resolve(result);
    };

    recognition.onresult = (event) => {
      const transcript = event.results?.[0]?.[0]?.transcript || '';
      complete(hasAffirmativeResponse(transcript, expectedRoll));
    };
    recognition.onerror = () => complete(false);
    recognition.onend = () => complete(false);

    recognition.start();
    setTimeout(() => complete(false), timeoutMs);
  });
}

async function runVoiceCall(announcement, callType, timeoutMs, expectedRoll) {
  voiceCallType.textContent = callType;
  voiceListeningState.textContent = 'Announcing';
  await speakText(announcement);
  if (voicePaused || !activeAttendanceSession || activeAttendanceSession.mode !== 'voice') return false;

  const startedAt = Date.now();
  voiceListeningState.textContent = 'Listening';
  clearInterval(voiceCountdownTimer);
  voiceCountdownTimer = setInterval(() => {
    const elapsed = Math.floor((Date.now() - startedAt) / 1000);
    const remaining = Math.max(0, Math.ceil(timeoutMs / 1000) - elapsed);
    voiceCountdown.textContent = `${remaining}s`;
  }, 200);

  const heard = await listenForResponse(expectedRoll, timeoutMs);
  clearInterval(voiceCountdownTimer);
  voiceCountdownTimer = null;
  voiceCountdown.textContent = '0s';
  voiceListeningState.textContent = heard ? 'Response received' : 'No response';
  return heard;
}

async function processVoiceAttendance() {
  if (!activeAttendanceSession || activeAttendanceSession.mode !== 'voice' || voicePaused) return;
  if (activeStudentIndex >= activeAttendanceSession.records.length) return;

  const row = activeAttendanceSession.records[activeStudentIndex];
  const spoken = numberToSpokenRoll(row.rollNumber);
  voiceCurrentRoll.textContent = `${row.rollNumber} (${spoken})`;

  const firstTry = await runVoiceCall(spoken, 'First Call', 3000, row.rollNumber);
  if (voicePaused || !activeAttendanceSession || activeAttendanceSession.mode !== 'voice') return;
  if (firstTry) {
    markCurrentStudent(true, 'voice');
    return;
  }

  const secondTry = await runVoiceCall(`Roll number ${spoken}`, 'Second Call', 1000, row.rollNumber);
  if (voicePaused || !activeAttendanceSession || activeAttendanceSession.mode !== 'voice') return;
  if (secondTry) {
    markCurrentStudent(true, 'voice');
    return;
  }

  voiceCallType.textContent = `Roll number ${spoken}`;
  markCurrentStudent(false, 'voice');
}

function startAttendanceSession() {
  const { session, error } = buildSessionFromSetup();
  if (error) {
    showToast(error);
    return;
  }

  activeAttendanceSession = session;
  activeStudentIndex = 0;
  voicePaused = false;
  if (activeAttendanceSession.mode === 'voice' && !(window.SpeechRecognition || window.webkitSpeechRecognition)) {
    activeAttendanceSession.mode = 'manual';
    showToast('Voice recognition not supported in this browser. Switched to manual mode.');
  }
  attendanceContext.textContent = `Selected: ${session.subject} (${session.className}${session.batch ? ` - Batch ${session.batch}` : ''}) ${session.startTime}-${session.endTime} on ${session.date}`;
  attendanceRunState.textContent = session.mode === 'voice' ? 'Voice attendance running' : 'Manual attendance running';
  voiceStatusPanel.classList.toggle('hidden', session.mode !== 'voice');
  pauseVoiceBtn.classList.toggle('hidden', session.mode !== 'voice');
  resumeVoiceBtn.classList.add('hidden');
  switchToManualBtn.classList.toggle('hidden', session.mode !== 'voice');
  renderOverrideTable();
  renderCurrentStudentCard();
  refreshAttendanceCompletionState();

  if (session.mode === 'voice') {
    processVoiceAttendance();
  }
}

function updateLectureAttendanceStatus(session) {
  const matchingLecture = lectures.find((lecture) =>
    lecture.date === session.date
    && lecture.className === session.className
    && lecture.subject === session.subject
    && lecture.lectureType === session.lectureType
    && normalizeTimeForForm(lecture.startTime) === normalizeTimeForForm(session.startTime)
    && normalizeTimeForForm(lecture.endTime) === normalizeTimeForForm(session.endTime)
    && (lecture.batch || '') === (session.batch || '')
  );
  if (!matchingLecture) return;
  matchingLecture.attendanceTaken = true;
  matchingLecture.presentCount = session.records.filter((record) => record.present).length;
}

function saveAttendanceSession() {
  if (!activeAttendanceSession) return;
  const undecided = activeAttendanceSession.records.some((record) => record.present === null);
  const pendingMarks = activeAttendanceSession.lectureType === 'Practical'
    && activeAttendanceSession.graded
    && activeAttendanceSession.addMarksDuringAttendance
    && activeAttendanceSession.records.some((record) => record.present === true && !Number.isFinite(record.mark));
  if (undecided || pendingMarks) {
    showToast('Mark all students before saving attendance.');
    return;
  }

  const duplicate = attendanceSessions.some((session) => session.key === activeAttendanceSession.key);
  if (duplicate) {
    showToast('Duplicate attendance detected for same lecture.');
    return;
  }

  const finalSession = {
    ...activeAttendanceSession,
    id: `as_${Date.now()}`,
    savedAt: new Date().toISOString(),
    records: activeAttendanceSession.records.map((record) => {
      const output = { ...record };
      if (activeAttendanceSession.lectureType === 'Practical' && activeAttendanceSession.graded && !output.present) {
        output.mark = 0;
      }
      return output;
    })
  };

  attendanceSessions.push(finalSession);
  const saved = attendanceSessionRepository.save(attendanceSessions);
  if (!saved) {
    attendanceSessions = attendanceSessions.filter((session) => session.id !== finalSession.id);
    showToast('Could not save attendance session');
    return;
  }

  updateLectureAttendanceStatus(finalSession);
  renderLectures();
  populateHistoryClassOptions();
  renderHistorySessions();
  renderStatisticsView();
  resetAttendanceLivePreview();
  showToast('Attendance saved successfully');
}

function prefillAttendanceFromLecture(lecture, source = 'dashboard') {
  updateAttendanceClassOptions(lecture.classId || '');
  const selectedClass = savedClasses.find((cls) =>
    cls.id === lecture.classId
    || (cls.className === lecture.className && cls.subjectName === lecture.subject)
  );

  if (selectedClass) {
    attendanceClassSubjectSelect.value = selectedClass.id;
  }
  attendanceLectureTypeSelect.value = lecture.lectureType === 'Practical' ? 'Practical' : 'Theory';
  refreshAttendanceSetupFields();
  attendanceSubjectInput.value = selectedClass?.subjectName || lecture.subject || '';
  attendanceDateInput.value = lecture.date || getDateKey();
  attendanceStartTimeInput.value = normalizeTimeForForm(lecture.startTime || '09:00');
  attendanceEndTimeInput.value = normalizeTimeForForm(lecture.endTime || getDefaultEndTime(attendanceStartTimeInput.value));
  if (lecture.lectureType === 'Practical') {
    attendanceBatchSelect.value = lecture.batch || '';
  }
  attendanceVoiceToggle.checked = false;
  attendanceSetupHint.textContent = source === 'dashboard'
    ? 'Lecture details pre-filled from dashboard. Edit if needed, then start attendance.'
    : '';
  attendanceContext.textContent = `Selected: ${attendanceSubjectInput.value} (${selectedClass?.className || lecture.className || ''}) ${attendanceStartTimeInput.value}-${attendanceEndTimeInput.value}`;
  validateAttendanceSetup();
}

function populateHistoryClassOptions() {
  if (historyClassSuggest) {
    const classNames = [...new Set(savedClasses.map((cls) => cls.className))].sort((a, b) => a.localeCompare(b));
    historyClassSuggest.innerHTML = classNames.map((name) => `<option value="${name}"></option>`).join('');
  }
}

function appendHistoryAudit(session, action, details = {}) {
  if (!Array.isArray(session.auditTrail)) session.auditTrail = [];
  session.auditTrail.push({
    action,
    details,
    editedAt: new Date().toISOString()
  });
}

function formatHistoryDateLabel(dateKey) {
  if (!dateKey) return 'Any date';
  const date = new Date(`${dateKey}T00:00:00`);
  if (Number.isNaN(date.getTime())) return dateKey;
  return date.toLocaleDateString(undefined, { day: '2-digit', month: 'short', year: 'numeric' });
}

function updateHistoryDateModeUI() {
  const useDateRange = Boolean(historyUseDateRangeToggle?.checked);
  historySingleDateGroup?.classList.toggle('hidden', useDateRange);
  historyDateRangeGroup?.classList.toggle('hidden', !useDateRange);
}

function syncHistoryFilterControlsFromState() {
  if (historyTypeFilter) historyTypeFilter.value = historyAppliedFilters.type || '';
  if (historyClassSearch) historyClassSearch.value = historyAppliedFilters.classSearch || '';
  if (historyUseDateRangeToggle) historyUseDateRangeToggle.checked = historyAppliedFilters.useDateRange === true;
  if (historySingleDateFilter) historySingleDateFilter.value = historyAppliedFilters.singleDate || '';
  if (historyFromDateFilter) historyFromDateFilter.value = historyAppliedFilters.fromDate || '';
  if (historyToDateFilter) historyToDateFilter.value = historyAppliedFilters.toDate || '';
  updateHistoryDateModeUI();
}

function updateHistoryFilterSummaryText() {
  if (!historyActiveFilterText) return;
  const bits = [];
  bits.push(historyAppliedFilters.type ? `Type: ${historyAppliedFilters.type}` : 'Type: All');

  if (historyAppliedFilters.classSearch) {
    bits.push(`Class: ${historyAppliedFilters.classSearch}`);
  } else {
    bits.push('Class: All');
  }

  if (historyAppliedFilters.useDateRange) {
    bits.push(`Date: ${formatHistoryDateLabel(historyAppliedFilters.fromDate)} to ${formatHistoryDateLabel(historyAppliedFilters.toDate)}`);
  } else {
    bits.push(`Date: ${formatHistoryDateLabel(historyAppliedFilters.singleDate)}`);
  }

  historyActiveFilterText.textContent = bits.join(' | ');
}

function applyHistoryFilters() {
  const useDateRange = Boolean(historyUseDateRangeToggle?.checked);
  const classSearch = String(historyClassSearch?.value || '').trim();

  historyAppliedFilters = {
    type: String(historyTypeFilter?.value || '').trim(),
    classSearch,
    useDateRange,
    singleDate: useDateRange ? '' : String(historySingleDateFilter?.value || getDateKey()).trim(),
    fromDate: useDateRange ? String(historyFromDateFilter?.value || '').trim() : '',
    toDate: useDateRange ? String(historyToDateFilter?.value || '').trim() : ''
  };

  if (!historyAppliedFilters.useDateRange && !historyAppliedFilters.singleDate) {
    historyAppliedFilters.singleDate = getDateKey();
  }

  updateHistoryFilterSummaryText();
  renderHistorySessions();
  if (historyFilterDialog?.open) historyFilterDialog.close();
}

function getFilteredHistorySessions() {
  const type = String(historyAppliedFilters.type || '').trim();
  const classSearch = String(historyAppliedFilters.classSearch || '').trim().toLowerCase();
  const singleDate = String(historyAppliedFilters.singleDate || '').trim();
  const fromDate = String(historyAppliedFilters.fromDate || '').trim();
  const toDate = String(historyAppliedFilters.toDate || '').trim();

  return attendanceSessions
    .filter((session) => !type || session.lectureType === type)
    .filter((session) => {
      if (classSearch) return String(session.className || '').toLowerCase().includes(classSearch);
      return true;
    })
    .filter((session) => {
      if (singleDate) return session.date === singleDate;
      if (fromDate && session.date < fromDate) return false;
      if (toDate && session.date > toDate) return false;
      return true;
    })
    .sort((a, b) => {
      const aKey = `${a.date}T${normalizeTimeForForm(a.startTime)}`;
      const bKey = `${b.date}T${normalizeTimeForForm(b.startTime)}`;
      return bKey.localeCompare(aKey);
    });
}

function getLectureAverageAttendance(session) {
  const total = Array.isArray(session.records) ? session.records.length : 0;
  if (!total) return 0;
  const present = session.records.filter((record) => record.present === true).length;
  return Math.round((present / total) * 100);
}

function renderHistorySessions() {
  if (!historySessionList) return;
  const sessions = getFilteredHistorySessions();
  if (!sessions.length) {
    historySessionList.classList.add('muted');
    historySessionList.innerHTML = 'No saved attendance session found for the current filters.';
    return;
  }

  historySessionList.classList.remove('muted');
  historySessionList.innerHTML = sessions.map((session) => {
    const present = (session.records || []).filter((record) => record.present === true).length;
    const total = (session.records || []).length;
    const average = getLectureAverageAttendance(session);
    const gradeButton = session.lectureType === 'Practical'
      ? `<button type="button" class="btn" data-history-grade="${session.id}">Add / Edit Grade</button>`
      : '';

    return `
      <div class="history-item">
        <div class="history-item-head">
          <div>
            <p class="history-item-title">${session.className} - ${session.subject}</p>
            <p class="history-item-sub">${session.lectureType}${session.batch ? ` | Batch ${session.batch}` : ''} | ${session.date} | ${session.startTime}-${session.endTime}</p>
          </div>
          <span class="history-attendance-chip">Avg Attendance ${average}%</span>
        </div>
        <p class="muted">${present}/${total} present</p>
        <div class="actions">
          <button type="button" class="btn" data-history-edit="${session.id}">Edit Attendance</button>
          ${gradeButton}
        </div>
      </div>
    `;
  }).join('');

  historySessionList.querySelectorAll('[data-history-edit]').forEach((button) => {
    button.addEventListener('click', () => openHistoryAttendanceEditor(button.getAttribute('data-history-edit')));
  });
  historySessionList.querySelectorAll('[data-history-grade]').forEach((button) => {
    button.addEventListener('click', () => openHistoryGradeEditor(button.getAttribute('data-history-grade')));
  });
}

function findHistoryAttendanceSession() {
  return attendanceSessions.find((session) => session.id === historyAttendanceEditingSessionId) || null;
}

function renderHistoryAttendanceEditor() {
  const session = findHistoryAttendanceSession();
  if (!session || !historyAttendanceList || !historyAttendanceContext) return;

  historyAttendanceContext.textContent = `${session.className} - ${session.subject} | ${session.lectureType}${session.batch ? ` | Batch ${session.batch}` : ''} | ${session.date} ${session.startTime}-${session.endTime}`;

  if (!historyAttendanceDraftRecords.length) {
    historyAttendanceList.classList.add('muted');
    historyAttendanceList.innerHTML = 'No records available for this session.';
    return;
  }

  historyAttendanceList.classList.remove('muted');
  historyAttendanceList.innerHTML = historyAttendanceDraftRecords.map((record) => `
    <div class="override-row ${record.present === null ? 'pending-row' : ''}">
      <p class="override-student-line"><strong>Roll No: ${formatRollNo(record.rollNumber)}</strong> - ${record.name}</p>
      <div class="override-toggle-wrap">
        <span class="toggle-side ${record.present !== true ? 'active' : ''}">Absent</span>
        <label class="switch-mini">
          <input type="checkbox" data-history-attendance-roll="${record.rollNumber}" ${record.present === true ? 'checked' : ''} />
          <span class="slider-mini"></span>
        </label>
        <span class="toggle-side ${record.present === true ? 'active' : ''}">Present</span>
      </div>
    </div>
  `).join('');

  historyAttendanceList.querySelectorAll('[data-history-attendance-roll]').forEach((checkbox) => {
    checkbox.addEventListener('change', (event) => {
      const roll = Number(event.currentTarget.getAttribute('data-history-attendance-roll'));
      const record = historyAttendanceDraftRecords.find((item) => item.rollNumber === roll);
      if (!record) return;
      record.present = event.currentTarget.checked;
      record.statusSource = 'history';
      if (session.lectureType === 'Practical' && session.graded && record.present === false) {
        record.mark = 0;
      }
      renderHistoryAttendanceEditor();
    });
  });
}

function openHistoryAttendanceEditor(sessionId) {
  const session = attendanceSessions.find((item) => item.id === sessionId);
  if (!session || !historyAttendanceDialog) return;
  historyAttendanceEditingSessionId = sessionId;
  historyAttendanceDraftRecords = (session.records || []).map((record) => ({ ...record }));
  renderHistoryAttendanceEditor();
  historyAttendanceDialog.showModal();
}

function saveHistoryAttendanceChanges() {
  const session = findHistoryAttendanceSession();
  if (!session) return;

  const undecided = historyAttendanceDraftRecords.some((record) => record.present === null);
  if (undecided) {
    showToast('All students must be set to Present or Absent before saving.');
    return;
  }

  session.records = historyAttendanceDraftRecords.map((record) => ({ ...record, statusSource: 'history' }));
  session.editedAt = new Date().toISOString();
  appendHistoryAudit(session, 'attendance_edit');

  const saved = attendanceSessionRepository.save(attendanceSessions);
  if (!saved) {
    showToast('Could not save attendance history changes.');
    return;
  }

  updateLectureAttendanceStatus(session);
  renderLectures();
  renderHistorySessions();
  renderStatisticsView();
  showToast('Attendance history updated');
}

function findHistoryGradeSession() {
  return attendanceSessions.find((session) => session.id === historyGradeEditingSessionId) || null;
}

function renderHistoryGradeEditorCard() {
  const session = findHistoryGradeSession();
  if (!session) return;
  const record = session.records[historyGradeStudentIndex];
  if (!record) return;

  if (historyGradeContext) {
    historyGradeContext.textContent = `${session.className} - ${session.subject}${session.batch ? ` | Batch ${session.batch}` : ''} | ${session.date} ${session.startTime}-${session.endTime}`;
  }

  const percent = computeAttendancePercent(session.classId, record.rollNumber, 'Practical');
  historyGradeStudentCard.innerHTML = `
    <div class="student-head">
      <span class="student-roll">Roll ${formatRollNo(record.rollNumber)}</span>
      <strong>${record.name}</strong>
    </div>
    <span class="attendance-percent ${percent >= 75 ? 'good' : 'warn'}">Average Practical Attendance ${percent}%</span>
  `;

  historyGradePresentToggle.checked = record.present === true;
  const practicalMarksEnabled = session.lectureType === 'Practical' && session.graded;
  historyGradeMarksInput.disabled = !practicalMarksEnabled;
  historyGradeMarksInput.value = practicalMarksEnabled
    ? (Number.isFinite(record.mark) ? String(record.mark) : '0')
    : '';

  if (practicalMarksEnabled && record.present === false) {
    historyGradeMarksInput.classList.add('warn');
  } else {
    historyGradeMarksInput.classList.remove('warn');
  }
}

function openHistoryGradeEditor(sessionId) {
  const session = attendanceSessions.find((item) => item.id === sessionId);
  if (!session || !historyGradeDialog) return;
  historyGradeEditingSessionId = sessionId;
  historyGradeStudentIndex = 0;
  historyGradeSearch.value = '';
  renderHistoryGradeEditorCard();
  historyGradeDialog.showModal();
}

function saveHistoryGradeChanges() {
  const session = findHistoryGradeSession();
  if (!session) return;
  const record = session.records[historyGradeStudentIndex];
  if (!record) return;

  const present = historyGradePresentToggle.checked;
  let mark = Number(historyGradeMarksInput.value);

  record.present = present;
  record.statusSource = 'history';

  if (session.lectureType === 'Practical' && session.graded) {
    if (!Number.isFinite(mark)) mark = 0;
    if (mark < 0 || mark > Number(session.maxMarks || 0)) {
      showToast(`Marks must be between 0 and ${session.maxMarks}`);
      return;
    }
    record.mark = mark;
  }

  if (!present && session.lectureType === 'Practical' && session.graded && !Number.isFinite(record.mark)) {
    record.mark = 0;
  }

  session.editedAt = new Date().toISOString();
  appendHistoryAudit(session, 'grade_edit', { rollNumber: record.rollNumber });

  const saved = attendanceSessionRepository.save(attendanceSessions);
  if (!saved) {
    showToast('Could not save grade changes.');
    return;
  }

  updateLectureAttendanceStatus(session);
  renderLectures();
  renderHistorySessions();
  renderStatisticsView();
  renderHistoryGradeEditorCard();
  showToast('Grade history updated');
}

extraLectureForm.elements.lectureType.addEventListener('change', updateBatchFieldVisibility);
extraClassSubjectSelect.addEventListener('change', updateBatchFieldVisibility);
extraBatchSelect.addEventListener('change', () => {
  if (extraLectureForm.elements.lectureType.value === 'Practical') {
    addLectureSubmitBtn.disabled = !extraBatchSelect.value;
  }
});
extraStartTimeInput.addEventListener('change', () => {
  extraEndTimeInput.value = getDefaultEndTime(extraStartTimeInput.value);
});
cancelExtraLectureBtn.addEventListener('click', cancelExtraLectureFlow);
if (timetableForm) timetableForm.addEventListener('submit', (event) => event.preventDefault());
timetableClassSubjectSelect?.addEventListener('change', () => updateTimetableBatchOptions());
timetableLectureTypeSelect?.addEventListener('change', () => updateTimetableBatchOptions());
timetableStartTimeInput?.addEventListener('change', () => {
  timetableEndTimeInput.value = getDefaultEndTime(timetableStartTimeInput.value);
});
timetableAddBtn?.addEventListener('click', addTimetableEntry);
timetableSaveBtn?.addEventListener('click', saveEditedTimetableEntry);
timetableCancelEditBtn?.addEventListener('click', () => {
  resetTimetableForm();
  timetableDialog?.close();
});
attendanceSetupForm?.addEventListener('submit', (event) => event.preventDefault());
attendanceLectureTypeSelect?.addEventListener('change', refreshAttendanceSetupFields);
attendanceClassSubjectSelect?.addEventListener('change', refreshAttendanceSetupFields);
attendanceBatchSelect?.addEventListener('change', validateAttendanceSetup);
attendanceDateInput?.addEventListener('change', validateAttendanceSetup);
attendanceStartTimeInput?.addEventListener('change', () => {
  attendanceEndTimeInput.value = getDefaultEndTime(attendanceStartTimeInput.value);
  validateAttendanceSetup();
});
attendanceEndTimeInput?.addEventListener('change', validateAttendanceSetup);
attendanceVoiceToggle?.addEventListener('change', validateAttendanceSetup);
practicalGradedToggle?.addEventListener('change', refreshAttendanceSetupFields);
practicalMaxMarksInput?.addEventListener('input', validateAttendanceSetup);
practicalMarkDuringToggle?.addEventListener('change', validateAttendanceSetup);
attendanceStartBtn?.addEventListener('click', startAttendanceSession);
saveAttendanceBtn?.addEventListener('click', saveAttendanceSession);
pauseVoiceBtn?.addEventListener('click', () => {
  voicePaused = true;
  pauseVoiceBtn.classList.add('hidden');
  resumeVoiceBtn.classList.remove('hidden');
  attendanceRunState.textContent = 'Voice paused';
  voiceListeningState.textContent = 'Paused';
  if (voiceRecognition) {
    try { voiceRecognition.abort(); } catch {}
  }
});
resumeVoiceBtn?.addEventListener('click', () => {
  if (!activeAttendanceSession || activeAttendanceSession.mode !== 'voice') return;
  voicePaused = false;
  resumeVoiceBtn.classList.add('hidden');
  pauseVoiceBtn.classList.remove('hidden');
  attendanceRunState.textContent = 'Voice attendance running';
  processVoiceAttendance();
});
switchToManualBtn?.addEventListener('click', () => {
  if (!activeAttendanceSession) return;
  activeAttendanceSession.mode = 'manual';
  voicePaused = true;
  voiceStatusPanel.classList.add('hidden');
  pauseVoiceBtn.classList.add('hidden');
  resumeVoiceBtn.classList.add('hidden');
  switchToManualBtn.classList.add('hidden');
  attendanceRunState.textContent = 'Switched to manual mode';
});
openHistoryFiltersBtn?.addEventListener('click', () => {
  syncHistoryFilterControlsFromState();
  historyFilterDialog?.showModal();
});
historyFilterForm?.addEventListener('submit', (event) => event.preventDefault());
historyUseDateRangeToggle?.addEventListener('change', () => {
  if (historyUseDateRangeToggle.checked) {
    if (historySingleDateFilter) historySingleDateFilter.value = '';
  } else {
    if (historySingleDateFilter && !historySingleDateFilter.value) historySingleDateFilter.value = getDateKey();
    if (historyFromDateFilter) historyFromDateFilter.value = '';
    if (historyToDateFilter) historyToDateFilter.value = '';
  }
  updateHistoryDateModeUI();
});
historyClassSearch?.addEventListener('input', () => {
  if (!historyClassSearch) return;
  historyClassSearch.value = historyClassSearch.value.toUpperCase();
});
historyApplyFiltersBtn?.addEventListener('click', applyHistoryFilters);
historyAttendanceSaveBtn?.addEventListener('click', saveHistoryAttendanceChanges);
historyPrevStudentBtn?.addEventListener('click', () => {
  const session = findHistoryGradeSession();
  if (!session) return;
  historyGradeStudentIndex = Math.max(0, historyGradeStudentIndex - 1);
  renderHistoryGradeEditorCard();
});
historyNextStudentBtn?.addEventListener('click', () => {
  const session = findHistoryGradeSession();
  if (!session) return;
  historyGradeStudentIndex = Math.min(session.records.length - 1, historyGradeStudentIndex + 1);
  renderHistoryGradeEditorCard();
});
historyGradeSearch?.addEventListener('input', () => {
  const session = findHistoryGradeSession();
  if (!session) return;
  const query = String(historyGradeSearch.value || '').trim().toLowerCase();
  if (!query) return;
  const foundIndex = session.records.findIndex((record) =>
    String(record.rollNumber).toLowerCase().includes(query)
    || String(record.name).toLowerCase().includes(query)
  );
  if (foundIndex >= 0) {
    historyGradeStudentIndex = foundIndex;
    renderHistoryGradeEditorCard();
  }
});
historyGradePresentToggle?.addEventListener('change', () => {
  if (!historyGradePresentToggle.checked) {
    if (!String(historyGradeMarksInput.value || '').trim()) historyGradeMarksInput.value = '0';
    historyGradeMarksInput.classList.add('warn');
  } else {
    historyGradeMarksInput.classList.remove('warn');
  }
});
historyGradeMarksInput?.addEventListener('keydown', (event) => {
  if (event.key !== 'Enter') return;
  event.preventDefault();
  saveHistoryGradeChanges();
  const session = findHistoryGradeSession();
  if (!session) return;
  historyGradeStudentIndex = Math.min(session.records.length - 1, historyGradeStudentIndex + 1);
  renderHistoryGradeEditorCard();
});
historyGradeSaveBtn?.addEventListener('click', saveHistoryGradeChanges);
statsClassTypeSelect?.addEventListener('change', () => {
  statsShowDefaultersOnly = false;
  populateStatsClassOptions();
  renderStatisticsView();
});
statsClassSelect?.addEventListener('change', () => {
  statsShowDefaultersOnly = false;
  refreshStatsBatchOptions();
  renderStatisticsView();
});
statsBatchSelect?.addEventListener('change', () => {
  statsShowDefaultersOnly = false;
  renderStatisticsView();
});
statsDefaultersBtn?.addEventListener('click', () => {
  statsShowDefaultersOnly = !statsShowDefaultersOnly;
  renderStatisticsView();
});
statsExportBtn?.addEventListener('click', exportStatisticsTableToExcel);

dashboardAddTimetableBtn?.addEventListener('click', () => {
  switchView('timetable');
  resetTimetableForm();
  timetableClassSubjectSelect?.focus();
});
addLectureFab.addEventListener('click', openExtraLectureFlow);

extraLectureForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(extraLectureForm);
  const lectureType = String(formData.get('lectureType'));
  const classSubjectKey = String(formData.get('classSubjectKey') || '');
  const selectedClass = savedClasses.find((cls) => cls.id === classSubjectKey);

  if (!selectedClass) {
    showToast('Select an existing class and subject');
    return;
  }

  const startTime = String(formData.get('startTime'));
  const endTime = String(formData.get('endTime'));
  if (!startTime || !endTime) {
    showToast('Start and end time are required');
    return;
  }

  if (timeToMinutes(endTime) <= timeToMinutes(startTime)) {
    showToast('End time must be after start time');
    return;
  }

  const selectedBatch = lectureType === 'Practical' ? String(formData.get('batch') || '').trim() : '';
  if (lectureType === 'Practical' && !selectedBatch) {
    showToast('Select a batch for practical lecture');
    return;
  }
  if (lectureType === 'Practical') {
    const availableBatchNames = (Array.isArray(selectedClass.batches) ? selectedClass.batches : []).map((b) => b.name);
    if (!availableBatchNames.includes(selectedBatch)) {
      showToast('Select a valid batch from class batches');
      return;
    }
  }

  lectures.push({
    id: `l${Date.now()}`,
    date: String(formData.get('date')),
    startTime,
    endTime,
    subject: selectedClass.subjectName,
    className: selectedClass.className,
    batch: selectedBatch,
    lectureType,
    classroom: String(formData.get('classroom')).trim(),
    attendanceTaken: false,
    presentCount: null
  });

  renderLectures();
  cancelExtraLectureFlow();
  showToast('Extra lecture added to schedule');
});

createClassBtn.addEventListener('click', () => {
  resetClassDraft();
  classWizardDialog.showModal();
});

classWizardForm.addEventListener('submit', (event) => {
  const submitterValue = event.submitter?.value;
  if (submitterValue === 'cancel') return;
  event.preventDefault();
});

nextToStudentsBtn.addEventListener('click', () => {
  const className = String(classWizardForm.elements.className.value || '').trim();
  const subjectName = String(classWizardForm.elements.subjectName.value || '').trim();
  if (!className || !subjectName) {
    showToast('Enter class name and subject name first');
    return;
  }

  classDraft.className = className;
  classDraft.subjectName = subjectName;
  setWizardStep('students');
});

manualModeBtn.addEventListener('click', () => updateStudentMode('manual'));
excelModeBtn.addEventListener('click', () => updateStudentMode('excel'));

addStudentBtn.addEventListener('click', () => {
  const name = String(classWizardForm.elements.studentName.value || '').trim().toUpperCase();
  const roll = Number(classWizardForm.elements.rollNumber.value);
  addStudentToDraft(name, roll);
  classWizardForm.elements.studentName.value = '';
  classWizardForm.elements.rollNumber.value = '';
});

toBatchBtn.addEventListener('click', () => {
  if (!classDraft.students.length) {
    showToast('Add students before proceeding');
    return;
  }
  enableBatchToggle.disabled = false;
  setWizardStep('batches');
  updateBatchPreview();
});

enableBatchToggle.addEventListener('change', () => {
  classDraft.divideIntoBatches = enableBatchToggle.checked;
  batchPane.classList.toggle('hidden', !enableBatchToggle.checked);
  updateBatchPreview();
});

addBatchBtn.addEventListener('click', () => {
  const name = String(classWizardForm.elements.batchName.value || '').trim();
  const start = Number(classWizardForm.elements.batchStart.value);
  const end = Number(classWizardForm.elements.batchEnd.value);

  if (!name || !start || !end || start > end) {
    showToast('Enter valid batch name and roll range');
    return;
  }

  const overlaps = classDraft.batches.some((b) => !(end < b.start || start > b.end));
  if (overlaps) {
    showToast('Batch roll ranges must not overlap');
    return;
  }

  classDraft.batches.push({ name, start, end });
  updateBatchPreview();
  classWizardForm.elements.batchName.value = '';
  classWizardForm.elements.batchStart.value = '';
  classWizardForm.elements.batchEnd.value = '';
});

saveClassBtn.addEventListener('click', saveDraftClass);

downloadSampleBtn.addEventListener('click', downloadSampleExcel);
excelFileInput.addEventListener('change', (event) => importStudentsFromExcelFile(event.target.files?.[0]));

navButtons.forEach((button) => {
  button.addEventListener('click', () => switchView(button.dataset.target));
});

let deferredPrompt;
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredPrompt = event;
  installBtn.hidden = false;
});

installBtn.addEventListener('click', async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
  installBtn.hidden = true;
});

initializeOverview();
renderSavedClasses();
renderClassSummaryView();
populateExtraLectureClassOptions();
seedFormDefaults();
populateTimetableClassOptions();
resetTimetableForm();
renderTimetableWeekGrid();
syncTodayLecturesFromTimetable();
renderLectures();
populateHistoryClassOptions();
syncHistoryFilterControlsFromState();
updateHistoryFilterSummaryText();
updateAttendanceClassOptions();
if (attendanceDateInput) attendanceDateInput.value = getDateKey();
if (attendanceStartTimeInput) attendanceStartTimeInput.value = normalizeTimeForForm(`${String(getNow().getHours()).padStart(2, '0')}:${String(getNow().getMinutes()).padStart(2, '0')}`);
if (attendanceEndTimeInput) attendanceEndTimeInput.value = getDefaultEndTime(attendanceStartTimeInput?.value || '09:00');
refreshAttendanceSetupFields();
resetAttendanceLivePreview();
renderHistorySessions();
populateStatsClassOptions();
renderStatisticsView();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {
      // Silent fail for layout phase.
    });
  });
}








