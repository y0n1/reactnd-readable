import Moment from 'moment';

export const fromNow = (time) => {
  return Moment(time).valueOf() <= Moment().subtract(7, 'days').valueOf() ? 
    Moment(time).format('LLL') : Moment(time).utc().fromNow();
}

export const toFirstCapital = word =>
    word.charAt(0).toUpperCase() + word.slice(1, word.length);

export const dateTimeFormat = (time) => Moment(time).format();

