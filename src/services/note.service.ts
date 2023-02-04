import { Model, mongo } from "mongoose";
import { NoteModel } from "../schemas/note.schema";
import { INote } from "src/interfaces/note.interface";
export class NoteService {
    constructor() { }
    static async getById(noteId: string) {
        try {
            let objId = new mongo.ObjectId(noteId)
            const note = await NoteModel.findOne({ _id: objId });
            return note
        } catch (error) {
            console.log(error);
            return error
        }
    }

    static async getAll() {
        try {
            const result =  await NoteModel.find();
            return result;
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    static async create(body) {
        try {
            const note = new NoteModel(body);
            const result = await note.save()
            return result;
        } catch (error) {
            console.log(error);
            return error;

        }
    }

    static async update(id: string, body: INote) {
        try {
            let _id = new mongo.ObjectId(id)
            const note = new NoteModel(body);
            const result = await NoteModel.findOneAndUpdate({ _id: _id }, body, { new: true })
            return result;
        } catch (error) {
            console.error(error);
        }
    }

    static async deleteById(id: string) {
        try {
            let _id = new mongo.ObjectId(id)
            const result = await NoteModel.deleteOne({_id});
            return result;
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    static async deleteAll() {
        try {
            const result = await NoteModel.deleteMany();
            return result;
        } catch (error) {
            console.log(error);
            return error;
        }
    }
}