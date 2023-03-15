
<template>
    <el-row gutter="20">
        <el-col :span="6">
            <el-card shadow="hover" @click="clickTreeNode">
                <el-input placeholder="输入关键字进行过滤" v-model="filterText">
                </el-input>
                <el-scrollbar max-height="600px">
                    <el-tree style="max-height: 350px;" class="filter-tree" :data="data" :props="defaultProps"
                        default-expand-all :filter-node-method="filterNode" ref="tree">

                        <template #default="{ node, data }">
                            <span class="custom-tree-node">
                                <span>{{ node.label }}</span>
                                <span>
                                    <a @click="append(data)"> 跳转 </a>
                                </span>
                            </span>
                        </template>

                    </el-tree>
                </el-scrollbar>

            </el-card>
            <el-card shadow="hover" style="margin-top: 20px;">
                <div class="dohistry" style="height:140px">

                    <el-button @click="add">Add Item</el-button>
                    <el-button @click="onDelete">Delete Item</el-button>
                </div>
            </el-card>
        </el-col>
        <el-col :span="18">
            <el-scrollbar max-height="600px" ref="page" style="scroll-bahavior: smooth;">

                <vue-pdf-embed width="1000" :page="pNum" :source="source1" ref="pdfDiv" />
                <!-- //内容 -->

            </el-scrollbar>
        </el-col>
    </el-row>
</template>
<script>
import { add } from 'lodash';
import pdfFile from '../assets/FX503VD.pdf'
import VuePdfEmbed from 'vue-pdf-embed'

export default {
    watch: {
        filterText(val) {
            this.$refs.tree.filter(val);
        }
    },

    methods: {
        goPdf(num) {
            this.$refs.pdfDiv.page = 10
        },
        goAnchor(id) {
            var anchor = document.getElementById(id);
            console.log(anchor)
            // chrome
            //document.body.scrollTop = anchor.offsetTop;
            // firefox
            // document.documentElement.scrollTop = anchor.offsetTop;
            // console.log(anchor.offsetTop)

            // this.$refs.page.setScrollTop(anchor.offsetTop)
            this.$refs.page.scrollTo({
                top: anchor.offsetTop,
                left: 0,
                behavior: 'smooth'
            })

            // safari
            //window.pageYOffset = anchor.offsetTop;
        },
        onDelete() {
            if (this.count > 0) {
                this.count--
            }
        },
        add() {
            //this.$refs.page.setScrollTop(70)//像素
            // this.goAnchor(9)
            this.pNum++
        },
        filterNode(value, data) {
            if (!value) return true;
            return data.label.indexOf(value) !== -1;
        },
        append(data) {
            console.log(data)
            const newChild = { id: id++, label: 'testtest', children: [] };
            if (!data.children) {
                this.$set(data, 'children', []);
            }
            data.children.push(newChild);
        },

        remove(node, data) {
            const parent = node.parent;
            const children = parent.data.children || parent.data;
            const index = children.findIndex(d => d.id === data.id);
            children.splice(index, 1);
        },
    },
    components: {
        VuePdfEmbed,
    },
    data() {

        return {
            pNum: 10,
            source1: pdfFile,
            filterText: '',
            count: 23,
            data: [{
                id: 1,
                label: '一级 1',
                children: [{
                    id: 4,
                    label: '二级 1-1',
                    children: [{
                        id: 9,
                        label: '三级 1-1-1'
                    }, {
                        id: 10,
                        label: '三级 1-1-2'
                    }]
                }]
            }, {
                id: 2,
                label: '一级 2',
                children: [{
                    id: 5,
                    label: '二级 2-1'
                }, {
                    id: 6,
                    label: '二级 2-2'
                }]
            }, {
                id: 3,
                label: '一级 3',
                children: [{
                    id: 7,
                    label: '二级 3-1'
                }, {
                    id: 8,
                    label: '二级 3-2'
                }]
            }, {
                id: 11,
                label: '一级 4',
                children: [{
                    id: 12,
                    label: '二级 4-1'
                }, {
                    id: 13,
                    label: '二级 4-2'
                }, {
                    id: 14,
                    label: '二级 4-3'
                }, {
                    id: 15,
                    label: '二级 4-4'
                }]
            }],
            defaultProps: {
                children: 'children',
                label: 'label'
            }
        };
    }
};
</script>
<style>
.page {
    height: 500px;
}

.scrollbar-demo-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    margin: 10px;
    text-align: center;
    border-radius: 4px;
    background: var(--el-color-primary-light-9);
    color: var(--el-color-primary);
}

.custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
}
</style>
