using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.IBLL
{
    public partial interface IShare_CountyService : IBaseService<Share_County>
    {
        string GetCodeByName(string name);
    }
}
