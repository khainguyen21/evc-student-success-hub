export type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

export interface Schedule {
    day: string;
    startTime: string;
    endTime: string;
    location: string;
}

export interface Tutor {
    name: string; 
    type?: 'staff' | 'professor';
    subjects: string[];
    schedule: Schedule[];
    role?: string;
}

export interface TutorData {
    tutors: Tutor[];
}