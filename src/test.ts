import tutorData from '../data/schedule.json' with { type: 'json' };
import { filterByDay, filterBySubject } from './utils/filterTutors.js';
import type { Tutor } from './types/Tutor.js';

console.log('Total tutors:', tutorData.tutors.length);

const mondayTutors = filterByDay(tutorData.tutors as Tutor[], 'Monday');
console.log(`\nTutors available on Monday: ${mondayTutors.length}`);
mondayTutors.forEach(t => console.log(`  - ${t.name}`));

const mathTutors = filterBySubject(tutorData.tutors as Tutor[], 'MATH');
console.log(`\nMath tutors: ${mathTutors.length}`);
mathTutors.forEach(t => console.log(`  - ${t.name}`));