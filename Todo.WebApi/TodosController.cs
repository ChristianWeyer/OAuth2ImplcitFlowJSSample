using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using Todo.Contracts;

namespace Todo.WebApi
{
    /// <summary>
    /// The controller for TODO items.
    /// </summary>
    public class TodosController : ApiController
    {
        private List<TodoItemDto> items = new List<TodoItemDto>
        {
            new TodoItemDto { Id =  Guid.NewGuid(), Details = "First item details", Title = "Item 1"},
            new TodoItemDto { Id =  Guid.NewGuid(), Details = "Second item details", Title = "Item 2"},
            new TodoItemDto { Id =  Guid.NewGuid(), Details = "Third item details", Title = "Item 3"},
        };

        /// <summary>
        /// List available TODO items.
        /// </summary>
        /// <returns>List of items.</returns>        
        public IQueryable<TodoItemDto> Get()
        {
            return items.AsQueryable();
        }
    }
}