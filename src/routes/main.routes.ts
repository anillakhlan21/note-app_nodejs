import { Application, Router } from "express";
import { NoteController } from "../controllers/note.controller";
import * as express from "express"
import { app } from "../server";
export class MainRoutes {
    constructor() {

    }

   static register() {
        const router = Router();
        router.get('/health', (req, res) => { res.send('Hello World') });
        router.get('/notes', NoteController.getAll);
        router.get('/note/:noteId', NoteController.getById);
        router.post('/note', NoteController.create);
        router.put('/note/:id', NoteController.update);
        router.delete('/notes', NoteController.deleteAll);
        router.delete('/note/:id', NoteController.deleteById);

        router.get('/cors', NoteController.cors);

        return router;
    }



}