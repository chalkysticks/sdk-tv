import { ModelBase } from '@chalkysticks/sdk-core';

/**
 * ┌────────────────────────────────────────────────────────────────────────────┐
 * │                                                                            │
 * │ ModelSchedule                                                              │
 * │                                                                            │
 * │ @namespace Model                                                           │
 * │ @package   SDK-TV                                                          │
 * │ @project   ChalkySticks                                                    │
 * │                                                                            │
 * └────────────────────────────────────────────────────────────────────────────┘
 */
export default class ModelSchedule extends ModelBase {
    /**
     * Endpoint key
     * e.g. https://api.chalkysticks.com/v1/tv/schedule
     *
     * @type string
     */
    public endpoint: string = 'tv/schedule';

    /**
     * List of fields available
     *
     * @type string[]
     */
    public fields: string[] = [
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


    // region: Getters
    // ---------------------------------------------------------------------------

    /**
     * Get description of the video
     *
     * @return string
     */
     public getDescription(): string {
        return this.attr('description') as string;
    }

    /**
     * Get duration in seconds
     *
     * @return number
     */
    public getDuration(): number {
        return parseFloat(this.attr('duration') as string);
    }

    /**
     * Get embeddable url for the video
     *
     * @return string
     */
    public getEmbedUrl(): string {
        return this.attr('embed_url') as string;
    }

    /**
     * Get various metadata, such as "game_type"
     *
     * @return object
     */
     public getMeta(): any {
        return JSON.parse(this.attr('video_meta') as string);
    }

    /**
     * Get title of the video
     *
     * @return string
     */
    public getTitle(): string {
        return this.attr('title') as string;
    }

    /**
     * If the video is live
     *
     * @return boolean
     */
     public isLive(): boolean {
        return !!this.attr('is_live');
    }

    // endregion: Getters

}
