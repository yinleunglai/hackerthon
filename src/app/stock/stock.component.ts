import { Component, OnInit } from '@angular/core';
import { getRandomString } from 'selenium-webdriver/safari';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'stock-item',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent implements OnInit {
  banlance=100000;
  
  status=this.getStatus();

  list=[
   {
     'id':1,
     'price':this.getRandonValue(),
     'amount':0,
   },
   {
    'id':2,
    'price':this.getRandonValue(),
    'amount':0,
  },
  {
    'id':3,
    'price':this.getRandonValue(),
    'amount':0,
  },
  {
    'id':4,
    'price':70,
    'amount':50,
  }
  ];

  constructor(public alertController: AlertController) { }

  ngOnInit() {

    this.list.forEach(element => {

      setInterval(()=>{
        element.price=this.getNewValue(element.price)
      },1000);
        
    });
  }

  getRandonValue(){
    return Math.floor(Math.random() * 10 + 1)*10;
  }

  getNewValue(val){

    let random_sign = -1 + Math.round(Math.random()) * 2;
    let newVal=val+Math.floor(Math.random() * 10 )*random_sign;
    if (newVal>100){
      newVal=100

    } 
    if (newVal<0){
      newVal=0

    } 
    return newVal;
  }
  getHeight(price){
    return price+"%";
  }

  buy(item,index){

    var target=this.list[index];

    if(this.banlance-target.price*10){
      this.banlance=this.banlance-target.price*10;
      this.list[index].amount=this.list[index].amount+10;
  
    }

    
    
  }
  sell(item,index){



    var target=this.list[index];

    if(target.amount>0){
      this.banlance=this.banlance+target.price*10;
      target.amount=target.amount-10;

    }else{

      this.presentAlert();    
    }

    

    
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Wait',
      subHeader: "no enough amount to sell",
    
      buttons: ['OK']
    });

    await alert.present();
  }
getStatus(){

   let marketStaus=["assets/images/stock/sunny.png","assets/images/stock/badWeather.png"]
    var y =Math.round(Math.random());
    
    return marketStaus[y];
  
}


}
