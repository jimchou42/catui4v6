<template>
<span>
&lt;!DOCTYPE html&gt;
&lt;%@ page contentType="text/html; charset=UTF-8"%&gt;
&lt;%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%&gt;
&lt;%@ taglib prefix="EF" tagdir="/WEB-INF/tags/EF"%&gt;
&lt;c:set var="ctx" value="${pageContext.request.contextPath}"/&gt;
&lt;EF:EFPage prefix="{{attributes.prefix}}" title="{{attributes.title}}"&gt;
<slot></slot>
&lt;/EF:EFPage&gt;
</span>
</template>

<script>
export default {
  name: 'CatPageTag',
  props: {
    attributes: Object,
    config: Object,
    children: Array
  }
}
</script>

<style scoped>
</style>
