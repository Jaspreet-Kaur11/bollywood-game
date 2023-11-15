import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-display',
  templateUrl: './movie-display.component.html',
  styleUrls: ['./movie-display.component.scss']
})
export class MovieDisplayComponent {
  @Input() movie: string = '';
  @Input() guessedLetters: Set<string> = new Set();
}