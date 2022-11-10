// funktion podhhoti--- te lip-year

function isLipYear(year) {
    if (year % 4 == 0) {
        return true;
    }
    else {
        return false;
    }
}

const year = 2024;
const isRralyLipYear = isLipYear(year);
console.log(isRralyLipYear);
