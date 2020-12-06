const request = require("supertest");
const mongoose = require("mongoose");
const MockMongoose = require("mock-mongoose").MockMongoose;
const mockMongoose = new MockMongoose(mongoose);

const createApp = require("../../../api/app");

let config;

let app;

beforeAll(async (done) => {
  config = {
    db: {
      dbUrl: "mongodb://test",
      mongoose: mockMongoose,
    },
  };

  await mockMongoose.prepareStorage();

  await mongoose.connect("mongodb://test");

  app = await createApp(config);
  // replace with test
  // TODO: Replace this with a mock instance,
  // 1. mock - mongoose : https://www.npmjs.com/package/mock-mongoose
  // 2. testcontainers: https://www.npmjs.com/package/testcontainers
  done();
});

afterAll(async (done) => {
  await mongoose.connection.close();
  done();
});

describe("Payment Routes", () => {
  it("should get all payments", function (done) {
  
    request(app)
      .post("/payments")
      .set("Accept", "application/json")
      .set("Content-Type", "application/json")
      .send({ customer: 1, amount: 10 })
      .expect(201)
      .end(function (err, res) {
        if (err) return done(err);
        console.log(res.body);
        done();
      });
  });
});
