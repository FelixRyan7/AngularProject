import { Component, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: 'app-media-component',
  templateUrl: './media-component.component.html',
  standalone: true,
  styleUrls: ['./media-component.component.css']
})
export class MediaComponentComponent {
  name = "Angular";
  @ViewChild("videoPlayer", { static: false }) videoplayer!: ElementRef;
  isPlay: boolean = false;
  toggleVideo(){
    this.videoplayer.nativeElement.play();
  }
  playPause() {
    var myVideo: any = document.getElementById("my_video_1");
    if (myVideo.paused) myVideo.play();
    else myVideo.pause();
  }

  makeBig() {
    var myVideo: any = document.getElementById("my_video_1");
    myVideo.width = 560;
  }

  makeSmall() {
    var myVideo: any = document.getElementById("my_video_1");
    myVideo.width = 320;
  }

  makeNormal() {
    var myVideo: any = document.getElementById("my_video_1");
    myVideo.width = 420;
  }

  skip(value: any) {
    let video: any = document.getElementById("my_video_1");
    video.currentTime += value;
  }

  restart() {
    let video: any = document.getElementById("my_video_1");
    video.currentTime = 0;
  }
}

export default MediaComponentComponent;