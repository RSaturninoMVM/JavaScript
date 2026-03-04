function llancarEncanteri(energia, element) {
    console.log(`${this.nom} utilitza ${energia} punts per llançar un atac de ${element}!`);
}

const mage = { nom: "Gandalf el Gris" };
const witch = { nom: "Morgana" };

// EXERCICI:
// A) Fes que el 'mage' llanci un hechizo de 50 d'energia i element "Llum" usant .call()

llancarEncanteri.call(mage, 50, "Llum");

// B) Fes que la 'witch' llanci un hechizo de 80 d'energia i element "Foc" usant .apply() 
//    (recorda passar els arguments en un array).

const dadesAtac = [witch, 80, "Foc"];
utilitzarAtac.apply(witch, dadesAtac);
