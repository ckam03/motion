using System;

namespace motionapi.Dtos
{
    public record CreateTodoDto
    {
        public Guid Id { get; init; }
        public string Title { get; init; }
        public bool Completed { get; init; }
    }
}