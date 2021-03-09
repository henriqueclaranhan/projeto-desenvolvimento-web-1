checkBox=()=>{
    
    var check = document.querySelector("#JsContinue");
    trabalhos.forEach(elt => {
        let option = document.createElement('option')
        option.innerText = elt.nomeTema;
        check.appendChild(option);
    });
}

checkBox();