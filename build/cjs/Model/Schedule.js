"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schedule = void 0;
const sdk_core_1 = require("@chalkysticks/sdk-core");
class Schedule extends sdk_core_1.Model.Base {
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
exports.Schedule = Schedule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NoZWR1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvTW9kZWwvU2NoZWR1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscURBQStDO0FBTy9DLE1BQWEsUUFBUyxTQUFRLGdCQUFLLENBQUMsSUFBSTtJQUF4Qzs7UUFPVyxhQUFRLEdBQVcsYUFBYSxDQUFDO1FBT2pDLFdBQU0sR0FBYTtZQUN0QixJQUFJO1lBQ0osT0FBTztZQUNQLGFBQWE7WUFDYixVQUFVO1lBQ1YsWUFBWTtZQUNaLFdBQVc7WUFDWCxTQUFTO1lBQ1QsUUFBUTtZQUNSLFlBQVk7U0FDZixDQUFDO0lBdUdOLENBQUM7SUE1Rk8sbUJBQW1CLENBQUMsWUFBb0IsQ0FBQztRQUMvQyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbEQsTUFBTSxNQUFNLEdBQUcsMkNBQTJDLFFBQVEsNkhBQTZILENBQUM7UUFFaE0sT0FBTyxNQUFNLENBQUM7SUFDZixDQUFDO0lBUU0sZ0JBQWdCLENBQUMsWUFBb0IsQ0FBQztRQUM1QyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEMsTUFBTSxNQUFNLEdBQUcsaUNBQWlDLE9BQU8sNEJBQTRCLFNBQVMsdUZBQXVGLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFNU0sT0FBTyxNQUFNLENBQUM7SUFDZixDQUFDO0lBT00sY0FBYztRQUNkLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQVcsQ0FBQztJQUM5QyxDQUFDO0lBT00sV0FBVztRQUNkLE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFXLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBT00sV0FBVztRQUNkLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQVcsQ0FBQztJQUM1QyxDQUFDO0lBT0csT0FBTztRQUNQLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBVyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQU9NLFFBQVE7UUFDWCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFXLENBQUM7SUFDeEMsQ0FBQztJQVFNLFVBQVU7UUFDYixNQUFNLE1BQU0sR0FBRyxnRkFBZ0YsQ0FBQztRQUNoRyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRS9DLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksRUFBRSxFQUFFLENBQUM7WUFDakMsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsQ0FBQztRQUVELE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQU9HLE1BQU07UUFDTixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Q0FHSjtBQS9IRCw0QkErSEMifQ==