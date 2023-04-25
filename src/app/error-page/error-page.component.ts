import { Component } from '@angular/core';
import { HashInterface } from '../models/hash_interface';
@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent {
  dataHash: HashInterface = {
    title: "TestTile",
    subtitle: [
      {
        title1: "asddas",
        title2: "asdad",
        subtitles: [
          "asdsaa",
          "adssaas",
          "asdsaa",
          "adssaas",
          "asdsaa",
          "adssaas",
          "asdsaa",
          "adssaas",
          "asdsaa",
          "adssaas"
        ]
      },
      {
        title1: "sda",
        title2: "sd"
      },
      {
        title1: "asd"
      },
      {
        title1: "asd",
        title2: "ads",
        subtitles: [
          "5345543",
          "adssa35345543as"
        ]
      }
    ]
  }
}
