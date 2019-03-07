<template>
    <div>
        <p>I am an example, here is my variable:</p>
        <p>{{ someVariable }}</p>
        <div>
            <button type="button" @click="someClick">Click me to change someVariable</button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        someClick() {
            this.someVariable = "" + new Date().toDateString() + " - " + Date.now();
        }
    },
    data: () => {
        return {
            someVariable: "I am a variable with the time"
        };
    }
};
</script>
