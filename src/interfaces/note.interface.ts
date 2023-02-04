export interface INote{
    heading: string;
    description?: string;
    author: string;
    tag?: string;
    created_at?: Date;
    updated_at?: Date;
}