"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sdk_core_1 = require("@chalkysticks/sdk-core");
const Schedule_1 = require("../Model/Schedule");
class CollectionSchedule extends sdk_core_1.CollectionBase {
    constructor() {
        super(...arguments);
        this.endpoint = 'tv/schedule';
        this.model = Schedule_1.default;
    }
}
exports.default = CollectionSchedule;
//# sourceMappingURL=Schedule.js.map