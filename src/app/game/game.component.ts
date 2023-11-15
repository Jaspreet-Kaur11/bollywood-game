import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  movies: string[] = ['DILWALE', 'SHOLAY', 'PK']; // Add more movies
  currentMovie: string = '';
  guessedLetters: Set<string> = new Set();
  incorrectGuesses: number = 0;
  maxIncorrectGuesses: number = 6; // You can adjust this number

  ngOnInit() {
    this.startNewGame();
  }

  startNewGame() {
    this.incorrectGuesses = 0;
    this.guessedLetters.clear();
    this.currentMovie = this.getRandomMovie();
  }

  getRandomMovie(): string {
    const randomIndex = Math.floor(Math.random() * this.movies.length);
    return this.movies[randomIndex];
  }

  makeGuess(letter: string) {
    if (!this.guessedLetters.has(letter)) {
      this.guessedLetters.add(letter);

      if (!this.currentMovie.includes(letter)) {
        this.incorrectGuesses++;
      }
    }

    // Check for win/lose conditions
    if (this.incorrectGuesses === this.maxIncorrectGuesses) {
      // Handle game over (lost) logic
      console.log('Game Over! You lost.');
      this.startNewGame();
    } else if (this.isWordGuessed()) {
      // Handle game over (won) logic
      console.log('Congratulations! You won.');
      this.startNewGame();
    }
  }

  isWordGuessed(): boolean {
    return this.currentMovie.split('').every(letter => this.guessedLetters.has(letter));
  }
}
