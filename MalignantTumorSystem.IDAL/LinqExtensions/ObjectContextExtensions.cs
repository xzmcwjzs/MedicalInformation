using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity.Core.Metadata.Edm;
using System.Data.Entity.Core.Objects;
using System.Data.Entity.Core.Objects.DataClasses;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.IDAL.LinqExtensions
{
    /// <summary>
    ///  ObjectContext扩展方法
    /// </summary>
    public static class ObjectContextExtensions
    {
        /// <summary>
        /// 得到实体键
        /// </summary>
        /// <param name="context"></param>
        /// <param name="entityType"></param>
        /// <returns></returns>
        public static EntitySetBase GetEntitySet(this ObjectContext context, Type entityType)
        {
            if (context == null)
            {
                throw new ArgumentNullException("context can't  null!");
            }

            if (entityType == null)
            {
                throw new ArgumentNullException("entityType can't null!");
            }

            EntityContainer container =
                context.MetadataWorkspace
                       .GetEntityContainer(context.DefaultContainerName, DataSpace.CSpace);

            if (container == null)
            {
                return null;
            }

            EntitySetBase entitySet =
                container.BaseEntitySets
                         .Where(item => item.ElementType.Name.Equals(entityType.Name))
                         .FirstOrDefault();

            return entitySet;
        }

        /// <summary>
        /// 需要为主键属性添加Key特性
        /// </summary>
        /// <typeparam name="TEntity"></typeparam>
        /// <returns></returns>
        public static PropertyInfo GetPK<TEntity>()
        {
            PropertyInfo[] properties = typeof(TEntity).GetProperties(BindingFlags.Instance | BindingFlags.Public);
            foreach (PropertyInfo pI in properties)
            {
                System.Object[] attributes = pI.GetCustomAttributes(true);
                foreach (object attribute in attributes)
                {
                    if (attribute is EdmScalarPropertyAttribute)
                    {
                        if ((attribute as EdmScalarPropertyAttribute).EntityKeyProperty == true)
                            return pI;
                    }
                    else if (attribute is KeyAttribute)//声音为Key特性字段为主键
                    {
                        return pI;
                    }
                }
            }
            return properties.FirstOrDefault();//第一个属性为主键
        }

    }
}
