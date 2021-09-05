import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  private res : number = 0;

  somar(numero1: string, numero2: string): void 
  {
    let n1: number;
    let n2: number;
    n1 = parseFloat(numero1);
    n2 = parseFloat(numero2);
    this.res = this.calculadoraService.somar(n1, n2);
  }

  subtrair(numero1: string, numero2: string): void 
  {
    let n1: number;
    let n2: number;
    n1 = parseFloat(numero1);
    n2 = parseFloat(numero2);
    this.res = this.calculadoraService.subtrair(n1, n2);
  }

  multiplicar(numero1: string, numero2: string): void 
  {
    let n1: number;
    let n2: number;
    n1 = parseFloat(numero1);
    n2 = parseFloat(numero2);
    this.res = this.calculadoraService.multiplicar(n1, n2);
  }

  dividir(numero1: string, numero2: string): void 
  {
    let n1: number;
    let n2: number;
    n1 = parseFloat(numero1);
    n2 = parseFloat(numero2);
    this.res = this.calculadoraService.dividir(n1, n2);
  }

  get resultado(): string
  {
    return this.res.toString();
  }

  constructor(private calculadoraService: CalculadoraService) { }

  ngOnInit(): void {
  }

}
