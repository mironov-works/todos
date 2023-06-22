<template>
  <div class="page">
    <div class="page__title">
      <h1>{{ title }}</h1>
    </div>
    <div class="page__add-todo">
      <AddTodo @addTodo="addNewTodo" />
    </div>
    <ul class="page__cards-list">
      <li
        class="page__cards-list-item"
        v-for="todo in todos.items"
        :key="todo.id"
      >
        <TodoCard :todo="todo" @remove="removeTodo" />
      </li>
    </ul>
    <div class="page__message" v-if="isEmptyTodos">
      <h2 class="page__message-item">{{ message }}</h2>
    </div>
  </div>
</template>

<script setup>
import { useTodos } from "@/stores/todos";
import TodoCard from "@/components/TodoCard.vue";
import AddTodo from "@/components/AddTodo.vue";

const todos = useTodos();
const message = "Список задач пуст";
const title = "Что по плану на сегодня";

const isEmptyTodos = computed(() => {
  return !todos.getLenght();
});

const removeTodo = (id) => {
  todos.removeById(id);
};
const addNewTodo = (newTodo) => {
  todos.addNew(newTodo);
};
</script>

<style>
.page__title {
  text-align: center;
  margin-bottom: 24px;
  font-size: 1em;
}
.page__add-todo {
  margin-bottom: 24px;
}
.page__cards-list {
  margin-bottom: 24px;
  list-style: none;
}
.page__cards-list-item:not(:last-child) {
  margin-bottom: 6px;
}
.page__message {
  text-align: center;
}
</style>
