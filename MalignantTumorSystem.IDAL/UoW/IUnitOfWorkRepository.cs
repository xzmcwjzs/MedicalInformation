using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.IDAL.UoW
{
    /// <summary>
    /// 工作单元中仓储接口CRUD操作
    /// 需要使用工作单元的仓储，需要实现本接口（IRepository,IExtensionRepository)
    /// 
    /// 工作单元仓储中有最标准的添加、删除和修改的动作，这些动作在仓储中实现~
    /// 它的作用是把这些动作提交至一个工作单元的字典中，在工作单元进行commit提交时，
    /// 它会把字典中的所有操作一次性的提交至SQL中，而且整个过程在一个事务中，统一提交、
    /// 统一回滚~（注：事务采用分布式事务~）
    /// </summary>
   public  interface IUnitOfWorkRepository
    {
        /// <summary>
        /// 添加实体
        /// </summary>
        /// <param name="item"></param>
        void UoWInsert(IEntity item);
        /// <summary>
        /// 更新实体
        /// </summary>
        /// <param name="item"></param>
        void UoWUpdate(IEntity item);
        /// <summary>
        /// 移除实体
        /// </summary>
        /// <param name="item"></param>
        void UoWDelete(IEntity item);
        /// <summary>
        /// 添加集合
        /// </summary>
        /// <param name="item"></param>
        void UoWInsert(IEnumerable<IEntity> list);
        /// <summary>
        /// 更新集合
        /// </summary>
        /// <param name="item"></param>
        void UoWUpdate(IEnumerable<IEntity> list);
        /// <summary>
        /// 移除集合
        /// </summary>
        /// <param name="item"></param>
        void UoWDelete(IEnumerable<IEntity> list);
    }
}
