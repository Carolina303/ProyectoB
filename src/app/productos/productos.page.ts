import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  slides = [
    {
      s: 'Sembradio #1',
      img: 'assets/papa.jpeg'
    },
    {
      s: 'Sembradio #1',
      img: 'assets/maiz.jpeg'
    },
    {
      s: 'Sembradio #1',
      img: 'assets/frijol.jpeg'
    },
    {
      s: 'Sembradio #2',
      img: 'assets/melon.jpeg'
    },
    {
      s: 'Sembradio #2',
      img: 'assets/sandia.jpeg'
    },
    {
      s: 'Sembradio #2',
      img: 'assets/naranjas.jpeg'
    },

  ]
  constructor() { }

  ngOnInit() {
  }

}
