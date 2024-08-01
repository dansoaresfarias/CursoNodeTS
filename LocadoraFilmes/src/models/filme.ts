import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { Genero } from './genero';

@Entity()
export class Filme {
    @PrimaryGeneratedColumn({ type: "int" })
    idFilme?: number;

    @Column({ length: 80 })
    tituloOriginal: string;

    @Column({ length: 80, nullable: true })
    tituloPT?: string;

    @Column({ type: 'decimal', precision: 3, scale: 2 })
    preco: number;

    @Column({ type: 'time' })
    duracao: string;

    @Column({ type: 'year' })
    ano: number;

    @Column({ length: 5 })
    faixaEtaria: string;

    //@OneToMany(() => Midia, midia => midia.filme)
    //midias: Midia[];

    @ManyToMany(() => Genero)
    @JoinTable()
    generos?: Genero[];

    constructor(
        tituloOriginal: string,
        preco: number,
        duracao: string,
        ano: number,
        faixaEtaria: string,
        tituloPT?: string
    ) {
        this.tituloOriginal = tituloOriginal;
        this.preco = preco;
        this.duracao = duracao;
        this.ano = ano;
        this.faixaEtaria = faixaEtaria;
        this.tituloPT = tituloPT;
    }
}