import { ModelBase } from '@chalkysticks/sdk-core';

/**
 * @class ModelSchedule
 * @package Model
 * @project ChalkySticks SDK TV
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
	 * Generate YouTube video markup
	 *
	 * @param number startTime
	 * @return string
	 */
	public generateVideoMarkup(startTime: number = 0): string {
		const videoUrl = this.generateVideoUrl(startTime);
		const output = `<iframe width="100%" height="100%" src="${videoUrl}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

		return output;
	}

	/**
	 * Generate YouTube video url
	 *
	 * @param number startTime
	 * @return string
	 */
	public generateVideoUrl(startTime: number = 0): string {
		const videoId = this.getVideoId();
		const output = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&start=${startTime}&rel=0&showinfo=0&controls=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&origin=${window.location.origin}`;

		return output;
	}

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
     * Parse out video URL
     *
     * @param string url
     * @return string
     */
    public getVideoId(): string {
        const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??(?:v=)?([^#\&\?]*).*/;
        const match = this.getEmbedUrl().match(regExp);

        if (match && match[7].length == 11) {
            return match[7];
        }

        return '';
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
