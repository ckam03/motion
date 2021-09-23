﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using motionapi.Models;

namespace MotionAPI.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    partial class ApplicationDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 63)
                .HasAnnotation("ProductVersion", "5.0.10")
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

            modelBuilder.Entity("motionapi.Models.Image", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<string>("Photo")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Images");
                });

            modelBuilder.Entity("motionapi.Models.Note", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<string>("Color")
                        .HasColumnType("text");

                    b.Property<string>("Content")
                        .HasColumnType("text");

                    b.Property<string>("Title")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Notes");
                });

            modelBuilder.Entity("motionapi.Models.Todo", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<bool>("Completed")
                        .HasColumnType("boolean");

                    b.Property<string>("Title")
                        .HasColumnType("text");

                    b.Property<Guid?>("TodoListId")
                        .HasColumnType("uuid");

                    b.HasKey("Id");

                    b.HasIndex("TodoListId");

                    b.ToTable("Todo");
                });

            modelBuilder.Entity("motionapi.Models.TodoList", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("TodoLists");
                });

            modelBuilder.Entity("motionapi.Models.Todo", b =>
                {
                    b.HasOne("motionapi.Models.TodoList", null)
                        .WithMany("TodoItems")
                        .HasForeignKey("TodoListId");
                });

            modelBuilder.Entity("motionapi.Models.TodoList", b =>
                {
                    b.Navigation("TodoItems");
                });
#pragma warning restore 612, 618
        }
    }
}