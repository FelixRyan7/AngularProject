import { Component, ViewChild, ElementRef } from "@angular/core";
import { OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudFakeService } from '../crud-fake.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-media-component',
  templateUrl: './media-component.component.html',
  standalone: true,
  imports: [RouterModule],
  styleUrls: ['./media-component.component.css']
})

export class MediaComponentComponent {

  name = "Angular";
  @ViewChild("videoPlayer", { static: false }) videoplayer!: ElementRef;
  isPlay: boolean = false;
  toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
  }

  playPause() {
    var myVideo: any = document.getElementById("my_video");
    if (myVideo.paused) myVideo.play();
    else myVideo.pause();
  }
  skip(value: any) {
    let video: any = document.getElementById("my_video");
    video.currentTime += value;
  }

  restart() {
    let video: any = document.getElementById("my_video");
    video.currentTime = 0;
  }

  id: any;
  player: any;
  private sub: any

  constructor(private route: ActivatedRoute, private crudFakeService: CrudFakeService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.player = this.crudFakeService.getPlayerById(this.id);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}

export default MediaComponentComponent;