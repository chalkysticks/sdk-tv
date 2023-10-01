import { Collection } from '@chalkysticks/sdk-core';
import * as Model from '../Model';
export class Schedule extends Collection.Base {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NoZWR1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvQ29sbGVjdGlvbi9TY2hlZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEQsT0FBTyxLQUFLLEtBQUssTUFBTSxVQUFVLENBQUM7QUFnQmxDLE1BQU0sT0FBTyxRQUFTLFNBQVEsVUFBVSxDQUFDLElBQW9CO0lBQTdEOztRQVFXLGFBQVEsR0FBVyxhQUFhLENBQUM7UUFPakMsVUFBSyxHQUFtQixJQUFJLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQXdGeEQsQ0FBQztJQTdFVSxlQUFlO1FBQ2xCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVwQyxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBbUIsQ0FBQztJQUNyRCxDQUFDO0lBT00sdUJBQXVCO1FBQzFCLE1BQU0sRUFBRSxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7UUFDNUIsTUFBTSxFQUFFLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUU1QixFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXhCLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ2hELENBQUM7SUFPTSxXQUFXO1FBQ2QsTUFBTSxHQUFHLEdBQVcsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDbkQsSUFBSSxLQUFxQixDQUFDO1FBQzFCLElBQUksQ0FBQyxHQUFXLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsR0FBVyxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLEdBQVcsQ0FBQyxDQUFDO1FBR2xCLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzFCLEtBQUssR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBbUIsQ0FBQztZQUNyQyxDQUFDLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3hCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFUCxJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUU7Z0JBQ1QsTUFBTTthQUNUO1NBQ0o7UUFFRCxPQUFPO1lBQ0gsUUFBUSxFQUFFLENBQUM7WUFDWCxLQUFLLEVBQUUsQ0FBQztZQUNSLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1NBQ3RCLENBQUE7SUFDTCxDQUFDO0lBS00sc0JBQXNCO1FBQ3pCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwQyxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDekIsQ0FBQztJQU9NLGdCQUFnQixDQUFDLFNBQWlCLEVBQUU7UUFDdkMsTUFBTSxZQUFZLEdBQW1CLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUdsRSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFHOUMsT0FBTyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDbEMsQ0FBQztDQUdKIn0=