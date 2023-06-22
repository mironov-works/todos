<template>
  <div class="default-layout">
    <main class="default-layout__main">
      <slot />
    </main>
  </div>
</template>

<script></script>

<style>
@import url("@/styles/general.css");
.default-layout {
  height: 100%;
  padding: 40px 12px 20px;
  background: linear-gradient(0.25turn, #3111ff, #6270ff);
}
.default-layout__main {
  max-width: 500px;
  margin: 0 auto;
  padding: 24px 24px 48px;
  border-radius: 8px;
  color: #fff;
  background-color: #161a2b;
}
</style>
