# catui4v6

## Dependency

> cat-ui-standalone
需要先安装node.js

## Build
打包时通过maven plun实现以下过程：
* 构建cat-ui-standalone
* ant将cat-ui-standalone复制到catui4v6/src/main/resources/META-INF/resources下
* 编译catui4v6
* 打成war包

## Run
本地启动需要jdk 1.8

java -jar catui4v6.1.0.0801.war [-Dport=8080]
