# README

`@umijs/max` 模板项目，更多功能参考 [Umi Max 简介](https://next.umijs.org/zh-CN/docs/max/introduce)

# 代码提交规范

feat： 新增 feature

fix: 修复 bug

docs: 仅仅修改了文档，比如 README, CHANGELOG, CONTRIBUTE 等等

style: 仅仅修改了空格、格式缩进、逗号等等，不改变代码逻辑

refactor: 代码重构，没有加新功能或者修复 bug

perf: 优化相关，比如提升性能、体验

test: 测试用例，包括单元测试、集成测试等

chore: 改变构建流程、或者增加依赖库、工具等

revert: 回滚到上一个版本

# prisma 初始化，如果修改了 schema.prisma 配置需要重新执行以下语句

## 扫描 schema.prisma

npx prisma migrate dev --name init

## 生成客户端 Prisma Client

npx prisma generate
