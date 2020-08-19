/**
 * @description
 *  pop
 *  push
 *  peek
 */
class Stack {
    constructor() {
        this.stack = []
    }

    isEmpty() {
        return this.stack.length === 0
    }

    pop() {
        const removedElement = this.stack.pop() 
        return removedElement ? removedElement : null
    }

    push(element) {
        this.stack.push(element)
    }

    peek() {
        return this.stack.length > 0 ? this.stack[this.stack.length - 1] : null
    }

    toString() {
        return this.stack.join(',')
    }

    toArray() {
        return this.stack
    }
}

module.exports = Stack