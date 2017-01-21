using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.IDAL.Specification
{
    public interface ISpecification<TEntity>
         where TEntity : class
    {
        /// <summary>
        /// 检查规约是否满足lambda
        /// </summary>
        /// <returns></returns>
        Expression<Func<TEntity, bool>> SatisfiedBy();
    }
}
