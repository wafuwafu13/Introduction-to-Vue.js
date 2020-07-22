Vue.directive('fallback-image', {
  bind: function (el, binding) { // カスタムディレクティブが紐づけられたときに実行される関数 el = img要素
    el.addEventListener('error', function () {
      // 画像のロードに失敗て error が発火したら実行される処理
      el.src = 'https://dummyimage.com/400x400/000/ffffff.png&text=no+image'
    })
  },
  update: function (el, binding) {
    console.log('update', binding)
  }
})
var vm = new Vue({
  el: '#app',
  data: function () {
    return {
      altText: 'logo'
    }
  }
})