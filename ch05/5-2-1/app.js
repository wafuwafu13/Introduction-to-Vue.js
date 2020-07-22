var MyButton = {
  template: `
    <button>
    <!-- 親コンポーネントで渡されたコンテンツに差し替えられる --> <slot>OK</slot>
    </button>
  `
  // <button text="送信する">
}
new Vue({
  el: '#app',
  components: {
    MyButton: MyButton
  }
})
