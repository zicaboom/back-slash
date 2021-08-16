import { CreateUserService } from "../../services/userServices/CreateUserService";
import { v4 } from "uuid";
import { openConnection, closeConnection } from "../Connection";
import { hash } from "bcryptjs";

beforeAll(openConnection);

describe("Create a new user", () => {
    const createUserService = new CreateUserService;
    const userData = {
        name: v4(),
        email: v4(),
        password: v4()
    };
    it("Should be possible create a new user", async () => {
        const userReturn = await createUserService.execute(userData);

        expect(userReturn).toHaveProperty("user");
    });
});

afterAll(closeConnection);