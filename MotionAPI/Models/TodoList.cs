using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

namespace motionapi.Models
{
    public record TodoList
    {
        public Guid Id { get; init; }
        public string Name { get; init; }
        public List<Todo> TodoItems { get; init; }
    }
}