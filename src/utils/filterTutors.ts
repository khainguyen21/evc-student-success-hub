import { type Tutor, type DayOfWeek } from '../types/Tutor.js';

export function filterByDay(tutors: Tutor[], day: DayOfWeek): Tutor[] {
    return tutors.filter((tutor) => {
        return tutor.schedule.some((slot) => {
            return slot.day.includes(day);    
        })
    });
}

export function filterBySubject(tutors: Tutor[], subject: string): Tutor[] {
    return tutors.filter((tutor) => {
        return tutor.subjects.some(s => s.toLowerCase().includes(subject.toLowerCase()));
    });
}