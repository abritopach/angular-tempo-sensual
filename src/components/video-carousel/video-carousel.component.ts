import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-video-carousel',
  templateUrl: './video-carousel.component.html',
  styleUrls: ['./video-carousel.component.css']
})
export class VideoCarouselComponent implements OnInit {

  videos: any;
  elem: any;

  @Input()
  set videosData(videos: Array<Object>) {
      this.videos = videos;
  }

  @ViewChild('videoThumbnail') videoCarousel: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  handleSelectedVideo(video) {
    const elem = document.getElementById(video.id);
    this.handleFullScreenVideo(video, elem);
}

  handleKeyPressed(video, i, event) {

    this.elem = document.getElementById(video.id);

    this.resetVideo(this.elem);

    if (event.keyCode === 37) {
        if (i > 0) {
            this.elem = this.videoCarousel.nativeElement.children[i - 1];
            this.elem.firstElementChild.focus();
        }
    } else if (event.keyCode === 39) {
        if (i < this.videoCarousel.nativeElement.children.length - 1) {
            this.elem = this.videoCarousel.nativeElement.children[i + 1];
            this.elem.firstElementChild.focus();
        }
    }

    if (event.key === 'Enter') {
        this.handleFullScreenVideo(video, this.elem);
    }

  }

  handleFullScreenVideo(selectedVideo, elem) {

      this.resetVideo(elem);

      if (elem != null) {

          this.fullScreenVideo(elem);

          const playPromise = elem.play();

          if (playPromise !== undefined) {

              playPromise.then(_ => {
                  // Automatic playback started! Show playing UI.
              })
                  .catch(error => {
                      // Auto-play was prevented. Show paused UI.
                      console.log(error);
                  });
          }

          // Video Ended.
          document.getElementById(selectedVideo.id).addEventListener('ended', () => {
              this.exitFullscreenVideo(elem);
          }, false);

          // Full Screen Change.
          document.addEventListener('webkitfullscreenchange', () => {

              const isFullScreen = document.fullscreenElement || document.webkitIsFullScreen;

              if (!isFullScreen) {
                  this.resetVideo(elem);
              }

          }, false);

      }
  }

  resetVideo(elem) {
      // Reset video.
      elem.pause();
      elem.currentTime = 0;
      elem.load();
  }

  fullScreenVideo(elem) {
      if (elem.requestFullscreen) {
          elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
          elem.webkitRequestFullscreen();
      } else if (elem.mozRequestFullScreen) {
          elem.mozRequestFullScreen();
      } else if (elem.msRequestFullscreen) {
          elem.msRequestFullscreen();
      }
  }

  exitFullscreenVideo(elem) {
    if (elem.exitFullscreen) {
        elem.exitFullscreen();
    } else if (elem.mozCancelFullScreen) {
        elem.mozCancelFullScreen();
    } else if (elem.webkitExitFullscreen) {
        elem.webkitExitFullscreen();
    }
  }

}
