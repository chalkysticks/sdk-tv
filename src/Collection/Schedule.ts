import { CollectionBase } from '@chalkysticks/sdk-core';
import ModelSchedule from '../Model/Schedule';

export default class CollectionSchedule extends CollectionBase {
    /**
     * Model object instantiated by this collection
     *
     * @type ModelSchedule
     */
    public model: ModelSchedule = ModelSchedule;
}
