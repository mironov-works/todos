<template>
  <div class="default-layout">
    <main class="default-layout__main">
      <slot />
    </main>
  </div>
</template>

<script></script>

<style lang="scss">
.default-layout {
  height: 100%;
  padding: 40px 12px 20px;
  background: var(--default-layout-bg);

  .default-layout__main {
    max-width: 500px;
    margin: 0 auto;
    padding: 24px 24px 48px;
    border-radius: var(--default-b-r);
    color: var(--default-fonts-color);
    background-color: var(--default-layout-main-bg);
  }
}
</style>
