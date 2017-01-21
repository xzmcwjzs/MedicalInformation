using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MalignantTumorSystem.IDAL;
using MalignantTumorSystem.IDAL.IRepository;
using MalignantTumorSystem.IDAL.Specification;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Data.Entity.Core.Metadata.Edm;
using System.ComponentModel.DataAnnotations.Schema;
using System.Reflection;
using System.Data.Entity.Core;
using MalignantTumorSystem.IDAL.Common;
using MalignantTumorSystem.IDAL.Domain;
using MalignantTumorSystem.IDAL.LinqExtensions;

namespace MalignantTumorSystem.DAL.Repository.EF
{
    public class EFRepository<TEntity> : IExtensionRepository<TEntity> where TEntity:class,IEntity
    {

        #region Constructors
        /// <summary>
        /// 这个在IoC注入时走它
        /// </summary>
        //[Microsoft.Practices.Unity.InjectionConstructor]
        public EFRepository()
            : this(null)
        { }

        public EFRepository(DbContext db)
        {
            Db = db;
            this.DataPageSize = 10000;
            //  ((IObjectContextAdapter)this).ObjectContext.ObjectStateManager.ChangeRelationshipState<T>(source, target, navigation, state); //这个方法，改变多对多关系的

        }
        #endregion

        /// <summary>
        /// EF数据上下文
        /// </summary>
        private DbContext Db;

        /// <summary>
        /// 提交到数据库
        /// </summary>
        protected virtual void SaveChanges()
        {
            try
            {

                Db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException ex)
            {
                //Logger.LoggerFactory.Instance.Logger_Error(ex);
                throw new DbUpdateConcurrencyException("框架在更新时引起了乐观并发，后修改的数据不会被保存");
            }
            catch (System.Data.Entity.Validation.DbEntityValidationException ex)
            {
                //Logger.LoggerFactory.Instance.Logger_Error(ex);
                throw ex;
            }
            catch (Exception ex)
            {
                //Logger.LoggerFactory.Instance.Logger_Error(ex);
                throw ex;
            }

        }

        #region IRepository<TEntity> 成员

        public void Delete(TEntity item)
        {
            if (item != null)
            {

                //物理删除
                Db.Set<TEntity>().Attach(item as TEntity);
                Db.Entry(item).State = EntityState.Deleted;
                Db.Set<TEntity>().Remove(item as TEntity);
                this.SaveChanges();
            }
        }
        public TEntity Find(params object[] id)
        {
            return Db.Set<TEntity>().Find(id);
        }

        public IQueryable<TEntity> GetModel()
        {
            return Db.Set<TEntity>();
        }
        public void Insert(TEntity item)
        {
            if (item != null)
            {
                Db.Entry<TEntity>(item as TEntity);
                Db.Set<TEntity>().Add(item as TEntity);
                this.SaveChanges();
            }

        }
        public void Update(TEntity item)
        {
            if (item != null)
            {
                Db.Set<TEntity>().Attach(item);
                Db.Entry(item).State = EntityState.Modified;
                this.SaveChanges();
            }
        }
        public void Insert(IEnumerable<TEntity> item)
        {
            foreach (var entity in item)
            {
                Db.Entry<TEntity>(entity as TEntity);
                Db.Set<TEntity>().Add(entity as TEntity);
            }
            this.SaveChanges();
        }


        public void Update(IEnumerable<TEntity> item)
        {
            #region 1个SQL连接,发N条语句，事务级
            foreach (var entity in item)
            {
                Db.Set<TEntity>().Attach(entity as TEntity);
                Db.Entry(entity).State = EntityState.Modified;
            }
            this.SaveChanges();
            #endregion
        }
        public void Delete(IEnumerable<TEntity> item)
        {
            foreach (var entity in item)
            {
                Db.Set<TEntity>().Attach(entity as TEntity);
                Db.Set<TEntity>().Remove(entity as TEntity);
                this.SaveChanges();
            }
        }
        public void SetDataContext(object db)
        {
            try
            {
                Db = (DbContext)db;
            }
            catch (Exception)
            {

                throw new ArgumentException("EF.SetDataContext要求上下文为DbContext类型");
            }

        }

        #endregion

        #region IExtensionRepository<TEntity> 成员

        public void BulkInsert(IEnumerable<TEntity> item)
        {
            BulkInsert(item, false);
        }

        public void BulkInsert(IEnumerable<TEntity> item, bool isRemoveIdentity)
        {
            string startTag = "", endTag = "";
            if (isRemoveIdentity)
            {
                startTag = "SET IDENTITY_INSERT " + typeof(TEntity).Name + " ON;";
                endTag = "SET IDENTITY_INSERT " + typeof(TEntity).Name + "  OFF;";
            }
            DataPageProcess(item, (currentItems) =>
            {
                ((IObjectContextAdapter)Db).ObjectContext.CommandTimeout = 0;//永不超时
                Db.Database.ExecuteSqlCommand(startTag
                    + DoSql(currentItems, SqlType.Insert)
                    + endTag);
            });
        }

        public void BulkDelete(IEnumerable<TEntity> item)
        {
            DataPageProcess(item, (currentItems) =>
            {
                ((IObjectContextAdapter)Db).ObjectContext.CommandTimeout = 0;//永不超时
                Db.Database.ExecuteSqlCommand(DoSql(currentItems, SqlType.Delete));
            });
        }

        public void BulkUpdate(IEnumerable<TEntity> item, params string[] fieldParams)
        {
            DataPageProcess(item, (currentItems) =>
            {
                ((IObjectContextAdapter)Db).ObjectContext.CommandTimeout = 0;//永不超时
                Db.Database.ExecuteSqlCommand(DoSql(currentItems, SqlType.Update, fieldParams));
            });
        }

        public IQueryable<TEntity> GetModel(System.Linq.Expressions.Expression<Func<TEntity, bool>> predicate)
        {
            return GetModel().Where(predicate);
        }

        public TEntity Find(System.Linq.Expressions.Expression<Func<TEntity, bool>> predicate)
        {
            return GetModel().FirstOrDefault(predicate);
        }

        public IQueryable<TEntity> GetModel(MalignantTumorSystem.IDAL.Specification.ISpecification<TEntity> specification)
        {
            return GetModel().Where(specification.SatisfiedBy());
        }

        public TEntity Find(MalignantTumorSystem.IDAL.Specification.ISpecification<TEntity> specification)
        {
            return GetModel().FirstOrDefault(specification.SatisfiedBy());
        }

        public IQueryable<TEntity> GetModel(Action<IOrderable<TEntity>> orderBy, MalignantTumorSystem.IDAL.Specification.ISpecification<TEntity> specification)
        {
            var queryable = GetModel().Where(specification.SatisfiedBy()).AsQueryable();
            var linq = new Orderable<TEntity>(queryable);
            orderBy(linq);
            return linq.Queryable;
        }

        #endregion

        #region IOrderableRepository<TEntity> 成员

        public IQueryable<TEntity> GetModel(Action<IOrderable<TEntity>> orderBy)
        {
            var linq = new Orderable<TEntity>(GetModel());
            orderBy(linq);
            return linq.Queryable;
        }

        public IQueryable<TEntity> GetModel(Action<IOrderable<TEntity>> orderBy, System.Linq.Expressions.Expression<Func<TEntity, bool>> predicate)
        {
            var queryable = GetModel().Where(predicate).AsQueryable();
            var linq = new Orderable<TEntity>(queryable);
            orderBy(linq);
            return linq.Queryable;
        }

        #endregion

        #region IUnitOfWorkRepository 成员

        public void UoWInsert(IEntity item)
        {
            if (item != null)
            {

                Db.Entry<TEntity>(item as TEntity);
                Db.Set<TEntity>().Add(item as TEntity);
                this.SaveChanges();
            }
        }

        public void UoWUpdate(IEntity item)
        {
            if (item != null)
            {
                Db.Set<TEntity>().Attach(item as TEntity);
                Db.Entry(item).State = EntityState.Modified;
                this.SaveChanges();
            }
        }

        public void UoWDelete(IEntity item)
        {
            if (item != null)
            {
                Db.Set<TEntity>().Attach(item as TEntity);
                Db.Set<TEntity>().Remove(item as TEntity);
                this.SaveChanges();
            }
        }
        public void UoWInsert(IEnumerable<IEntity> list)
        {
            foreach (var item in list)
            {
                Db.Entry<TEntity>(item as TEntity);
                Db.Set<TEntity>().Add(item as TEntity);
            }
            this.SaveChanges();
        }

        public void UoWUpdate(IEnumerable<IEntity> list)
        {
            foreach (var item in list)
            {
                Db.Set<TEntity>().Attach(item as TEntity);
                Db.Entry(item).State = EntityState.Modified;
            }
            this.SaveChanges();
        }

        public void UoWDelete(IEnumerable<IEntity> list)
        {
            foreach (var item in list)
            {
                Db.Set<TEntity>().Attach(item as TEntity);
                Db.Set<TEntity>().Remove(item as TEntity);
            }
            this.SaveChanges();
        }
        #endregion

        #region Fields
        /// <summary>
        /// 数据总数
        /// </summary>
        int _dataTotalCount = 0;

        /// <summary>
        /// 数据总页数
        /// </summary>
        int _dataTotalPages = 0;

        /// <summary>
        /// 数据页面大小（每次向数据库提交的记录数），子类可以进行重写
        /// </summary>
        protected virtual int DataPageSize { get; set; }
        #endregion

        #region Private Methods

        /// <summary>
        /// 实体是否已经追加
        /// </summary>
        /// <param name="entity"></param>
        private void AttachIfNot(TEntity entity)
        {
            if (!Db.Set<TEntity>().Local.Contains(entity))
            {
                Db.Set<TEntity>().Attach(entity);
            }
        }

        /// <summary>
        /// 根据传入的实体主键，将数据库中老版本的实体取出来
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        private TEntity GetEntityFromDb(TEntity item)
        {


            var pkList = GetPrimaryKey();
            var entityType = typeof(TEntity);
            List<object> primaryArr = new List<object>();
            foreach (var primaryField in pkList.Keys)
            {
                primaryArr.Add(entityType.GetProperty(primaryField).GetValue(item, null));
            }
            var old = this.Find(primaryArr.ToArray());
            return old;
        }
        /// <summary>
        /// 分页进行数据提交的逻辑
        /// </summary>
        /// <param name="item">原列表</param>
        /// <param name="method">处理方法</param>
        /// <param name="currentItem">要进行处理的新列表</param>
        private void DataPageProcess(IEnumerable<TEntity> item, Action<IEnumerable<TEntity>> method)
        {
            if (item != null && item.Any())
            {
                _dataTotalCount = item.Count();
                this._dataTotalPages = item.Count() / DataPageSize;
                if (_dataTotalCount % DataPageSize > 0)
                    _dataTotalPages += 1;
                for (int pageIndex = 1; pageIndex <= _dataTotalPages; pageIndex++)
                {
                    var currentItems = item.Skip((pageIndex - 1) * DataPageSize).Take(DataPageSize).ToList();
                    method(currentItems);
                }
            }
        }

        private static string GetEqualStatment(string fieldName, int paramId, Type pkType)
        {
            if (pkType == typeof(Guid) || pkType == typeof(Guid?))
            {
                return string.Format("{0} = '{1}'", fieldName, GetParamTag(paramId));
            }
            else if (pkType.IsValueType && pkType != typeof(Guid))
            {
                return string.Format("{0} = {1}", fieldName, GetParamTag(paramId));
            }
            else
            {
                return string.Format("{0} = '{1}'", fieldName, GetParamTag(paramId));
            }

        }

        private static string GetParamTag(int paramId)
        {
            return "{" + paramId + "}";
        }

        /// <summary>
        /// 得到实体键EntityKey
        /// </summary>
        /// <returns>实体key,数据表字段key</returns>
        protected Dictionary<string, string> GetPrimaryKey()
        {
            EntitySetBase primaryKey = ((IObjectContextAdapter)Db).ObjectContext.GetEntitySet(typeof(TEntity));
            if (primaryKey == null)
                return null;
            ReadOnlyMetadataCollection<EdmMember> arr = primaryKey.ElementType.KeyMembers;
            Dictionary<string, string> fieldList = new Dictionary<string, string>();
            foreach (var item in arr)
            {
                string fieldName = item.Name;
                var column = typeof(TEntity).GetProperty(item.Name).GetCustomAttribute(typeof(ColumnAttribute));
                if (column != null)
                    fieldName = (column as ColumnAttribute).Name;
                fieldList.Add(item.Name, fieldName);
            }
            return fieldList;
        }


        /// <summary>
        /// 得到属性名称
        /// </summary>
        /// <param name="propertyInfo"></param>
        /// <returns>数据表字段key</returns>
        private string GetPropertyName(PropertyInfo propertyInfo)
        {
            string fieldName = propertyInfo.Name;
            var column = propertyInfo.GetCustomAttribute(typeof(ColumnAttribute));
            if (column != null)
                fieldName = (column as ColumnAttribute).Name;
            return fieldName;
        }

        /// <summary>
        /// 得到表的名称
        /// </summary>
        /// <param name="propertyInfo"></param>
        /// <returns></returns>
        private string GetTableName(Type table)
        {
            string tableName = table.Name;
            var name = table.GetCustomAttribute(typeof(TableAttribute));
            if (name != null)
                tableName = (name as TableAttribute).Name;
            return tableName;
        }
        /// <summary>
        /// 构建Update语句串
        /// 注意：如果本方法过滤了int,decimal类型更新为０的列，如果希望更新它们需要指定FieldParams参数
        /// </summary>
        /// <param name="entity">实体列表</param>
        /// <param name="fieldParams">要更新的字段</param>
        /// <returns></returns>
        private Tuple<string, object[]> CreateUpdateSql(TEntity entity, params string[] fieldParams)
        {
            if (entity == null)
                throw new ArgumentException("The database entity can not be null.");
            var pkList = GetPrimaryKey();


            var entityType = entity.GetType();
            var tableFields = new List<PropertyInfo>();
            if (fieldParams != null && fieldParams.Count() > 0)
            {
                tableFields = entityType.GetProperties().Where(i => fieldParams.Contains(i.Name, new StringComparisonIgnoreCase())).ToList();
            }
            else
            {
                tableFields = entityType.GetProperties().Where(i =>
                              !pkList.ContainsKey(i.Name)
                              && i.GetValue(entity, null) != null
                              && !i.PropertyType.IsEnum
                              && !(i.PropertyType == typeof(ValueType) && Convert.ToInt64(i.GetValue(entity, null)) == 0)
                              && !(i.PropertyType == typeof(DateTime) && Convert.ToDateTime(i.GetValue(entity, null)) == DateTime.MinValue)
                              && !(i.PropertyType == typeof(Guid))
                              && !(i.PropertyType == typeof(Guid?))
                              && i.PropertyType != typeof(EntityState)
                              && i.GetCustomAttributes(false).Where(j => j.GetType() == typeof(NavigationAttribute)) != null//过滤导航属性
                              && (i.PropertyType.IsValueType || i.PropertyType == typeof(string))
                              ).ToList();
            }




            //过滤主键，航行属性，状态属性等
            if (pkList == null || pkList.Count == 0)
                throw new ArgumentException("The Table entity have not a primary key.");
            var arguments = new List<object>();
            var builder = new StringBuilder();

            foreach (var change in tableFields)
            {
                if (pkList.ContainsKey(change.Name))
                    continue;
                if (arguments.Count != 0)
                    builder.Append(", ");
                builder.Append(GetPropertyName(change) + " = {" + arguments.Count + "}");
                if (change.PropertyType == typeof(string)
                    || change.PropertyType == typeof(DateTime)
                    || change.PropertyType == typeof(DateTime?)
                    || change.PropertyType == typeof(bool?)
                    || change.PropertyType == typeof(bool)
                    || change.PropertyType == typeof(Guid)
                    || change.PropertyType == typeof(Guid?))
                    arguments.Add("'" + change.GetValue(entity, null).ToString().Replace("'", "char(39)") + "'");
                else
                    arguments.Add(change.GetValue(entity, null));
            }

            if (builder.Length == 0)
                throw new Exception("没有任何属性进行更新");

            //表单不加[]，主要为了mysql考虑，因为它会出现语法错误
            builder.Insert(0, " UPDATE " + string.Format("{0}", GetTableName(entityType)) + " SET ");

            builder.Append(" WHERE ");
            bool firstPrimaryKey = true;

            foreach (var primaryField in pkList.Keys)
            {
                if (firstPrimaryKey)
                    firstPrimaryKey = false;
                else
                    builder.Append(" AND ");

                object val = entityType.GetProperty(primaryField).GetValue(entity, null);
                Type pkType = entityType.GetProperty(primaryField).GetType();
                builder.Append(GetEqualStatment(pkList[primaryField], arguments.Count, pkType));
                arguments.Add(val);
            }
            builder.Append(";");//mysql两个语句之间要有分号
            return new Tuple<string, object[]>(builder.ToString(), arguments.ToArray());

        }

        /// <summary>
        /// 构建Delete语句串
        /// </summary>
        /// <typeparam name="TEntity"></typeparam>
        /// <param name="entity"></param>
        /// <returns></returns>
        private Tuple<string, object[]> CreateDeleteSql(TEntity entity)
        {
            if (entity == null)
                throw new ArgumentException("The database entity can not be null.");

            Type entityType = entity.GetType();
            var pkList = GetPrimaryKey();
            if (pkList == null || pkList.Count == 0)
                throw new ArgumentException("The Table entity have not a primary key.");

            var arguments = new List<object>();
            var builder = new StringBuilder();
            builder.Append(" Delete from " + string.Format("{0}", GetTableName(entityType)));

            builder.Append(" WHERE ");
            bool firstPrimaryKey = true;

            foreach (var primaryField in pkList.Keys)
            {
                if (firstPrimaryKey)
                    firstPrimaryKey = false;
                else
                    builder.Append(" AND ");

                Type pkType = entityType.GetProperty(primaryField).GetType();
                object val = entityType.GetProperty(primaryField).GetValue(entity, null);
                builder.Append(GetEqualStatment(pkList[primaryField], arguments.Count, pkType));
                arguments.Add(val);
            }

            builder.Append(";");//mysql两个语句之间要有分号
            return new Tuple<string, object[]>(builder.ToString(), arguments.ToArray());
        }

        /// <summary>
        /// 构建Insert语句串
        /// 主键为自增时，如果主键值为0，我们将主键插入到SQL串中
        /// </summary>
        /// <typeparam name="TEntity"></typeparam>
        /// <param name="entity"></param>
        /// <returns></returns>
        private Tuple<string, object[]> CreateInsertSql(TEntity entity)
        {
            if (entity == null)
                throw new ArgumentException("The database entity can not be null.");

            Type entityType = entity.GetType();
            var table = entityType.GetProperties().Where(i => i.PropertyType != typeof(EntityKey)
                 && i.PropertyType != typeof(EntityState)
                 && i.Name != "IsValid"
                 && i.GetValue(entity, null) != null
                 && !i.PropertyType.IsEnum
                 && i.GetCustomAttributes(false).Where(j => j.GetType() == typeof(NavigationAttribute)) != null
                 && (i.PropertyType.IsValueType || i.PropertyType == typeof(string))).ToArray();//过滤主键，航行属性，状态属性等

            var pkList = new Dictionary<string, string>();
            if (GetPrimaryKey() != null)//有时主键可能没有设计，这对于添加操作是可以的
                pkList = GetPrimaryKey();
            var arguments = new List<object>();
            var fieldbuilder = new StringBuilder();
            var valuebuilder = new StringBuilder();

            fieldbuilder.Append(" INSERT INTO " + string.Format("{0}", GetTableName(entityType)) + " (");

            foreach (var member in table)
            {
                if (pkList.ContainsKey(member.Name) && Convert.ToString(member.GetValue(entity, null)) == "0")
                    continue;
                object value = member.GetValue(entity, null);
                if (value != null)
                {
                    if (arguments.Count != 0)
                    {
                        fieldbuilder.Append(", ");
                        valuebuilder.Append(", ");
                    }

                    fieldbuilder.Append(GetPropertyName(member));
                    if (member.PropertyType == typeof(string)
                        || member.PropertyType == typeof(DateTime)
                        || member.PropertyType == typeof(DateTime?)
                        || member.PropertyType == typeof(Boolean?)
                        || member.PropertyType == typeof(Boolean)
                        || member.PropertyType == typeof(Guid)
                        || member.PropertyType == typeof(Guid?)
                        )
                        valuebuilder.Append("'{" + arguments.Count + "}'");
                    else
                        valuebuilder.Append("{" + arguments.Count + "}");
                    if (value is string)
                        value = value.ToString().Replace("'", "char(39)");
                    arguments.Add(value);

                }
            }


            fieldbuilder.Append(") Values (");

            fieldbuilder.Append(valuebuilder.ToString());
            fieldbuilder.Append(");");
            return new Tuple<string, object[]>(fieldbuilder.ToString(), arguments.ToArray());
        }

        /// <summary>
        /// /// <summary>
        /// 执行SQL，根据SQL操作的类型
        /// </summary>
        /// <typeparam name="TEntity"></typeparam>
        /// <param name="list"></param>
        /// <param name="sqlType"></param>
        /// <returns></returns>
        /// </summary>
        /// <param name="list"></param>
        /// <param name="sqlType"></param>
        /// <returns></returns>
        private string DoSql(IEnumerable<TEntity> list, SqlType sqlType)
        {
            return DoSql(list, sqlType, null);
        }
        /// <summary>
        /// 执行SQL，根据SQL操作的类型
        /// </summary>
        /// <typeparam name="TEntity"></typeparam>
        /// <param name="list"></param>
        /// <param name="sqlType"></param>
        /// <returns></returns>
        private string DoSql(IEnumerable<TEntity> list, SqlType sqlType, params string[] fieldParams)
        {
            var sqlstr = new StringBuilder();
            switch (sqlType)
            {
                case SqlType.Insert:
                    list.ToList().ForEach(i =>
                    {
                        Tuple<string, object[]> sql = CreateInsertSql(i);
                        sqlstr.AppendFormat(sql.Item1, sql.Item2);
                    });
                    break;
                case SqlType.Update:
                    list.ToList().ForEach(i =>
                    {
                        Tuple<string, object[]> sql = CreateUpdateSql(i, fieldParams);
                        sqlstr.AppendFormat(sql.Item1, sql.Item2);
                    });
                    break;
                case SqlType.Delete:
                    list.ToList().ForEach(i =>
                    {
                        Tuple<string, object[]> sql = CreateDeleteSql(i);
                        sqlstr.AppendFormat(sql.Item1, sql.Item2);
                    });
                    break;
                default:
                    throw new ArgumentException("请输入正确的参数");
            }
            return sqlstr.ToString();
        }


        /// <summary>
        /// SQL操作类型
        /// </summary>
        protected enum SqlType
        {
            Insert,
            Update,
            Delete,
        }

        /// <summary>
        /// 忽略大小写比较器,作为Contaions方法的参数
        /// </summary>
        internal class StringComparisonIgnoreCase : IEqualityComparer<string>
        {

            public int GetHashCode(string t)
            {
                return t.GetHashCode();
            }
            /// <summary>
            /// 重写它的Equals，保存同时重写GetHashCode
            /// </summary>
            /// <param name="x"></param>
            /// <param name="y"></param>
            /// <returns></returns>
            public bool Equals(string x, string y)
            {
                return (x ?? string.Empty)
                    .Trim()
                    .ToUpper()
                    ==
                    (y ?? string.Empty)
                    .Trim()
                    .ToUpper();
            }

        }

        #endregion

    }
}
