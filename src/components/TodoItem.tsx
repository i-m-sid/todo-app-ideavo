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
    <div className="flex items-center justify-between bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="flex items-center">
        <button
          className={`mr-4 p-2 rounded-full transition-colors ${
            todo.completed
              ? 'bg-green-500 hover:bg-green-600 text-white'
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
          onClick={() => onComplete(todo.id)}
        >
          <Check size={16} />
        </button>
        <p
          className={`text-lg font-medium ${
            todo.completed ? 'line-through text-gray-400' : 'text-gray-800'
          }`}
        >
          {todo.title}
        </p>
      </div>
      <button
        className="p-2 rounded-full bg-red-500 hover:bg-red-600 text-white"
        onClick={() => onDelete(todo.id)}
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
};

export default TodoItem;
