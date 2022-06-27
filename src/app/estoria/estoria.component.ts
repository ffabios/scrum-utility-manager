import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Estoria } from './estoria';

@Component({
  selector: 'sum-estoria',
  templateUrl: './estoria.component.html',
  styleUrls: ['./estoria.component.scss']
})
export class EstoriaComponent implements OnInit {

  estoria = new Estoria();
  nomePattern = "^[A-Za-z'\u00C0-\u00FF ]{10,100}$";
  descricaoPattern = "^[A-Za-z'\u00C0-\u00FF ]{10,1000}$";
  prioridadePattern = "^[A-Za-z'\u00C0-\u00FF ]{5,20}$";
  statusPattern = "^[A-Za-z'\u00C0-\u00FF ]{5,20}$";
  formularioValido = false;

  constructor() { }

  ngOnInit(): void {
  }

  enviarFormulario(form: NgForm) {
    this.formularioValido = false;
    if (form.invalid) {
       return;
    }
    this.formularioValido = true;
    this.estoria = form.value;
    localStorage.setItem(this.estoria.nome, JSON.stringify(this.estoria));
    this.estoria = new Estoria();
    form.resetForm();    
  }

}
