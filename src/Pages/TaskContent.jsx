import React, { createContext, useState } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tableList, setTableList] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
    status: "Pending",
  });

  const [editIndex, setEditIndex] = useState(null);

  // Add or update task
  const addTask = () => {
    if (editIndex !== null) {
      const updatedList = [...tableList];
      updatedList[editIndex] = formData;
      setTableList(updatedList);
      setEditIndex(null);
    } else {
      setTableList([...tableList, formData]);
    }

    // Reset form after add or update
    setFormData({
      title: "",
      description: "",
      dueDate: "",
      status: "Pending",
    });
  };

  // Delete a task by index
  const deleteTask = (index) => {
    const updatedList = [...tableList];
    updatedList.splice(index, 1);
    setTableList(updatedList);
  };

  // Prepare task to be edited
  const editTask = (index) => {
    setFormData(tableList[index]);
    setEditIndex(index);
  };

  return (
    <TaskContext.Provider
      value={{
        tableList,
        setTableList,
        formData,
        setFormData,
        editIndex,
        setEditIndex,
        addTask,
        deleteTask,
        editTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
