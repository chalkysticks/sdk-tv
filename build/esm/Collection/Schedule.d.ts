import { Collection } from '@chalkysticks/sdk-core';
import * as Model from '../Model';
export interface ITimeData {
    duration: number;
    index: number;
    time: number;
}
export declare class Schedule extends Collection.Base<Model.Schedule> {
    endpoint: string;
    model: Model.Schedule;
    getCurrentVideo(): Model.Schedule;
    getSecondsSinceMidnight(): number;
    getTimeData(): ITimeData;
    getTimeForCurrentVideo(): number;
    flagCurrentVideo(reason?: string): Model.Schedule;
}
