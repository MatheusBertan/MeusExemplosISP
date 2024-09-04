interface Comer {
    comer(): void
}

interface Andar {
    andar(): void
}

interface Voar {
    voar(): void
}

class Pato2 implements Comer, Andar, Voar {
    comer(): void{
        console.log("O pato está comendo")
    }

    andar(): void{
        console.log("O pato está andando")
    }

    voar(): void{
        console.log("O pato está voando")
    }
}

class Cachorro2 implements Comer, Andar {
    comer(): void{
        console.log("O cachorro está comendo")
    }

    andar(): void{
        console.log("O cachorro está andando")
    }
}

const pato2 = new Pato2();
pato2.comer();
pato2.andar();
pato2.voar();

const cachorro2 = new Cachorro2();
cachorro2.comer();
cachorro2.andar();