import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-gift-voucher",
  templateUrl: "./gift-voucher.component.html",
  styleUrls: ["./gift-voucher.component.scss"]
})
export class GiftVoucherComponent implements OnInit {

  gift_card = [
    {
      card_img:'assets/hyattplaza-images/gifcard.png',
      des: 'Sed ea sea ipsum et diam. Et kasd lorem et sit sit tempor clita. Sed stet et no duo sadipscing, tempor no voluptua amet clita kasd sadipscing et. Voluptua eos dolore accusam stet eirmod eos, diam diam ipsum dolores elitr labore diam diam voluptua. Eos eirmod sadipscing ipsum invidunt labore sit, sit sadipscing kasd amet rebum consetetur et magna. Sed aliquyam.<p> Dolore diam amet sanctus ea. Eirmod justo et magna lorem, amet voluptua voluptua gubergren dolor eos lorem dolore. Sed ipsum amet at lorem et, eos dolor at amet erat lorem kasd est invidunt rebum, eos elitr labore sanctus magna sed accusam amet ea. Justo dolor et at eos dolor sit labore et, nonumy sit nonumy tempor sed sit erat sed. Sit ipsum amet sanctus dolor,</p> duo sea et takimata ea lorem magna ea ut. At elitr et dolor magna ea. Consetetur stet.'
    }
  ]

  shops = [
    {
      img:'assets/hyattplaza-images/shopping/cat1.png',
      store_name:'LOREM IPSUM'

    },
    {
      img:'assets/hyattplaza-images/shopping/cat1.png',
      store_name:'LOREM IPSUMC'

    },
    {
      img:'assets/hyattplaza-images/shopping/cat1.png',
      store_name:'LOREM IPSUMC'

    },
    {
      img:'assets/hyattplaza-images/shopping/cat1.png',
      store_name:'LOREM IPSUMC'

    },
    {
      img:'assets/hyattplaza-images/shopping/cat1.png',
      store_name:'LOREM IPSUMC'

    }
    ,
    {
      img:'assets/hyattplaza-images/shopping/cat1.png',
      store_name:'LOREM IPSUMC'

    }
    ,
    {
      img:'assets/hyattplaza-images/shopping/cat1.png',
      store_name:'LOREM IPSUMC'

    },
    {
      img:'assets/hyattplaza-images/shopping/cat1.png',
      store_name:'LOREM IPSUMC'

    },
    {
      img:'assets/hyattplaza-images/shopping/cat1.png',
      store_name:'LOREM IPSUMC'

    },
    {
      img:'assets/hyattplaza-images/shopping/cat1.png',
      store_name:'LOREM IPSUMC'

    },
    {
      img:'assets/hyattplaza-images/shopping/cat1.png',
      store_name:'LOREM IPSUMC'

    },
    {
      img:'assets/hyattplaza-images/shopping/cat1.png',
      store_name:'LOREM IPSUMC'

    }
  ]
   

  constructor() {}

  ngOnInit() {
   
  }
   
}
