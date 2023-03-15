<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        getNote() {
            return true;
        }
    }
}
</script>
<template>
    <el-empty v-if='getNote()' description="暂无笔记" style="flex-grow:1" />
</template>