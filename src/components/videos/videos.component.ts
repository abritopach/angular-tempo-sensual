import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  videos: any;

  constructor() {
    this.videos = [
      {
      'title': 'Clase 08/01/2018',
      'description': 'Esta es la descripción de la clase del 08/01/2018',
      'videoURL': 'http://techslides.com/demos/sample-videos/small.mp4',
      'posterURL': 'http://lorempixel.com/214/317/?t=1',
      'id': 'clase-08_01_2018'
      },
      {
      'title': 'Clase 09/01/2018',
      'description': 'Esta es la descripción de la clase del 09/01/2018',
      'videoURL': 'http://techslides.com/demos/sample-videos/small.mp4',
      'posterURL': 'http://lorempixel.com/214/317/?t=2',
      'id': 'clase-09_01_2018'
      },
      {
      'title': 'Clase 10/01/2018',
      'description': 'Esta es la descripción de la clase del 10/01/2018',
      'videoURL': 'http://techslides.com/demos/sample-videos/small.mp4',
      'posterURL': 'http://lorempixel.com/214/317/?t=3',
      'id': 'clase-10_01_2018'
      },
      {
      'title': 'Clase 11/01/2018',
      'description': 'Esta es la descripción de la clase del 11/01/2018',
      'videoURL': 'http://techslides.com/demos/sample-videos/small.mp4',
      'posterURL': 'http://lorempixel.com/214/317/?t=4',
      'id': 'clase-11_01_2018'
      },
      {
      'title': 'Clase 12/01/2018',
      'description': 'Esta es la descripción de la clase del 12/01/2018',
      'videoURL': 'http://techslides.com/demos/sample-videos/small.mp4',
      'posterURL': 'http://lorempixel.com/214/317/?t=5',
      'id': 'clase-12_01_2018'
      },
      {
      'title': 'Clase 13/01/2018',
      'description': 'Esta es la descripción de la clase del 13/01/2018',
      'videoURL': 'http://techslides.com/demos/sample-videos/small.mp4',
      'posterURL': 'http://lorempixel.com/214/317/?t=6',
      'id': 'clase-13_01_2018'
      }
    ];
  }

  ngOnInit() {
  }

}
