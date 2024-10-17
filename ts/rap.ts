import { people } from "./array.js";

const rapoarteContainer = <HTMLDivElement>document.querySelector(".rapoarte");
const cdrList = <HTMLUListElement>document.querySelector(".cdr__list");
const cdgList = <HTMLUListElement>document.querySelector(".cdg__list");
const cdrTotal = <HTMLUListElement>document.querySelector(".cdr__total");
const cdgTotal = <HTMLUListElement>document.querySelector(".cdg__total");

//rapoarte --------------------------------------------------------------------


// RMN Centrul Diagnostic Republican
let rmnCDR : string[] = [];
let rmnCDRTotal : number[] = [];
for (const element of people) {
        if(element.tipInvestigatie === "RMN" && element.investigatieInstitutie === "Centrul Diagnostic Republican") {
            rmnCDR.push(element.rmn);
        }
}

function getRmnCDR () {
    const counts = {}
    rmnCDR.forEach((x) => {
    counts[x] = (counts[x] || 0) + 1;
});

rmnCDRTotal = Object.values(counts)
let sumOfInvestigation = rmnCDRTotal.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
cdrTotal.textContent = "Total investigatii - " +  sumOfInvestigation.toString();
for (const element in counts) {
        let rmnItem = <HTMLLIElement>document.createElement("li");
        rmnItem.textContent = element + " :" + counts[element];
        cdrList.append(rmnItem);
    }
    }
getRmnCDR();

// RMN Centrul Diagnostic German
let rmnCDG : string[] = [];
let rmnCDGTotal : number[] = [];
for (const element of people) {
        if(element.tipInvestigatie === "RMN" && element.investigatieInstitutie === "Centrul Diagnostic German") {
            rmnCDG.push(element.rmn);
        }
}

function getRmnCDG () {
    const counts = {}
    rmnCDG.forEach((x) => {
    counts[x] = (counts[x] || 0) + 1;
});

rmnCDGTotal = Object.values(counts)
let sumOfInvestigation = rmnCDGTotal.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
cdgTotal.textContent = "Total investigatii - " +  sumOfInvestigation.toString();
for (const element in counts) {
        let rmnItem = <HTMLLIElement>document.createElement("li");
        rmnItem.textContent = element + " :" + counts[element];
        cdgList.append(rmnItem);
    }

}
getRmnCDG();


