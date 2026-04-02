<template>
  <div class="card card-body">
    <h2>Videos 영상리스트</h2>
    <ul class="list-group">
      <li
        v-for="v in videos"
        :key="v.id"
        class="list-group-item text-left"
        :class="playingVideo(v.id)"
      >
        {{ v.title }} {{ v.category }}
        <router-link :to="{ name: 'videos/id', params: { id: v.id } }">
          <span class="float-end badge bg-secondary">듣기</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { inject } from 'vue';

export default {
  name: 'Videos',
  components: { YoutubeVue3 },
  setup() {
    //App.vue에서 provide된 이름인 videos를 지정해서 가지고 와서 넣어주세요.
    //주사놓다. 주입하다.
    const videos = inject('videos');
    console.log(videos);

    const stopVideo = () => {
      playerRef.value.player.stopVideo();
      router.push({ name: 'videos' });
    };
    const playNext = () => {
      const index = videos.findIndex((v) => v.id === videoInfo.video.id);
      const nextVideo = videos[index + 1];

      if (nextVideo) {
        videoInfo.video = nextVideo;
        router.push({ name: 'videos/id', params: { id: nextVideo.id } });
      } else {
        videoInfo.video = videos[0];
        router.push({ name: 'videos/id', params: { id: videos[0].id } });
      }
    };

    const playPrev = () => {
      const index = videos.findIndex((v) => v.id === videoInfo.video.id);
      const prevVideo = videos[index - 1];
      if (prevVideo) {
        videoInfo.video = prevVideo;
        router.push({ name: 'videos/id', params: { id: prevVideo.id } });
      }
    };

    return { videoInfo, playerRef, playNext, stopVideo, playPrev };
  },
};
</script>

<style></style>
