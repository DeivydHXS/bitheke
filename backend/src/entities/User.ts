import { Entity, Column, CreateDateColumn, PrimaryColumn, JoinColumn, OneToMany } from "typeorm";
import { v4 as uuid } from 'uuid';
import { Book } from "./Book";

@Entity("users")
export class User {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    cpf?: string;

    // @OneToMany() // Ver como conectar books e user
    // @JoinColumn({ name: "category_id" })
    // books: Book;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}