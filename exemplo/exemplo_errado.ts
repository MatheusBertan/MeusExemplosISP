interface Animal{
    comer(): void
    andar(): void
    voar(): void
}

class Pato1 implements Animal{
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

class Cachorro1 implements Animal{
    comer(): void{
        console.log("O cachorro está comendo")
    }

    andar(): void{
        console.log("O cachorro está andando")
    }

    voar(): void{
        throw new Error("cachorro não voa")
    } //Cachorro não voa

}

const pato1 = new Pato1();
pato1.comer();
pato1.andar();
pato1.voar();

const cachorro1 = new Cachorro1();
cachorro1.comer();
cachorro1.andar();
cachorro1.voar();