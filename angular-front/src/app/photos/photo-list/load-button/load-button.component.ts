import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ap-load-button',
  templateUrl: './load-button.component.html',
  styleUrls: ['./load-button.component.css']
})
export class LoadButtonComponent implements OnInit {

  //controla se existe mais fotos para exibir na paginação para mostrar o botão
  //@input para receber as props passadas
  @Input() hasMore: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
