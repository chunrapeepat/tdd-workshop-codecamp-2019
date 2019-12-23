import {addTask} from "../add";
import db from "../../lowdb";

function setup() {
  const req = {
    body: {},
  }
  const res = {}
  const next = jest.fn()
  Object.assign(res, {
    status: jest.fn(
      function status() {
        return this
      }.bind(res),
    ),
    json: jest.fn(
      function json() {
        return this
      }.bind(res),
    ),
    send: jest.fn(
      function send() {
        return this
      }.bind(res),
    ),
  })
  return {req, res, next}
}

jest.mock("../../lowdb", () => {
  const low = require('lowdb');
  const Memory = require('lowdb/adapters/Memory');

  return low(new Memory());
})

describe('addTask', function () {
  test("task title must be exist", async () => {
    const {res, req, next} = setup();
    req.body = {};

    await addTask(req, res, next);

    expect(res.status).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(422);
    expect(res.send).toHaveBeenCalled();
    expect(res.send).toHaveBeenCalledWith(expect.stringMatching(/Error.*/));
  })

  test("task title can't be empty", async () => {
    const {res, req, next} = setup();
    req.body = {title: ""};

    await addTask(req, res, next);

    expect(res.status).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(422);
    expect(res.send).toHaveBeenCalled();
    expect(res.send).toHaveBeenCalledWith(expect.stringMatching(/Error.*/));
  })

  test("successfully add tasks", async () => {
    const {res, req, next} = setup();
    req.body = {title: "Do Homework"};
    db.defaults({tasks: []}).write()

    await addTask(req, res, next);

    expect(res.send).toHaveBeenCalled();
    expect(res.send).toHaveBeenCalledWith("Done");
    expect(db.get('tasks').value()).toEqual([{title: "Do Homework"}])
  })
});
