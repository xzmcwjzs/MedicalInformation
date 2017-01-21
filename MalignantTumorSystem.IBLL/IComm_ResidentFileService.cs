using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.IBLL
{
    public partial interface IComm_ResidentFileService : IBaseService<Comm_ResidentFile>
    {
        string GetNumberByCode(string community_code);
        string GetNumberByCode1(string community_code);
    }
}
