import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {

  mapa: mapboxgl.Map;

  ngOnInit(){

    mapboxgl.accessToken = environment.mapboxKey;

    this.mapa = new mapboxgl.Map({
    container: 'mapa',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-100.315134, 25.725190], // LNG, LAT
    zoom: 17.5 // starting zoom

    });
    this.crearMarcador(-100.315134, 25.725190);
    
  }

  crearMarcador(lng: Number, lat: Number){
    const marker = new mapboxgl.Marker()
    .setLngLat([lng, lat])
    .addTo(this.mapa);
  }

  constructor() { }

}
