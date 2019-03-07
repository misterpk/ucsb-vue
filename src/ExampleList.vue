<template>
    <div>
        <ul>
            <li v-for="item in list">
                <p>{{ item }}</p>
            </li>
        </ul>
        <div>
            <div>Add Item: <input type="text" v-model="tempItem" /></div>
            <button type="button" @click="addItem">Click me to change someVariable</button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        addItem() {
            this.list.push(this.tempItem);
            this.tempItem = "";
        }
    },
    data: () => {
        return {
            list: ["One", "Two"],
            tempItem: ""
        };
    }
};
</script>
