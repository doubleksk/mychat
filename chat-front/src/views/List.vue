<template>
    <div class="list">
        <div class="left">
            分组区域
        </div>
        <div class="right">
            聊天区域
        </div>
    </div>
</template>

<script>
export default {
    props:['index']
}
</script>

<style>
.list{
    display: flex;
    flex-direction: row;
}
.left{
    height: 90vh;
    background: white;
    width: 23%;
    overflow-y: scroll;
    overflow-x: scroll;
}
.right{
    height: 90vh;
    background: rgba(236,236,236);
    flex-grow: 1;
    overflow: scroll;
}
</style>