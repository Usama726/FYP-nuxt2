<template>
    <div>
        <!-- <ul>
            <li v-for="(item, index) in items" :key="index">
                {{ item }}
                <button @click="removeItem(index)">Remove</button>
            </li>
        </ul> -->
        {{ getCounter }}
        <input v-model="newItem" type="text" />
        <button @click="addItem">Add Item</button>
    </div>
</template>
  
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    data() {
        return {
            newItem: 'Hello World'
        }
    },
    computed: {
        ...mapGetters(['getCounter'])
    },
    methods: {
        ...mapActions({
            'addToCart': 'cart/addToCart'
        }),
        addItem() {
            // this.$store.commit('addItem', this.newItem)
            // this.newItem = 'Hello World'
            this.addToCart(this.newItem)
        },
        removeItem(index) {
            this.$store.commit('removeItem', index)
        }
    }
}
</script>
  