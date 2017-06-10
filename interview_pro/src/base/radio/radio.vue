<template>
    <div class="radio">
        <label v-for="item in radioItems">
            <input type="radio" name="radiolist" :value="item.answer" v-model="radioSelected" /> {{item.answer}}
        </label>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    props: {
        radioItems: {
            type: [Array, Object],
            default: []
        },
        qNum: {
            type: [String, Number],
            default: '1'
        }
    },
    data() {
        return {
            radioSelected: ''
        }
    },
    methods: {
        ...mapActions(['dealObj'])
    },
    watch: {
        radioSelected(newSelected) {
            this.dealObj({
                obj: newSelected,
                objIndex: this.qNum
            })
        }
    }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable'
.radio
    label
        display block
        line-height 30px
        input
            vertical-align middle
            user-select none
            appearance none
            width 20px
            height 20px
            border-radius 50%
            background #ddd
            position relative
            &:checked:after
                content ''
                position absolute
                width 10px
                height 10px
                background $color-theme
                border-radius 50%
                left 50%
                top 50%
                margin-top -5px
                margin-left -5px
</style>
