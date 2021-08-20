namespace motionapi.Dtos
{
    public record NoteDto
    {
        public int Id { get; init; }
        public string Title { get; init; }
        public string Content {get; init; }
    }
}