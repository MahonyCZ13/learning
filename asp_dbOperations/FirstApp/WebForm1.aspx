<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="FirstApp.WebForm1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <asp:Repeater ID="users" runat="server">
        <HeaderTemplate>
            <table border="1">
                <tr>
                    <th>ID</th>
                    <th>User</th>
                </tr>
        </HeaderTemplate>
        <ItemTemplate>
            <tr>
                <td>
                    <asp:Label ID="lblID" runat="server" Text='<%# Eval("ID") %>'></asp:Label>
                </td>
                <td>
                    <asp:Label ID="lblUser" runat="server" Text='<%# Eval("userName") %>'></asp:Label>
                </td>
            </tr>
        </ItemTemplate>
        <FooterTemplate>
            </table>
        </FooterTemplate>
    </asp:Repeater>
    <form id="form1" runat="server">
        <div>
            <table>
                <tr>
                    <td class="inpur-data">ID</td>
                    <td class="input-data"><asp:TextBox ID="TxtID" runat="server"></asp:TextBox></td>
                </tr>
                <tr>
                    <td class="input-data">User name</td>
                    <td class="input-data"><asp:TextBox ID="TxtUser" runat="server"></asp:TextBox></td>
                </tr>
            </table>
        </div>
        <div id="save"><asp:Button ID="SubmitButton" runat="server" Text="Save" OnClick="addUsers" /></div>
    </form>
</body>
</html>
