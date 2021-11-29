function function1() {
    let input = (document.getElementById("string1").value);
    const newstr = input.split('');
    window.alert("reversed String: " + newstr.sort().join(''));
}
function function2(){
    let input = (document.getElementById("string1").value);
    const newstr = input.split('');
    window.alert("reversed String: " + newstr.sort().reverse().join(''));
}