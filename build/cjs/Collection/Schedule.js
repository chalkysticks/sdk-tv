"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schedule = void 0;
const sdk_core_1 = require("@chalkysticks/sdk-core");
const Model = __importStar(require("../Model"));
class Schedule extends sdk_core_1.Collection.Base {
    constructor() {
        super(...arguments);
        this.endpoint = 'tv/schedule';
        this.model = new Model.Schedule();
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
    flagCurrentVideo(reason = '') {
        const currentVideo = this.getCurrentVideo();
        this.remove(currentVideo);
        console.log('@todo Flagging current video', reason);
        return this.getCurrentVideo();
    }
}
exports.Schedule = Schedule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NoZWR1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvQ29sbGVjdGlvbi9TY2hlZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUFvRDtBQUNwRCxnREFBa0M7QUFnQmxDLE1BQWEsUUFBUyxTQUFRLHFCQUFVLENBQUMsSUFBb0I7SUFBN0Q7O1FBUVcsYUFBUSxHQUFXLGFBQWEsQ0FBQztRQU9qQyxVQUFLLEdBQW1CLElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBd0Z4RCxDQUFDO0lBN0VVLGVBQWU7UUFDbEIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRXBDLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFtQixDQUFDO0lBQ3JELENBQUM7SUFPTSx1QkFBdUI7UUFDMUIsTUFBTSxFQUFFLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUM1QixNQUFNLEVBQUUsR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO1FBRTVCLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFeEIsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDaEQsQ0FBQztJQU9NLFdBQVc7UUFDZCxNQUFNLEdBQUcsR0FBVyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUNuRCxJQUFJLEtBQXFCLENBQUM7UUFDMUIsSUFBSSxDQUFDLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxHQUFXLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsR0FBVyxDQUFDLENBQUM7UUFHbEIsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUMzQixLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQW1CLENBQUM7WUFDckMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN4QixDQUFDLElBQUksQ0FBQyxDQUFDO1lBRVAsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7Z0JBQ1YsTUFBTTtZQUNWLENBQUM7UUFDTCxDQUFDO1FBRUQsT0FBTztZQUNILFFBQVEsRUFBRSxDQUFDO1lBQ1gsS0FBSyxFQUFFLENBQUM7WUFDUixJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztTQUN0QixDQUFBO0lBQ0wsQ0FBQztJQUtNLHNCQUFzQjtRQUN6QixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEMsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQ3pCLENBQUM7SUFPTSxnQkFBZ0IsQ0FBQyxTQUFpQixFQUFFO1FBQ3ZDLE1BQU0sWUFBWSxHQUFtQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFHbEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUcxQixPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRzlDLE9BQU8sSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7Q0FHSjtBQXZHRCw0QkF1R0MifQ==