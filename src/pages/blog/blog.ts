import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BlogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-blog',
  templateUrl: 'blog.html',
})
export class BlogPage {

  blog: any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.blog = this.navParams.get('blog')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlogPage');
  }

}
