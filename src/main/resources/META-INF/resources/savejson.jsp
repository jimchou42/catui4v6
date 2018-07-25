<!DOCTYPE html>
<%@ page contentType="text/html; charset=UTF-8"%>
<h1><% out.println("Hello World"); %></h1><br />
<h1><% out.println("contextPath:"+request.getServletContext().getRealPath("/")); %></h1>