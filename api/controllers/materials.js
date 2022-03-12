const express = require("express");
const mongoose = require("mongoose");
const Materials = require("../models/materials");

exports.createMaterials = (req, res, next) => {
  Materials.find({ cableName: req.body.cableName })
    .exec()
    .then((material) => {
      if (material.length >= 1) {
        res.status(409).json({ message: "Material Exists" });
      } else {
        const material = new Materials({
          cableName: req.body.cableName,
          type: req.body.type,
          cableType: req.body.cableType,
          meters: req.body.meters,
          price: req.body.price,
          imageURL: req.body.imageURL,
          _id: new mongoose.Types.ObjectId(),
        });
        material
          .save()
          .then((result) => {
            res.status(201).json({ message: result });
          })
          .catch((err) => {
            res.status(500).json({ error: err });
          });
      }
    });
};

exports.get_Materials = (req, res, next) => {
  Materials.find()
    .select()
    .exec()
    .then((mat) => {
      const resp = {
        material: mat.map((responses) => {
          return {
            _id: new mongoose.Types.ObjectId(),
            cableName: responses.cableName,
            type: responses.type,
            cableType: responses.cableType,
            meters: responses.meters,
            price: responses.price,
            imageURL: responses.imageURL,
          };
        }),
      };
      res.status(200).json(resp);
    });
};

exports.deleteMaterials = (req, res, next) => {
  Materials
    .remove({ _id: req.params.userId })
    .exec()
    .then(res => {
      res.status(200).json({
        message: 'Material deleted'
      });
    })
    .catch(err => {
      res.status(500).json({
        message: err
      })
    })
}