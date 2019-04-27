import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('colorInput') colorInput: ElementRef;

  public title = 'color-schemer';
  public color = '000000';

  private LOCAL_STORAGE_COLOR = 'color-schemer-set-color';

  constructor() {
    this.color = localStorage.getItem(this.LOCAL_STORAGE_COLOR) || '000000';
  }

  ngOnInit() {
    this.colorInput.nativeElement.focus();
  }


  onColorChange(value: string) {
    this.color = value;
    localStorage.setItem(this.LOCAL_STORAGE_COLOR, this.color);
  }

  colorToHex(): string {
    return '#' + this.color;
  }
}
