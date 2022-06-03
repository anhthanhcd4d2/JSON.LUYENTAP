let fakejs = "http://localhost:3000/sanpham"

function start() {
    getSanPhamList(data => {
        showSanPham(data);
    })
}

start();

function getSanPhamList(callback) {
    return fetch(fakejs)
        .then(function (dataList) {
            return dataList.json();
        })
        .then(callback);
}

let test = document.getElementById("table1")

function showSanPham(data) {
    for (let i = 0; i < data.length; i++) {
        let tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${data[i].ms}
            <td>${data[i].name}
            <td>${data[i].price}
            `
        console.log(tr)
        test.appendChild(tr)
    }
}


