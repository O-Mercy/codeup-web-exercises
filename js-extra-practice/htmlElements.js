'use strict'

function heading(str){
    let heading1 = '<li>';
    heading1 += str + '</li>';
    return heading1
}

console.log(heading('Title'));


function unorderedList(str) {
    let list = '<ul>';
    for(let i = 0; i < str.length; i++) {
        list += heading(str[i]);
    }
    if (function listItems(str){
        let heading1 = '<li>';
        heading1 += str + '</li>';
        return heading1
    })
    list += '</ul>';
    return list;
}
console.log(unorderedList('List'));

function orderedlist(first, second, third) {
    return   `<ul>
<li>${first}</li>
<li>${second}</li>
<li>${third}</li>
</ul>`
}
console.log(orderedlist("waka", "waka", "waka"))