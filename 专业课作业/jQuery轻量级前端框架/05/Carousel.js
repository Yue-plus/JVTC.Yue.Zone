// 参考 JavaScript 类：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes
class Carousel {
    #el
    #arr
    #index = 0
    #autoplay = false
    #onHover = false

    /**
     * @param el - HTMLElement
     * @param arr - Array<string>
     * @param autoplay - number 自动切换间隔毫秒数；设为 0 不会自动切换；
     */
    constructor(el, arr, autoplay) {
        this.#el = el
        this.#arr = arr
        this.#autoplay = autoplay

        el.addEventListener("mouseenter", () => this.#onHover = true)
        el.addEventListener("mouseleave", () => this.#onHover = false)

        el.style.backgroundRepeat = "no-repeat"
        el.style.backgroundPosition = "center"
        el.style.backgroundSize = "contain"
        this.#update()

        // 上一张
        const PrevButton = document.createElement('button')
        PrevButton.appendChild(document.createTextNode("上一张"))
        PrevButton.addEventListener("click", () => this.prev())
        this.#el.appendChild(PrevButton)

        // 设为第 [index] 张图片
        for (let i = 0; i < this.#arr.length; i++) {
            const IndexButton = document.createElement('button')
            IndexButton.appendChild(document.createTextNode(i))
            IndexButton.addEventListener("click", () => this.setIndex(i))
            this.#el.appendChild(IndexButton)
        }

        // 下一张
        const NextButton = document.createElement('button')
        NextButton.appendChild(document.createTextNode("下一张"))
        NextButton.addEventListener("click", () => this.next())
        this.#el.appendChild(NextButton)

        // 自动播放
        if (autoplay > 0) setInterval(() => {
            if (!this.#onHover) this.next()
        }, autoplay)
    }

    /**
     * 更新轮播图状态
     */
    #update() {
        this.#el.style.backgroundImage = `url(${this.#arr[this.#index]})`
    }

    /**
     * 下一张图片
     */
    next() {
        if (++this.#index > this.#arr.length - 1) this.#index = 0
        this.#update()
    }

    /**
     * 上一张图片
     */
    prev() {
        if (--this.#index < 0) this.#index = this.#arr.length - 1
        this.#update()
    }

    /**
     * 设为第 [index] 张图片
     * @param index 整数，不能超过数组范围
     */
    setIndex(index) {
        if (index < 0 || index > this.#arr.length - 1) throw new Error("索引超出数组范围！")
        else this.#index = index
        this.#update()
    }
}
