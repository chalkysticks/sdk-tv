import { CollectionBase } from '@chalkysticks/sdk-core';
import ModelSchedule from '../Model/Schedule';
export interface ITimeData {
    duration: number;
    index: number;
    time: number;
}
export default class CollectionSchedule extends CollectionBase<ModelSchedule> {
    endpoint: string;
    model: ModelSchedule;
    getCurrentVideo(): ModelSchedule;
    getSecondsSinceMidnight(): number;
    getTimeData(): ITimeData;
    getTimeForCurrentVideo(): number;
    flagCurrentVideo(reason?: string): ModelSchedule;
}
