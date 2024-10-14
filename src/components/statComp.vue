<template>
    <div class="bg-base-100">
        <div class="">
            <div class="grid grid-rows-2">
                <div class="grid grid-cols-2 justify-between">
                    <span>{{ title }}</span>
                    <span class="text-right text-xs text-gray-500">{{ subtitle }}</span>
                </div>
                <div class="grid grid-cols-2 justify-between">
                    <h2 class="card-title">{{ amount }}</h2>
                    <span class="material-symbols-outlined text-right text-primary">
                        {{ icon }}
                    </span>
                </div>

            </div>


        </div>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: true
        },
        amount: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        }
    }
}
</script>
<style></style>