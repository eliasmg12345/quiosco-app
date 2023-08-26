// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { PrismaClient } from "@prisma/client"

export default async function handler(req, res) {
  try {
    const prisma = new PrismaClient()
    const productos = await prisma.producto.findMany()

    res.status(200).json(productos)
  } catch (error) {
    console.log(error);
  }
}
