<template>
    <div ref="resizeObserverWrapper" style="display: contents;">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ResizeObserver',
    props: {
        index: {
            type: Number,
            required: true
        },
        // Selector or DOM element to observe
        target: {
            type: [String, Object],
            required: true
        },
        // Function to execute on resize
        callback: {
            type: Function,
            required: true
        }
    },
    mounted() {
        this.setupObserver();
    },
    beforeDestroy() {
        this.teardownObserver();
    },
    methods: {
        setupObserver() {
            const targetElement = typeof this.target === 'string'
                ? document.querySelector(this.target)
                : this.target;

            if (targetElement) {
                this.resizeObserver = new ResizeObserver(entries => {
                    for (let entry of entries) {
                        const { width, height } = entry.contentRect;
                        this.callback({ width, height }, this.index);
                    }
                });
                this.resizeObserver.observe(targetElement);
            } else {
                console.warn('ResizeObserver target not found.');
            }
        },
        teardownObserver() {
            if (this.resizeObserver) {
                this.resizeObserver.disconnect();
            }
        }
    }
};
</script>