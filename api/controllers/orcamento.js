const express = require("express");
const mongoose = require("mongoose");
const Orcamento = require("../models/orcamento");

exports.saveOrcamento = (req, res, next) => {
  Orcamento.find({ orcamentoName: req.body.orcamentoName })
    .exec()
    .then((orcam) => {
      if (orcam.length >= 1) {
        res.status(400).json({ message: "Já Existe" });
      } else {
        const orcam = new Orcamento({
          _id: new mongoose.Types.ObjectId(),
          orcamentoName: req.body.orcamentoName,
          items: req.body.items,
        });
        orcam
          .save()
          .then((result) => {
            console.log(req.body);
            res.status(201).json({ message: result });
          })
          .catch((err) => {
            res.status(500).json({ error: err });
          });
      }
    });
};

exports.get_Orcamentos = (req, res, next) => {
  Orcamento.find()
    .select()
    .exec()
    .then((orca) => {
      const resp = {
        orcamento: orca.map((response) => {
          return {
            orcamento_id: response.orcamento_id,
            orcamentoName: response.orcamentoName,
            lists: [
              {
                _id: response._id,
                cableName: response.cableName,
                type: response.type,
                cableType: response.cableType,
                meters: response.meters,
                price: response.price,
                imageURL: response.imageURL,
              },
            ],
          };
        }),
      };
      res.status(200).json(resp);
    });
};
