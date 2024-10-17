//formare masiv pacienti
import { people } from "./array.js";
let index = 1;
// cimpul adresa default este blocat
let adress = document.querySelector(".input__adress").setAttribute("disabled", "");
// containere de baza
const dataContainer = document.querySelector(".data");
// extragere cimpuri din forma
// containere tip trimitere
const spitalizareWrapper = document.querySelector(".spitalizare__wrapper");
const investigatiiWrapper = document.querySelector(".investigatii__wrapper");
const analizeWrapper = document.querySelector(".analize__wrapper");
// date generale
const pacientInpDataAdresare = document.querySelector(".input__data-adresare");
const pacientInpName = document.querySelector(".input__name");
const pacientInpDataNastere = document.querySelector(".input__data-nastere");
const pacientInpCity = document.querySelector(".input__city");
const pacientInpAdress = document.querySelector(".input__adress");
const pacientInpIdnp = document.querySelector(".input__idnp");
// trimitere
const pacientInpTrimitere = document.querySelector(".select__type-investigation");
const pacientInpTrimitereInstitutie = document.querySelector(".select__republican-hospital");
const pacientInpTrimitereSpecialitate = document.querySelector(".select__specialitate");
const pacientInpTrimitereSectie = document.querySelector(".select__sectie");
const pacientInpTrimitereData = document.querySelector(".input__data-spitalizare");
// investigatii
const pacientInpTipInvestigatie = document.querySelector(".tip_investigatie");
const pacientInpInvestigatieRmn = document.querySelector(".input__rmn");
const pacientInpinvestigatieTc = document.querySelector(".input__tc");
const pacientInpInstitutieInvestigatie = document.querySelector(".select__investigation-hospital");
const pacientInpDataInvestigatie = document.querySelector(".input__data-investigatie");
// analize
const pacientInpTipAnalize = document.querySelector(".tip_analize");
const pacientInpInstitutieAnalize = document.querySelector(".select__analize-hospital");
const pacientInpDataAnalize = document.querySelector(".input__data-analize");
const imunologieWrapper = document.querySelector(".imunologie__wrapper");
const hormoniWrapper = document.querySelector(".hormoni__wrapper");
const oncoWrapper = document.querySelector(".onco__wrapper");
// analize imunologice
const imunTotal = document.querySelectorAll(".imun");
// analize hormoni
const hormoniTotal = document.querySelectorAll(".hormon");
// analize oncologie
const oncoTotal = document.querySelectorAll(".oncologie");
// containere tip investigatie
const investigatieRMN = document.querySelector(".rmn");
const investigatieTomografie = document.querySelector(".tomografie");
// se verifica cimpul localitate, daca este oras se deblocheaza cimpul adresa pentru strada si nr. altfel este blocat.
pacientInpCity.addEventListener("change", () => {
    if (pacientInpCity.value === "Cimislia" || pacientInpCity.value === "Basarabeasca") {
        document.querySelector(".input__adress").removeAttribute("disabled");
    }
    else {
        document.querySelector(".input__adress").setAttribute("disabled", "");
        pacientInpAdress.value = "";
    }
});
//se verifica tipul trimiterii
pacientInpTrimitere.addEventListener("change", () => {
    if (pacientInpTrimitere.value === "Consultatie" || pacientInpTrimitere.value === "Spitalizare") {
        spitalizareWrapper.style.display = "block";
    }
    else {
        spitalizareWrapper.style.display = "none";
    }
    if (pacientInpTrimitere.value === "Investigatie") {
        investigatiiWrapper.style.display = "block";
    }
    else {
        investigatiiWrapper.style.display = "none";
    }
    if (pacientInpTrimitere.value === "Analize") {
        analizeWrapper.style.display = "block";
    }
    else {
        analizeWrapper.style.display = "none";
    }
});
// se verifica tipul de investigatie selectat
pacientInpTipInvestigatie.addEventListener("change", () => {
    if (pacientInpTipInvestigatie.value === "RMN") {
        investigatieRMN.style.display = "flex";
        investigatieTomografie.setAttribute("disabled", "");
    }
    else {
        investigatieRMN.style.display = "none";
    }
    if (pacientInpTipInvestigatie.value === "Tomografie") {
        investigatieTomografie.style.display = "flex";
        investigatieRMN.setAttribute("disabled", "");
    }
    else {
        investigatieTomografie.style.display = "none";
    }
});
//se verifica tipul de analize selectat
pacientInpTipAnalize.addEventListener("change", () => {
    if (pacientInpTipAnalize.value === "Imunologie") {
        imunologieWrapper.style.display = "block";
    }
    else {
        imunologieWrapper.style.display = "none";
    }
    if (pacientInpTipAnalize.value === "Hormoni") {
        hormoniWrapper.style.display = "block";
    }
    else {
        hormoniWrapper.style.display = "none";
    }
    if (pacientInpTipAnalize.value === "Oncologie") {
        oncoWrapper.style.display = "block";
    }
    else {
        oncoWrapper.style.display = "none";
    }
});
//eveniment adaugare pacient nou in lista
const submitBtn = document.querySelector(".save__btn").addEventListener("click", (e) => {
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
    function getImunAnalize() {
        let rezult = [];
        imunTotal.forEach((element) => {
            if (element.checked) {
                rezult.push(element.value);
            }
            ;
        });
        return rezult;
    }
    // Analize hormoni
    function getHormonAnalize() {
        let rezult = [];
        hormoniTotal.forEach((element) => {
            if (element.checked) {
                rezult.push(element.value);
            }
            ;
        });
        return rezult;
    }
    // Analize oncologie
    function getOncoAnalize() {
        let rezult = [];
        oncoTotal.forEach((element) => {
            if (element.checked) {
                rezult.push(element.value);
            }
            ;
        });
        return rezult;
    }
    let newPacient = {
        id: index++,
        dataAdresare: pacientDataAdresare,
        name: pacientName,
        dataNastere: pacientDataNastere,
        city: pacientCity,
        adress: pacientAdress,
        idnp: pacientIdnp,
        trimitere: pacientTrimitere,
        trimitereInstitutie: pacientTrimitereInstitutie,
        trimitereSpecialitate: pacientTrimitereSpecialitate,
        trimitereSectie: pacientTrimitereSectie,
        trimitereData: pacientTrimitereData,
        tipInvestigatie: pacientTipInvestigatie,
        rmn: pacientInvestigatieRmn,
        tomografie: pacientInvestigatieTomografie,
        investigatieInstitutie: pacientInstitutieInvestigatie,
        dataInvestigatie: pacientDataInvestigatie,
        imunologie: getImunAnalize(),
        hormoni: getHormonAnalize(),
        oncologie: getOncoAnalize(),
        tipAnalize: pacientTipAnalize,
        institutieAnalize: pacientInstitutieAnalize,
        dataAnalize: pacientDataAnalize
    };
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
    });
    hormoniTotal.forEach((element) => {
        element.checked = false;
    });
    oncoTotal.forEach((element) => {
        element.checked = false;
    });
    pacientInpTipAnalize.value = "";
    pacientInpInstitutieAnalize.value = "";
    pacientInpDataAnalize.value = "";
    people.push(newPacient);
    renderList(people);
    console.log(people);
});
// crearea listei cu pacienti date introduse 
const pacientsList = document.querySelector("ul");
// se creaza element din lista cu pacienti
function getPacientElement({ id, dataAdresare, name, dataNastere, city, adress, idnp, trimitere, trimitereInstitutie, trimitereSpecialitate, trimitereSectie, trimitereData, tipInvestigatie, rmn, investigatieInstitutie, dataInvestigatie, tomografie, imunologie, hormoni, oncologie, tipAnalize, institutieAnalize, dataAnalize }) {
    const newPacientline = document.createElement("li");
    newPacientline.classList.add("pacients__item");
    const newPacientlineContainer = document.createElement("div");
    const newPacientLineDataGenerale = document.createElement("div");
    const newPacientId = document.createElement("p");
    const newPacientDataAdresare = document.createElement("p");
    const newPacientName = document.createElement("p");
    const newPacientDataNastere = document.createElement("p");
    const newPacientCity = document.createElement("p");
    const newPacientAdress = document.createElement("p");
    const newPacientIdnp = document.createElement("p");
    const trimitereContainer = document.createElement("div");
    const newPacientTrimitere = document.createElement("p");
    //consultatii/ spitaizare
    const newPacientTrimitereInstitutie = document.createElement("p");
    const newPacientTrimitereSpecialitate = document.createElement("p");
    const newPacientTrimitereSectie = document.createElement("p");
    const newPacientTrimitereData = document.createElement("p");
    //investigatii
    const newPacientTipInvestigatie = document.createElement("p");
    const newPacientInvestigatieRmn = document.createElement("p");
    const newPacientInvestigatieTomografie = document.createElement("p");
    const newPacientInstitutieInvestigatie = document.createElement("p");
    const newPacientDataInvestigatie = document.createElement("p");
    //analize
    const imunologieList = document.createElement("ul");
    const hormoniList = document.createElement("ul");
    const oncoList = document.createElement("ul");
    const newPacientTipAnalize = document.createElement("p");
    const newPacientInstitutieAnalize = document.createElement("p");
    const newPacientDataAnalize = document.createElement("p");
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
        const newAnalize = document.createElement("li");
        newAnalize.textContent = element;
        imunologieList.append(newAnalize);
    });
    // analize imunolgice
    hormoni.forEach((element) => {
        const newAnalize = document.createElement("li");
        newAnalize.textContent = element;
        hormoniList.append(newAnalize);
    });
    // analize imunolgice
    oncologie.forEach((element) => {
        const newAnalize = document.createElement("li");
        newAnalize.textContent = element;
        oncoList.append(newAnalize);
    });
    // se stabileste culoare de fundal in dependenta de trimitere selectata
    if (newPacientTrimitere.textContent === "Consultatie") {
        newPacientlineContainer.classList.add("consult");
    }
    if (newPacientTrimitere.textContent === "Spitalizare") {
        newPacientlineContainer.classList.add("spitalizare");
    }
    if (newPacientTrimitere.textContent === "Investigatie") {
        newPacientlineContainer.classList.add("investigatie");
    }
    newPacientLineDataGenerale.append(newPacientId, newPacientDataAdresare, newPacientName, newPacientDataNastere, newPacientCity, newPacientAdress, newPacientIdnp, newPacientTrimitere);
    trimitereContainer.append(newPacientTrimitereInstitutie, newPacientTrimitereSectie, newPacientTrimitereSpecialitate, newPacientTrimitereData, newPacientTipInvestigatie, newPacientInvestigatieRmn, newPacientInvestigatieTomografie, newPacientInstitutieInvestigatie, newPacientDataInvestigatie, tipAnalize, imunologieList, hormoniList, oncoList, institutieAnalize, dataAnalize);
    newPacientlineContainer.append(newPacientLineDataGenerale, trimitereContainer);
    newPacientline.append(newPacientlineContainer);
    return newPacientline;
}
function renderList(array) {
    pacientsList.innerHTML = "";
    array.forEach((element) => {
        pacientsList.append(getPacientElement(element));
    });
}
renderList(people);
//rapoarte --------------------------------------------------------------------
document.querySelector(".rmn__btn").addEventListener("click", () => {
    window.location.href = `cmc/html/raport.html`;
});
//# sourceMappingURL=main.js.map