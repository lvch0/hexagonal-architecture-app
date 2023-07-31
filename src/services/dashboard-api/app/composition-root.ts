import { initTRPC } from "@trpc/server";
import { ControlAuthenticatorStub, RepoQuerierStub } from "../adapters/drivens";
import { AuthenticatorProxyAdapter } from "../adapters/drivers";
import { DashboardApi } from "./dashboard-api";
import { authTRPCAdapter } from "../adapters/drivers/auth-trpc-adapter";

const compositionMock = () => {
    //DRIVENS
    const controlAuthenticatorStub = new ControlAuthenticatorStub();
    const repoQuerierStub = new RepoQuerierStub();

    //APP
    const dashboardApiMock = new DashboardApi(
        controlAuthenticatorStub,
        repoQuerierStub
    );

    //DRIVERS
    const authenticatorProxyAdapter = new AuthenticatorProxyAdapter(
        dashboardApiMock
    );

    return {
        authenticatorProxyAdapter,
    };
};

export const { authenticatorProxyAdapter } = compositionMock();

// const registerMock = {
//     name: "John",
//     email: "john@gmail.com",
//     password: "password",
// };

// authenticatorProxyAdapter.login("john@gmail.com", "12345678");
// authenticatorProxyAdapter.register(registerMock);

export const localTRPCCompose = () => {
    //DRIVENS
    const controlAuthenticatorStub = new ControlAuthenticatorStub();
    const repoQuerierStub = new RepoQuerierStub();

    //APP
    const dashboardApiMock = new DashboardApi(
        controlAuthenticatorStub,
        repoQuerierStub
    );

    //TRPC INSTANCE
    const t = initTRPC.create();

    //TRPC DRIVER
    const authTRPCAdapterRouter = authTRPCAdapter(dashboardApiMock, t);

    const appRouter = t.router({
        auth: authTRPCAdapterRouter,
    });

    return { appRouter };
};
