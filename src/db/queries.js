import { PrismaClient } from "../../generated/prisma/client.js"

const prisma = new PrismaClient();

export const addUserInDB = async (name, time) => {
    await prisma.user.create({
        data: {
            name,
            time
        }
    })
}

export const allEasyCharactersNames = async (name, time) => {
    const characters = await prisma.character.findMany({
        select: {
            name: true,
        },
        orderBy: {
            id: 'desc'
        }
    });
    return characters;
};

export const matchDetails = async (name, x, y) => {
    const details = await prisma.character.findFirst({
        where: {
            name:{
                equals: name,
            },
            location: {
                x: {
                    in: [x-2, x-1, x, x+1, x+2],
                },
                y: {
                    in: [y-2, y-1, y, y+1, y+2, y+3, y+4, y+5, y+6, y+7],
                },
            },
        },
        include: {
            location: true,
        },
    })

    return details;
}

