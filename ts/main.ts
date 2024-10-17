

//formare masiv pacienti
import { people } from "./array.js";
let index : number = 1;

// cimpul adresa default este blocat
let adress = (<HTMLInputElement>document.querySelector(".input__adress")).setAttribute("disabled", "");

// containere de baza

const dataContainer = <HTMLDivElement>document.querySelector(".data");

// extragere cimpuri din forma

// containere tip trimitere
const spitalizareWrapper = <HTMLDivElement>document.querySelector(".spitalizare__wrapper");
const investigatiiWrapper = <HTMLDivElement>document.querySelector(".investigatii__wrapper");
const analizeWrapper = <HTMLDivElement>document.querySelector(".analize__wrapper");

// date generale
const pacientInpDataAdresare = <HTMLInputElement>document.querySelector(".input__data-adresare");
const pacientInpName = <HTMLInputElement>document.querySelector(".input__name");
const pacientInpDataNastere = <HTMLInputElement>document.querySelector(".input__data-nastere");
const pacientInpCity = <HTMLInputElement>document.querySelector(".input__city");
const pacientInpAdress = <HTMLInputElement>document.querySelector(".input__adress");
const pacientInpIdnp = <HTMLInputElement>document.querySelector(".input__idnp");
// trimitere
const pacientInpTrimitere = <HTMLSelectElement>document.querySelector(".select__type-investigation")
const pacientInpTrimitereInstitutie = <HTMLSelectElement>document.querySelector(".select__republican-hospital");
const pacientInpTrimitereSpecialitate = <HTMLInputElement>document.querySelector(".select__specialitate");
const pacientInpTrimitereSectie = <HTMLInputElement>document.querySelector(".select__sectie");
const pacientInpTrimitereData = <HTMLInputElement>document.querySelector(".input__data-spitalizare");
// investigatii
const pacientInpTipInvestigatie = <HTMLSelectElement>document.querySelector(".tip_investigatie");
const pacientInpInvestigatieRmn = <HTMLSelectElement>document.querySelector(".input__rmn");
const pacientInpinvestigatieTc = <HTMLSelectElement>document.querySelector(".input__tc");
const pacientInpInstitutieInvestigatie = <HTMLSelectElement>document.querySelector(".select__investigation-hospital");
const pacientInpDataInvestigatie = <HTMLInputElement>document.querySelector(".input__data-investigatie");

// analize
const pacientInpTipAnalize = <HTMLSelectElement>document.querySelector(".tip_analize");
const pacientInpInstitutieAnalize = <HTMLSelectElement>document.querySelector(".select__analize-hospital");
const pacientInpDataAnalize = <HTMLInputElement>document.querySelector(".input__data-analize");

const imunologieWrapper = <HTMLDivElement>document.querySelector(".imunologie__wrapper");
const hormoniWrapper = <HTMLDivElement>document.querySelector(".hormoni__wrapper");
const oncoWrapper = <HTMLDivElement>document.querySelector(".onco__wrapper");

// analize imunologice
const imunTotal = document.querySelectorAll<HTMLInputElement>(".imun");

// analize hormoni
const hormoniTotal = document.querySelectorAll<HTMLInputElement>(".hormon");

// analize oncologie
const oncoTotal = document.querySelectorAll<HTMLInputElement>(".oncologie");


// containere tip investigatie
const investigatieRMN = <HTMLSelectElement>document.querySelector(".rmn");
const investigatieTomografie = <HTMLSelectElement>document.querySelector(".tomografie");

// se verifica cimpul localitate, daca este oras se deblocheaza cimpul adresa pentru strada si nr. altfel este blocat.

pacientInpCity.addEventListener("change", () =>{
    if(pacientInpCity.value === "Cimislia" || pacientInpCity.value === "Basarabeasca") {
        (<HTMLInputElement>document.querySelector(".input__adress")).removeAttribute("disabled");
    }
    else {
        (<HTMLInputElement>document.querySelector(".input__adress")).setAttribute("disabled", "");
        pacientInpAdress.value = "";
    }
})

//se verifica tipul trimiterii

pacientInpTrimitere.addEventListener("change" , () => {
    if(pacientInpTrimitere.value === "Consultatie" || pacientInpTrimitere.value === "Spitalizare") {
        spitalizareWrapper.style.display = "block";
    }else {
        spitalizareWrapper.style.display = "none";
    }
    if(pacientInpTrimitere.value === "Investigatie") {
        investigatiiWrapper.style.display = "block";
    }else {
        investigatiiWrapper.style.display = "none";
    }
    if(pacientInpTrimitere.value === "Analize") {
        analizeWrapper.style.display = "block";
    }else {
        analizeWrapper.style.display = "none";
    }
})

// se verifica tipul de investigatie selectat

pacientInpTipInvestigatie.addEventListener("change", ()=> {
    if(pacientInpTipInvestigatie.value === "RMN") {
        investigatieRMN.style.display = "flex";
        investigatieTomografie.setAttribute("disabled", "");
    }else {
        investigatieRMN.style.display = "none"; 
    }
    if(pacientInpTipInvestigatie.value === "Tomografie") {
        investigatieTomografie.style.display = "flex";
        investigatieRMN.setAttribute("disabled", "");
    }else {
        investigatieTomografie.style.display = "none"; 
    }
})

//se verifica tipul de analize selectat

pacientInpTipAnalize.addEventListener("change", () => {
    if(pacientInpTipAnalize.value === "Imunologie") {
        imunologieWrapper.style.display = "block";
    }else {
        imunologieWrapper.style.display = "none";
    }
    if(pacientInpTipAnalize.value === "Hormoni") {
        hormoniWrapper.style.display = "block";
    }else {
        hormoniWrapper.style.display = "none";
    }
    if(pacientInpTipAnalize.value === "Oncologie") {
        oncoWrapper.style.display = "block";
    }else {
        oncoWrapper.style.display = "none";
    }
})

//eveniment adaugare pacient nou in lista
const submitBtn = (<HTMLButtonElement>document.querySelector(".save__btn")).addEventListener("click", (e) => {
e.preventDefault();
const pacientDataAdresare = pacientInpDataAdresare.value;
const pacientName = pacientInpName.value;
const pacientDataNastere = pacientInpDataNastere.value;
const pacientCity = pacientInpCity.value;
const pacientAdress = pacientInpAdress.value;
const pacientIdnp = Number(pacientInpIdnp.value);
const pacientTrimitere = pacientInpTrimitere.value;
const pacientTrimitereInstitutie = pacientInpTrimitereInstitutie.value;
const pacientTrimitereSpecialitate = pacientInpTrimitereSpecialitate.value;
const pacientTrimitereSectie = pacientInpTrimitereSectie.value;
const pacientTrimitereData = pacientInpTrimitereData.value;
const pacientTipInvestigatie = pacientInpTipInvestigatie.value;
const pacientInvestigatieRmn = pacientInpInvestigatieRmn.value;
const pacientInvestigatieTomografie = pacientInpinvestigatieTc.value;
const pacientInstitutieInvestigatie = pacientInpInstitutieInvestigatie.value;
const pacientDataInvestigatie = pacientInpDataInvestigatie.value;
const pacientTipAnalize = pacientInpTipAnalize.value;
const pacientInstitutieAnalize = pacientInpInstitutieAnalize.value;
const pacientDataAnalize = pacientInpDataAnalize.value;

// Analize imunologie

function getImunAnalize () : string[]  {
    let rezult = [];
    imunTotal.forEach((element) => {
        if(element.checked) {
            rezult.push(element.value)
        };
    })
    return rezult;
}
// Analize hormoni

function getHormonAnalize () : string[]  {
    let rezult = [];
    hormoniTotal.forEach((element) => {
        if(element.checked) {
            rezult.push(element.value)
        };
    })
    return rezult;
}
// Analize oncologie

function getOncoAnalize () : string[]  {
    let rezult = [];
    oncoTotal.forEach((element) => {
        if(element.checked) {
            rezult.push(element.value)
        };
    })
    return rezult;
}




let newPacient : {id: number, dataAdresare : string, name: string, dataNastere: string,  city: string, adress: string, idnp: number, trimitere: string, trimitereInstitutie: string, trimitereSpecialitate: string, trimitereSectie: string, trimitereData: string, tipInvestigatie : string, rmn: string, tomografie: string, investigatieInstitutie: string, dataInvestigatie: string, imunologie: string [], hormoni: string[], oncologie: string [], tipAnalize: string, institutieAnalize: string, dataAnalize: string } = {
    id: index++,
    dataAdresare : pacientDataAdresare,
    name: pacientName,
    dataNastere: pacientDataNastere,
    city: pacientCity,
    adress: pacientAdress,
    idnp: pacientIdnp,
    trimitere: pacientTrimitere,
    trimitereInstitutie: pacientTrimitereInstitutie,
    trimitereSpecialitate : pacientTrimitereSpecialitate,
    trimitereSectie : pacientTrimitereSectie,
    trimitereData : pacientTrimitereData,
    tipInvestigatie: pacientTipInvestigatie,
    rmn: pacientInvestigatieRmn,
    tomografie: pacientInvestigatieTomografie,
    investigatieInstitutie: pacientInstitutieInvestigatie,
    dataInvestigatie: pacientDataInvestigatie,
    imunologie : getImunAnalize(),
    hormoni: getHormonAnalize(),
    oncologie: getOncoAnalize(),
    tipAnalize: pacientTipAnalize,
    institutieAnalize: pacientInstitutieAnalize,
    dataAnalize: pacientDataAnalize
  }

  pacientInpDataAdresare.value = "";
  pacientInpName.value = "";
  pacientInpDataNastere.value = "";
  pacientInpDataNastere.value = "";
  pacientInpCity.value = "";
  pacientInpAdress.value = "";
  pacientInpIdnp.value = "";
  pacientInpTrimitere.value = "";
  pacientInpTrimitereInstitutie.value = "";
  pacientInpTrimitereSpecialitate.value = "";
  pacientInpTrimitereSectie.value = "";
  pacientInpTrimitereData.value = "";
  pacientInpTipInvestigatie.value = "";
  pacientInpInvestigatieRmn.value = "";
  pacientInpinvestigatieTc.value = "";
  pacientInpInstitutieInvestigatie.value = "";
  pacientInpDataInvestigatie.value = "";
  imunTotal.forEach((element) => {
    element.checked = false;
 })
  hormoniTotal.forEach((element) => {
    element.checked = false;
 })
  oncoTotal.forEach((element) => {
    element.checked = false;
 })
 pacientInpTipAnalize.value = "";
 pacientInpInstitutieAnalize.value = "";
 pacientInpDataAnalize.value = "";

  people.push(newPacient);
  
 renderList(people);
 console.log(people);

})


// crearea listei cu pacienti date introduse 
const pacientsList = <HTMLUListElement>document.querySelector("ul");

// se creaza element din lista cu pacienti
function getPacientElement (
    {id, dataAdresare, name, dataNastere, city, adress, idnp, trimitere, trimitereInstitutie, trimitereSpecialitate, trimitereSectie, trimitereData, tipInvestigatie, rmn, investigatieInstitutie, dataInvestigatie, tomografie, imunologie, hormoni, oncologie, tipAnalize, institutieAnalize, dataAnalize}: 
    
    {id: number, dataAdresare: string,  name: string; dataNastere: string, city: string, adress: string, idnp: number, trimitere: string, trimitereInstitutie: string, trimitereSpecialitate: string, trimitereSectie: string, trimitereData: string, tipInvestigatie: string, rmn: string, tomografie: string, investigatieInstitutie: string, dataInvestigatie: string, imunologie: string [], hormoni:  string[], oncologie: string[], tipAnalize: string, institutieAnalize: string, dataAnalize: string}) 
    {
    const newPacientline = <HTMLLIElement>document.createElement("li");
    newPacientline.classList.add("pacients__item")
    const newPacientlineContainer = <HTMLDivElement>document.createElement("div");
    const newPacientLineDataGenerale = <HTMLDivElement>document.createElement("div");
    const newPacientId = <HTMLParagraphElement>document.createElement("p");
    const newPacientDataAdresare = <HTMLParagraphElement>document.createElement("p");
    const newPacientName = <HTMLParagraphElement>document.createElement("p");
    const newPacientDataNastere = <HTMLParagraphElement>document.createElement("p");
    const newPacientCity = <HTMLParagraphElement>document.createElement("p");
    const newPacientAdress = <HTMLParagraphElement>document.createElement("p");
    const newPacientIdnp = <HTMLParagraphElement>document.createElement("p");
    const trimitereContainer = <HTMLDivElement>document.createElement("div");
    const newPacientTrimitere = <HTMLParagraphElement>document.createElement("p");
    //consultatii/ spitaizare
    const newPacientTrimitereInstitutie = <HTMLInputElement>document.createElement("p");
    const newPacientTrimitereSpecialitate = <HTMLInputElement>document.createElement("p");
    const newPacientTrimitereSectie = <HTMLInputElement>document.createElement("p");
    const newPacientTrimitereData = <HTMLInputElement>document.createElement("p");
    //investigatii
    const newPacientTipInvestigatie = <HTMLInputElement>document.createElement("p");
    const newPacientInvestigatieRmn = <HTMLInputElement>document.createElement("p");
    const newPacientInvestigatieTomografie = <HTMLInputElement>document.createElement("p");
    const newPacientInstitutieInvestigatie = <HTMLInputElement>document.createElement("p");
    const newPacientDataInvestigatie = <HTMLInputElement>document.createElement("p");
    //analize
    const imunologieList = <HTMLUListElement>document.createElement("ul");
    const hormoniList = <HTMLUListElement>document.createElement("ul");
    const oncoList = <HTMLUListElement>document.createElement("ul");
    const newPacientTipAnalize = <HTMLInputElement>document.createElement("p");
    const newPacientInstitutieAnalize = <HTMLInputElement>document.createElement("p");
    const newPacientDataAnalize = <HTMLInputElement>document.createElement("p");

    newPacientlineContainer.classList.add("pacient__data");
    newPacientLineDataGenerale.classList.add("flex__container");
    trimitereContainer.classList.add("flex__container");

 

    newPacientId.textContent = id.toString();
    newPacientDataAdresare.textContent = dataAdresare;
    newPacientName.textContent = name;
    newPacientDataNastere.textContent = dataNastere;
    newPacientCity.textContent = city;
    newPacientAdress.textContent = adress;
    newPacientIdnp.textContent = idnp.toString();
    newPacientTrimitere.textContent = trimitere;
    newPacientTrimitereInstitutie.textContent = trimitereInstitutie;
    newPacientTrimitereSpecialitate.textContent = trimitereSpecialitate;
    newPacientTrimitereSectie.textContent = trimitereSectie;
    newPacientTrimitereData.textContent = trimitereData;
    newPacientTipInvestigatie.textContent = tipInvestigatie;
    newPacientInvestigatieRmn.textContent = rmn;
    newPacientInvestigatieTomografie.textContent = tomografie;
    newPacientInstitutieInvestigatie.textContent = investigatieInstitutie;
    newPacientDataInvestigatie.textContent = dataInvestigatie;
    newPacientTipAnalize.textContent = tipAnalize;
    newPacientInstitutieAnalize.textContent = institutieAnalize;
    newPacientDataAnalize.textContent = dataAnalize;

    // analize imunolgice

    imunologie.forEach((element) => {
        const newAnalize = <HTMLLIElement>document.createElement("li");
        newAnalize.textContent = element;
        imunologieList.append(newAnalize);
    })
    // analize imunolgice

    hormoni.forEach((element) => {
        const newAnalize = <HTMLLIElement>document.createElement("li");
        newAnalize.textContent = element;
        hormoniList.append(newAnalize);
    })
    // analize imunolgice

    oncologie.forEach((element) => {
        const newAnalize = <HTMLLIElement>document.createElement("li");
        newAnalize.textContent = element;
        oncoList.append(newAnalize);
    })

    // se stabileste culoare de fundal in dependenta de trimitere selectata

    if(newPacientTrimitere.textContent === "Consultatie") {
        newPacientlineContainer.classList.add("consult");
    }
    if(newPacientTrimitere.textContent === "Spitalizare") {
        newPacientlineContainer.classList.add("spitalizare");
    }
       if(newPacientTrimitere.textContent === "Investigatie") {
        newPacientlineContainer.classList.add("investigatie");
    }

            newPacientLineDataGenerale.append(newPacientId, newPacientDataAdresare, newPacientName, newPacientDataNastere, newPacientCity, newPacientAdress, newPacientIdnp, newPacientTrimitere);
            
            trimitereContainer.append(newPacientTrimitereInstitutie, newPacientTrimitereSectie, newPacientTrimitereSpecialitate, newPacientTrimitereData, newPacientTipInvestigatie, newPacientInvestigatieRmn, newPacientInvestigatieTomografie, newPacientInstitutieInvestigatie, newPacientDataInvestigatie, tipAnalize, imunologieList, hormoniList, oncoList, institutieAnalize, dataAnalize);

            newPacientlineContainer.append(newPacientLineDataGenerale, trimitereContainer);

            newPacientline.append(newPacientlineContainer);

            return newPacientline;
  
}


function renderList (array : {id: number, dataAdresare: string,  name: string; dataNastere: string, city: string, adress: string, idnp: number, trimitere: string, trimitereInstitutie: string, trimitereSpecialitate: string, trimitereSectie: string, trimitereData: string, tipInvestigatie: string, rmn: string, tomografie: string, investigatieInstitutie: string, dataInvestigatie: string, imunologie:string [], hormoni: string [], oncologie: string [], tipAnalize: string, institutieAnalize: string, dataAnalize: string}[] ) {
    pacientsList.innerHTML = "";
    array.forEach((element) => {
        pacientsList.append(getPacientElement(element))
    })
}

renderList(people);
//rapoarte --------------------------------------------------------------------


(<HTMLButtonElement>document.querySelector(".rmn__btn")).addEventListener("click", () => {
    window.location.assign("https://straciweb.github.io/cmc/html/raport.html")
});




