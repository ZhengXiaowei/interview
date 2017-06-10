<template>
    <div class="answer-box">
        <div class="answer-list answer-text" :class="[focus?'hasFocusLine':'']" v-if="types==='text'">
            <textarea v-model="textAnswer" @focus="showLine" @blur="hideLine"></textarea>
        </div>
        <div class="answer-list" v-if="types==='singleSelection'">
            <radio-box :radioItems="answer" :qNum="qNum"></radio-box>
        </div>
        <div class="answer-list" v-if="types==='MultipleSelection'">
            <check :checkItems="answer" :qNum="qNum"></check>
        </div>
    </div>
</template>

<script>
import Check from 'base/checkbox/checkbox'
import RadioBox from 'base/radio/radio'
import { mapActions } from 'vuex'
export default {
    props: {
        types: {
            type: String,
            default: ''
        },
        answer: {
            type: Array,
            default(){
                return []
            }
        },
        qNum: {
            type: [String,Number],
            default: '1'
        }
    },
    components: {
        Check, RadioBox
    },
    data() {
        return {
            textAnswer: '',
            focus: false
        }
    },
    methods: {
        showLine() {
            if (this.focus) {
                return
            }
            this.focus = true
        },
        hideLine() {
            this.focus = false
        },
        ...mapActions(['dealObj'])
    },
    watch: {
        textAnswer(newVal){
            this.dealObj({
                obj: newVal,
                objIndex: this.qNum
            })
        }
    }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable'
.answer-box
    padding-left 40px
    margin-top 10px
    .answer-text
        position relative
        textarea
            width calc(100% - 22px)
            min-height 50px
            padding 10px
            resize none
            border none
            font-size $font-size-small
        &:before
            content ''
            width 0%
            height 2px
            background $color-theme
            position absolute
            bottom 0
            left 50%
            margin-left @width
            transition all 0.5s
            z-index 99
        &:after
            content ''
            width 100%
            height 2px
            background #ddd
            position absolute
            bottom 0
            left 0
            z-index 9
        &.hasFocusLine:before
            width 100%
            margin-left -(@width/2)
</style>
