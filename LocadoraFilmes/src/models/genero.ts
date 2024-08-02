import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Filme } from './filme';

@Entity({ name: 'Genero' })
export class Genero {
    @PrimaryGeneratedColumn({ type: "int" })
    idGenero: number;

    @Column({ length: 45, nullable: false })
    nome: string;

    @ManyToMany(() => Filme, filme => filme.generos)
    filmes?: Filme[];

    constructor(id: number, nome: string) {
        this.idGenero = id;
        this.nome = nome;
    }
}