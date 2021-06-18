import { CollectionBase } from '@chalkysticks/sdk-core';
import ModelSchedule from '../Model/Schedule';

/**
 * ┌────────────────────────────────────────────────────────────────────────────┐
 * │                                                                            │
 * │ CollectionSchedule                                                         │
 * │                                                                            │
 * │ @namespace Collection                                                      │
 * │ @package   SDK-TV                                                          │
 * │ @project   ChalkySticks                                                    │
 * │                                                                            │
 * └────────────────────────────────────────────────────────────────────────────┘
 */
export default class CollectionSchedule extends CollectionBase {
    /**
     * Endpoint key
     * e.g. https://api.chalkysticks.com/v1/tv/schedule
     *
     * @type string
     */
    public endpoint: string = 'tv/schedule';

    /**
     * Model object instantiated by this collection
     *
     * @type ModelSchedule
     */
    public model: any = ModelSchedule;


    // region: Getters
    // ---------------------------------------------------------------------------

    /**
     * Get video at the current time
     *
     * @return ModelSchedule
     */
    public getCurrentVideo(): ModelSchedule {
        const timeData = this.getTimeData();

        return this.at(timeData.index) as ModelSchedule;
    }

    /**
     * UTC seconds since midnight
     *
     * @return number
     */
    public getSecondsSinceMidnight(): number {
        const d1: Date = new Date();
        const d2: Date = new Date();

        d2.setHours(0, 0, 0, 0);

        return (d1.getTime() - d2.getTime()) / 1000;
    }

    /**
     * Get video at the current time
     *
     * @return ModelSchedule
     */
    public getTimeData() {
        const now: number = this.getSecondsSinceMidnight();
        let model: ModelSchedule;
        let d: number = 0;
        let n: number = 0;
        let i: number = 0;

        // Iterate through collection
        for (i; i < this.length; i++) {
            model = this.at(i) as ModelSchedule;
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
        }
    }

    /**
     *
     */
    public getTimeForCurrentVideo(): number {
        const timeData = this.getTimeData();
        return timeData.time;
    }

    // endregion: Getters
}
