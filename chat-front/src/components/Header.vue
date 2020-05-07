<template>
    <div class="header">
        <div class="set">
            <div class="setting">
                <el-dropdown trigger="click">
                <span class="el-dropdown-link" style="color:white;font-weight:600">
                    <i class="el-icon-setting" style="font-size: larger; cursor: pointer;"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>
                        <i class="el-icon-remove-outline"></i>好友黑名单
                    </el-dropdown-item>
                    <el-dropdown-item>
                        <i class="el-icon-circle-close"></i>退出({{username}})
                    </el-dropdown-item>
                </el-dropdown-menu>
                </el-dropdown>
            </div>
            <div class="hello">
                Hi, welcome {{username}}
            </div>
            <div class="add">
                <el-dropdown trigger="click">
                <span class="el-dropdown-link" style="color:white;font-weight:600">
                    <i class="el-icon-plus" style="font-size: larger; cursor: pointer;"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>
                        <i class="el-icon-view"></i>添加好友
                    </el-dropdown-item>
                    <el-dropdown-item>
                        <i class="el-icon-circle-plus-outline"></i>创建群组
                    </el-dropdown-item>
                    <el-dropdown-item>
                        <i class="el-icon-search"></i>加入群组
                    </el-dropdown-item>
                </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  },
  data () {
    return {
      username: '康康'
    }
  }
}
</script>

<style>
.header {
  position: fixed;
  top: 0;
  width: 100vw;
  height: 5vh;
  background-color: #353b48;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.set {
  width: 95vw;
  height: 3vh;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* background-color: black; */
}
.hello{
  font-size: 120%;
  font-style:italic;
}
</style>
