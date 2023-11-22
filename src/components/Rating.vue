<template>
    <div>
        <span @click="setNewRating(index)" :style="`color: ${colorPlainStars}`" v-for="(star, index) in rating">*</span>
        <span @click="setNewRating(index, false)" :style="`color: ${colorEmptyStars}`"
            v-for="(empty_star, index) in numberOfEmptyStars">-</span>
    </div>
</template>
  
<script>
export default {
    props: {
        rating: {
            type: Number,
            required: true
        },
        maxOfStars: {
            type: Number,
            default: 5
        },
        colorPlainStars: {
            type: String,
            default: "blue"
        },
        colorEmptyStars: {
            type: String,
            default: "red"
        }
    },
    data() {
        return {
            newRating: null,
        }
    },
    computed: {
        numberOfEmptyStars() {
            return this.maxOfStars - this.rating;
        }
    },
    methods: {
        setNewRating(index, is_plain_star = true) {
            this.newRating = is_plain_star ? index + 1 : this.rating + index + 1;
        }
    },
    watch: {
        newRating(newValue) {
            this.$emit('update', newValue);
        }
    }
}
</script>
  