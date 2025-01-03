const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

audio.Map.play()

const image = new Image();
image.src = "./images/little-town.png";
const playerDownImage = new Image();
playerDownImage.src = "./images/player.png";
const playerUpImage = new Image();
playerUpImage.src = "./images/player.png";
const playerLeftImage = new Image();
playerLeftImage.src = "./images/player.png";
const playerRightImage = new Image();
playerRightImage.src = "./images/player.png";
const foregroundImage = new Image();
foregroundImage.src = "./images/foregroundObjects.png";
const lifeImage = new Image();
lifeImage.src = "./images/life.png";
const animalsImage = new Image();
animalsImage.src = "./images/animals.png";
const playerLeftAttackImage = new Image();
playerLeftAttackImage.src = "./images/player.png";
const playerRightAttackImage = new Image();
playerRightAttackImage.src = "./images/player.png";
const playerUpAttackImage = new Image();
playerUpAttackImage.src = "./images/player.png";
const playerDownAttackImage = new Image();
playerDownAttackImage.src = "./images/player.png";
const deadPlayer = new Image();
deadPlayer.src = "./images/player.png";
const npc1Image = new Image();
npc1Image.src = "./images/npc1.png";
const npc2Image = new Image();
npc2Image.src = "./images/npc2.png";
const npc3Image = new Image();
npc3Image.src = "./images/npc3.png";
const monsterImage = new Image();
monsterImage.src = "./images/monster.png";
const monster1Image = new Image();
monster1Image.src = "./images/monster1.png";
const monster2Image = new Image();
monster2Image.src = "./images/monster2.png";
const gameover = document.querySelector(".gameover")
const dialogBox = document.querySelector(".dialog");
const head = document.querySelector(".content img");
const text = document.querySelector(".content p");
const enter = document.querySelector(".content strong");
let isNPC = false;
let index = 0;
let counter = 0;
canvas.width = 1024;
canvas.height = 576;
let i = 0, j = 0, k = 0, contador = 0;
let marcadorA = false, marcadorS = true, marcadorD = false, marcadorW = false, marcadorGlobal = false
let marcador1 = false, marcador2 = false, marcador3 = false, alive1 = true, alive2 = true, alive3 =true
let contadorMonstro = 0
let correr, correr1
const alives = [alive1, alive2, alive3]
const collisionsMap = []
let lastKey = ''
let move, moving = true

for (let i = 0; i < collisions.length; i+=54){
    collisionsMap.push(collisions.slice(i, 54 + i))
}

const boundaries = []
const offset = {
    x: -295,
    y: -150
}

collisionsMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 1742)
        boundaries.push(
            new Boundary({
                position: {
                    x: j * Boundary.width + offset.x,
                    y: i * Boundary.height + offset.y
                }
            })
        )
    })
})

function range(start, end) {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i * 0.5);
}


const monster = new monsterSprite({ //Monstro Vermelho
    position :{
        x: 400,  
        y: 700,
    },
    image: monsterImage,
    frames: {
        max: 4
    }
})

monster.moving = true;

const monster1 = new monsterSprite({ //Monstro Azul
    position :{
        x: 1500,
        y: 700,
    },
    image: monster1Image,
    frames: {
        max: 4
    }
})

monster1.moving = true;

const monster2 = new monsterSprite({ //Monstro Verde
    position :{
        x: 1500,
        y: 100,
    },
    image: monster2Image,
    frames: {
        max: 4
    }
})

monster2.moving = true;
const attackLeft = new Player({
    position: {
        x: canvas.width / 2 - 156 / 8,  // Ajuste da posição X
        y: canvas.height / 2 + 46      // Posição Y
    },
    image: playerLeftAttackImage,      // Imagem do sprite
    frames: { max: 4 }                 // Número máximo de frames
});

const attackUp = new Player({
    position: {
        x: canvas.width / 2 - 156 / 8,  // Ajuste da posição X
        y: canvas.height / 2 + 46      // Posição Y
    },
    image: playerUpAttackImage,      // Imagem do sprite
    frames: { max: 4 }                 // Número máximo de frames
});

const attackDown = new Player({
    position: {
        x: canvas.width / 2 - 156 / 8,  // Ajuste da posição X
        y: canvas.height / 2 + 46      // Posição Y
    },
    image: playerDownAttackImage,      // Imagem do sprite
    frames: { max: 4 },                 // Número máximo de frames
});

const attackRight = new Player({
    position: {
        x: canvas.width / 2 - 156 / 8,  // Ajuste da posição X
        y: canvas.height / 2 + 46      // Posição Y
    },
    image: playerRightAttackImage,      // Imagem do sprite
    frames: { max: 4 }               // Número máximo de frames
});

const life1 = new lifeSprite({
    position :{
        x: canvas.width - 1000,
        y: canvas.height - 550
    },
    image: lifeImage,
    frames: {
        max: 2
    }
})

const life2 = new lifeSprite({
    position :{
        x: canvas.width - 960,
        y: canvas.height - 550
    },
    image: lifeImage,
    frames: {
        max: 2
    }
})

const life3 = new lifeSprite({
    position :{
        x: canvas.width - 920,
        y: canvas.height - 550
    },
    image: lifeImage,
    frames: {
        max: 2
    }  
})

const chicken = new Animal({
    position: { x: -50, y: 350 },
    image: animalsImage,
    frames: { max: 2 },
    size: { width: 64, height: 96 }
});

const chicken1 = new Animal({
    position: { x: 20, y: 385 },
    image: animalsImage,
    frames: { max: 2 },
    size: { width:  64, height: 96 }
});

const chicken2 = new Animal({
    position: { x: -40, y: 410 },
    image: animalsImage,
    frames: { max: 2 },
    size: { width: 64, height: 96 }
});

const pig = new Animal({
    position: { x: 700, y: 210 },
    image: animalsImage,
    frames: { max: 2 },
    size: { width: 64, height: 96 } 
});

const pig1 = new Animal({
    position: { x: 750, y: 158 },
    image: animalsImage,
    frames: { max: 2 },
    size: { width: 64, height: 96 }
});

const cow = new Animal({
    position: { x: -190, y: 580 },
    image: animalsImage,
    frames: { max: 2 },
    size: { width: 64, height: 96 }
});

const cow1 = new Animal({
    position: { x: -100, y: 550 },
    image: animalsImage,
    frames: { max: 2 },
    size: { width: 64, height: 96 }
});
const npc1 = new Sprite({
    position : { 
        x: 100,
        y: 480
    },
    image: npc1Image,
    frames: { max: 4 }
});
npc1.moving = true;
const npc2 = new Sprite({
    position : {
        x: 760,
        y: 800
    },
    image: npc2Image,
    frames: { max: 4 }
});
npc2.moving = true;
const npc3 = new Sprite({
    position: {
        x: 1810,
        y: 750
    },
    image: npc3Image,
    frames: { max: 4 }
});
npc3.moving = true;

const player = new Player({
    position :{
        x: canvas.width/2 - 288/6,
        y: canvas.height/2 + 480/10,
    },
    image: playerDownImage,
    frames: {
        max: 6
    },
    sprites: {
        up: playerUpImage,
        left: playerLeftImage,
        right: playerRightImage,
        down: playerDownImage,
        direction: 0
    }
})

const background = new Sprite({
    position: {
        x: offset.x,
        y: offset.y
    },
    image: image
})

const foreground = new Sprite({
    position: {
        x: offset.x,
        y: offset.y
    },
    image: foregroundImage
})

const keys = {
    w: {
        pressed: false
    },
    s: {
        pressed: false
    },
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    space: {
        pressed: false
    },
    q: {
        pressed: false
    }

}

const monsters = [monster, monster1, monster2]
const movables = [background, ...boundaries, foreground, chicken, chicken1, chicken2, pig, pig1, cow, cow1, npc1, npc2, npc3, monster, monster1, monster2]
const npcs = [npc1, npc2, npc3];
function rectangularCollision ({rectangle1, rectangle2}){
    return (rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
        rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.position.y <= rectangle2.position.y + rectangle2.height &&
        rectangle1.position.y + rectangle1.height >= rectangle2.position.y
    )
}
const ultimaExecucao = Array(monsters.length).fill(0);
function animate(){
    window.requestAnimationFrame(animate)
    background.draw()
    boundaries.forEach((boundary) =>{
        boundary.draw()
    })
    monster.draw(alives[0], move)
    monster1.draw(alives[1], move)
    monster2.draw(alives[2], move)

    if (marcador1 == false){
        if (keys.space.pressed === true && marcadorA === true){
            player.direction = 336
            for(i = 0; i < 3; i++) player.draw(4)
        }else if (keys.space.pressed === true && marcadorW){
            player.direction = 384
            for(i = 0; i < 3; i++) player.draw(5)
        }else if (keys.space.pressed === true && marcadorS){
            player.direction = 288
            for(i = 0; i < 3; i++) player.draw(5)
        }else if (keys.space.pressed === true && marcadorD){
            player.direction = 336
            for(i = 0; i < 3; i++) player.draw(5)
        }else{
            if (keys.w.pressed === false && keys.s.pressed === false && keys.a.pressed === false && keys.d.pressed === false){
                player.draw(3)
            }else if (marcadorA == true){
                player.draw(1)
            }else{
                player.draw(2)
            }
        }
    }else{
        player.draw(6)
    }

    foreground.draw()
    chicken.draw(0, 25)
    chicken1.draw(0, 35)
    chicken2.draw(0, 30)
    pig.draw(32, 30)
    pig1.draw(32, 35)
    cow.draw(64, 30)
    cow1.draw(64, 35)
    npc1.draw();   
    npc2.draw();
    npc3.draw();
    life1.draw(marcador1)
    life2.draw(marcador2)
    life3.draw(marcador3)

    if (marcador1 == false) moving = true
    monsters.forEach(mst=>{
        if (correr == 1){
            for (let i = 0; i < boundaries.length; i++){
                const boundary = boundaries[i]
                if (
                    rectangularCollision({
                        rectangle1: mst,
                        rectangle2: {
                            ...boundary,
                            position: {
                            x: boundary.position.x - 0.5,
                            y: boundary.position.y
                        }}
                    })
                ) {
                    mst.moving = false
                    break
                }
            }
        }
    
        if (correr == 2){
            for (let i = 0; i < boundaries.length; i++){
                const boundary = boundaries[i]
                if (
                    rectangularCollision({
                        rectangle1: mst,
                        rectangle2: {
                            ...boundary,
                            position: {
                            x: boundary.position.x + 0.5,
                            y: boundary.position.y
                        }}
                    })
                ) {
                    mst.moving = false
                    break
                }
            }
        }
    
        if (correr == 3){
            for (let i = 0; i < boundaries.length; i++){
                const boundary = boundaries[i]
                if (
                    rectangularCollision({
                        rectangle1: mst,
                        rectangle2: {
                            ...boundary,
                            position: {
                            x: boundary.position.x,
                            y: boundary.position.y + 0.5
                        }}
                    })
                ) {
                    mst.moving = false
                    break
                }
            }
        }
    
        if (correr == 4){
            for (let i = 0; i < boundaries.length; i++){
                const boundary = boundaries[i]
                if (
                    rectangularCollision({
                        rectangle1: mst,
                        rectangle2: {
                            ...boundary,
                            position: {
                            x: boundary.position.x,
                            y: boundary.position.y - 0.5
                        }}
                    })
                ) {
                    mst.moving = false
                    break
                }
            }
        }
    })
    

    if (keys.w.pressed && lastKey === 'w') {
        marcadorA = false;
        marcadorS = false;
        marcadorD = false;
        marcadorW = true;
        if (marcador1 == false) player.moving = true
        player.image = player.sprites.up
        player.direction = 240
        for (let i = 0; i < boundaries.length; i++){
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...boundary, position: {
                        x: boundary.position.x,
                        y: boundary.position.y + 2
                    }}
                })
            ) {
                moving = false
                break
            }
        }
        for (let i = 0; i < npcs.length; i++) {
            const npc = npcs[i];
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...npc, position: {
                        x: npc.position.x,
                        y: npc.position.y + 2
                    }}
                }) 
            ) {
                isNPC = true;
                index = i;
                break;
            } else {
                isNPC = false;
            }
        }
        if (!isNPC) {
            dialogBox.style.visibility = "hidden";
        }
        if (moving) {
            movables.forEach((movable) => {
                movable.position.y +=2
            });
            if (moving == true){
            player.position.yreal -=2
            }
        }
    }else if(keys.a.pressed && lastKey === 'a') {
        marcadorA = true;
        marcadorS = false;
        marcadorD = false;
        marcadorW = false;
        if (marcador1 == false) player.moving = true
        player.image = player.sprites.left
        player.direction = 192
        for (let i = 0; i < boundaries.length; i++){
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...boundary,
                        position: {
                        x: boundary.position.x + 2,
                        y: boundary.position.y
                    }}
                })
            ) {
                moving = false
                break
            }
        }
        for (let i = 0; i < npcs.length; i++) {
            const npc = npcs[i];
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...npc, position: {
                        x: npc.position.x + 2,
                        y: npc.position.y 
                    }}
                }) 
            ) {
                isNPC = true;
                index = i;
                break;
            } else {
                isNPC = false;
            }
        }
        if (!isNPC) {
            dialogBox.style.visibility = "hidden";
        }
        if (moving)
        movables.forEach((movable) => {
            movable.position.x +=2
        })
    }else if(keys.d.pressed && lastKey === 'd') {
        marcadorA = false;
        marcadorS = false;
        marcadorD = true;
        marcadorW = false;
        if (marcador1 == false) player.moving = true
        player.image = player.sprites.right
        player.direction = 192
        for (let i = 0; i < boundaries.length; i++){
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...boundary,
                        position: {
                        x: boundary.position.x - 2,
                        y: boundary.position.y
                    }}
                })
            ) {
                moving = false
                break
            }
        }
        for (let i = 0; i < npcs.length; i++) {
            const npc = npcs[i];
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...npc, position: {
                        x: npc.position.x - 2,
                        y: npc.position.y
                    }}
                }) 
            ) {
                isNPC = true;
                index = i;
                break;
            } else {
                isNPC = false;
            }
        }
        if (!isNPC) {
            dialogBox.style.visibility = "hidden";
        }
        if (moving)
        movables.forEach((movable) => {
            movable.position.x -=2
        })
    }
    else if(keys.s.pressed && lastKey === 's') {
        marcadorA = false;
        marcadorS = true;
        marcadorD = false;
        marcadorW = false;
        if (marcador1 == false) player.moving = true
        player.image = player.sprites.down
        player.direction = 144
        for (let i = 0; i < boundaries.length; i++){
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...boundary,
                        position: {
                        x: boundary.position.x,
                        y: boundary.position.y - 2
                    }}
                })
            ) {
                moving = false
                break
            }
        }
        for (let i = 0; i < npcs.length; i++) {
            const npc = npcs[i];
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...npc, position: {
                        x: npc.position.x,
                        y: npc.position.y - 2
                    }}
                }) 
            ) {
                isNPC = true;
                index = i;
                break;
            } else {
                isNPC = false;
            }
        }
        if (!isNPC) {
            dialogBox.style.visibility = "hidden";
        }
        if (moving)
        movables.forEach((movable) => {
            movable.position.y -=2
        })
        if (moving == true){
        player.position.yreal +=2
        }
    }

    monsters.forEach((mst,i)=>{
        if (Date.now() - ultimaExecucao[i] >= 500) {  //Logica perder corações
            if ((rectangularCollision({rectangle1: mst, rectangle2: player}) && (alives[i] === true))){ //Para definir posicao do dano
                contador++
                if (contador == 1){
                    marcador3 = true
                }else if (contador == 2){
                    marcador2 = true
                }else if (contador == 3){
                    player.frames.val = 0
                    marcador1 = true
                    moving = false
                    setTimeout(() => {
                        gameover.style.backgroundImage = "url('images/gameover.png')"
                        gameover.style.display = "block"
                    }, 2600);
                }
            }
            ultimaExecucao[i] = Date.now();
        }
        
        if ((rectangularCollision({rectangle1: mst, rectangle2: player}) && (alives[i] === true) && (keys.space.pressed))){ //Matar o monstro
            alives[i] = false;
            mst.moving = false;
        }
    
        if (alives[i] == true){
            if (mst.moving == true && marcadorGlobal == false){
                correr = andar()
                marcadorGlobal = true
            }

            if (correr == 1 && mst.moving == true){
                andarMonstroDireita(mst)
            }else if(correr == 2 && mst.moving == true){
                andarMonstroEsquerda(mst)
            }else if (correr == 3 && mst.moving == true){
                andarMonstroCima(mst)
            }else if (correr == 4 && mst.moving == true){
                andarMonstroBaixo(mst)
            }
        }
        correr1 = andar()
        if (mst.moving == false){
            if (correr1 == correr){
                correr1 = andar()
            }else{
                correr = correr1
            }
            mst.moving = true
        }
    })
    if ((alives[0] === false) && (alives[1] === false) && (alives[2] === false)){
        setTimeout(() => {
            gameover.style.backgroundImage = "url('images/youwin.png')"
            gameover.style.display = "block"
        }, 2600); 
    }
}
    animate()

    function andarMonstroDireita(mst){
        mst.position.x += 0.5
        move = 48
    }
    function andarMonstroCima(mst){
        mst.position.y -= 0.5
        move = 0
    }
    function andarMonstroBaixo(mst){
        mst.position.y += 0.5
        move = 0
    }
    function andarMonstroEsquerda(mst){
        mst.position.x -= 0.5
        move = 32
    }

    function andar() {
        // Gera um número aleatório entre 1 e 4
        return Math.floor(Math.random() * 4) + 1;
    }

let dialogs = {
    npc1: [
        "Olá, como anda essa cidade?",
        "Estamos em guerra, monstros estão saqueando nossa cidade, por favor nos ajude!",
        "Deixa comigo!"
    ],
    npc2: [
        "Oi, o senhor é bem alto em? De qualquer forma preciso me apressar descobri que monstros assombram essa cidade",
        "Haha, é porque comi bastante quando era pequeno. Sim, nos salve dessa tormenta, esses monstros são cruéis",
        "Agora eles vão ver o que é bom para tosse!"
    ],
    npc3: [
        "Minha senhora, o que faz por aqui? aqui é perigoso, de qualquer forma não se preocupe, pois irei salvar o dia",
        "Monstros destruíram minha casa que fica ali em cima, por favor me vingue",
        "Não se preocupe, irei ajudar a construir uma nova casa para você!"
    ]
}

function displayDialog(index, counter, dialogs) {
    text.innerText = dialogs[`npc${index+1}`][counter];
}

window.addEventListener('keydown', (e) => {
    switch (e.key){
        case 'w':
            keys.w.pressed = true
            lastKey = 'w'
            break;
        case 'a':
            keys.a.pressed = true
            lastKey = 'a'
            break;
        case 's':
            keys.s.pressed = true
            lastKey = 's'
            break;
        case 'd':
            keys.d.pressed = true
            lastKey = 'd'
            break;
        case ' ':
            keys.space.pressed = true
            lastKey = ' '
            break;
        case 'Enter': 
            counter++;
            head.src = counter === 1 ? `./images/headnpc${index+1}.png`: "./images/headplayer.png";
            if (counter === 2) {
                enter.innerText = "";
            }
            
            if (isNPC && dialogBox.style.visibility === 'visible' && counter < 3) {
                displayDialog(index, counter, dialogs);
            }
            break;
        case 'q':
            if (isNPC) {
                counter = 0;
                enter.innerText = "[ENTER]";
                dialogBox.style.visibility = "visible";
                displayDialog(index, 0, dialogs);
            }
    }
})

window.addEventListener('keyup', (e) => {
    switch (e.key){
        case 'w':
            keys.w.pressed = false
            break;
        case 'a':
            keys.a.pressed = false
            break;
        case 's':
            keys.s.pressed = false
            break;
        case 'd':
            keys.d.pressed = false
            break;
        case ' ':
            keys.space.pressed = false
            break;
    }
})


let clicked = false
addEventListener('click', () => {
    if(!clicked){
        audio.Map.play()
        clicked = true
    }
})