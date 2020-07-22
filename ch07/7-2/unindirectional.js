const store = {
    // 状態
    state: {
        count: 0
    },

    // 更新処理
    increment() {
        this.state.count += 1
    }
}

new Vue({
    // ビュー
    template: `
    <div>
      <p>{{ count }}</p>
      <button v-on:click="increment">+</button>
    </div>
    `,

    // 状態をビューに渡す
    data: store.data,

    methods: {
        // 更新処理を呼び出す
        increment() {
            store.increment()
        }
    }
})