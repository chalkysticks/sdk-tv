import { CollectionBase } from '@chalkysticks/sdk-core';
import ModelSchedule from '../Model/Schedule';
export default class CollectionSchedule extends CollectionBase {
    endpoint: string;
    model: any;
    getCurrentVideo(): ModelSchedule;
    getSecondsSinceMidnight(): number;
    getTimeData(): {
        duration: number;
        index: number;
        time: number;
    };
    getTimeForCurrentVideo(): number;
}
