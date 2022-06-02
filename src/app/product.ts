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
        "type": "fixe",
        "ecran": 0,
        "clavier": 0,
        "system": {
            "ram": 32,
            "cpu": {
                "marque":"INTELLE",
                "nom": "X9 900",
                "score": 25000,
                "core": 2,
                "frequence-max": 5900,
                "tdp": 125
            },
            "hdd": {
                "capacite": 3840,
                "type": "nvme",
                "rpm": 0,
                "vitesse-transfert": 3000
            },
            "cg": {
                "marque": "NVADIA",
                "modele": "RTZ 3080",
                "score": 20000
            }
        },
        "batterie" : 0,
        "prix": 1000
}