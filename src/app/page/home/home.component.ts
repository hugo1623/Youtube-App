import { Component, OnInit } from '@angular/core';
import { YoutubeService } from 'src/app/services/youtube.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private youtubeService: YoutubeService) { }

  ngOnInit(): void {

    this.youtubeService.getVideos()
        .subscribe(resp=> {
          console.log(resp);
        })
  }

}
