using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using motionapi.Dtos;
using motionapi.Models;

namespace motionapi.Controllers
{
    [ApiController]
    [Route("Note")]
    public class NoteController : ControllerBase
    {
        private ApplicationDbContext db;
        public NoteController(ApplicationDbContext db)
        {
            this.db = db;
        }
        [HttpGet]
        public IEnumerable<Note> GetNotes()
        {
            return db.Notes.ToList();
        }
        [HttpPost]
        public ActionResult<Note> CreateNote(CreateNoteDto noteDto)
        {
            Note note = new()
             {
                 Id = noteDto.Id,
                 Title = noteDto.Title,
                 Content = noteDto.Content,
             };
             db.Notes.Add(note);
             db.SaveChanges();
            
             return Ok(note);
        }
    }
}