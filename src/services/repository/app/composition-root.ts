import { LoggerStubAdapter } from "../adapters/drivens";
import { UserManagerProxy } from "../adapters/drivers";
import { Repository } from "./repository";

export const compositionMock = () => {
  const monitorStub = new LoggerStubAdapter();
  const repositoryMock = new Repository(monitorStub);
  const userManagerProxy = new UserManagerProxy(repositoryMock);

  return {
    userManagerProxy,
  };
};

