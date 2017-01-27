using MyHeritage.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyHeritage.Data.Abstract
{
    public interface ITreeMemberHeritageRepository : IEntityBaseRepository<TreeMemberHeritage> { }

    public interface ITreeRelationMasterRepository : IEntityBaseRepository<TreeRelationMaster> { }
}
