import express, { Request, Response } from "express";
// import { sequelize } from "./config/database";

const app = express();

app.use(express.json());

// Middleware de manejo de errores
app.use((err: Error, req: Request, res: Response, next: Function) => {
  console.error(err.stack);
  res.status(500).send("Error interno del servidor");
});

// Inicializar la aplicación
async function start() {
  try {
    // await sequelize.sync({ force: false });

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Servidor iniciado en el puerto ${PORT}`);
    });
  } catch (error) {
    console.error("Error al iniciar la aplicación:", error);
    process.exit(1);
  }
}

start();