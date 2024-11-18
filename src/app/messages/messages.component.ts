import { afterRender, Component, Input, OnInit, ViewChild } from '@angular/core';
import { ScrollDetail } from '@ionic/angular';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent  implements OnInit {
  @Input() messages:any
  scrollTop = 0
  scroll = true

  constructor() { 
    afterRender(() => {
      if (this.scroll) {
        document.getElementsByClassName("vege")[0].scrollIntoView({behavior : "smooth", block : "end", inline : "nearest"})
      }
    })
  }

  ngOnInit() {}

  handleScrollStart() {
    console.log("Nénike")
  }

  handleScroll(ev: CustomEvent<ScrollDetail>) {
    console.log('scroll',JSON.stringify(ev.detail))
    this.scrollTop = Number(ev.detail.scrollTop)
  }

  handleScrollEnd() {
    let ch = document.getElementsByClassName('ion-padding')[0].clientHeight
    let conh = document.getElementsByClassName('container')[0].clientHeight
    if (this.scrollTop + ch >= conh) this.scroll = true
    else this.scroll = false 
  }
}
