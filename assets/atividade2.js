function m() {
    let g=0, d=0;

    for(let i=1;i<=12;i++){
        g+=+prompt("Ganho "+i);
        d+=+prompt("Gasto "+i);
    }

    let s=g-d;
    let sit = s>0?"Lucro":s<0?"Prejuízo":"Empate";

    document.getElementById("r").innerHTML =
    `Ganho: ${g}<br>Gasto: ${d}<br>Saldo: ${s}<br>${sit}`;
}