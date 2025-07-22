// Buat polymorphism
class Character{
    constructor(name, health, position){
        this.name = name;
        this.health = health;
        this.position = position;
    }

    canMove(){
        console.log(`${this.name} moves to another position!`);
    };
};

function canAttack(character){
    return{
        attack: () => {
            console.log(`${character.name} attacks with weapon!`);
        }
    };
};

function canDefend(character){
    return{
        defend: () => {
            console.log(`${character.name} defends with shield`)
        }
    };
};

function canCastSpell(character){
    return{
        castSpell: () => {
            console.log(`${character.name} casts a spell`);
        }
    };
};

// Object Creator
function createMonster(name){
    const character = new Character(name,100,0);
    return Object.assign(character, canAttack(name));
};
function createGuardian(name){
    const character = new Character(name,100,0);
    return Object.assign(character, canDefend(name));
};
function createWizard(name){
    const character = new Character(name,100,0);
    return Object.assign(character, canCastSpell(name));
};

// Tambahan Baru, dan bisa melakukan 2 hal, attack dan defend.
function createWarrior(name){
    const character = new Character(name,100,0);
    return Object.assign(character, canAttack(character), canDefend(character));
};

const monster = createMonster('Monster');
monster.canMove();
monster.attack();

const guardian = createGuardian('Guardian');
guardian.canMove();
guardian.defend();

const wizard = createWizard('Wizard');
wizard.canMove();
wizard.castSpell();

const warrior = createWarrior('Warrior');
warrior.canMove();
warrior.attack();
warrior.defend();