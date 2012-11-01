using System;
using Newtonsoft.Json;

namespace Todo.Contracts
{
    public class TodoItemDto
    {
        [JsonProperty(PropertyName = "id")]
        public Guid Id { get; set; }
        [JsonProperty(PropertyName = "title")]
        public string Title { get; set; }
        [JsonProperty(PropertyName = "details")]
        public string Details { get; set; }    
    }
}
