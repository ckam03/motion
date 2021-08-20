using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using motionapi.Dtos;
using motionapi.Models;

namespace motionapi.Controllers
{
    [ApiController]
    [Route("Todolist")]
    public class TodoListController : ControllerBase
    {
        private ApplicationDbContext db;
        public TodoListController(ApplicationDbContext db)
        {
            this.db = db;
        }
        [HttpGet]
        public IEnumerable<TodoList> GetTodoList()
        {
            return db.TodoLists.ToList();
        }
        [HttpPost]
        public ActionResult<TodoList> CreateTodoList(CreateTodoListDto todoListDto)
        {
            TodoList todoList = new()
             {
                 Id = Guid.NewGuid(),
                 Name = todoListDto.Name,
             };
             db.TodoLists.Add(todoList);
             db.SaveChanges();
            
             return Ok(todoList);
        }
          [Route("{Todo}")]
          [HttpPost]
          public ActionResult<TodoDto> CreateTodo(CreateTodoDto todoDto)
          {
              Todo todo = new()
              {
                  Id = Guid.NewGuid(),
                  Title = todoDto.Title,
                  Completed = todoDto.Completed
              };
              var todoList = db.TodoLists.Find();
              todoList.TodoItems.Add(todo);
              db.SaveChanges();

              return Ok(todo);
         }
    }
}
