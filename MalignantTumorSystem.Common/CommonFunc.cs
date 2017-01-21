using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Web;

namespace MalignantTumorSystem.Common
{
   public class CommonFunc
    {
        public static string SafeGetStringFromObj(object o)
        {
            if (o == null)
            {
                return "";
            }
            if (o != DBNull.Value)
            {
                return o.ToString();
            }
            return "";
        }
        public static string FilterSpecialString(string specialString)
        {
            return specialString.Replace("'", "&#39;").Replace(",", "&#44;");
        }
        public static string EncodeString(string strUnEncode, int len)
        {
            if (string.IsNullOrEmpty(strUnEncode))
            {
                return "";
            }
            string text = strUnEncode.Replace("\r\n", "<br/>").Replace("'", "&#39;").Replace(",", "&#44;");
            text = CommonFunc.FilterHTML(text, len);
            if (HttpContext.Current != null)
            {
                return HttpContext.Current.Server.HtmlEncode(text);
            }
            return text;
        }
        public static string FilterHTML(string str, int len)
        {
            if (string.IsNullOrEmpty(str))
            {
                return str;
            }
            str = Regex.Replace(str, "<iframe", "&lt;iframe", RegexOptions.IgnoreCase);
            str = Regex.Replace(str, "</iframe", "&lt;/iframe", RegexOptions.IgnoreCase);
            str = Regex.Replace(str, "<script", "&lt;script", RegexOptions.IgnoreCase);
            str = Regex.Replace(str, "</script", "&lt;/script", RegexOptions.IgnoreCase);
            if (len != 0)
            {
                str = ((str.Length > len) ? str.Substring(0, len) : str);
            }
            return str;
        }
        public static DateTime SafeGetDateTimeFromObj(object o)
        {
            if (o == null || o == DBNull.Value || o.ToString().Trim() == "")
            {
                return CommonFunc.DateTimeNull;
            }
            DateTime dateTimeNull = CommonFunc.DateTimeNull;
            DateTime.TryParse(o.ToString(), out dateTimeNull);
            return dateTimeNull;
        }
        public static DateTime DateTimeNull
        {
            get
            {
                return new DateTime(1, 1, 1);
            }
        }
        public static string SafeGetDateTimeStringFromObjectByFormat(object textvalue, string format)
        {
            if (textvalue == null || textvalue == DBNull.Value || textvalue.ToString().Trim() == "")
            {
                return string.Empty;
            }
            DateTime d = CommonFunc.DateTimeNull;
            try
            {
                d = DateTime.Parse(textvalue.ToString());
            }
            catch (Exception)
            {
            }
            if (d != CommonFunc.DateTimeNull)
            {
                return d.ToString(format);
            }
            return "";
        }
        public static int SafeGetIntFromObj(object o, int defaultValue)
        {
            if (o == null || o == DBNull.Value || o.ToString().Trim() == "")
            {
                return defaultValue;
            }
            int result = -1;
            if (!int.TryParse(o.ToString(), out result))
            {
                return defaultValue;
            }
            return result;
        }
        public static string SafeGetMyDateTimeStringFromObjectByFormat(object o, string format)
        {
            DateTime dt = CommonFunc.SafeGetDateTimeFromObj(o);
            string result;
            if (DateTime.Compare(dt, new DateTime(1900, 1, 1)) <= 0)
            {
                result = string.Empty;
            }
            else
            {
                result = CommonFunc.SafeGetDateTimeStringFromObjectByFormat(o, format);
            }
            return result;
        }

        public static decimal SafeGetDecimalFromObject(object objValue, decimal defaultvalue)
        {
            if (objValue == null || objValue == DBNull.Value || objValue.ToString().Trim() == "")
            {
                return defaultvalue;
            }
            decimal result = defaultvalue;
            try
            {
                result = Convert.ToDecimal(objValue);
            }
            catch (Exception)
            {
            }
            return result;
        }

        public static float SafeGetFloatFromString(string textvalue, float defaultvalue)
        {
            if (string.IsNullOrEmpty(textvalue))
            {
                return defaultvalue;
            }
            float result = defaultvalue;
            try
            {
                result = (float)Convert.ToDouble(textvalue);
            }
            catch (Exception)
            {
            }
            return result;
        }

        public static float SafeGetFloatFromObject(object textvalue, float defaultvalue)
        {
            if (textvalue == null || textvalue == DBNull.Value || textvalue.ToString().Trim() == "")
            {
                return defaultvalue;
            }
            float result = defaultvalue;
            try
            {
                result = (float)Convert.ToDouble(textvalue.ToString());
            }
            catch (Exception)
            {
            }
            return result;
        }

        /// <summary>
        /// 对时间差进行处理。   6*24 +5 + 20/60
        /// </summary>
        /// <param name="ts"></param>
        /// <returns></returns>
        public static string GetTimeSpan(TimeSpan ts)
        {
            if (ts.TotalDays >= 365)
            {
                return Math.Floor(ts.TotalDays / 365) + "年前";
            }
            else if (ts.TotalDays >= 30)
            {
                return Math.Floor(ts.TotalDays / 30) + "月前";
            }
            else if (ts.TotalHours >= 24)
            {
                return Math.Floor(ts.TotalDays) + "天前";
            }
            else if (ts.TotalHours >= 1)
            {
                return Math.Floor(ts.TotalHours) + "小时前";
            }
            else if (ts.TotalMinutes >= 1)
            {
                return Math.Floor(ts.TotalMinutes) + "分钟前";
            }
            else
            {
                return "刚刚";
            }

        }


        /// <summary>
        /// 将UBB编码转成HTML编码
        /// </summary>
        /// <param name="argString"></param>
        /// <returns></returns>
        public static string UbbToHtml(string argString)
        {
            string tString = argString;
            if (tString != "")
            {
                Regex tRegex;
                bool tState = true;
                tString = tString.Replace("&", "&amp;");
                tString = tString.Replace(">", "&gt;");
                tString = tString.Replace("<", "&lt;");
                tString = tString.Replace("\"", "&quot;");
                tString = Regex.Replace(tString, @"\[br\]", "<br />", RegexOptions.IgnoreCase);
                string[,] tRegexAry = {
          {@"\[p\]([^\[]*?)\[\/p\]", "$1<br />"},
          {@"\[b\]([^\[]*?)\[\/b\]", "<b>$1</b>"},
          {@"\[i\]([^\[]*?)\[\/i\]", "<i>$1</i>"},
          {@"\[u\]([^\[]*?)\[\/u\]", "<u>$1</u>"},
          {@"\[ol\]([^\[]*?)\[\/ol\]", "<ol>$1</ol>"},
          {@"\[ul\]([^\[]*?)\[\/ul\]", "<ul>$1</ul>"},
          {@"\[li\]([^\[]*?)\[\/li\]", "<li>$1</li>"},
          {@"\[code\]([^\[]*?)\[\/code\]", "<div class=\"ubb_code\">$1</div>"},
          {@"\[quote\]([^\[]*?)\[\/quote\]", "<div class=\"ubb_quote\">$1</div>"},
          {@"\[color=([^\]]*)\]([^\[]*?)\[\/color\]", "<font style=\"color: $1\">$2</font>"},
          {@"\[hilitecolor=([^\]]*)\]([^\[]*?)\[\/hilitecolor\]", "<font style=\"background-color: $1\">$2</font>"},
          {@"\[align=([^\]]*)\]([^\[]*?)\[\/align\]", "<div style=\"text-align: $1\">$2</div>"},
          {@"\[url=([^\]]*)\]([^\[]*?)\[\/url\]", "<a href=\"$1\">$2</a>"},
          {@"\[img\]([^\[]*?)\[\/img\]", "<img src=\"$1\" />"}
        };
                while (tState)
                {
                    tState = false;
                    for (int ti = 0; ti < tRegexAry.GetLength(0); ti++)
                    {
                        tRegex = new Regex(tRegexAry[ti, 0], RegexOptions.IgnoreCase);
                        if (tRegex.Match(tString).Success)
                        {
                            tState = true;
                            tString = Regex.Replace(tString, tRegexAry[ti, 0], tRegexAry[ti, 1], RegexOptions.IgnoreCase);
                        }
                    }
                }
            }
            return tString;
        }

        public static IList<T> convertToList<T>(DataTable dt) where T : new()
        {
            List<T> lis = new List<T>();
            Type type = typeof(T);
            string tempName = string.Empty;
            foreach (DataRow dr in dt.Rows)
            {
                T t = new T();
                PropertyInfo[] propertys = t.GetType().GetProperties();
                foreach (PropertyInfo pi in propertys)
                {
                    tempName = pi.Name;
                    if (dt.Columns.Contains(tempName))
                    {
                        if (!pi.CanWrite) continue;
                        object value = dr[tempName];
                        if (value != DBNull.Value) { pi.SetValue(t, value, null); }
                    }

                }
                lis.Add(t);
            }
            return lis;
        }
       public static DataSet convertToDataSet<T>(IList<T> list)  
        {  
            if (list == null || list.Count <= 0)  
            {  
                return null;  
            }  
  
            DataSet ds = new DataSet();  
            DataTable dt = new DataTable(typeof(T).Name);  
            DataColumn column;  
            DataRow row;  
  
            System.Reflection.PropertyInfo[] myPropertyInfo = typeof(T).GetProperties(System.Reflection.BindingFlags.Public | System.Reflection.BindingFlags.Instance);  
  
            foreach (T t in list)  
            {  
                if (t == null)  
                {  
                    continue;  
                }  
  
                row = dt.NewRow();  
  
                for (int i = 0, j = myPropertyInfo.Length; i < j; i++)  
                {  
                    System.Reflection.PropertyInfo pi = myPropertyInfo[i];  
  
                    string name = pi.Name;  
  
                    if (dt.Columns[name] == null)  
                    {  
                        column = new DataColumn(name, pi.PropertyType);  
                        dt.Columns.Add(column);  
                    }  
  
                    row[name] = pi.GetValue(t, null);  
                }  
  
                dt.Rows.Add(row);  
            }  
  
            ds.Tables.Add(dt);  
  
            return ds;  
        }  
     

        public static object convertToModel(DataTable dt, object model)
        {
            if (dt != null && dt.Rows.Count != 0)
            {

                foreach (DataRow row in dt.Rows)
                {
                    foreach (var item in model.GetType().GetProperties())
                    {
                        if (row.Table.Columns.Contains(item.Name))
                        {
                            if (DBNull.Value != row[item.Name])
                            {
                                item.SetValue(model, Convert.ChangeType(row[item.Name], item.PropertyType), null);
                            }

                        }
                    }
                }
            }
            else
            {
                model = null;

            }


            return model;

        }
    }
}
