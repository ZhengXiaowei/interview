import axios from 'axios'

export function getQuestionList() {
  return axios.get('/api/getQuestions').then((res) => {
    return Promise.resolve(res)
  })
}