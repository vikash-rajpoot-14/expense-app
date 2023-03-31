const Order = require('./../model/order');

exports.createOrder = async (req, res) => {
    console.log(req.body)
    const price = req.body.price;
    const dish = req.body.dish;
    const table = req.body.table;
    Order.create({
        price: price,
        dish: dish,
        table: table
    }).then((order) => {
        console.log("order created");
        res.json({
            status: 'success',
            data: order
        })
    }).catch((err) => {
        console.log(err)
    });
};
exports.deleteOrder = (req, res) => {
    console.log(req.params.id)
    Order.findByPk(req.params.id).then((order) => {
        return order.destroy();
    }).then(() => {
        console.log("order delete");
        res.json({
            status: 'success',
            data: null
        })
    }).catch((err) => {
        console.log(err)
    });
};
exports.updateOrder = (req, res) => {
    console.log(req.body)
    console.log(req.params.id)
    const updatedprice = req.body.price;
    const updateddish = req.body.dish;
    const updatedtable = req.body.table;
    Order.upsert({
        id: req.params.id,
        price: updatedprice,
        dish: updateddish,
        table: updatedtable
    }).then((result) => {
        res.json({
            status: "success",
            data: result
        })
    }).catch((err) => {
        console.log(err)
    });
}
exports.getAllOrder = (req, res) => {
    Order.findAll().then((result) => {
        res.json({
            status: 'success',
            data: result
        })
    }).catch((err) => {
        console.log(err)
    });
};

exports.getOrder = (req, res) => {
    Order.findByPk(req.params.id).then((result) => {
        res.json({
            status: 'success',
            data: result
        })
    }).catch((err) => {
        console.log(err)
    });
}