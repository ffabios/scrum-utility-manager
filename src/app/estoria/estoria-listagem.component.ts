import { Component, OnInit } from '@angular/core';
import { Estoria } from './estoria';
import { EstoriaService } from './estoria.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sum-estoria-listagem',
  templateUrl: './estoria-listagem.component.html',
  styleUrls: ['./estoria-listagem.component.scss']
})
export class EstoriaListagemComponent implements OnInit {

  estorias : Estoria[];

  constructor(private estoriaService: EstoriaService, private router: Router) { }

  ngOnInit(): void {
    this.estoriaService.getEstorias().subscribe({ next: estorias => this.estorias = estorias,
                                                  error: erro => alert(JSON.stringify(erro.message))
                                                  });  
  }

  excluir(id: number) {
   // this.estorias.splice(id, 1);
    
    //this.estoriaService.excluirEstoria(id).subscribe({next: ()=> {this.router.navigateByUrl("/estoria-listagem");}, 
    this.estoriaService.excluirEstoria(id).subscribe({next: ()=> {this.estorias = this.estorias.filter(estoria => estoria.id != id);}, 
                                                      error: erro => alert(JSON.stringify(erro.message))});
  }

}
