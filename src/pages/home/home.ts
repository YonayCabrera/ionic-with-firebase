import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BlogPage } from '../blog/blog';
import { CreateBlogPage } from '../create-blog/create-blog'
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  blogs :any
  constructor(public navCtrl: NavController, private db: AngularFireDatabase) {
    this.db.list('users').valueChanges().subscribe(blogs => this.blogs = blogs)
  }

  goToPost(blog){
    this.navCtrl.push(BlogPage, {blog})
  }

  createBlog(){
    this.navCtrl.push(CreateBlogPage)
  }

}
