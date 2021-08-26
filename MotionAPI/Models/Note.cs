namespace motionapi.Models
{
    public record Note
    {
        public int Id { get; init; }
        public string Title { get; init; }
        public string Content { get; init; }
        public double X { get; init; }
        public double Y { get; init; }
    }
}