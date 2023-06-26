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

<style lang="scss" scoped>
.add-todo {
  display: flex;
  padding: 2px;
  border-radius: var(--default-b-r);
  background: var(--add-todo-bg);
}
.add-todo__input {
  width: 100%;
  border: none;
  padding: 12px;
  font-family: inherit;
  color: inherit;
  background-color: var(--default-layout-main-bg);
}
.add-todo__button {
  flex-shrink: 0;
  padding: 12px;
  background: rgba(0, 0, 0, 0);
  font-size: 0.8em;
  color: inherit;
  border: none;

  &:not(:disabled) {
    cursor: pointer;
  }
  &:disabled {
    color: grey;
  }
  &:not(:disabled):hover,
  &:not(:disabled):focus {
    background: rgba(0, 0, 0, 0.1);
  }
  &:not(:disabled):active {
    background: rgba(0, 0, 0, 0.2);
  }
}
</style>
