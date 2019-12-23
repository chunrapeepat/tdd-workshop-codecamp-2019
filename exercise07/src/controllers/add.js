import db from "../lowdb";

async function addTask(req, res) {
  console.log(req.body)
  if (!req.body.title) {
    return res.status(422).send("Error: Task title must be exist!");
  }
  const {title} = req.body;
  if (title.length === 0) {
    return res.status(422).send("Error: Task title can't be empty!");
  }
  db.get("tasks").push({title}).write();
  return res.send("Done");
}

export {addTask};
