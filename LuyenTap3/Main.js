
function sever(key) {
    let storage = JSON.parse(localStorage.getItem(key)) ??[];
    return {
        getAll(){
            return storage;
        },
        add(value) {
            storage.push(value)
            save()
        },
        get(key) {
            return storage[key]
        },
        remove(key) {
            storage.splice(key, 1);
            save()
        },
        edit(key, value) {
            storage[key] = value;
            save()
        }
    }
    function save(){
        localStorage.setItem(key,JSON.stringify(storage));
    }
}
(function showContain1() {
        keys=["CanLam","danglam","doiketqua","done"]
        for (let j = 1; j <=4 ; j++) {
            let newId=document.getElementById(j+"x")
            let callback=sever(keys[j-1]).getAll()
            console.log(sever(keys[j-1]).getAll())
            for (let i = 0; i < callback.length; i++) {
                let span=document.createElement("p");
                span.innerHTML=callback[i]
                newId.appendChild(span);
            }
        }
    }
)()
;(
function f() {
    let b = document.querySelectorAll("input");
    for (let i = 0; i < b.length; i++) {
        b[i].setAttribute("onchange", "addValueOnchange([this.name,this.id])");
    }
}

)();

function addValueOnchange(key) {
    let p1 = document.getElementById(key[0]).getAttribute("value");// tại sao dùng qre lại k được
    let inputValue = document.getElementById(key[1]).value; // tại sao thằng này không dùng được getactribute
    let callback = sever(p1);
    callback.add(inputValue);
    document.getElementById(key[1]).value="";
    showContain(p1,key[0])
}
 function showContain(...keys) {
    let callback = sever(keys[0]);
     let newId=document.getElementById(keys[1]+"x")
     newId.innerHTML=""
     let size=callback.getAll().length
    for (let i = 0; i < size; i++) {
        let span=document.createElement("p");
        span.innerHTML=callback.get(i)
        newId.appendChild(span);
        console.log(span)
    }
}


