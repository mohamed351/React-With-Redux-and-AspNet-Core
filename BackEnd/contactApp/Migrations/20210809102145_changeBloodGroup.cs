using Microsoft.EntityFrameworkCore.Migrations;

namespace contactApp.Migrations
{
    public partial class changeBloodGroup : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "BloadGroup",
                table: "People",
                newName: "BloodGroup");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "BloodGroup",
                table: "People",
                newName: "BloadGroup");
        }
    }
}
