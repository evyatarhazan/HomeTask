import express from 'express';
import {postDataUsers, getAllUsers, deleteByIdUsers} from './model.js'


export const router  = express.Router();

router.post("/users", postDataUsers)
router.get("/users", getAllUsers)
router.delete('/users/:id', deleteByIdUsers)

router.get("/", (req, res) => {
    res.send("Let's build a CRUD API!");
  });