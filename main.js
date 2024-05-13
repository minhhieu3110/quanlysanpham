let listProduct = []
function createList(){
    let sl = document.getElementById('n').value
    if (sl == null || sl == 0) {
        confirm("Vui lòng nhập số lượng sản phẩm ban đầu")

    }else {
        for (let i = 1; i <= sl ; i++) {
            let nameProduct = prompt(`Nhập tên sản phẩm thứ: ${i}`)
            let priceProduct = parseFloat(prompt(`Nhập giá sản phẩm thứ: ${i}`))
            let quantityProduct = parseInt(prompt(`Nhập số lượng sản phẩm thứ: ${i}`))
            listProduct.push({name: nameProduct, price: priceProduct, quantity: quantityProduct})
        }
        showList()
    }

}
function showList(){
    let str = `<h2>Danh sách sản phẩm</h2>`
    str += `<h3>Số lượng sản phẩm: ${listProduct.length}</h3>`
    for (let i = 0; i < listProduct.length; i++) {
        str += `Tên sản phẩm: ${listProduct[i].name} - Giá: ${listProduct[i].price} - Số lượng: ${listProduct[i].quantity}
        <button onclick="editProduct(${i})">Sửa</button>
        <button id="btnDelete" onclick="deleteProduct(${i})">Xóa</button><br>`
    }
    document.getElementById('display').innerHTML = str
}
function addProduct(){
    let str = `<form id="add">
                        <input type="text" id="nameadd" placeholder="Nhập tên sản phẩm"><br>
                        <input type="number" id="priceadd" placeholder="Nhập giá sản phẩm"><br>
                        <input type="number" id="quantityadd" placeholder="Nhập số lượng sản phẩm"><br>
                        <button onclick="add()">Nhập</button>
                    </form>`
    document.getElementById('display').innerHTML = str
}
function add(){
    let newName = document.getElementById('nameadd').value
    let newPrice = document.getElementById('priceadd').value
    let newQuantity = document.getElementById('quantityadd').value
    let newProduct = {
        name: newName,
        price: newPrice,
        quantity: newQuantity,
    }
    listProduct.push(newProduct)
    showList()
}
function editProduct(item){
    let str = `<form id="edit">
                        <input type="text" id="editName" value="${listProduct[item].name}"><br>
                        <input type="number" id="editPrice" value="${listProduct[item].price}"><br>
                        <input type="number" id="editQuantity" value="${listProduct[item].quantity}"><br>
                        <button onclick="save(${item})">Lưu</button>
                    </form>`
    document.getElementById('display').innerHTML = str
}
function save(item){
    listProduct[item].name = document.getElementById('editName').value
    listProduct[item].price = document.getElementById('editPrice').value
    listProduct[item].quantity = document.getElementById('editQuantity').value
    showList()
}
function deleteProduct(item){
    let ok = confirm("Bạn có muốn xóa sản phẩm này không ???")
    if (ok){
        let deletePro = item
        listProduct.splice(deletePro, 1)
        alert("Sản phẩm đã được xóa")
        showList()
    }else {
        alert("Thao tác xóa đã hủy")
    }
}
