import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-procesos',
  templateUrl: './procesos.page.html',
  styleUrls: ['./procesos.page.scss'],
})
export class ProcesosPage implements OnInit {

  items = [
    {ID: "Pre-Labrado", Text: "Labor profunda de subsolado: Cada 2 o 3 años en otoño–invierno, realizamos cortes perpendiculares en el suelo de una profundidad de 40 a 60 cm. para eliminar el llamado piso de arado , aumentar el espesor de la capa roturada, dando a las plantas más espacio para sus raíces y permitir que el agua de riego penetre más en el suelo.", Source: "./assets/1subsolado.png"},
    {ID: "2° Labrado", Text: "Se repite el proceso de labrado a la tierra, arándola, limpiándola y dejándola lista para así pasar a la siembra de nuestros productos a cultivar.", Source: "./assets/2segundolabrado.jpg"},
    {ID: "Siembra", Text: "Para sembrar en nuestros campos, usan el sistema de siembra a hoyo; para tener un mejor control a la hora de abonar, así como el control de plagas.", Source: "./assets/3siembra.jpg"},
    {ID: "Cultivo", Text: "Nosotros mismos hacemos la mantención del cultivo del producto, desde lo que es la fertilización orgánica, la fumigación, la poda, la limpieza del producto y el regadío de nuestras plantas.", Source: "./assets/4Cultivo.jpg"},
    {ID: "Cosecha", Text: "Usualmente usamos maquinaria media para la recoleccion de nuestras cosechas; pero en algunos casos como los frutos, preferimos hacerlo a mano para mayor eficacia.", Source: "./assets/5Cosecha.jpg"},
    {ID: "Limpieza", Text: "Esta parte del proceso sude¿cede directamente despues de la cosecha de los cultivos, donde separamos, limpiamos y preparamos para su posterior empaquetado para preservar mejor los productos.", Source: "./assets/tratamiento.jpg"},
    {ID: "Empaquetado", Text: "Al final de nuestros procesos, tenemos 2 destinos para nuestros productos: 1) Almacenaje, para transpotar despues a otros sitios; 2) Venta, las llevamos al mercado local para vender y darnos a conocer en un área de comercio concurrido.", Source: "./assets/7Empaquetado.jpg"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
