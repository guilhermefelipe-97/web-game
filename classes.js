class Sprite {
    constructor({position, velocity, image, frames = {max: 1} , sprites}){
        this.position = position
        this.image = image
        this.frames = {...frames, val: 0, elapsed: 0}
        this.image.onload = () => {
            this.width = this.image.width / this.frames.max
            this.height = this.image.height
        }
        this.moving = false
        this.sprites = sprites
    }
    
    draw() {
        ctx.drawImage(
            this.image,
            this.frames.val * this.width,
            0,
            this.image.width/ this.frames.max,
            this.image.height,
            this.position.x,
            this.position.y,
            this.image.width/ this.frames.max,
            this.image.height
        )
        if (!this.moving) return
        if (this.frames.max > 1) {
            this.frames.elapsed++
        }
        if (this.frames.elapsed % 15 === 0){
            if (this.frames.val < this.frames.max - 1) this.frames.val++
            else this.frames.val = 0
        }
        
    }

}

class Boundary{
    static width = 48
    static height = 48
    constructor({position}) {
        this.position = position
        this.width = 48
        this.height = 48
    }

    draw(){
        ctx.fillStyle = 'rgba(255, 0, 0, 0)'
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

class lifeSprite {
    constructor({position, image, frames = {max: 1}, sprites}) {
        this.position = position
        this.image = image
        this.frames = {...frames, val: 0, elapsed: 0}
        this.image.onload = () => {
            this.width = this.image.width / this.frames.max
            this.height = this.image.height
        }
        this.sprites = sprites
    }

    draw(marcador) {
        if (!marcador){
        ctx.drawImage(
            this.image,
            32, // Ponto de início no eixo x da imagem
            0, // Ponto de início no eixo y da imagem
            this.image.width/ this.frames.max, // Apenas 34 pixels de largura da imagem serão desenhados
            this.image.height, // Altura completa da imagem
            this.position.x,
            this.position.y,
            this.image.width/ this.frames.max, // Define 34 pixels como largura na tela
            this.image.height // Altura completa na tela
        )
    } else {
        ctx.drawImage(
            this.image,
            0,
            0, 
            32, 
            this.image.height,
            this.position.x,
            this.position.y,
            32,
            this.image.height
        )
    }
}
}

class Animal {
    constructor({ position, image, frames = { max: 1 }, size }) {
        this.position = position;
        this.image = image;
        this.frames = { ...frames, val: 0, elapsed: 0 };
        this.size = size; // Largura e altura do frame que será exibido
        this.image.onload = () => {
            this.originalWidth = this.image.width;
            this.originalHeight = this.image.height;
        };
    }

    draw(valor, elap) {
        const sourceWidth = 32; // Largura do frame (fixa)
        const sourceHeight = 32; 

        const sourceX = this.frames.val * 32;
        const sourceY = valor;

        ctx.drawImage(
        this.image,
        sourceX,
        sourceY,
        sourceWidth, 
        sourceHeight,
        this.position.x,
        this.position.y,
        this.size.width,
        this.size.height
    );

        this.frames.elapsed++;

        if (this.frames.elapsed % elap === 0) {
            // Alterna o frame
            this.frames.val = (this.frames.val + 1) % this.frames.max;
        }
    }
}

class Player {
    constructor({position, image, frames = {max: 1} , sprites, direction}){
        this.position = position
        this.image = image
        this.frames = {...frames, val: 0, elapsed: 0}
        this.image.onload = () => {
            this.width = this.image.width / this.frames.max
            this.height = this.image.height / 10
        }
        this.moving = false
        this.sprites = sprites
        this.direction = direction
    }
    
    
    draw(marcador) {
        if (marcador == 1){
        ctx.save();
        ctx.scale(-1, 1);
        ctx.drawImage(
            this.image,
            this.frames.val * this.width,
            this.direction,
            this.image.width/ this.frames.max,
            this.image.height/10,
            - this.position.x - this.width * 2 + 25,
            this.position.y - 40,
            this.image.width/ this.frames.max * 2,
            this.image.height/10 * 2
        )
        ctx.restore();
        if (!this.moving) return
        if (this.frames.max > 1) {
            this.frames.elapsed++
        }
        if (this.frames.elapsed % 15 === 0){
            if (this.frames.val < this.frames.max - 1) this.frames.val++
            else this.frames.val = 0
        }
    }else if (marcador == 2){ //Normal
        ctx.drawImage(
            this.image,
            this.frames.val * this.width,
            this.direction,
            this.image.width/ this.frames.max,
            this.image.height/10,
            this.position.x - 25,
            this.position.y - 40,
            this.image.width/ this.frames.max * 2,
            this.image.height/10 * 2
        )
        if (!this.moving) return
        if (this.frames.max > 1) {
            this.frames.elapsed++
        }
        if (this.frames.elapsed % 15 === 0){
            if (this.frames.val < this.frames.max - 1) this.frames.val++
            else this.frames.val = 0
    }    
    }else if(marcador == 3){
        ctx.drawImage(
            this.image,
            this.frames.val * this.width,
            0,
            this.image.width/ this.frames.max,
            this.image.height/10,
            this.position.x - 25,
            this.position.y - 40,
            this.image.width/ this.frames.max * 2,
            this.image.height/10 * 2
        )
        if (this.frames.max > 1) {
            this.frames.elapsed++
        }
        if (this.frames.elapsed % 15 === 0){
            if (this.frames.val < this.frames.max - 1) this.frames.val++
            else this.frames.val = 0
    }   
    }else if (marcador == 4){
            ctx.save();
            ctx.scale(-1, 1);
            ctx.drawImage(
                this.image,
                this.frames.val * this.width,
                this.direction + 1,
                this.image.width/ this.frames.max,
                this.image.height/10,
                - this.position.x - this.width * 2 + 25,
                this.position.y - 40,
                this.image.width/ this.frames.max * 2,
                this.image.height/10 * 2
            )
            if (this.frames.max > 1) {
                this.frames.elapsed++
            }   
            if (this.frames.elapsed % 18 === 0){
                if (this.frames.val < 3) this.frames.val++
                else this.frames.val = 0
            }
            ctx.restore();

    }else if (marcador == 5){
        ctx.drawImage(
            this.image,
            this.frames.val * this.width,
            this.direction + 1,
            this.image.width/ this.frames.max,
            this.image.height/10,
            this.position.x - 25,
            this.position.y - 40,
            this.image.width/ this.frames.max * 2,
            this.image.height/10 * 2
        )
        if (this.frames.max > 1) {
            this.frames.elapsed++
        }   
        if (this.frames.elapsed % 18 === 0){
            if (this.frames.val < 3) this.frames.val++
            else this.frames.val = 0
        }
    }else if (marcador == 6){
        console.log(this.frames.val)
        ctx.drawImage(
            this.image,
            this.frames.val * this.width,
            432,
            this.image.width/ this.frames.max,
            this.image.height/10,
            this.position.x - 25,
            this.position.y - 40,
            this.image.width/ this.frames.max * 2,
            this.image.height/10 * 2
        )
        if (this.frames.max > 1) {
            this.frames.elapsed++
        }   
        if (this.frames.elapsed % 110 === 0){
            if (this.frames.val < 3) this.frames.val++
        } 
    }
}
}

class monsterSprite {
    constructor({position, image, frames = {max: 1}, sprites}) {
        this.position = position
        this.image = image
        this.frames = {...frames, val: 0, elapsed: 0}
        this.image.onload = () => {
            this.width = this.image.width / 2 //32
            this.height = this.image.height / 2 //32
        }
        this.sprites = sprites
    }

    draw(alive, move) {
        ctx.fillStyle = 'rgba(255, 0, 0, 0)'
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
        if (alive){
        ctx.drawImage(
            this.image,
            move, // Ponto de início no eixo x da imagem
            this.frames.val * this.height / 2 , // Ponto de início no eixo y da imagem
            this.width / 2, 
            this.height / 2, // Altura completa da imagem
            this.position.x,
            this.position.y,    
            this.width,
            this.height // Altura completa na tela
        )    
            this.frames.elapsed++;

            if (this.frames.max > 1) {
                this.frames.elapsed++
            }   
            if (this.frames.elapsed % 30 === 0){
                if (this.frames.val < 3) this.frames.val++
                else this.frames.val = 0
            }
         
        }else{
            ctx.drawImage(
                this.image,
                16, // Ponto de início no eixo x da imagem
                this.frames.val * this.height/2  , // Ponto de início no eixo y da imagem
                this.width / 2, 
                this.height /2 , // Altura completa da imagem
                this.position.x,
                this.position.y,
                this.width, //
                this.height // Altura completa na tela
            )      
        } 
    }
}      