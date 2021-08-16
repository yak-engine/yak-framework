import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-directory-dialog]',
  templateUrl: './directory-dialog.component.html',
  styleUrls: ['./directory-dialog.component.scss']
})
export class DirectoryDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  async selectTargetPath(): Promise<void> {
    // let results: OpenDialogReturnValue = await window.electron.dialog.showOpenDialog({
    //     properties: ['openDirectory']
    // });

    // if (results) {
    //   this.$emit('on-directory-selected', results.filePaths[0])
    // }
  }
}
