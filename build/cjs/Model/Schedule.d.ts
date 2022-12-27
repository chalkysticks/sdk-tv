import { ModelBase } from '@chalkysticks/sdk-core';
export default class ModelSchedule extends ModelBase {
    endpoint: string;
    fields: string[];
    getDescription(): string;
    getDuration(): number;
    getEmbedUrl(): string;
    getMeta(): any;
    getTitle(): string;
    getVideoId(): string;
    isLive(): boolean;
}
