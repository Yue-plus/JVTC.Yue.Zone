<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>刘悦阳-222050587-05-02</title>
</head>
<body>
<form action="02.jsp" method="post">
    行数：<input type="text" name="rows"><br/>
    列数：<input type="text" name="cols"><br/>
    <input type="submit" value="生成表格">
</form>

<%
    String rowsStr = request.getParameter("rows");
    String colsStr = request.getParameter("cols");
    if(rowsStr != null && colsStr != null) {
        int rows = Integer.parseInt(rowsStr);
        int cols = Integer.parseInt(colsStr);
%>
<table border="1">
    <% for(int i = 1; i <= rows; i++) { %>
    <tr>
        <% for(int j = 1; j <= cols; j++) { %>
        <td><%= i*j %></td>
        <% } %>
    </tr>
    <% } %>
</table>
<%
    }
%>

</body>
</html>
