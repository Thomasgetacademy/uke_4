

QUnit.test('isEmail', function (assert) {
    const actual = isEmail('dsa.@.');
    const expected = true;
    assert.equal(actual, expected);
});

isEmail()
function isEmail(txt) {
    let beforeAt = txt.indexOf('@') - 1;
    let afterAt = txt.indexOf('@') + 1;
    if (txt.includes('@') && !txt.includes(' ') &&  txt[beforeAt ]=== '.' && txt[afterAt] === '.') {
        return true;
    } else {
        return false
    }
}