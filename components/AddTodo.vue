<template>
  <form class="add-todo" @submit.prevent="addNewTodo">
    <input
      class="add-todo__input"
      placeholder="Добавить новую задачу"
      type="text"
      v-model="newTodo"
    />
    <button class="add-todo__button" :disabled="isInputEmpty">Добавить</button>
  </form>
</template>

<script setup>
import { defineEmits, ref } from "vue";

const newTodo = ref("");
const emit = defineEmits(["addTodo"]);

const isInputEmpty = computed(() => {
  return !newTodo.value.length;
});
const addNewTodo = () => {
  emit("addTodo", newTodo.value);
  newTodo.value = "";
};
</script>

<style>
.add-todo {
  display: flex;
  padding: 2px;
  border-radius: 4px;
  background: linear-gradient(0.25turn, #4c0fcd, #9601fb);
}
.add-todo__input {
  width: 100%;
  border: none;
  padding: 12px;
  font-family: inherit;
  color: inherit;
  background-color: #161a2b;
}
.add-todo__button {
  flex-shrink: 0;
  padding: 12px;
  background: rgba(0, 0, 0, 0);
  font-size: 0.8em;
  color: inherit;
  border: none;
}
.add-todo__button:not(:disabled) {
  cursor: pointer;
}
.add-todo__button:disabled {
  color: grey;
}
.add-todo__button:not(:disabled):hover,
.add-todo__button:not(:disabled):focus {
  background: rgba(0, 0, 0, 0.1);
}
.add-todo__btn:not(:disabled):active {
  background: rgba(0, 0, 0, 0.2);
}
</style>
