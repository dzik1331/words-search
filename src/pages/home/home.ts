import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private min = 2;
  private max = 10;
  public search = {letters: "", len: this.min}

  constructor(public navCtrl: NavController) {
  }

  public goToSearchPage() {
    this.search.letters = this.search.letters.toLowerCase();
    this.navCtrl.push("ResultPage", this.search)
  }

  public changeLettersNum(type) {
    switch (type) {
      case 'minus':
        if (this.search.len > this.min) {
          this.search.len -= 1;
        }
      break;
      case 'plus':
        if (this.search.len < this.max) {
          this.search.len += 1;
        }
      break;
    }
  }

}
