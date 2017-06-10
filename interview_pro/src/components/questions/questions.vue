<template>
  <div class="questions-page">
    <div class="page-title">
      <h1 class="text" v-html="title"></h1>
    </div>
    <p class="page-intro" v-html="intro"></p>
    <div class="question-list">
      <template v-for="(item,index) in questionList">
        <question-list :questionObj="item" :qNum="index+1"></question-list>
      </template>
    </div>
    <div class="btn-box">
      <button type="button" class="submitBtn" @click="submit">立即提交</button>
    </div>
    <div class="show-answers" v-show="showAnswers.length">
      <p class="show-answer-box">您的答案为：</p>
      <ul>
        <li class="answer-item" v-for="(answer,i) in showAnswers" >
          <p class="q-title">问题{{i+1}}</p>
          <p class="q-answer" v-html="normalize(answer.aObj)"></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import QuestionList from 'base/questions-list/question-list'
import { getQuestionList } from 'api/getQuestions'
import { normalizeQuestionList } from 'common/js/question'
import { OK_CODE } from 'api/config'
import { mapGetters, mapMutations } from 'vuex'
export default {
  components: {
    QuestionList
  },
  created() {
    this._getQuestions()
  },
  computed: {
    ...mapGetters(['answers'])
  },
  data() {
    return {
      questionList: [],
      title: '',
      intro: '',
      showAnswers: []
    }
  },
  methods: {
    submit() {
      if (!this.answers.length) {
        alert('请作答')
        return
      }
      this.showAnswers = this.answers
      this.resetAll()
    },
    normalize(text) {
      if (typeof text === 'string') {
        return text
      } else {
        let textArr = ''
        for (let key in text) {
          textArr += text[key] + '<br/>'
        }
        return textArr.substring(0, textArr.length - 1)
      }
    },
    ...mapMutations({
      resetAll: 'RESET_ALL'
    }),
    _getQuestions() {
      getQuestionList().then((res) => {
        if (res.data.code === OK_CODE) {
          const getRes = res.data.data
          this.questionList = getRes.questions
          this.title = getRes.name
          this.intro = getRes.introduce
        }
      })
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable'
.questions-page
  width 80%
  margin 0 auto
  padding 40px 0
  position relative
  .page-title
    .text
      font-size $font-size-large-x
      text-align center
      padding 20px 0
  .page-intro
    text-align center
    font-size $font-size-medium-x
  .question-list
    margin-top 40px
  .btn-box
    text-align center
    margin-top 40px
    .submitBtn
      width 180px
      border none
      padding 10px
      font-size $font-size-medium
      color $color-background
      background $color-theme
      border-radius 4px
  .show-answers
    margin-top 30px
    .show-answer-box
      font-size $font-size-medium-x
      margin-bottom 20px
    .answer-item
      line-height 30px
      padding-left 2em
      .q-answer
        color $color-theme
        padding-left 2em
</style>
