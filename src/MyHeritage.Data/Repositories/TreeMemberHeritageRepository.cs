using MyHeritage.Data.Abstract;
using MyHeritage.Model;

namespace MyHeritage.Data.Repositories
{
    public class TreeMemberHeritageRepository : EntityBaseRepository<TreeMemberHeritage>, ITreeMemberHeritageRepository
    {
        public TreeMemberHeritageRepository(MyHeritageContext context) : base(context) { }
    }
}
