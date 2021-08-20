using System;
using System.Collections.Generic;
using motionapi.Models;

namespace motionapi.Dtos
{
    public record CreateTodoListDto
    {
        public Guid Id { get; init; }
        public string Name { get; init; }
        public List<Todo> TodoItems { get; init; }
    }
}