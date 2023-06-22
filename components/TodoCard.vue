<template>
  <div class="todo-card" :class="cardModifyClass">
    <input
      class="todo-card__input"
      type="checkbox"
      v-model="props.todo.isChecked"
    />
    <span
      class="todo-card__message"
      :class="{ 'todo-card__input--checked': props.todo.isChecked }"
      >{{ todo.description }}</span
    >
    <button class="todo-card__button" @click="remove">
      <IconTrash :width="widthIconTrash" :height="heightIconTrash" />
    </button>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";
import IconTrash from "@/components/IconTrash.vue";

const widthIconTrash = "24px";
const heightIconTrash = "24px";

const emit = defineEmits(["remove"]);
const props = defineProps({
  todo: {
    type: Object,
    default: {},
    requred: true,
  },
});

const remove = () => {
  emit("remove", props.todo.id);
};

const cardModifyClass = computed(() => {
  return `todo-card--bg-` + props.todo.color;
});
</script>

<style>
.todo-card {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 6px;
}
.todo-card--bg-orange {
  background: linear-gradient(#ff7514, #ff5612);
}
.todo-card--bg-violet {
  background: linear-gradient(#600cff, #9900fa);
}
.todo-card--bg-blue {
  background: linear-gradient(#149dff, #127cff);
}
.todo-card--bg-pink {
  background: linear-gradient(#ff0cec, #fa008a);
}
.todo-card__input--checked {
  text-decoration: line-through;
  color: grey;
}
.todo-card__button {
  margin-left: auto;
  border: none;
  background: rgb(0, 0, 0, 0);
  padding: 6px;
}
.todo-card__button:hover,
.todo-card__button:focus {
  background: rgb(0, 0, 0, 0.1);
  cursor: pointer;
  border-radius: 6px;
}
</style>
