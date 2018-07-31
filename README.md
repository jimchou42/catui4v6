# catui4v6

## PreBuild Package Download

[catui4v6.1.0.0801.war](http://10.25.38.82/gitlab/179163/catui4v6/blob/master/catui4v6.1.0.0801.war "catui4v6.1.0.0801.war")

## Run
本地启动需要jre/jdk 1.8

java -jar catui4v6.1.0.0801.war

> 需要指定启动端口，可以在后面增加-Dport参数，如：
java -jar catui4v6.1.0.0801.war -Dport=8082

> 数据以json格式，保存在${HOME}/.catui/webapp/cat/cat-ui-standalone/data路径
文件名为 ${pageId}.json

## Dependency

> cat-ui-standalone
需要先安装node.js

## Build
打包时通过maven plun实现以下过程：
* 构建cat-ui-standalone
* ant将cat-ui-standalone复制到catui4v6/src/main/resources/META-INF/resources下
* 编译catui4v6
* 打war包

