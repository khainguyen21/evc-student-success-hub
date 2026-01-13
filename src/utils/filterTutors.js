import {} from '../types/Tutor.js';
export function filterByDay(tutors, day) {
    return tutors.filter((tutor) => {
        return tutor.schedule.some((slot) => {
            return slot.day.includes(day);
        });
    });
}
export function filterBySubject(tutors, subject) {
    return tutors.filter((tutor) => {
        return tutor.subjects.some(s => s.toLowerCase().includes(subject.toLowerCase()));
    });
}
// export function filterByTimeAvailable(tutors: Tutor[], targetTime: string): Tutor[] {
//     return tutors.filter(tutor => {
//         return tutor.schedule.some(slot => {
//             const [targetHour, targetMinute] = targetTime.split(':').map(Number);
//             const [startHour, startMinute] = slot.startTime.split(':').map(Number);
//             const [endHour, endMinute] = slot.endTime.split(':').map(Number);
//             const targetTotalMinutes = targetHour * 60 + targetMinute;
//             const startTotalMinutes = startHour * 60 + startMinute;
//             const endTotalMinutes = endHour * 60 + endMinute;
//             return targetTotalMinutes >= startTotalMinutes && targetTotalMinutes <= endTotalMinutes;
//         })
//     })
// }
//# sourceMappingURL=filterTutors.js.map