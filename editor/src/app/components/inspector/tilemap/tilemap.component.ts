import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tilemap',
  templateUrl: './tilemap.component.html',
  styleUrls: ['./tilemap.component.scss']
})
export class TilemapComponent implements OnInit {

  @Input()
	public inspectorComponentData: any;

  ngOnInit(): void {
    // const path = window.require('path');
    // const fs = window.require('fs');

    // let tilesetsPath: string = path.join(this.project.path, 'tilesets');

    // if (!fs.existsSync(tilesetsPath)){
    //   throw "Required folder does not exist.";
    // }
    
    // fs.readdirSync(tilesetsPath).forEach(tilesetPath => this.tilesetPaths.push(tilesetPath));
  }

  public project: any;

  tilesetPaths: string[] = [];

  mounted(): void {

  }
}
