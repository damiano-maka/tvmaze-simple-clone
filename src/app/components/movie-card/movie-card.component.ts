import { Component, EventEmitter, Input, Output, Self } from '@angular/core';
import { tipo_dati } from 'src/app/interfaceM';


@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {
  @Input() movies!: Array<tipo_dati>;

  @Output() cardClicked = new EventEmitter<number>();;

  onCardClick(id: number): void {
    this.cardClicked.emit(id);
  }

  coloreVoti(rating: number): string {
    if (rating < 3) {
      return 'red-text';
    } else if (rating >= 3 && rating <= 7) {
      return 'orange-text';
    } else {
      return 'green-text';
    }
  }
}
