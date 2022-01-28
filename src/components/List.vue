<template>
  <div class="body">
    <h1>Your order</h1>
    <div class="cardlist">
      <div v-for="item in items" :key="item.name" class="card">
        <div class="left">
          <div class="image">
            <div class="name">{{ item.name }}</div>
            <div class="price">{{ item.price }} CHF</div>
            <img :src="require(`@/assets/${item.image}`)" />
          </div>
        </div>
        <div class="right">
          <div id="plus" @click="add(item)">&plus;</div>
          <div id="amount">{{ item.count }}</div>
          <div id="minus" @click="substract(item)">&minus;</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      items: [
        { name: "Pancakes", price: "14.50", image: "pancakes.jpg", count: 0 },
        {
          name: "French breakfast",
          price: "22.50",
          image: "french.jpg",
          count: 0,
        },
        { name: "Muesli", price: "11.40", image: "muesli.jpg", count: 0 },
      ],
    };
  },
  watch: {
    items: {
      handler: function (newValue) {
        console.log(this.total(newValue));
        const event = new CustomEvent("ontotalvaluechange", {
          detail: this.total(newValue),
        });
        document.dispatchEvent(event);
      },
      deep: true,
    },
  },
  methods: {
    add(item) {
      if (item.count < 99) {
        item.count += 1;
      }
    },
    substract(item) {
      if (item.count > 0) {
        item.count -= 1;
      }
    },
    total(items) {
      let total = 0;
      items.forEach((i) => {
        total += i.price * i.count;
      });
      return total.toFixed(2);
    },
  },
};
</script>

<style scoped>
body h1 {
  width: 635px;
  text-align: left;
  margin: 60px auto 30px;
}
.card {
  display: flex;
  justify-content: space-between;
  width: 635px;
  height: 188px;
  margin: 30px auto;
  position: relative;
}
.left {
  align-content: center;
  width: 300px;
}
.right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 5px;
  font-weight: bold;
}
.image img {
  border-radius: 10px;
}
.name,
.price {
  color: white;
  width: 50%;
  text-align: left;
  padding: 2px 15px;
  position: absolute;
  left: 10px;
}
.name {
  font-weight: bold;
  font-size: 30px;
  bottom: 40px;
}
.price {
  font-size: 20px;
  bottom: 15px;
}
#plus,
#minus {
  font-weight: bold;
  font-size: 35px;
  padding: 0 10px;
  border-radius: 10px;
  background-color: #f6f5f6;
  border: 1px solid #e7e5e7;
}
#amount {
  font-size: 25px;
}
</style>
