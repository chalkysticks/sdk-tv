import { Model } from '@chalkysticks/sdk-core';
export class Schedule extends Model.Base {
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
    generateVideoMarkup(startTime = 0) {
        const videoUrl = this.generateVideoUrl(startTime);
        const output = `<iframe width="100%" height="100%" src="${videoUrl}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        return output;
    }
    generateVideoUrl(startTime = 0) {
        const videoId = this.getVideoId();
        const output = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&start=${startTime}&rel=0&showinfo=0&controls=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&origin=${window.location.origin}`;
        return output;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NoZWR1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvTW9kZWwvU2NoZWR1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBTy9DLE1BQU0sT0FBTyxRQUFTLFNBQVEsS0FBSyxDQUFDLElBQUk7SUFBeEM7O1FBT1csYUFBUSxHQUFXLGFBQWEsQ0FBQztRQU9qQyxXQUFNLEdBQWE7WUFDdEIsSUFBSTtZQUNKLE9BQU87WUFDUCxhQUFhO1lBQ2IsVUFBVTtZQUNWLFlBQVk7WUFDWixXQUFXO1lBQ1gsU0FBUztZQUNULFFBQVE7WUFDUixZQUFZO1NBQ2YsQ0FBQztJQXVHTixDQUFDO0lBNUZPLG1CQUFtQixDQUFDLFlBQW9CLENBQUM7UUFDL0MsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2xELE1BQU0sTUFBTSxHQUFHLDJDQUEyQyxRQUFRLDZIQUE2SCxDQUFDO1FBRWhNLE9BQU8sTUFBTSxDQUFDO0lBQ2YsQ0FBQztJQVFNLGdCQUFnQixDQUFDLFlBQW9CLENBQUM7UUFDNUMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xDLE1BQU0sTUFBTSxHQUFHLGlDQUFpQyxPQUFPLDRCQUE0QixTQUFTLHVGQUF1RixNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRTVNLE9BQU8sTUFBTSxDQUFDO0lBQ2YsQ0FBQztJQU9NLGNBQWM7UUFDZCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFXLENBQUM7SUFDOUMsQ0FBQztJQU9NLFdBQVc7UUFDZCxPQUFPLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBVyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQU9NLFdBQVc7UUFDZCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFXLENBQUM7SUFDNUMsQ0FBQztJQU9HLE9BQU87UUFDUCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQVcsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFPTSxRQUFRO1FBQ1gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBVyxDQUFDO0lBQ3hDLENBQUM7SUFRTSxVQUFVO1FBQ2IsTUFBTSxNQUFNLEdBQUcsZ0ZBQWdGLENBQUM7UUFDaEcsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUvQyxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLEVBQUUsRUFBRSxDQUFDO1lBQ2pDLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLENBQUM7UUFFRCxPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFPRyxNQUFNO1FBQ04sT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNsQyxDQUFDO0NBR0oifQ==