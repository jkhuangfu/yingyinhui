<template>
  <div class="video">
    <video
      autoplay
      class="video-js vjs-default-skin vjs-big-play-centered vjs-fluid"
      controls
      id="my-player"
      preload="auto"
    >
      <source :src="src" />
    </video>
  </div>
</template>
<style scoped>
.video {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background: #000;
}
</style>
<script>
import videojs from 'video.js/dist/video.min';
import 'video.js/dist/video-js.min.css';
export default {
  name: 'video-module',
  props: ['src'],
  data() {
    return {
      video: null,
      t: true
    };
  },
  watch: {
    src(v) {
      this.video.reset();
      this.video.src([
        {
          src: v
        }
      ]);
      this.video.load();
      this.video.play();
      this.handlePlayError();
    }
  },
  computed: {},
  mounted() {
    this.video = videojs('my-player', { fluid: true });
    this.handlePlayError();
  },
  methods: {
    handlePlayError() {
      this.video.on('error', () => {
        if (this.t) {
          this.$message({
            showClose: true,
            message: '当前视频无法正常播放请更换其他节目',
            type: 'error'
          });
          this.t = false;
          setTimeout(() => {
            this.t = true;
          }, 3000);
        }
      });
    }
  }
};
</script>
