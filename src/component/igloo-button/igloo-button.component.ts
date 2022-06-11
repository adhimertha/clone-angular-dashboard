import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-igloo-button',
  templateUrl: './igloo-button.component.html',
  styleUrls: ['./igloo-button.component.scss']
})
export class IglooButtonComponent implements OnInit {
  @Input() color: string = '';
  @Input() disabled: boolean = false;
  @Input() id: string = '';
  @Input() width: string = '';
  @Input() type: string = '';
  @Input() display: string = '';
  @Input() class: string = '';

  public className = 'igloo-button';

  constructor() { }

  ngOnInit() {
    this.display !== '' ? (this.className += ' igloo-button--' + this.display) : '';
    this.color !== '' ? (this.className += ' igloo-button--' + this.color) : '';
    
    if (this.width === 'full') {
      this.className += ' igloo-button--full';
    } else if (this.width !== 'full' && this.width !== '') {
      this.className += ' igloo-button--w-' + this.width + 'px'
    }

    this.class !== '' ? (this.className += ' ' + this.class) : '';
  }
}
