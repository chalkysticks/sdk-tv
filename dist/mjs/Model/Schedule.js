import { ModelBase } from '@chalkysticks/sdk-core';
export default class ModelSchedule extends ModelBase {
    endpoint = 'tv/schedule';
    fields = [
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
    isLive() {
        return !!this.attr('is_live');
    }
}
//# sourceMappingURL=Schedule.js.map