import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Estoria } from './estoria';
import { EstoriaService } from './estoria.service';

@Component({
  selector: 'sum-estoria',
  templateUrl: './estoria.component.html',
  styleUrls: ['./estoria.component.scss']
})
export class EstoriaComponent implements OnInit {

  estoria = new Estoria();
  nomePattern = "^[A-Za-z'\u00C0-\u00FF ]{10,100}$";
  descricaoPattern = "^[A-Za-z'.,\u00C0-\u00FF ]{10,1000}$";
  prioridadePattern = "^[A-Za-z'\u00C0-\u00FF ]{3,20}$";
  statusPattern = "^[A-Za-z'\u00C0-\u00FF ]{5,20}$";
  formularioValido = false;

  constructor(private estoriaService: EstoriaService) { }

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
    this.estoriaService.salvar(this.estoria)
                            .then(res => {
                                  alert("Estoria de usuário " + 
                                        JSON.stringify(res?.nome) +
                                        " cadastrada com sucesso")})
                            .catch((erro) => {
                                  alert(JSON.stringify(erro.message));
                            }); 
    this.estoria = new Estoria();  
    form.resetForm();   
  }

}
