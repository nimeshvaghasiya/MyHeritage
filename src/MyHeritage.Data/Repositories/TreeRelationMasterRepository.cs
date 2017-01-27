using MyHeritage.Data.Abstract;
using MyHeritage.Model;

namespace MyHeritage.Data.Repositories
{
    public class TreeRelationMasterRepository : EntityBaseRepository<TreeRelationMaster>, ITreeRelationMasterRepository
    {
        public TreeRelationMasterRepository(MyHeritageContext context) : base(context) { }
    }
}
