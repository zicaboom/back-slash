import { createConnection, getConnection } from "typeorm";

const openConnection = async () => {
    await createConnection();
};

const closeConnection = async () => {
    const defaultConnection = getConnection("default");
    await defaultConnection.close();
};
export { openConnection, closeConnection};
