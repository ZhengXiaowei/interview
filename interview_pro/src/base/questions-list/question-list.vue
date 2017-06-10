<template>
  <div class="question-item">
    <div class="q-item-name">Q{{qNum+'：'+questionObj.question}}</div>
    <answer v-if="questionObj.type!=='custom'" :types="questionObj.type" :answer="questionObj.answers" :qNum="qNum"></answer>
    <template v-else v-for="(subItem,i) in questionObj.answers">
      <div class="q-item-name sub-q-item">{{i+1+'：'+subItem.question}}</div>
      <answer :types="subItem.type" :answer="subItem.answers" :qNum="qNum+'-'+(i+1)"></answer>
    </template>
  </div>
</template>

<script>
import Answer from 'base/answer/answer'
export default {
  components: {
    Answer
  },
  props: {
    qNum: {
      type: [String,Number],
      default: '1'
    },
    questionObj: {
      type: [Array, Object],
      default: []
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable'
.question-item
  margin-top 20px
  .sub-q-item
    padding-left 40px
    margin-top 20px
</style>
