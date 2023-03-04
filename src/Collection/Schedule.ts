import { CollectionBase } from '@chalkysticks/sdk-core';
import ModelSchedule from '../Model/Schedule';

/**
 * @type interface
 */
export interface ITimeData {
	duration: number;
	index: number;
	time: number;
}

/**
 * @class CollectionSchedule
 * @package Collection
 * @project ChalkySticks SDK TV
 */
export default class CollectionSchedule extends CollectionBase<ModelSchedule> {
    /**
     * Endpoint key
     * e.g. https://api.chalkysticks.com/v1/tv/schedule
     *
	 * @requires v1
     * @type string
     */
    public endpoint: string = 'tv/schedule';

    /**
     * Model object instantiated by this collection
     *
     * @type ModelSchedule
     */
    public model: ModelSchedule = new ModelSchedule();


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
     * @return ITimeData
     */
    public getTimeData(): ITimeData {
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
     * @return number
     */
    public getTimeForCurrentVideo(): number {
        const timeData = this.getTimeData();
        return timeData.time;
    }

    /**
     * Will flag and remove the current video
     *
     * @return ModelSchedule
     */
    public flagCurrentVideo(reason: string = ''): ModelSchedule {
        const currentVideo: ModelSchedule = this.getCurrentVideo();

		// Remove from collection
		this.remove(currentVideo);

		// Log
		console.log('@todo Flagging current video', reason);

		// Return new video
        return this.getCurrentVideo();
    }

    // endregion: Getters
}
