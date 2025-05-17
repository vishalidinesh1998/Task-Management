import React, { useContext } from "react";
import { TaskContext } from "./TaskContent";
import { useNavigate } from "react-router-dom";

function Home() {
  const { tableList, deleteTask, editTask } = useContext(TaskContext);
  const navigate = useNavigate();

  // Filtered tasks — here we can customize it, or just use tableList directly
  const filteredTasks = tableList; // If no filter needed, just use tableList

  const handleAddTask = () => navigate("/addtask");
  const handleEdit = (index) => {
    editTask(index);
    navigate("/addtask");
  };
  const handleDelete = (index) => deleteTask(index);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Task List</h1>

      <button
        className="bg-blue-700 text-white px-4 py-2 rounded mb-6 hover:bg-blue-800 transition"
        onClick={handleAddTask}
      >
        Add Task
      </button>

      <table className="w-full border rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Title</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Due Date</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center p-4">
                No tasks found.
              </td>
            </tr>
          ) : (
            filteredTasks.map((task, index) => (
              <tr key={index}>
                <td className="border p-2">{task.title}</td>
                <td className="border p-2">{task.description}</td>
                <td className="border p-2">{task.dueDate}</td>
                <td className="border p-2">{task.status}</td>
                <td className="border p-2">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded mr-2 cursor-pointer"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
