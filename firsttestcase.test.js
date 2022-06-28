it.todo("jest setup");

const calc = require("./src/mapper/calculator");
const request = require("supertest");
const App = require("./index");
const CONSTANTS = require("./src/const");

const valA = 10;
const valB = 20;

describe("tests for calculator api", () => {
    it("addition", async() =>{
        const response = await request(App).get("/test/calculator/").query({ valueOne: valA, valueTwo: valB, operation: CONSTANTS.CALCULATOR_OPERATIONS.ADDITION }).send();
        expect(response.status).toEqual(200);
        expect(response.body.success).toEqual(true);
        expect(response.body.result).toEqual(calc(CONSTANTS.CALCULATOR_OPERATIONS.ADDITION,valA,valB));
    });
    it("subtraction", async() =>{
        const response = await request(App).get("/test/calculator/").query({ valueOne: valA, valueTwo: valB, operation: CONSTANTS.CALCULATOR_OPERATIONS.SUBTRACTION }).send();
        expect(response.status).toEqual(200);
        expect(response.body.success).toEqual(true);
        expect(response.body.result).toEqual(calc(CONSTANTS.CALCULATOR_OPERATIONS.SUBTRACTION,valA,valB));
    });
    it("multiplication", async() =>{
        const response = await request(App).get("/test/calculator/").query({ valueOne: valA, valueTwo: valB, operation: CONSTANTS.CALCULATOR_OPERATIONS.MULTIPLICATION }).send();
        expect(response.status).toEqual(200);
        expect(response.body.success).toEqual(true);
        expect(response.body.result).toEqual(calc(CONSTANTS.CALCULATOR_OPERATIONS.MULTIPLICATION,valA,valB));
    });
    it("division", async() =>{
        const response = await request(App).get("/test/calculator/").query({ valueOne: valA, valueTwo: valB, operation: CONSTANTS.CALCULATOR_OPERATIONS.DIVISION }).send();
        expect(response.status).toEqual(200);
        expect(response.body.success).toEqual(true);
        expect(response.body.result).toEqual(calc(CONSTANTS.CALCULATOR_OPERATIONS.DIVISION,valA,valB));
    });
})