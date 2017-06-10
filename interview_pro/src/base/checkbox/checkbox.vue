<template>
    <div class="checkbox">
        <label v-for="item in checkItems">
            <input type="checkbox" name="answerList" :value="item.answer" v-model="selectedList" /> {{item.answer}}
        </label>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    props: {
        checkItems: {
            type: Array,
            default: []
        },
        qNum: {
            type: [String, Number],
            default: '1'
        }
    },
    data() {
        return {
            selectedList: []
        }
    },
    methods: {
        ...mapActions(['dealObj'])
    },
    watch: {
        selectedList(newSelected) {
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
.checkbox
    label
        display block
        line-height 30px
        input
            vertical-align middle
</style>
