function fixText(txt) {
    let firstFix = txt.replace(/\s/g, '');
    let secondFix = firstFix.substring(1, firstFix.length).toLowerCase();
    return firstFix[0].toUpperCase() + secondFix;
}
