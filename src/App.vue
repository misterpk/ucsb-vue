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
        </div>
    </div>
</template>

<script>
var data = {
    speedMiles: 1,
    speedKilometers: 1.61,
    meters: 1610
};
export default {
    methods: {
        calculateMeters() {
            this.meters = Math.round(this.speedKilometers * 1000);
        },
        calculate() {
            this.speedKilometers = (this.speedMiles * 1.60934).toFixed(2);
        }
    },
    data: () => data
};
</script>
<style lang="less">
@import "style.less";
</style>
