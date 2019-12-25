import db from "../lowdb";

async function displayTask(req, res) {
  const tasks = db.get('tasks').value();
  if (tasks.length === 0) {
    return res.send("You have no tasks.");
  }
  let result = '';
  for (let i = 0; i < tasks.length; ++i) {
    result += `${i + 1}. ${tasks[i].title}<br>`;
  }
  res.set('Content-Type', 'text/html');
  return res.send(result);
}

export {displayTask};
