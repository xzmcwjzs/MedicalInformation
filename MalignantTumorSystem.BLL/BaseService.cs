using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.SqlClient;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using MalignantTumorSystem.DAL;
using MalignantTumorSystem.IDAL;
using EntityFramework.Future;

namespace MalignantTumorSystem.BLL
{
    public abstract class BaseService<T> where T : class ,new()
    {

        DbContext Db =DAL.DALFactory.DbContextFactory.CreateDbContext();
        public IBaseDal<T> CurrentDal { get; set; }
        public BaseService()
        {
            SetCurrentDal();
        }
        public abstract void SetCurrentDal();

        #region 计数
        /// <summary>
        /// 计数
        /// </summary>
        /// <returns></returns>
        public int CountEntities()
        {
            return CurrentDal.CountEntities();
        } 
        #endregion

        #region 查询
        /// <summary>
        /// 查询
        /// </summary>
        /// <param name="whereLambda"></param>
        /// <returns></returns>
        public IQueryable<T> LoadEntities(System.Linq.Expressions.Expression<Func<T, bool>> whereLambda)
        {

            return CurrentDal.LoadEntities(whereLambda);
        }
        /// <summary>
        /// EF不跟踪查询AsNoTracking()
        /// </summary>
        /// <param name="whereLambda"></param>
        /// <returns></returns>
        public IQueryable<T> LoadEntityAsNoTracking(System.Linq.Expressions.Expression<Func<T, bool>> whereLambda)
        {

            return CurrentDal.LoadEntityAsNoTracking(whereLambda);
        }
        /// <summary>
        /// 查询排序
        /// </summary>
        /// <typeparam name="S"></typeparam>
        /// <param name="whereLambda"></param>
        /// <param name="orderByLambda"></param>
        /// <param name="isAsc"></param>
        /// <returns></returns>
        public IQueryable<T> LoadOrderEntities<S>(Expression<Func<T, bool>> whereLambda, Expression<Func<T, S>> orderByLambda, bool isAsc)
        {
            return CurrentDal.LoadOrderEntities(whereLambda, orderByLambda, isAsc);

        } 
        #endregion

        #region 分页
        /// <summary>
        /// 分页查询
        /// </summary>
        /// <typeparam name="S"></typeparam>
        /// <param name="pageSize"></param>
        /// <param name="pageIndex"></param>
        /// <param name="totalCount"></param>
        /// <param name="whereLambda"></param>
        /// <param name="orderbyLambda"></param>
        /// <param name="isAsc"></param>
        /// <returns></returns>
        public IQueryable<T> LoadPageEntities<S>(int pageSize, int pageIndex, out int totalCount, System.Linq.Expressions.Expression<Func<T, bool>> whereLambda, System.Linq.Expressions.Expression<Func<T, S>> orderbyLambda, bool isAsc)
        {
            return CurrentDal.LoadPageEntities<S>(pageSize, pageIndex, out totalCount, whereLambda, orderbyLambda, isAsc);
        } 
        #endregion

        #region 删除
        /// <summary>
        /// 删除
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        public bool DeleteEntity(T entity)
        {
            return CurrentDal.DeleteEntity(entity); 
        } 
        /// <summary>
        /// 批量删除
        /// </summary>
        /// <param name="list"></param>
        /// <returns></returns>
        public bool DeleteAllEntity(IList<T> list)
        {
            return CurrentDal.DeleteAllEntity(list); 
        }
        /// <summary>
        /// 根据条件进行删除
        /// </summary>
        /// <param name="whereLambda"></param>
        /// <returns></returns>
        public bool DeleteByLambda(Expression<Func<T, bool>> whereLambda)
        {
            return CurrentDal.DeleteByLambda(whereLambda); 
        } 
        #endregion

        #region 修改
        /// <summary>
        /// 更新
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        public bool UpdateEntity(T entity)
        {
            return CurrentDal.UpdateEntity(entity); 
        }
        /// <summary>
        /// 批量更新
        /// </summary>
        /// <param name="list"></param>
        /// <returns></returns>
        public bool UpdateEntity(List<T> list)
        {
            return CurrentDal.UpdateEntity(list); 
        }
        /// <summary>
        /// 部分更新
        /// </summary>
        /// <param name="entity"></param>
        /// <param name="propertyName"></param>
        /// <returns></returns>
        public bool UpdatePartialPropertity(T entity, string[] propertyName)
        {
            return CurrentDal.UpdatePartialPropertity(entity, propertyName); 
        }
        /// <summary>
        /// 修改某个实体的 某些属性(根据id修改)【*用这个需要注意关闭检查】
        /// </summary>
        /// <param name="entity"></param>
        /// <param name="propertyName"></param>
        /// <returns></returns>
        public bool UpdatePartialPropertity2(T entity, params string[] propertyName)
        {
            return CurrentDal.UpdatePartialPropertity2(entity, propertyName); 
        }
        /// <summary>
        /// 根据条件 修改指定的 属性值
        /// </summary>
        /// <returns></returns>
        public bool UpdatePartialPropertityByLambda(Expression<Func<T, bool>> whereLambda, T entity, params string[] propertyName)
        {
            return CurrentDal.UpdatePartialPropertityByLambda(whereLambda, entity, propertyName); 
        } 
        #endregion

        #region 新增
        /// <summary>
        /// 添加数据
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        public bool AddEntity(T entity)
        {
            return CurrentDal.AddEntity(entity); 
        }
        /// <summary>
        /// 批量增加
        /// </summary>
        /// <param name="list"></param>
        /// <returns></returns>
        public bool AddAllEntity(IList<T> list)
        {
            return CurrentDal.AddAllEntity(list); 
        }

        public bool AddRangeEntity(IList<T> list)
        {
            return CurrentDal.AddRangeEntity(list); 
        }
        #endregion

        #region EF执行sql语句
        /// <summary>
        /// EF执行sql查询语句
        /// </summary>
        /// <param name="sql"></param>
        /// <param name="parms"></param>
        /// <returns></returns>
        public IQueryable<T> LoadEntityBySql(string sql, params SqlParameter[] parms)
        {
            var result = CurrentDal.LoadEntityBySql(sql, parms);
            return result;
        }
        public List<T> LoadListBySql(string strSql, params Object[] paramObjects)
        {
            var result = CurrentDal.LoadListBySql(strSql, paramObjects);
            return result;
        }
        /// <summary>
        /// EF执行sql语句 增、删、改
        /// </summary>
        /// <param name="sql"></param>
        /// <param name="parms"></param>
        /// <returns></returns>
        //Db.Database.ExecuteSqlCommand(sql, parms); 
        public int OperateEntityBySql(string sql, params SqlParameter[] parms)
        {
            var result = CurrentDal.OperateEntityBySql(sql, parms);
            return result;
        } 
        #endregion

        #region EFExtensions
        public bool BulkUpdate(Expression<Func<T, bool>> whereLmbda, Expression<Func<T, T>> updateLambda)
        {
            return CurrentDal.BulkUpdate(whereLmbda, updateLambda);
        }
        public bool BulkDelete(Expression<Func<T, bool>> whereLambda)
        {
            return CurrentDal.BulkDelete(whereLambda);
        }
        public FutureQuery<T> BulkSelect(Expression<Func<T, bool>> selectLambda)
        {
            return CurrentDal.BulkSelect(selectLambda);
        }
        public FutureQuery<T> BulkLoadPage<S>(int pageSize, int pageIndex, out int totalCount,
                                                Expression<Func<T, bool>> whereLambda,
                                                  Expression<Func<T, S>> orderByLambda,
                                                   bool isAsc)
        {
            return CurrentDal.BulkLoadPage<S>(pageSize, pageIndex, out totalCount, whereLambda, orderByLambda, isAsc);
        }
        public IEnumerable<T> BulkCacheSelect(Expression<Func<T, bool>> selectLambda, double Seconds)
        {
            return CurrentDal.BulkCacheSelect(selectLambda, Seconds);
        }
        public void BulkInsert(IEnumerable<T> list)
        {
            CurrentDal.BulkInsert(list);
        }
        #endregion

        #region 事务提交 savechanges
        public bool SaveChanges()
        {
            return CurrentDal.SaveChanges();
        } 
        #endregion
    }
}
