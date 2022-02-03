import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
import { Category } from "./Category";

@Entity("books")
export class Book {

    @PrimaryColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @ManyToOne(() => Category)
    @JoinColumn({ name: "category_id" })
    category_id: Category;

    @Column()
    shelf: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}