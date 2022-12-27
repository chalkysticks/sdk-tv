import { CollectionBase } from '@chalkysticks/sdk-core';
import ModelSchedule from '../Model/Schedule';
export default class CollectionSchedule extends CollectionBase {
    endpoint = 'tv/schedule';
    model = new ModelSchedule();
    getCurrentVideo() {
        const timeData = this.getTimeData();
        return this.at(timeData.index);
    }
    getSecondsSinceMidnight() {
        const d1 = new Date();
        const d2 = new Date();
        d2.setHours(0, 0, 0, 0);
        return (d1.getTime() - d2.getTime()) / 1000;
    }
    getTimeData() {
        const now = this.getSecondsSinceMidnight();
        let model;
        let d = 0;
        let n = 0;
        let i = 0;
        for (i; i < this.length; i++) {
            model = this.at(i);
            d = model.getDuration();
            n += d;
            if (n > now) {
                break;
            }
        }
        return {
            duration: d,
            index: i,
            time: d - (n - now),
        };
    }
    getTimeForCurrentVideo() {
        const timeData = this.getTimeData();
        return timeData.time;
    }
}
//# sourceMappingURL=Schedule.js.map