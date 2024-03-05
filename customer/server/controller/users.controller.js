//const Barang = require("../models").barangs;

module.exports.find = async (req, res) => {
  // try {
  //   const bar = await Barang.findAll();
  //   return res.send(bar);
  // } catch (error) {
  //   return res.status(404).send("not found mauk");
  // }
  return res.status(200).send({
    message: "get all users",
  });
};

module.exports.add = async (req, res) => {
  // const { nama, harga, stok } = req.body;
  // try {
  //   const barang = await Barang.create({
  //     nama,
  //     harga,
  //     stok,
  //   });
  //   return res.send(barang);
  // } catch (error) {
  //   return res.status(404).send("not found mauk");
  // }
  return res.status(200).send({
    message: "add users",
  });
};

module.exports.getOne = async (req, res) => {
  // const { id } = req.params;
  // try {
  //   const barang = await Barang.findAll({
  //     where: { id },
  //   });
  //   return res.send({ barang });
  // } catch (error) {
  //   return res.status(404).send("not found");
  // }
  return res.status(200).send({
    message: "get One users",
  });
};

module.exports.update = async (req, res) => {
  // const { id } = req.params;
  // const { nama, harga, stok } = req.body;
  // try {
  //   const barang = await Barang.update(
  //     {
  //       id,
  //       nama,
  //       harga,
  //       stok,
  //     },
  //     { where: { id } }
  //   );
  //   return res.send({ message: "Barang was updated successfully.", barang });
  // } catch (error) {
  //   return res.status(500).send({
  //     message: "Error updating Tutorial with id=" + id,
  //   });
  // }
  return res.status(200).send({
    message: "update users",
  });
};
module.exports.delete = async (req, res) => {
  // const { id } = req.params;
  // try {
  //   const barang = await Barang.destroy({
  //     where: { id },
  //   });
  //   return res.send({ barang });
  // } catch (error) {
  //   return res.status(404).send("not found");
  // }
  return res.status(200).send({
    message: "delete users",
  });
};
