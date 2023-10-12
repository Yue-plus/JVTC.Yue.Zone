<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>刘悦阳-222050587-05-01</title>
    <style>
        table, tr, td {border: 1px solid black}
    </style>
</head>
<body>
<table>
    <% for(int i = 1; i <= 10; i++) { %>
    <tr>
        <% for(int j = 1; j <= i; j++) { %>
        <td><%= j + "*" + i + "=" + (i * j) %></td>
        <% } %>
    </tr>
    <% } %>
</table>
</body>
</html>
