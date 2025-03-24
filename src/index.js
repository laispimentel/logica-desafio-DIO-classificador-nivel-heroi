let herois = [
    {nome: "Sam", xp: 500},
    {nome: "Frodo", xp:1500},
    {nome: "Boromir", xp: 3000},
    {nome: "Grimli", xp: 6500},
    {nome: "Aragorn", xp:7500},
    {nome: "Legolas", xp:8500},
    {nome: "Saruman", xp:9500},
    {nome: "Gendalf", xp:11000}

];

for (let i = 0; i < herois.length; i++){
    let nomeDoHeroi = herois[i].nome;
    let xpDoHeroi = herois[i].xp;
    let nivelDoHeroi = "";

    if (xpDoHeroi < 1000){
        nivelDoHeroi = "Ferro"
    }
    
    else if(xpDoHeroi>=1001 && xpDoHeroi <=2000){
        nivelDoHeroi = "Bronze"
    }
    else if(xpDoHeroi>=2001 && xpDoHeroi <=5000){
        nivelDoHeroi = "Prata"
    }
    
    else if(xpDoHeroi>=6001 && xpDoHeroi <=7000){
        nivelDoHeroi = "Ouro"
    }
    else if(xpDoHeroi>=7001 && xpDoHeroi <=8000){
        nivelDoHeroi = "Platina"
    }
    else if(xpDoHeroi>=8001 && xpDoHeroi <=9000){
        nivelDoHeroi = "Ascendente"
    }
    else if(xpDoHeroi>=9001 && xpDoHeroi <=10000){
        nivelDoHeroi = "Imortal"
    }
    else {
        nivelDoHeroi = "Radiante"
    }
    
    console.log(`O héroi de nome ${nomeDoHeroi} está no nível ${nivelDoHeroi}`)

}

