db.produtos.updateMany({ nome: "Big Mac" },
{ $unset: { curtidas: "" } });

db.produtos.find({ name: { $ne: "Big Mac" } },
{ _id: 0, nome: 1, curtidas: 1 });