interface Cpu{
    marque: string;
    nom: string;
    score: number;
    core: number;
    frequence_max:number;
    tdp:number;
}
interface Disck{
    capacite:number;
    type:string;
    rpm:string;
    vitesse_transfert:number;
}
interface Graphique {
    marque: string;
    modele: string;
    score: number;
}
interface System{
    ram:number;
    cpu:Cpu;
    hdd:Disck;
    cg:Graphique;
}
export class product{
    marque: string;
    nom:string;
    type:string;
    ecran:any;
    clavier:any;
    system:System;
    batterie:number;
    prix:number;
    constructor(marque:string,nom:string,type:string,ecran:string,clavier:string,system:System,batterie:number,prix:number){
        this.marque=marque;
        this.nom=nom;
        this.type=type;
        this.ecran=ecran;
        this.clavier=clavier;
        this.system=system;
        this.batterie=batterie;
        this.prix=prix;
    }
}