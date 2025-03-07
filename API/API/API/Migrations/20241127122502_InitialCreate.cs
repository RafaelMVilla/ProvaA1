﻿using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace API.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Categorias",
                columns: table => new
                {
                    CategoriaId = table.Column<string>(type: "TEXT", nullable: false),
                    Nome = table.Column<string>(type: "TEXT", nullable: true),
                    CriadoEm = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Categorias", x => x.CategoriaId);
                });

            migrationBuilder.CreateTable(
                name: "Tarefas",
                columns: table => new
                {
                    TarefaId = table.Column<string>(type: "TEXT", nullable: false),
                    Titulo = table.Column<string>(type: "TEXT", nullable: true),
                    Descricao = table.Column<string>(type: "TEXT", nullable: true),
                    CriadoEm = table.Column<DateTime>(type: "TEXT", nullable: false),
                    CategoriaId = table.Column<string>(type: "TEXT", nullable: true),
                    Status = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tarefas", x => x.TarefaId);
                    table.ForeignKey(
                        name: "FK_Tarefas_Categorias_CategoriaId",
                        column: x => x.CategoriaId,
                        principalTable: "Categorias",
                        principalColumn: "CategoriaId");
                });

            migrationBuilder.InsertData(
                table: "Categorias",
                columns: new[] { "CategoriaId", "CriadoEm", "Nome" },
                values: new object[,]
                {
                    { "39be53a2-fc09-4b6a-bafa-18a6a23c8f6e", new DateTime(2024, 11, 30, 9, 25, 1, 926, DateTimeKind.Local).AddTicks(5192), "Lazer" },
                    { "6d091456-5a2f-4b5a-98fc-f1a3b50a627d", new DateTime(2024, 11, 29, 9, 25, 1, 926, DateTimeKind.Local).AddTicks(5186), "Estudos" },
                    { "bfe4e7dc-81e4-4e47-a67b-d4fbf3e124bd", new DateTime(2024, 11, 28, 9, 25, 1, 926, DateTimeKind.Local).AddTicks(4830), "Trabalho" }
                });

            migrationBuilder.InsertData(
                table: "Tarefas",
                columns: new[] { "TarefaId", "CategoriaId", "CriadoEm", "Descricao", "Status", "Titulo" },
                values: new object[,]
                {
                    { "2f1b7dc1-3b9a-4e1a-a389-7f5d2f1c8f3e", "6d091456-5a2f-4b5a-98fc-f1a3b50a627d", new DateTime(2024, 11, 30, 9, 25, 1, 927, DateTimeKind.Local).AddTicks(2524), "Preparar-se para a aula de Angular", "Não iniciada", "Estudar Angular" },
                    { "6a8b3e4d-5e4e-4f7e-bdc9-9181e456ad0e", "bfe4e7dc-81e4-4e47-a67b-d4fbf3e124bd", new DateTime(2024, 12, 4, 9, 25, 1, 927, DateTimeKind.Local).AddTicks(2018), "Terminar relatório para reunião", "Não iniciada", "Concluir relatório" },
                    { "e5d4a7b9-1f9e-4c4a-ae3b-5b7c1a9d2e3f", "39be53a2-fc09-4b6a-bafa-18a6a23c8f6e", new DateTime(2024, 12, 11, 9, 25, 1, 927, DateTimeKind.Local).AddTicks(2528), "Dar um passeio relaxante no parque", "Não iniciada", "Passeio no parque" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Tarefas_CategoriaId",
                table: "Tarefas",
                column: "CategoriaId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Tarefas");

            migrationBuilder.DropTable(
                name: "Categorias");
        }
    }
}
