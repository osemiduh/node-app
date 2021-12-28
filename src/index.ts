import { PrismaClient } from '@prisma/client';
import express from "express";

const prisma = new PrismaClient()
const app = express();

const PORT = process.env.PORT || 5001

app.get('/users', async (req, res) => {
    const result = await prisma.user.findMany()
    res.send(result)
})


app.listen(PORT, ()=> console.log(`Prisma App listening on port ${PORT}`))