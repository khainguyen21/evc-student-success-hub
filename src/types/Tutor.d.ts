export type DayOfWeek = 'Mon' | 'Tues' | 'Wed' | 'Thurs' | 'Fri' | 'Sat' | 'Sun';
export interface Schedule {
    day: DayOfWeek;
    startTime: string;
    endTime: string;
    location: string;
}
export interface Tutor {
    name: string;
    type: 'staff' | 'professor';
    subjects: string[];
    schedule: Schedule[];
    role?: string;
}
export interface TutorData {
    tutors: Tutor[];
}
//# sourceMappingURL=Tutor.d.ts.map