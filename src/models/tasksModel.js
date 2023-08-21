const connection = require("./connection");

const getAll = async () => {
  const [tasks] = await connection.execute("SELECT * FROM tasks");
  return tasks;
};

const createTask = async (task) => {
  const { title } = task;

  const dateUTC = new Date(Date.now()).toUTCString();

  const query = "INSERT INTO tasks (title, created_at) VALUES (?, ?)";
  const [createdTask] = await connection.execute(query, [title, dateUTC]);

  return createdTask;
};

const updateTask = async (id, task) => {
  const { title, status } = task;

  const query = "UPDATE tasks SET title = ?, status = ? WHERE id = ?";

  const updatedTask = await connection.execute(query, [title, status, id]);
  return updatedTask;
};

const deleteTask = async (id) => {
  const removedTask = await connection.execute(
    "DELETE FROM tasks WHERE id = ?",
    [id]
  );
  return removedTask;
};

module.exports = {
  getAll,
  createTask,
  updateTask,
  deleteTask,
};
