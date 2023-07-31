import cors from "cors";
import express from "express";
import * as trpcExpress from "@trpc/server/adapters/express";
import { localTRPCCompose } from "./app/composition-root";

const createContext = () => ({});
const app = express();

app.use(cors());

app.use(
    "http://localhost:4000/trpc",
    trpcExpress.createExpressMiddleware({
        router: localTRPCCompose().appRouter,
        createContext,
    })
);

app.listen(4000, () => {
    console.log("Server started on port 4000");
});
