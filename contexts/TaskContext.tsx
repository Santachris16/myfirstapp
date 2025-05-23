
import React, { createContext, useContext, useState } from 'react';

type Task = { id: string; title: string; completed: boolean };

const TaskContext = createContext<{
  addTask: (title: string) => void;
  tasks: Task[];
  toggleTask: (id: string) => void;
}>({
  tasks: [],
  toggleTask: () => {},
});

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', title: ' Walk Coco', completed: false },
    { id: '2', title: ' Feed Coco', completed: false },
    { id: '3', title: ' Give Coco a bath', completed: false },
    { id: '4', title: ' Brush his fur', completed: false },
    { id: '5', title: ' Vet check-up', completed: false },
  ]);

  const toggleTask = (id: string) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const addTask = (title: string) => {
    const newTask = {
      id: Date.now().toString(),
      title,
      completed: false,
    };
    setTasks(prev => [...prev, newTask]);
  };

  return (
    <TaskContext.Provider value={{ tasks, toggleTask, addTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);
