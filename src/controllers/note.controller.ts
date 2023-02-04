import { Request, Response } from "express";
import { NoteService } from "../services/note.service";

export class NoteController {
    constructor() { }
    static async getAll(req: Request, res: Response) {
        try {
            const result = await NoteService.getAll();
            res.send(result);
        } catch (error) {
            console.log(error);
        }
    }
    static async getById(req: Request, res: Response) {
        try {
            const result = await NoteService.getById(req.params.noteId);
            res.json(result);
        } catch (error) {
            console.log(error);
        }
    }
    static async create(req: Request, res: Response) {
        try {
            const result = await NoteService.create(req.body)
            res.send(result);
        } catch (error) {
            console.log(error);
        }
    }
    static async update(req: Request, res: Response) {
        try {
            const result = await NoteService.update(req.params.id, req.body)
            res.send(result);
        } catch (error) {
            console.log(error);
        }
    }
    static async deleteById(req: Request, res: Response) {
        try {
            const result = await NoteService.deleteById(req.params.id)
            res.send(result);
        } catch (error) {
            console.log(error);
        }
    }
    static async deleteAll(req: Request, res: Response) {
        try {
            const result = await NoteService.deleteAll()
            res.send(result)

        } catch (error) {
            console.log(error);
        }
    }


}