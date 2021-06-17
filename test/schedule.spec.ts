import { expect } from 'chai';
import CollectionSchedule from '../src/Collection/Schedule';
import ModelSchedule from '../src/Model/Schedule';


// Setup
// ----------------------------------------------------------------------------

const collection: CollectionSchedule = CollectionSchedule.hydrate([
    {
        "id": 1069,
        "title": "Roberto Gomez vs Skylar Woodward",
        "description": "2017 US Open 10-ball",
        "duration": "3994",
        "video_meta": "{ \"game_type\": \"10-ball\" }",
        "embed_url": "https://youtube.com/embed/4_0lqbjZ8EM",
        "is_live": null,
        "air_at": "",
        "created_at": "2017-11-07 22:52:39"
    },
    {
        "id": 1116,
        "title": "Dimitris Loukatos vs Nick Ekonomopoulos",
        "description": "2017 9-ball Lamia",
        "duration": "5786",
        "video_meta": "{ \"game_type\": \"9-ball\" }",
        "embed_url": "https://youtube.com/embed/hhhqYNHXGnM",
        "is_live": null,
        "air_at": "",
        "created_at": "2017-11-07 23:06:10"
    },
]);


/**
  ┌────────────────────────────────────────────────────────────────────────────┐
  │                                                                            │
  │ Local tests                                                                │
  │                                                                            │
  └────────────────────────────────────────────────────────────────────────────┘
*/

describe('Schedule - Local', () => {
    it('should have a duration equaling 3994', () => {
        const model: ModelSchedule = collection.at(0);

        expect(model.getDuration()).to.equal(3994);
    });

    it('should have a title', () => {
        const model: ModelSchedule = collection.at(1);

        expect(model.getTitle()).to.equal('Dimitris Loukatos vs Nick Ekonomopoulos');
    });
});
