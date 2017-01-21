using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.IBLL
{
    public partial interface IChronic_disease_PhysicalExerciseService : IBaseService<Chronic_disease_PhysicalExercise>
    {
        IQueryable<Model.Entities.Chronic_disease_PhysicalExercise> LoadSearchEntities(Model.SearchParam.CommonParam commonParam);
    }
}
