import {displayTask} from "../display";
import db from "../../lowdb";

// nothing

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
    set: jest.fn(
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

beforeAll(() => {
  db.defaults({tasks: []}).write();
})

afterEach(() => {
  db.set('tasks', []).write();
})

describe('displayTask', function () {
  test('displayTask: when tasks is empty should send message "You have no tasks."', async () => {
    const {req, res, next} = setup();

    await displayTask(req, res);

    expect(res.send).toHaveBeenCalled();
    expect(res.send).toHaveBeenCalledWith("You have no tasks.");
    expect(db.get('tasks').value()).toEqual([]);
  })

  test('displayTask: when tasks is not empty should not send message "You have no tasks."', async () => {
    const {req, res, next} = setup();
    db.get('tasks').push({title: "Do homework"}).write();

    await displayTask(req, res);

    expect(res.send).not.toHaveBeenCalledWith("You have no tasks.");
    expect(db.get('tasks').value()).toEqual([{title: "Do homework"}]);
  })

  test('displayTask: when tasks is not empty should return list correctly', async () => {
    const {req, res, next} = setup();
    db.defaults({tasks: []}).write()
    db.get('tasks').push({title: "Do homework"}).write();
    db.get('tasks').push({title: "Watch movies"}).write();
    db.get('tasks').push({title: "Workout"}).write();

    await displayTask(req, res);
    expect(res.send).toHaveBeenCalled();
    expect(res.send).toHaveBeenCalledWith(`1. Do homework<br>2. Watch movies<br>3. Workout<br>`);
  })
});
