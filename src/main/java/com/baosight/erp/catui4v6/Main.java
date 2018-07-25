package com.baosight.erp.catui4v6;

import java.io.File;
import java.io.IOException;
import java.net.InetAddress;
import java.net.Socket;
import java.net.URL;
import java.net.UnknownHostException;
import java.security.ProtectionDomain;

import org.eclipse.jetty.jsp.JettyJspServlet;
//import org.mortbay.jetty.Server;
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.servlet.ServletHolder;
import org.eclipse.jetty.util.log.Log;
//import org.mortbay.jetty.webapp.WebAppContext;
import org.eclipse.jetty.webapp.WebAppContext;

/**
 * Project:catui4v6
 * <p>
 * Title:Main.java
 * </p>
 * <p>
 * Description:内嵌web服务器
 * </p>
 * 
 * <p>
 * Copyrigth:Baosight Software LTD.co Copyright (c) 2018
 * </p>
 * .
 * 
 * @version 1.0
 * @since 1.8
 * @author 周吉
 * @history 2018-07-24 周吉 create
 */
public class Main {

	private static final int DEFAULT_PORT = 8080;

	public static void main(String[] args) throws Exception {

		// 获取端口参数
		String portStr = "";
		int aport = DEFAULT_PORT;
		for (int i = 0; i < args.length; i++) {
			if (args[i].startsWith("-Dport=")) {
				portStr = args[i].replaceAll("-Dport=", "");
				break;
			}
		}
		if (!"".equals(portStr)) {
			try {
				aport = Integer.parseInt(portStr);
			} catch (Exception e) {
				aport = DEFAULT_PORT;
			}
		}

		String contextPath = "/";

		int port = Integer.getInteger("port", aport);

		// 检查端口是否被占用
		try {
			if (isPortUsing("", port)) {
				System.out.println("port:" + port + " is USING");
				System.exit(100);
			}
		} catch (Exception e) {

		}

		// 创建web服务
		Server server = createServer(contextPath, port);
		//System.out.println("catui4v6 is running here: http://localhost:"+port);

		// 启动web服务
		try {
			server.start();
			Log.getRootLogger().info("catui4v6 is running here: http://localhost:"+port);
			
			server.join();
		} catch (Exception e) {
			e.printStackTrace();
			System.exit(100);
		}
	}

	/**
	 * 创建web服务
	 * 
	 * @param contextPath
	 * @param port
	 * @return
	 */
	private static Server createServer(String contextPath, int port) {
		// use Eclipse JDT compiler
		System.setProperty("org.apache.jasper.compiler.disablejsr199", "true");

		Server server = new Server(port);
		server.setStopAtShutdown(true);

		ProtectionDomain protectionDomain = Main.class.getProtectionDomain();
		URL location = protectionDomain.getCodeSource().getLocation();

		String warFile = location.toExternalForm();
		WebAppContext context = new WebAppContext(warFile, contextPath);
		
		context.setServer(server);

		// 设置work dir,war包将解压到该目录，jsp编译后的文件也将放入其中。
		//String currentDir = new File(location.getPath()).getParent();
		String currentDir = System.getProperty("user.home");

		File workDir = new File(currentDir, ".catui");
		
		context.setPersistTempDirectory(true);
		context.setTempDirectory(workDir);
		context.setAttribute("org.eclipse.jetty.webapp.basetempdir", workDir);
		context.setCopyWebDir(true);
		context.setExtractWAR(true);
		context.setInitParameter("fork", "false");
		context.setInitParameter("xpoweredBy", "false");
		context.setInitParameter("compilerTargetVM", "1.8");
		context.setInitParameter("compilerSourceVM", "1.8");
		context.setInitParameter("keepgenerated", "true");
		//context.addServlet(jspServletHolder(), "*.jsp");
		//context.setPersistTempDirectory(true);

		server.setHandler(context);
		return server;
	}
	/*
    private static ServletHolder jspServletHolder() {
        ServletHolder holderJsp = new ServletHolder("jsp", JettyJspServlet.class);
        holderJsp.setInitOrder(0);
        holderJsp.setInitParameter("logVerbosityLevel", "DEBUG");
        holderJsp.setInitParameter("fork", "false");
        holderJsp.setInitParameter("xpoweredBy", "false");
        holderJsp.setInitParameter("compilerTargetVM", "1.8");
        holderJsp.setInitParameter("compilerSourceVM", "1.8");
        holderJsp.setInitParameter("keepgenerated", "true");
        return holderJsp;
    }
	*/

	/**
	 * 检查端口是否被占用
	 * 
	 * @param host
	 * @param port
	 * @return
	 * @throws UnknownHostException
	 */
	private static boolean isPortUsing(String host, int port) throws UnknownHostException {
		boolean flag = false;
		InetAddress theAddress = InetAddress.getByName(host);
		try {
			@SuppressWarnings({ "unused", "resource" })
			Socket socket = new Socket(theAddress, port);
			flag = true;
		} catch (IOException e) {

		}
		return flag;
	}
}
