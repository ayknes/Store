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
export class product{
    marque: string;
    nom:string;
    type:string;
    ecran:number;
    clavier:string;
    system: {
            ram:number;
            cpu: {
                marque:string;
                nom:string;
                score:number;
                core:number;
                frequence_max:number;
                tdp:number
            },
            hdd: {
                capacite:number;
                type:string;
                rpm:number;
                vitesse_transfert:number;
            },
            cg: {
                marque: string;
                modele: string;
                score: number;
            }
        };
        batterie: number;
        prix: number
}