"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sdk_core_1 = require("@chalkysticks/sdk-core");
class ModelSchedule extends sdk_core_1.ModelBase {
    constructor() {
        super(...arguments);
        this.endpoint = 'tv/schedule';
        this.fields = [
            'id',
            'title',
            'description',
            'duration',
            'video_meta',
            'embed_url',
            'is_live',
            'air_at',
            'created_at',
        ];
    }
    getDescription() {
        return this.attr('description');
    }
    getDuration() {
        return parseFloat(this.attr('duration'));
    }
    getEmbedUrl() {
        return this.attr('embed_url');
    }
    getMeta() {
        return JSON.parse(this.attr('video_meta'));
    }
    getTitle() {
        return this.attr('title');
    }
    getVideoId() {
        const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??(?:v=)?([^#\&\?]*).*/;
        const match = this.getEmbedUrl().match(regExp);
        if (match && match[7].length == 11) {
            return match[7];
        }
        return '';
    }
    isLive() {
        return !!this.attr('is_live');
    }
}
exports.default = ModelSchedule;
//# sourceMappingURL=Schedule.js.map