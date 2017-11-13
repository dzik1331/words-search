import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the ResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {

  url = "http://search-words.dzik1331.usermd.net/search"
  words: any = [];
  load: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    let loader = this.loadingCtrl.create({
      content: "Szukam słów. To może chwilę potrwać... :)"
    });
    this.load = false;
    loader.present();
    if (Object.keys(this.navParams.data).length > 0) {
      this.http.post(this.url, this.navParams.data).subscribe((result) => {
        this.words = result;
        loader.dismiss();
        this.load = true
      });
    } else {
      loader.dismiss();
      this.load = true
    }
  }



}
