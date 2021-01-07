using DomainModel.ValueObjects;
using System;
using System.Collections.Generic;

namespace DomainModel.Entities
{
    public class Post
    {
        public virtual Guid Id { get; set; }
        public virtual string Title { get; set; }
        public virtual DateTime PublishDate { get; set; }
        public virtual string Summary { get; set; }
        public virtual string GfmContent { get; set; }
        public virtual List<Tag> Tags { get; set; }
    }
}
