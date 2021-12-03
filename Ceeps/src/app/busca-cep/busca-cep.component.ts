import { Component, OnInit } from '@angular/core';
import { BuscaCEPService } from '../busca-cep.service';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'busca-cep',
  templateUrl: './busca-cep.component.html',
  styleUrls: ['./busca-cep.component.css']
})
export class BuscaCepComponent implements OnInit {

  dados_cep: any
  localidades: string = ''
  ceps: string = '';
  bairros: string = ''
  logradouros: string = ''
  estados: string = ''
  dados_not_found: string = 'Nenhum resultado encontrado'


  constructor(private cepService: BuscaCEPService) { }
 
  ngOnInit(): void {
  }

  buscarCeps(cep: string){
   this.cepService.buscarCep(cep).subscribe((cidades)=>{
    this.dados_cep = cidades
    
    if(this.dados_cep.bairro == '' && this.dados_cep.logradouro == ''){
       this.dados_cep.bairro = this.dados_not_found
       this.dados_cep.logradouro = this.dados_not_found
    }

    this.localidades = this.dados_cep.localidade
    this.ceps = this.dados_cep.cep 
    this.bairros = this.dados_cep.bairro
    this.logradouros = this.dados_cep.logradouro
    this.estados = this.dados_cep.uf
   })
  }

  limpaForm(){
    this.localidades = ''
    this.ceps = ''
    this.bairros = ''
    this.logradouros = ''
    this.estados = ''
  }
}
