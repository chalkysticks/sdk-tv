import { Model } from '@chalkysticks/sdk-core';
export declare class Schedule extends Model.Base {
    endpoint: string;
    fields: string[];
    generateVideoMarkup(startTime?: number): string;
    generateVideoUrl(startTime?: number): string;
    getDescription(): string;
    getDuration(): number;
    getEmbedUrl(): string;
    getMeta(): any;
    getTitle(): string;
    getVideoId(): string;
    isLive(): boolean;
}
