import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss']
})
export class UserInputComponent {
  @Output() guess = new EventEmitter<string>();

  handleInput(letter: string | null) {
    if (letter) {
      this.guess.emit(letter);
    }
  }
}
