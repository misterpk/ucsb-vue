<template>
    <div id="app">
        <div class="calculator">
            <div class="enterSpeed">
                <input
                    type="number"
                    class="speed"
                    @keyup="calculate"
                    @focus="$event.target.select()"
                    v-model="speedMiles"
                />
                miles
            </div>
            <div>Result: <b>{{ speedKilometers }}km</b></div>
            <div>
                <h4>Calculate in meters:</h4>
                <button @click="calculateMeters">Convert Now</button>
                <div>
                    <input class="speed" v-model="meters" /> meters
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "app",
    data() {
        return {
            speedMiles: 0,
            speedKilometers: 0,
            meters: 0
        };
    },
    methods: {
        calculateMeters() {
            this.meters = Math.round(this.speedKilometers * 1000);
        },
        calculate() {
            this.speedKilometers = (this.speedMiles * 1.60934).toFixed(2);
        }
    }
};
</script>

<style>
div {
    padding: 10px 0;
}
.calculator {
    width: 300px;
    margin: 20px auto;
    padding: 35px;
    background-color: #fff;
}
input.speed {
    width: 5em;
    display: inline-block;
}
</style>
