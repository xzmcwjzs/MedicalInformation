using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.WebApplication.Common
{
    public class ExpressionHelper<T> where T : class
    {

        private ParameterExpression param;
        private BinaryExpression filter;

        public ExpressionHelper()
        {
            param = Expression.Parameter(typeof(T), "u");//u=>

            //1==1
            Expression left = Expression.Constant(1);
            filter = Expression.Equal(left, left);
        }

        public Expression<Func<T, bool>> GetExpression()
        {
            return Expression.Lambda<Func<T, bool>>(filter, param);
        }

        public void Equal(string propertyName, object value)
        {
            Expression left = Expression.Property(param, typeof(T).GetProperty(propertyName));
            Expression right = Expression.Constant(value, value.GetType());
            Expression result = Expression.Equal(left, right);
            filter = Expression.And(filter, result);
        }

        public void Contains(string propertyName, string value)
        {
            Expression left = Expression.Property(param, typeof(T).GetProperty(propertyName));
            Expression right = Expression.Constant(value, value.GetType());
            Expression result = Expression.Call(left, typeof(string).GetMethod("Contains"), right);
            filter = Expression.And(filter, result);
        }

         
    }
}
