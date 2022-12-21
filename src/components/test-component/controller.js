import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const findAll = async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.json({
      ok: true,
      data: products,
    });
  } catch (error) {
    res.json({
      ok: false,
      data: error.message,
    });
  }
};

export const create = async (req, res) => {
  try {
    const { body } = req;
    const product = await prisma.product.create({
      data: {
        ...body,
      },
    });
    res.json({
      ok: true,
      data: product,
    });
  } catch (error) {
    res.json({
      ok: false,
      data: error.message,
    });
  }
};

export const update = async (req, res) => {
  try {
    const id = Number(req.params.id)
    const product = await prisma.product.update({
      where: {id},
      data: req.body,
    })
    res.json({
      ok: true,
      data: product,
    });
  } catch (error) {
    res.json({
      ok: false,
      data: error.message,
    });
  }
}

export const remove = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const product = await prisma.product.delete({
      where: { id },
    });
    res.json({
      ok: true,
      data: product,
    });
  } catch (error) {
    res.json({
      ok: "Delete student",
      data: error.message,
    });
  }
};
