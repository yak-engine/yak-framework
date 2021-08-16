import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-tree]',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  public items: any[] = [];

  isExpanded: boolean = false;
  selectedIndex: number = -1;

  select(index: number): void {
      this.selectedIndex = index;
      console.log('select');
  }
}
