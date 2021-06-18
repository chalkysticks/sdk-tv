"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sdk_core_1 = require("@chalkysticks/sdk-core");
const Schedule_1 = require("../Model/Schedule");
class CollectionSchedule extends sdk_core_1.CollectionBase {
    constructor() {
        super(...arguments);
        this.endpoint = 'tv/schedule';
        this.model = Schedule_1.default;
    }
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
exports.default = CollectionSchedule;
//# sourceMappingURL=Schedule.js.map