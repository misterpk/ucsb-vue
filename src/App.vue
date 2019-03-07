<template>
    <div id="app">
        <div class="calculator">
            <div class="enterSpeed">
                <input
                    type="number"
                    class="speed"
                    @keyup="calculate"
                    @change="calculate"
                    @focus="$event.target.select()"
                    v-model="speedMiles"
                />
                miles
            </div>
            <div>
                Result: <b>{{ speedKilometers }}km</b>
            </div>
            <div>
                <h4>Calculate in meters:</h4>
                <button @click="calculateMeters">Convert Now</button>
                <div>
                    <input class="speed" v-model="meters" />
                    meters
                </div>
            </div>
            <ExampleList></ExampleList>
            <button type="button" @click="toggleExample">Show / Hide Example Component</button>
            <div v-if="showExample">
                <ExampleComponent></ExampleComponent>
            </div>
            <div v-show="showExample">
                <ExampleComponent></ExampleComponent>
            </div>
        </div>
    </div>
</template>

<script>
import ExampleComponent from "./ExampleComponent.vue";
import ExampleList from "./ExampleList.vue";

export default {
    methods: {
        calculateMeters() {
            this.meters = Math.round(this.speedKilometers * 1000);
        },
        calculate() {
            this.speedKilometers = (this.speedMiles * 1.60934).toFixed(2);
        },
        toggleExample() {
            this.showExample = !this.showExample;
        }
    },
    data: () => {
        return {
            speedMiles: 1,
            speedKilometers: 1.61,
            meters: 1610,
            showExample: false
        };
    },
    components: {
        ExampleComponent,
        ExampleList
    }
};
</script>
<style lang="less">
@import "style.less";
</style>
