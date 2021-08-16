import { EventEmitter, Output } from '@angular/core';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input()
  public title!: string;
  
  @Input()
  public isOpen: boolean = false;
  
  @Input()
  public modalSize: string = 'small';

  @Output()
  public closed: EventEmitter<void> = new EventEmitter();

  closeModal(): void {
    this.closed?.emit();
  }
}
