var sanpham = [
    {
        id: 1,
        name: "ÁO THUN NỮ MÀU NÂU CHỮ WASSTUP",
        price: "250.000",
        image: "https://bizweb.dktcdn.net/thumb/1024x1024/100/393/859/products/98c5d6bd-6deb-4421-b604-a7685aa76411.jpg"
    },
    {
        id: 2,
        name: "ÁO SWEATER NỮ CHỮ THẬP",
        price: "750.000",
        image: "https://cf.shopee.vn/file/vn-11134207-7qukw-lk6lz8j568qce1"
    },
    {
        id: 3,
        name: "QUẦN JEAN NAM CÁ TÍNH T",
        price: "550.000",
        image: "https://cf.shopee.vn/file/cn-11134207-7qukw-lj6yg1zdej5i2b"
    }
];

function Add() {
    var id = document.getElementById("id").value;
    var name = document.getElementById("name").value;
    var image = document.getElementById("image").value;
    var price = document.getElementById("price").value;

    sanpham.push({ id: id, name: name, image: image, price: price });
    Reset();
    Show();
}

function Show() {
    var tableBody = document.getElementById("sanpham");
    tableBody.innerHTML = "";

    for (var i = 0; i < sanpham.length; i++) {
        var row = "<tr><td>" + sanpham[i].id + "</td><td>" + sanpham[i].name + "</td><td><img src='" + sanpham[i].image + "' alt='Product Image' style='width:100px;height:auto;'></td><td>" + sanpham[i].price + "</td><td><button onclick='Edit(" + i + ")' class='btn btn-primary'>Edit</button> <button onclick='Delete(" + i + ")' class='btn btn-danger'>Delete</button></td></tr>";
        tableBody.innerHTML += row;
    }
}

function Reset() {
    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("image").value = "";
    document.getElementById("price").value = "";
}

function Edit(index) {
    var product = sanpham[index];
    document.getElementById("id").value = product.id;
    document.getElementById("name").value = product.name;
    document.getElementById("image").value = product.image;
    document.getElementById("price").value = product.price;

    sanpham.splice(index, 1);
    Show();
}

function Delete(index) {
    sanpham.splice(index, 1);
    Show();
}
