import { people } from "./array.js";
const rapoarteContainer = document.querySelector(".rapoarte");
const cdrList = document.querySelector(".cdr__list");
const cdgList = document.querySelector(".cdg__list");
const cdrTotal = document.querySelector(".cdr__total");
const cdgTotal = document.querySelector(".cdg__total");
//rapoarte --------------------------------------------------------------------
// RMN Centrul Diagnostic Republican
let rmnCDR = [];
let rmnCDRTotal = [];
for (const element of people) {
    if (element.tipInvestigatie === "RMN" && element.investigatieInstitutie === "Centrul Diagnostic Republican") {
        rmnCDR.push(element.rmn);
    }
}
function getRmnCDR() {
    const counts = {};
    rmnCDR.forEach((x) => {
        counts[x] = (counts[x] || 0) + 1;
    });
    rmnCDRTotal = Object.values(counts);
    let sumOfInvestigation = rmnCDRTotal.reduce((accumulator, currentValue) => accumulator + currentValue);
    cdrTotal.textContent = "Total investigatii - " + sumOfInvestigation.toString();
    for (const element in counts) {
        let rmnItem = document.createElement("li");
        rmnItem.textContent = element + " :" + counts[element];
        cdrList.append(rmnItem);
    }
}
getRmnCDR();
// RMN Centrul Diagnostic German
let rmnCDG = [];
let rmnCDGTotal = [];
for (const element of people) {
    if (element.tipInvestigatie === "RMN" && element.investigatieInstitutie === "Centrul Diagnostic German") {
        rmnCDG.push(element.rmn);
    }
}
function getRmnCDG() {
    const counts = {};
    rmnCDG.forEach((x) => {
        counts[x] = (counts[x] || 0) + 1;
    });
    rmnCDGTotal = Object.values(counts);
    let sumOfInvestigation = rmnCDGTotal.reduce((accumulator, currentValue) => accumulator + currentValue);
    cdgTotal.textContent = "Total investigatii - " + sumOfInvestigation.toString();
    for (const element in counts) {
        let rmnItem = document.createElement("li");
        rmnItem.textContent = element + " :" + counts[element];
        cdgList.append(rmnItem);
    }
}
getRmnCDG();
//# sourceMappingURL=rap.js.map