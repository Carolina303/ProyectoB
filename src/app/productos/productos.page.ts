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
      img: 'assets/papa.jpeg',
      titulo: '¡Contamos con 10 hectareas de sembradio a diferente tiempo para la cosecha!'
    },
    {
      s: 'Sembradio #1',
      img: 'assets/maiz.jpeg',
      titulo: '¡Contamos con 10 hectareas de sembradio a diferente tiempo para la cosecha!'
    },
    {
      s: 'Sembradio #1',
      img: 'assets/frijol.jpeg',
      titulo: '¡Contamos con 10 hectareas de sembradio a diferente tiempo para la cosecha!'
    },
    {
      s: 'Sembradio #2',
      img: 'assets/melon.jpeg',
      titulo: '¡Contamos con 10 hectareas de sembradio a diferente tiempo para la cosecha!'
    },
    {
      s: 'Sembradio #2',
      img: 'assets/sandia.jpeg',
      titulo: '¡Contamos con 10 hectareas de sembradio a diferente tiempo para la cosecha!'
    },
    {
      s: 'Sembradio #2',
      img: 'assets/naranjas.jpeg',
      titulo: '¡Contamos con 10 hectareas de sembradio a diferente tiempo para la cosecha!'
    },

  ]
  constructor() { }

  ngOnInit() {
  }

}
