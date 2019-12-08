import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-work',
  templateUrl: './work.page.html',
  styleUrls: ['./work.page.scss'],
})
export class WorkPage implements OnInit {

  slides = [
    {url: "/assets/images/homework/homejob-type-1.png"},
    {url: "/assets/images/homework/homejob-type-2.png"},
    {url: "/assets/images/homework/homejob-type-3.png"},
    {url: "/assets/images/homework/homejob-type-4.png"}
  ]

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor(public modalController: ModalController) { }

  ngOnInit() {

    console.log(this.slides[0].url)
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage
    });
    return await modal.present();
  }


  

  ionSlideClick() {
    console.log('do something Tap')
    this.presentModal();
  }

}
