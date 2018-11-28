using Microsoft.EntityFrameworkCore.Migrations;

namespace TrelloClone.Migrations
{
    public partial class CorrectConnections : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Columns_Columns_ColumnId",
                table: "Columns");

            migrationBuilder.DropIndex(
                name: "IX_Columns_ColumnId",
                table: "Columns");

            migrationBuilder.DropColumn(
                name: "ColumnId",
                table: "Columns");

            migrationBuilder.CreateIndex(
                name: "IX_Items_ColumnId",
                table: "Items",
                column: "ColumnId");

            migrationBuilder.AddForeignKey(
                name: "FK_Items_Columns_ColumnId",
                table: "Items",
                column: "ColumnId",
                principalTable: "Columns",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Items_Columns_ColumnId",
                table: "Items");

            migrationBuilder.DropIndex(
                name: "IX_Items_ColumnId",
                table: "Items");

            migrationBuilder.AddColumn<int>(
                name: "ColumnId",
                table: "Columns",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Columns_ColumnId",
                table: "Columns",
                column: "ColumnId");

            migrationBuilder.AddForeignKey(
                name: "FK_Columns_Columns_ColumnId",
                table: "Columns",
                column: "ColumnId",
                principalTable: "Columns",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
