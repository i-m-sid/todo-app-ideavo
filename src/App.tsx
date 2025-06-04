import React, { useState } from 'react';
import TodoList from './components/TodoList';
import { Moon, Sun } from 'lucide-react';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen flex items-center justify-center ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <div className="max-w-md w-full">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Todo List</h1>
          <button
            className={`p-2 rounded-full hover:bg-gray-${isDarkMode ? '700' : '300'} text-gray-${isDarkMode ? '400' : '600'}`}
            onClick={toggleDarkMode}
          >
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>
        <TodoList />
      </div>
    </div>
  );
};

export default App;
