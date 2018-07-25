<%@ page contentType="text/html; charset=UTF-8"%>
<%@ page import="java.io.BufferedWriter" %>
<%@ page import="java.io.FileWriter" %>
<%@ page import="java.io.File" %>
<%@ page import="java.io.IOException" %><%
	String baseDir = request.getServletContext().getRealPath("/");
	System.out.println("baseDir:"+baseDir);
	String data = request.getParameter("data");
	String pageid = request.getParameter("pageid");
	if(data==null||"".equals(data)) {
		out.print("{\"status\":\"error\", \"msg\":\"data empty\"}");
	} else if(pageid==null||"".equals(pageid)) {
		out.print("{\"status\":\"error\", \"msg\":\"pageid empty\"}");
	} else {
		String fileName = baseDir+File.separator+
				"cat"+File.separator+
				"cat-ui-standalone"+File.separator+
				"data"+File.separator+
				pageid+".json";
		try {
			BufferedWriter buff=new BufferedWriter(new FileWriter(fileName));
			buff.write(data);
			buff.close();
			System.out.println("pageid:"+pageid);
			System.out.println("data:"+data);
			out.print("{\"status\":\"success\", \"data\":"+data+"}");
			
		} catch (IOException e) {
			out.print("{\"status\":\"error\", \"msg\":\""+e.getMessage()+"\"}");
		}	
	}
%>