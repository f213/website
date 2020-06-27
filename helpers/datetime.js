import TimeAgo from 'javascript-time-ago';
import ru from 'javascript-time-ago/locale/ru';

TimeAgo.addLocale(ru);
const timeAgo = new TimeAgo('ru-RU');

export const fromNow = (date) => timeAgo.format(Date.parse(date));
