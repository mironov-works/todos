import { defineStore } from "pinia";
import { getRandomColor } from "~/utils/random-color";


export const useTodos = defineStore("todos", () => {
  const items = reactive([]);

  const removeById = (id) => {
    const todoIndex = items.findIndex((i) => i.id === id);
    items.splice(todoIndex, 1);
  };
  const addNew = (newTodo) => {
    items.push({
      id: getLenght() + 1,
      description: newTodo,
      isChecked: false,
      color: getRandomColor(),
    });
  };
  const getLenght = () => {
    return items.length;
  };

  return { items, removeById, addNew, getLenght };
});
