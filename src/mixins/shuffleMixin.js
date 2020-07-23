const ShuffleMixin = {
    methods: {
        shuffleArray: (arr) => arr
            .map(a => [Math.random(), a])
            .sort((a, b) => a[0] - b[0])
            .map(a => a[1])
    }
}
//打乱问题答案，因为远程返回的答案有规律。mixins 是混入的意思，可以混入到我们的某个页面或组件中，补充页面或组件功能，便于复用。
export default ShuffleMixin