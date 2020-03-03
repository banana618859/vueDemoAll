/*
 * @Descripttion: 
 * @Author: yizheng.yuan
 * @Date: 2020-02-29 20:02:18
 * @LastEditors: yizheng.yuan
 * @LastEditTime: 2020-02-29 20:16:42
 */

import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import koLocale from 'element-ui/lib/locale/lang/ko'
import locale from 'element-ui/lib/locale'
import zh from '../langs/zh'
import en from '../langs/en'
import ko from '../langs/ko'
Vue.use(VueI18n)
const messages = {
  en: Object.assign(en, enLocale),
  zh: Object.assign(zh, zhLocale),
  ko: Object.assign(ko, koLocale),
}
const i18n = new VueI18n({
  locale: localStorage.getItem('locale') || 'zh',
  messages, // set locale messages
})
locale.i18n((key, value) => i18n.t(key, value))
export default i18n;