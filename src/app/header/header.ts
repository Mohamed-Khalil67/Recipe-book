import { Component, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {
  featureSelected = output<string>()
  onSelect(feature: string) {
    this.featureSelected.emit(feature)
  }
}
