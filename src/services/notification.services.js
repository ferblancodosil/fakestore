import Vue from 'vue'
import { APP_NOTIFICATION_TIME } from '@/enviroment/global.enviroment.js'

const notify = ({ type = 'error', text = 'error' } = {}) => {
  Vue.notify({
    group: 'msgs',
    type,
    duration: APP_NOTIFICATION_TIME,
    text
  })
}

const progressStart = () => {
  this.$refs.topProgress.start()
}

const progressDone = () => {
  this.$refs.topProgress.done()
}

export default {
  notify,
  progressStart,
  progressDone
}
