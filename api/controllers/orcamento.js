const express = require("express");
const mongoose = require("mongoose");
const Orcamento = require("../models/orcamento");

exports.saveOrcamento = (req, res, next) => {
  Orcamento.find({ oramentoName: req.body.oramentoName })
    .exec()
    .then((orcamentoExist) => {
      if (orcamentoExist.length >= 1) {
        res.status(400).json({ message: "Orcamento Já existe" });
      } else {
        const orcamento = new Orcamento({
          _id: new mongoose.Types.ObjectId(),
          oramentoName: req.body.oramentoName,
          orcamentoInfo: [
            {
              _id: req.body.orcamentoInfo._id,
              cableName: req.body.orcamentoInfo.cableName,
              type: req.body.orcamentoInfo.type,
              cableType: req.body.orcamentoInfo.cableType,
              meters: req.body.orcamentoInfo.meters,
              price: req.body.orcamentoInfo.price,
              imageURL: req.body.orcamentoInfo.imageURL,
            },
          ],
        });
        orcamento
          .save()
          .then((result) => {
            res.status(201).json({ message: "Orcamento Created" });
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
            _id: new mongoose.Types.ObjectId(),
            oramentoName: response.oramentoName,
            orcamentoInfo: [
              {
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
