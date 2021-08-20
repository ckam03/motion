namespace motionapi.Dtos
{
    public record CreateNoteDto
    {
        public int Id { get; init; }
        public string Title { get; init; }
        public string Content {get; init; }
    }
}