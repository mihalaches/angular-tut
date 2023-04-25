import { Component } from '@angular/core';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent {
  length: number = 0;
  password: string = ''
  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;
  hidePassword: boolean = false;

  onChangeLength(value: any) {
    this.length = parseInt(value.target.value);
  }

  onButtonClick() {
    console.log(`
      Generating password with the next params:
        include_letters : ${this.includeLetters}
        include_numbers : ${this.includeNumbers}
        include_symbols : ${this.includeSymbols}
    `)
    const numbers: string = "123456789";
    const letter: string = "abcdefghijklmnopqrstuvwyz";
    const symbols: string = "!@#$%^&*()_+/.,';][";
    let validChars: string = "";
    if (this.includeLetters) {
      validChars += letter;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }
    this.password = this.choseChars(validChars, this.length);
  }

  choseChars(dataInput: string, max_len: number) {
    let chars: string = "";
    for (let i = 0; i < max_len; i++) {
      chars += dataInput.charAt(Math.floor(Math.random() * dataInput.length))
    }
    return chars;
  }

  onChangeUseLetter() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onChangeHidePassword() {
    this.hidePassword = !this.hidePassword;
  }

  inputType() {
    return this.hidePassword ? "password" : "text";
  }

  getPassword() {
    return this.password;
  }
}
