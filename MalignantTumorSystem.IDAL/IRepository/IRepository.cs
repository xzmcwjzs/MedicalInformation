using MalignantTumorSystem.IDAL.UoW;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.IDAL.IRepository
{
   public interface IRepository<TEntity>:IUnitOfWorkRepository where TEntity:class,IEntity
    {
        /// <summary>
        /// 通过主键拿一个对象
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        TEntity Find(params object[] id);
        /// <summary>
        /// 拿到可查询结果集
        /// </summary>
        /// <returns></returns>
        System.Linq.IQueryable<TEntity> GetModel();
        /// <summary>
        /// 设置当前数据库上下文对象，与具体ORM无关，上下文应该继承UnitOfWork.IDataContext
        /// 可以让多个仓储使用同一个上下文
        /// </summary>
        void SetDataContext(object db);
        /// <summary>
        /// 插入对象
        /// </summary>
        /// <param name="item"></param>
        void Insert(TEntity item);
        /// <summary>
        /// 更新对象
        /// </summary>
        /// <param name="item"></param>
        void Update(TEntity item);
        /// <summary>
        /// 删除对象
        /// </summary>
        /// <param name="item"></param>
        void Delete(TEntity item);
    }
}
