import { PrismaClient } from "../../generated/prisma/client.js"

const prisma = new PrismaClient();

const PushCharacters = async (name, x, y) => {
    await prisma.character.create(
        {
            data: {
                name,
                location: {
                    create: {
                        x,
                        y,
                    },
                },
            },
        },
    );
};


const easy1 = {
    name: 'intersting_character',
    x: 64,
    y: 18,
}

const easy2 = {
    name: 'silent_girl',
    x: 44,
    y: 72,
}

const easy3 = {
    name: 'goggle_man',
    x: 31,
    y: 44,
}

const easy4 = {
    name: 'moustache_man',
    x: 82,
    y: 56,
}

const updateCharacter = async (id, name) => {
    await prisma.character.update({
        where: {
            id,
        },
        data: {
            name
        }
    })
}

// PushCharacters(easy1.name, easy1.x, easy1.y)
// PushCharacters(easy2.name, easy2.x, easy2.y)
// PushCharacters(easy3.name, easy3.x, easy3.y)
// PushCharacters(easy4.name, easy4.x, easy4.y)