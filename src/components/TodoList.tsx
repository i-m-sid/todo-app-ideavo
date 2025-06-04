import React, { useState } from 'react';
import TodoItem from './TodoItem';
import { PlusCircle } from 'lucide-react';

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([
        ...todos,
        { id: crypto.randomUUID(), title: newTodo, completed: false },
      ]);
      setNewTodo('');
    }
  };

  const completeTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="flex items-center mb-6">
        <input
          type="text"
          className="flex-1 px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
          placeholder="Add a new todo..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              addTodo();
            }
          }}
        />
        <button
          className="ml-4 p-2 rounded-full text-white dark:text-gray-800"
          onClick={addTodo}
        >
          <PlusCircle size={24} />
        </button>
      </div>

      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onComplete={completeTodo}
          onDelete={deleteTodo}
        />
      ))}

      {todos.length === 0 && (
        <div className="todo-item bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 text-center text-gray-500 dark:text-gray-400">
          No todos yet. Add a new one to get started!
        </div>
      )}
    </div>
  );
};

export default TodoList;
