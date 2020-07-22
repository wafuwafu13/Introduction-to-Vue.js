new Vue({
    // ビュー
    template: `
    <div>
      <p>{{ count }}</p>
      <button v-on:click="increment">+</button>
    </div>
    `,

    // 状態をビューに渡す
    data: store.state,

    methods: {
        // 更新処理をコンポーネントの中で書く 同じような更新を別コンポーネントから行いたい場合に再利用することが難しくなる
        increment() {
            store.state.count += 1
        }
    }
}) 