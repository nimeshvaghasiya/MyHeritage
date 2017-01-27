using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyHeritage.Model
{
    public class TreeRelationMaster : IEntityBase
    {
        public short RelationId { get; set; }
        public string RelationName { get; set; }
        public int OrderId { get; set; }
    }
}
