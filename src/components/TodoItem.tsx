import React from 'react';
import { Check, Trash2 } from 'lucide-react';

interface TodoItemProps {
  todo: {
    id: string;
    title: string;
    completed: boolean;
  };
  onComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onComplete, onDelete }) => {
  return (
    <div className="todo-item flex items-center justify-between rounded-lg shadow-md p-4 mb-4">
      <div className="flex items-center">
        <button
          className={`mr-4 p-2 rounded-full transition-colors ${
            todo.completed
              ? 'bg-green-500 hover:bg-green-600 text-white'
              : 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600'
          }`}
          onClick={() => onComplete(todo.id)}
        >
          <Check size={16} />
        </button>
        <p
          className={`text-lg font-medium ${
            todo.completed ? 'line-through text-gray-400' : ''
          }`}
        >
          {todo.title}
        </p>
      </div>
      <button
        className="p-2 rounded-full bg-red-500 hover:bg-red-600 text-white dark:bg-red-700 dark:hover:bg-red-800"
        onClick={() => onDelete(todo.id)}
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
};

export default TodoItem;
