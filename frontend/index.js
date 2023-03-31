
const amount = document.getElementById('amount');
const dish = document.getElementById('dish');
const table = document.getElementById('table');
const submit = document.getElementById('submit')
const ul1 = document.getElementById('list1')
const ul2 = document.getElementById('list2')
const ul3 = document.getElementById('list3')

showData();

submit.addEventListener('click', showHandler);

async function showHandler() {
    const orderObject = {
        price: amount.value,
        dish: dish.value,
        table: table.value
    }
    await axios.post("http://localhost:3000/order", orderObject);
    showData();
    amount.value = "",
        dish.value = "",
        table.value = ""
}

function showData() {
    axios.get("http://localhost:3000/order").then(res => {
        const table1Obj = res.data.data.filter(e => e.table == "table1");
        const table2Obj = res.data.data.filter(e => e.table == "table2");
        const table3Obj = res.data.data.filter(e => e.table == "table3");
        showTableData(table1Obj, ul1);
        showTableData(table2Obj, ul2);
        showTableData(table3Obj, ul3);
    }).catch(err => console.log(err));
}

function showTableData(orders, ul) {
    let listData = "";
    if (orders.length < 1) {
        ul.innerHTML = listData;
    }

    orders.map(order => {
        listData += '<li class="list-group">';
        listData += `${order.price} ${order.dish} ${order.table}`;
        listData += "<button class='btn-delete' onclick='deleteData(`" + order.id + "`)'>delete</button>";
        listData += "<button class='btn-edit' onclick='EditData(`" + order.id + "`)'>Edit</button>";
        listData += "</li>";
        ul.innerHTML = listData;
    })
}
function deleteData(id) {
    axios.delete(`http://localhost:3000/order/${id}`).then(() =>
        showData())
}

function EditData(id) {
    axios.get(`http://localhost:3000/order/${id}`).then(res => {
        console.log(res)
        amount.value = res.data.data.price,
            dish.value = res.data.data.dish,
            table.value = res.data.data.table
        axios.delete(`http://localhost:3000/order/${id}`).then(() =>
            console.log("done"))
    })

    // axios.patch(`http://localhost:3000/order/${id}`).then((order) => {
    //     console.log(order)
    // })
}
