<template>
  <div class="empty">
    <div class="title"><slot name="title">No se han encontrado elementos</slot></div>
    <div class="description"><slot name="description">En la actualidad no tenemos artículos para mostrar.</slot></div>
  </div>
</template>

<script>
export default {
  name: 'Empty'
}
</script>
<style lang="scss" scoped>
  .empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
    background: #FFFFFF;
    border: 1px solid #F1F3F5;
    box-sizing: border-box;
    border-radius: 4px;
    .title {
      font-weight: 500;
      font-size: 20px;
      line-height: 32px;
      color: #272727;
      margin: 16px 0px;
    }
    .description {
      font-weight: 300;
      font-size: 14px;
      line-height: 18px;
      color: #272727;
      margin: 16px 0px;
    }
  }
</style>
