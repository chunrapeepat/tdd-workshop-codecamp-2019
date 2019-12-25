import db from "../lowdb";

async function displayTask(req, res) {
  const tasks = db.get('tasks').value();
  if (tasks.length === 0) {
    return res.send("You have no tasks.");
  }
}

export {displayTask};
