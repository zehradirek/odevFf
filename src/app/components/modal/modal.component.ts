import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() public title!: string; 
  @Input() public label!: string; 
  @Input() public text!: string; 

  
}
