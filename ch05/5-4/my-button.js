var MyButton = {
  props: ['href', 'tag'],
  render: function (createElement) {
    var tag = this.tag || (this.href ? 'a' : 'button')
    return createElement(tag, {
      attrs: {
        href: this.href || '#'
      }
    }, this.$slots.default)
  }
}
new Vue({
  el: '#app',
  render: function (createElement) {
    return createElement(MyButton, { // 生成される要素の要素名
      attrs: {  // オプションを含むデータオブジェクト(コンポーネントまたは要素の属性)
        href: 'https://vuejs.org/'
      },
      props: {
        tag: 'a'
      }
    }, 'anchor') // 子ノード 文字列の場合テキストコンテンツとしてレンダリングされる
  }
})
