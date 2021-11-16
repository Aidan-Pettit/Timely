import createSchedule from './functions/createSchedule.js';

const activities = [
    {activity: 'play video games', duration: 4},
    {activity: 'do school work', duration: 8}, 
    {activity: 'eat', duration: 3},
    {activity: 'sleep', duration: 9}
];

const schedule = createSchedule(activities, 'arrange')