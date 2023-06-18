import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-backdrop',
  template: `
    <div class="backdrop" (click)="close($event)" *ngIf="show">
      <ng-content></ng-content>
    </div>
    
  `,
  styleUrls: ['./backdrop.component.css']
})
export class BackdropComponent {

  @Input() show: boolean = false;
  @Output() onClick = new EventEmitter();

  close(event: Event) {
    event.stopPropagation();
    this.onClick.emit();
  }

}