import { CollectionBase } from '@chalkysticks/sdk-core';
import ModelSchedule from '../Model/Schedule';

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
}
