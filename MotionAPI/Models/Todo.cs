using System;

namespace motionapi.Models
{
    public record Todo
    {
        public Guid Id { get; init; }
        public string Title { get; init; }
        public bool Completed { get; init; }
    }
}