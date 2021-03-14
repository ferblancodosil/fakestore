<template>
  <div class="detail">
    <img :src="this.image">
    <div class="info">
      <div class="title">{{this.title}}</div>
      <div class="description">{{this.description}}</div>
      <div class="category">{{this.category}}</div>
      <div class="price">{{this.price}} €</div>
      <slot name="button">
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GridProduct',
  props: {
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "@/theme/_variables.scss";
  .detail {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: start;
    padding: 24px;

    background: #FFFFFF;
    border: 1px solid #F1F3F5;
    box-sizing: border-box;
    border-radius: 4px;

    img {
      width: 160px;
      height: 160px;
      margin: auto;
    }

    .info {
      width: 100%;
      min-height: 100%;
      flex-direction: column;
      margin-left: 48px;
      .title {
        font-weight: 600;
        font-size: 20px;
        line-height: 32px;
        color: $title_item_color;
        margin: 16px 0px;
      }
      .description {
        font-weight: 300;
        font-size: 14px;
        line-height: 18px;
        color: $description_item_color;
        margin: 16px 0px;
      }
      .category {
        font-weight: 600;
        font-size: 12px;
        line-height: 24px;
        letter-spacing: 0.005em;
        text-transform: uppercase;
        font-feature-settings: 'liga' off;
        color: $category_item_color;
        margin: 16px 0px;
      }
      .price {
        font-weight: 300;
        font-size: 18px;
        line-height: 24px;
        color: $price_item_color;
        margin: 16px 0px;
      }
      .button {
        img {
          width: 16px;
          height: 16px;
        }
        cursor: pointer;
        font-weight: 500;
        font-size: 12px;
        line-height: 24px;
        letter-spacing: 0.005em;
        text-transform: uppercase;
        font-feature-settings: 'liga' off;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 8px;
        height: 40px;
        border-radius: 4px;
        margin: 16px 0px;
        .text {
          margin: 0px 8px;
        }
      }
    }
  }

</style>
