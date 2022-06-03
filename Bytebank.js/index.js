import {Cliente} from "./Cliente.js";
import { ContaCorrente } from "./Contacorrente.js";

const cliente1 = new Cliente("Ricardo", 11122233309);
 const cliente2 = new Cliente("Alice", 88822233309);
const ContaCorrenteDoRicardo = new ContaCorrente(1001,cliente1);


ContaCorrenteDoRicardo.depositar(500);
const conta2 = new ContaCorrente(102, cliente2);

let valor = 200;
ContaCorrenteDoRicardo.transferir(200, conta2);

console.log(ContaCorrente.numeroDeContas)
