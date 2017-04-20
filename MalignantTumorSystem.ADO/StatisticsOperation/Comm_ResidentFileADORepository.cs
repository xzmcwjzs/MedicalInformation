using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MalignantTumorSystem.Model.ADOModel;
using System.Data.SqlClient;
using System.Data;

namespace MalignantTumorSystem.ADO.StatisticsOperation
{
    public class Comm_ResidentFileADORepository : BaseRepository<Comm_ResidentFile>
    {
        //主页表格数据处理
        public void GetInitJCDANum(string regionCode, out int lbJKDA, out int lb0_6, out int lb7_17, out int lb18_44, out int lb45_59, out int lb60_74, out int lb75_89, out int lb90, out int lbGXY, out int lbTNB, out int lbGXB, out int lbJSB, out int lbZL, out int lb65M, out int lb65F)
        {
            string sqlJKDA = string.Format(@"select count (id_card_number) from Comm_ResidentFile where community_code like '{0}%'", regionCode);
            //0-6
            string sql0_6 = string.Format(@"
select count (id_card_number) from Comm_ResidentFile where community_code like '{0}%' and  datediff(year,birth_date,GETDATE()) between '0' and '6'", regionCode);
            //7-17
            string sql7_17 = string.Format(@"
select count (id_card_number) from Comm_ResidentFile where community_code like '{0}%' and datediff(year,birth_date,GETDATE()) between '7' and '17'", regionCode);
            //18-44
            string sql18_44 = string.Format(@"
select count (id_card_number) from Comm_ResidentFile where community_code like '{0}%' and datediff(year,birth_date,GETDATE()) between '18' and '44'", regionCode);
            //45-59
            string sql45_59 = string.Format(@"
select count (id_card_number) from Comm_ResidentFile where community_code like '{0}%' and datediff(year,birth_date,GETDATE()) between '45' and '59'", regionCode);
            //60-74
            string sql60_74 = string.Format(@"
select count (id_card_number) from Comm_ResidentFile where community_code like '{0}%' and datediff(year,birth_date,GETDATE()) between '60' and '74'", regionCode);
            //75-89
            string sql75_89 = string.Format(@"
select count (id_card_number) from Comm_ResidentFile where community_code like '{0}%' and datediff(year,birth_date,GETDATE()) between '75' and '89'", regionCode);
            //90
            string sql90 = string.Format(@"
select count (id_card_number) from Comm_ResidentFile where community_code like '{0}%' and datediff(year,birth_date,GETDATE()) between '90' and '160'", regionCode);
            //高血压
            string sqlGXY = string.Format(@"select count (id_card_number) from Comm_Hypertension where community_code like '{0}%'", regionCode);
            //糖尿病
            string sqlTNB = string.Format(@"select count (id_card_number) from Comm_Diabetes where community_code like '{0}%'", regionCode);
            //冠心病
            string sqlGXB = string.Format(@"select count (id_card_number) from Comm_Coronary_Heart_Disease where community_code like '{0}%'", regionCode);
            //重性精神病
            string sqlJSB = string.Format(@"select count (id_card_number) from Comm_Oldperson where community_code like '{0}%'", regionCode);
            //肿瘤
            string sqlZL = string.Format(@"select count (id_card_number) from Comm_Tumour where community_code like '{0}%'", regionCode);
            //65男
            string sql65M = string.Format(@"
select count (id_card_number) from Comm_ResidentFile where community_code like '{0}%' and sex='01' and datediff(year,birth_date,GETDATE()) between '65' and '160'", regionCode);
            //65女
            string sql65F = string.Format(@"
select count (id_card_number) from Comm_ResidentFile where community_code like '{0}%' and sex='02' and datediff(year,birth_date,GETDATE()) between '65' and '160'", regionCode);


            lbJKDA = Convert.ToInt32(SqlHelper.ExecuteScalar(CommandType.Text, sqlJKDA));
            lb0_6 = Convert.ToInt32(SqlHelper.ExecuteScalar(CommandType.Text, sql0_6));
            lb7_17 = Convert.ToInt32(SqlHelper.ExecuteScalar(CommandType.Text, sql7_17));
            lb18_44 = Convert.ToInt32(SqlHelper.ExecuteScalar(CommandType.Text, sql18_44));
            lb45_59 = Convert.ToInt32(SqlHelper.ExecuteScalar(CommandType.Text, sql45_59));
            lb60_74 = Convert.ToInt32(SqlHelper.ExecuteScalar(CommandType.Text, sql60_74));
            lb75_89 = Convert.ToInt32(SqlHelper.ExecuteScalar(CommandType.Text, sql75_89));
            lb90 = Convert.ToInt32(SqlHelper.ExecuteScalar(CommandType.Text, sql90));
            lbGXY = Convert.ToInt32(SqlHelper.ExecuteScalar(CommandType.Text, sqlGXY));
            lbTNB = Convert.ToInt32(SqlHelper.ExecuteScalar(CommandType.Text, sqlTNB));
            lbGXB = Convert.ToInt32(SqlHelper.ExecuteScalar(CommandType.Text, sqlGXB));
            lbJSB = Convert.ToInt32(SqlHelper.ExecuteScalar(CommandType.Text, sqlJSB));
            lbZL = Convert.ToInt32(SqlHelper.ExecuteScalar(CommandType.Text, sqlZL));
            lb65M = Convert.ToInt32(SqlHelper.ExecuteScalar(CommandType.Text, sql65M));
            lb65F = Convert.ToInt32(SqlHelper.ExecuteScalar(CommandType.Text, sql65F));

        }

        //主页图表数据处理

        public void GetInitJCDAChar(string regionCode, out int month0, out int month1, out int month2, out int month3, out int month4, out int month5, out int month6, out int month7, out int month8, out int month9, out int month10, out int month11)
        {
            string sql0 = string.Format(@"select count (id_card_number) from Comm_ResidentFile where community_code like '{0}%' and datediff(month,create_time,GETDATE()) = '0'", regionCode);
            string sql1 = string.Format(@"select count (id_card_number) from Comm_ResidentFile where community_code like '{0}%' and datediff(month,create_time,GETDATE()) = '1'", regionCode);
            string sql2 = string.Format(@"select count (id_card_number) from Comm_ResidentFile where community_code like '{0}%' and datediff(month,create_time,GETDATE()) = '2'", regionCode);
            string sql3 = string.Format(@"select count (id_card_number) from Comm_ResidentFile where community_code like '{0}%' and datediff(month,create_time,GETDATE()) = '3'", regionCode);
            string sql4 = string.Format(@"select count (id_card_number) from Comm_ResidentFile where community_code like '{0}%' and datediff(month,create_time,GETDATE()) = '4'", regionCode);
            string sql5 = string.Format(@"select count (id_card_number) from Comm_ResidentFile where community_code like '{0}%' and datediff(month,create_time,GETDATE()) = '5'", regionCode);
            string sql6 = string.Format(@"select count (id_card_number) from Comm_ResidentFile where community_code like '{0}%' and datediff(month,create_time,GETDATE()) = '6'", regionCode);
            string sql7 = string.Format(@"select count (id_card_number) from Comm_ResidentFile where community_code like '{0}%' and datediff(month,create_time,GETDATE()) = '7'", regionCode);
            string sql8 = string.Format(@"select count (id_card_number) from Comm_ResidentFile where community_code like '{0}%' and datediff(month,create_time,GETDATE()) = '8'", regionCode);
            string sql9 = string.Format(@"select count (id_card_number) from Comm_ResidentFile where community_code like '{0}%' and datediff(month,create_time,GETDATE()) = '9'", regionCode);
            string sql10 = string.Format(@"select count (id_card_number) from Comm_ResidentFile where community_code like '{0}%' and datediff(month,create_time,GETDATE()) = '10'", regionCode);
            string sql11 = string.Format(@"select count (id_card_number) from Comm_ResidentFile where community_code like '{0}%' and datediff(month,create_time,GETDATE()) = '11'", regionCode);

            month0 = Convert.ToInt32(SqlHelper.ExecuteScalar(CommandType.Text, sql0));
            month1 = Convert.ToInt32(SqlHelper.ExecuteScalar(CommandType.Text, sql1));
            month2 = Convert.ToInt32(SqlHelper.ExecuteScalar(CommandType.Text, sql2));
            month3 = Convert.ToInt32(SqlHelper.ExecuteScalar(CommandType.Text, sql3));
            month4 = Convert.ToInt32(SqlHelper.ExecuteScalar(CommandType.Text, sql4));
            month5 = Convert.ToInt32(SqlHelper.ExecuteScalar(CommandType.Text, sql5));
            month6 = Convert.ToInt32(SqlHelper.ExecuteScalar(CommandType.Text, sql6));
            month7 = Convert.ToInt32(SqlHelper.ExecuteScalar(CommandType.Text, sql7));
            month8 = Convert.ToInt32(SqlHelper.ExecuteScalar(CommandType.Text, sql8));
            month9 = Convert.ToInt32(SqlHelper.ExecuteScalar(CommandType.Text, sql9));
            month10 = Convert.ToInt32(SqlHelper.ExecuteScalar(CommandType.Text, sql10));
            month11 = Convert.ToInt32(SqlHelper.ExecuteScalar(CommandType.Text, sql11));
        }

        //人口数量资料表格、图表数据处理
        public void GetDemographicDataNumberNum(string regionCode, out int lb4, out int lb4M, out int lb4F, out int lb3, out int lb3M, out int lb3F, out int lb2, out int lb2M, out int lb2F, out int lb1, out int lb1M, out int lb1F, out int lb0, out int lb0M, out int lb0F)
        {
            string sql4 = string.Format(@"select count (id_card_number) from Comm_ResidentFile where community_code like '{0}%' and  datediff(year,create_time,GETDATE())='4'", regionCode);
            string sql4M = string.Format(@"select count (id_card_number) from Comm_ResidentFile where community_code like '{0}%' and sex='01' and  datediff(year,create_time,GETDATE())='4'", regionCode);
            string sql4F = string.Format(@"select count (id_card_number) from Comm_ResidentFile where community_code like '{0}%' and sex='02' and  datediff(year,create_time,GETDATE())='4'", regionCode);

            string sql3 = string.Format(@"select count (id_card_number) from Comm_ResidentFile where community_code like '{0}%' and  datediff(year,create_time,GETDATE())='3'", regionCode);
            string sql3M = string.Format(@"select count (id_card_number) from Comm_ResidentFile where community_code like '{0}%' and sex='01' and  datediff(year,create_time,GETDATE())='3'", regionCode);
            string sql3F = string.Format(@"select count (id_card_number) from Comm_ResidentFile where community_code like '{0}%' and sex='02' and  datediff(year,create_time,GETDATE())='3'", regionCode);

            string sql2 = string.Format(@"select count (id_card_number) from Comm_ResidentFile where community_code like '{0}%' and  datediff(year,create_time,GETDATE())='2'", regionCode);
            string sql2M = string.Format(@"select count (id_card_number) from Comm_ResidentFile where community_code like '{0}%' and sex='01' and  datediff(year,create_time,GETDATE())='2'", regionCode);
            string sql2F = string.Format(@"select count (id_card_number) from Comm_ResidentFile where community_code like '{0}%' and sex='02' and  datediff(year,create_time,GETDATE())='2'", regionCode);

            string sql1 = string.Format(@"select count (id_card_number) from Comm_ResidentFile where community_code like '{0}%' and  datediff(year,create_time,GETDATE())='1'", regionCode);
            string sql1M = string.Format(@"select count (id_card_number) from Comm_ResidentFile where community_code like '{0}%' and sex='01' and  datediff(year,create_time,GETDATE())='1'", regionCode);
            string sql1F = string.Format(@"select count (id_card_number) from Comm_ResidentFile where community_code like '{0}%' and sex='02' and  datediff(year,create_time,GETDATE())='1'", regionCode);

            string sql0 = string.Format(@"select count (id_card_number) from Comm_ResidentFile where community_code like '{0}%' and  datediff(year,create_time,GETDATE())='0'", regionCode);
            string sql0M = string.Format(@"select count (id_card_number) from Comm_ResidentFile where community_code like '{0}%' and sex='01' and  datediff(year,create_time,GETDATE())='0'", regionCode);
            string sql0F = string.Format(@"select count (id_card_number) from Comm_ResidentFile where community_code like '{0}%' and sex='02' and  datediff(year,create_time,GETDATE())='0'", regionCode);

            lb4 = Convert.ToInt32(SqlHelper.ExecuteScalar(CommandType.Text, sql4));
            lb4M = Convert.ToInt32(SqlHelper.ExecuteScalar(CommandType.Text, sql4M));
            lb4F = Convert.ToInt32(SqlHelper.ExecuteScalar(CommandType.Text, sql4F));
            lb3 = Convert.ToInt32(SqlHelper.ExecuteScalar(CommandType.Text, sql3));
            lb3M = Convert.ToInt32(SqlHelper.ExecuteScalar(CommandType.Text, sql3M));
            lb3F = Convert.ToInt32(SqlHelper.ExecuteScalar(CommandType.Text, sql3F));
            lb2 = Convert.ToInt32(SqlHelper.ExecuteScalar(CommandType.Text, sql2));
            lb2M = Convert.ToInt32(SqlHelper.ExecuteScalar(CommandType.Text, sql2M));
            lb2F = Convert.ToInt32(SqlHelper.ExecuteScalar(CommandType.Text, sql2F));
            lb1 = Convert.ToInt32(SqlHelper.ExecuteScalar(CommandType.Text, sql1));
            lb1M = Convert.ToInt32(SqlHelper.ExecuteScalar(CommandType.Text, sql1M));
            lb1F = Convert.ToInt32(SqlHelper.ExecuteScalar(CommandType.Text, sql1F));
            lb0 = Convert.ToInt32(SqlHelper.ExecuteScalar(CommandType.Text, sql0));
            lb0M = Convert.ToInt32(SqlHelper.ExecuteScalar(CommandType.Text, sql0M));
            lb0F = Convert.ToInt32(SqlHelper.ExecuteScalar(CommandType.Text, sql0F));

        }

        //主页表格数据处理  存储过程版
        public void GetInitJCDANumSP(string regionCode, out int lbJKDA, out int lb0_6, out int lb7_17, out int lb18_44, out int lb45_59, out int lb60_74, out int lb75_89, out int lb90, out int lbGXY, out int lbTNB, out int lbGXB, out int lbJSB, out int lbZL, out int lb65M, out int lb65F)
        {
            lbJKDA = 0; lb0_6 = 0; lb7_17 = 0; lb18_44 = 0; lb45_59 = 0; lb60_74 = 0; lb75_89 = 0; lb90 = 0; lbGXY = 0; lbTNB = 0; lbGXB = 0; lbJSB = 0; lbZL = 0;  lb65M = 0; lb65F = 0;
            SqlParameter[] paras = {
                new SqlParameter("@regionCode",regionCode),
                new SqlParameter("@lbJKDA",lbJKDA),
                new SqlParameter("@lb0_6",lb0_6),
                new SqlParameter("@lb7_17",lb7_17),
                new SqlParameter("@lb18_44",lb18_44),
                new SqlParameter("@lb45_59",lb45_59),
                new SqlParameter("@lb60_74",lb60_74),
                new SqlParameter("@lb75_89",lb75_89),
                new SqlParameter("@lb90",lb90),
                new SqlParameter("@lbGXY",lbGXY),
                new SqlParameter("@lbTNB",lbTNB),
                new SqlParameter("@lbGXB",lbGXB),
                new SqlParameter("@lbJSB",lbJSB),
                new SqlParameter("@lbZL",lbZL),
                new SqlParameter("@lb65M",lb65M),
                new SqlParameter("@lb65F",lb65F)
            };
            paras[1].Direction = ParameterDirection.Output;
            paras[2].Direction = ParameterDirection.Output;
            paras[3].Direction = ParameterDirection.Output;
            paras[4].Direction = ParameterDirection.Output;
            paras[5].Direction = ParameterDirection.Output;
            paras[6].Direction = ParameterDirection.Output;
            paras[7].Direction = ParameterDirection.Output;
            paras[8].Direction = ParameterDirection.Output;
            paras[9].Direction = ParameterDirection.Output;
            paras[10].Direction = ParameterDirection.Output;
            paras[11].Direction = ParameterDirection.Output;
            paras[12].Direction = ParameterDirection.Output;
            paras[13].Direction = ParameterDirection.Output;
            paras[14].Direction = ParameterDirection.Output;
            paras[15].Direction = ParameterDirection.Output;

            SqlHelper.ExecuteNonQuery(CommandType.StoredProcedure, "GetInitJCDANumProcedure", paras); 
            lbJKDA =Convert.ToInt32(paras[1].Value);
            lb0_6 = Convert.ToInt32(paras[2].Value);
            lb7_17 = Convert.ToInt32(paras[3].Value);
            lb18_44 = Convert.ToInt32(paras[4].Value);
            lb45_59 = Convert.ToInt32(paras[5].Value);
            lb60_74 = Convert.ToInt32(paras[6].Value);
            lb75_89 = Convert.ToInt32(paras[7].Value);
            lb90 = Convert.ToInt32(paras[8].Value);
            lbGXY = Convert.ToInt32(paras[9].Value);
            lbTNB = Convert.ToInt32(paras[10].Value);
            lbGXB = Convert.ToInt32(paras[11].Value);
            lbJSB = Convert.ToInt32(paras[12].Value);
            lbZL = Convert.ToInt32(paras[13].Value);
            lb65M = Convert.ToInt32(paras[14].Value);
            lb65F = Convert.ToInt32(paras[15].Value);
        }
        //主页图表数据处理 存储过程版
        public void GetInitJCDACharSP(string regionCode, out int month0, out int month1, out int month2, out int month3, out int month4, out int month5, out int month6, out int month7, out int month8, out int month9, out int month10, out int month11)
        {
            month0 = 0;month1 = 0;month2 = 0;month3 = 0;month4 = 0;month5 = 0;month6 = 0;month7 = 0;month8 = 0;month9 = 0;month10 = 0;month11 = 0;
            SqlParameter[] paras = {
                new SqlParameter("@regionCode",regionCode),
                new SqlParameter("@month0",month0),
                new SqlParameter("@month1",month1),
                new SqlParameter("@month2",month2),
                new SqlParameter("@month3",month3),
                new SqlParameter("@month4",month4),
                new SqlParameter("@month5",month5),
                new SqlParameter("@month6",month6),
                new SqlParameter("@month7",month7),
                new SqlParameter("@month8",month8),
                new SqlParameter("@month9",month9),
                new SqlParameter("@month10",month10),
                new SqlParameter("@month11",month11)
            };
            paras[1].Direction = ParameterDirection.Output;
            paras[2].Direction = ParameterDirection.Output;
            paras[3].Direction = ParameterDirection.Output;
            paras[4].Direction = ParameterDirection.Output;
            paras[5].Direction = ParameterDirection.Output;
            paras[6].Direction = ParameterDirection.Output;
            paras[7].Direction = ParameterDirection.Output;
            paras[8].Direction = ParameterDirection.Output;
            paras[9].Direction = ParameterDirection.Output;
            paras[10].Direction = ParameterDirection.Output;
            paras[11].Direction = ParameterDirection.Output;
            paras[12].Direction = ParameterDirection.Output;

            SqlHelper.ExecuteNonQuery(CommandType.StoredProcedure, "GetInitJCDACharProcedure", paras);
            month0 = Convert.ToInt32(paras[1].Value);
            month1 = Convert.ToInt32(paras[2].Value);
            month2 = Convert.ToInt32(paras[3].Value);
            month3 = Convert.ToInt32(paras[4].Value);
            month4 = Convert.ToInt32(paras[5].Value);
            month5 = Convert.ToInt32(paras[6].Value);
            month6 = Convert.ToInt32(paras[7].Value);
            month7 = Convert.ToInt32(paras[8].Value);
            month8 = Convert.ToInt32(paras[9].Value);
            month9 = Convert.ToInt32(paras[10].Value);
            month10 = Convert.ToInt32(paras[11].Value);
            month11= Convert.ToInt32(paras[12].Value); 
            
        }

        //人口数量资料表格、图表数据处理  存储过程版
        public void GetDemographicDataNumberNumSP(string regionCode, out int lb4, out int lb4M, out int lb4F, out int lb3, out int lb3M, out int lb3F, out int lb2, out int lb2M, out int lb2F, out int lb1, out int lb1M, out int lb1F, out int lb0, out int lb0M, out int lb0F)
        {
            lb4 = 0; lb4M = 0; lb4F = 0; lb3 = 0; lb3M = 0; lb3F = 0; lb2 = 0; lb2M = 0; lb2F = 0; lb1 = 0; lb1M = 0; lb1F = 0; lb0 = 0; lb0M = 0; lb0F = 0;
            SqlParameter[] paras = {
                new SqlParameter("@regionCode",regionCode),
                new SqlParameter("@lb4",lb4),
                new SqlParameter("@lb4M",lb4M),
                new SqlParameter("@lb4F",lb4F),
                new SqlParameter("@lb3",lb3),
                new SqlParameter("@lb3M",lb3M),
                new SqlParameter("@lb3F",lb3F),
                new SqlParameter("@lb2",lb2),
                new SqlParameter("@lb2M",lb2M),
                new SqlParameter("@lb2F",lb2F),
                new SqlParameter("@lb1",lb1),
                new SqlParameter("@lb1M",lb1M),
                new SqlParameter("@lb1F",lb1F),
                 new SqlParameter("@lb0",lb0),
                new SqlParameter("@lb0M",lb0M),
                new SqlParameter("@lb0F",lb0F)
            };
            paras[1].Direction = ParameterDirection.Output;
            paras[2].Direction = ParameterDirection.Output;
            paras[3].Direction = ParameterDirection.Output;
            paras[4].Direction = ParameterDirection.Output;
            paras[5].Direction = ParameterDirection.Output;
            paras[6].Direction = ParameterDirection.Output;
            paras[7].Direction = ParameterDirection.Output;
            paras[8].Direction = ParameterDirection.Output;
            paras[9].Direction = ParameterDirection.Output;
            paras[10].Direction = ParameterDirection.Output;
            paras[11].Direction = ParameterDirection.Output;
            paras[12].Direction = ParameterDirection.Output;
            paras[13].Direction = ParameterDirection.Output;
            paras[14].Direction = ParameterDirection.Output;
            paras[15].Direction = ParameterDirection.Output;

            SqlHelper.ExecuteNonQuery(CommandType.StoredProcedure, "GetDemographicDataNumberNumProcedure", paras);
            lb4= Convert.ToInt32(paras[1].Value);
            lb4M = Convert.ToInt32(paras[2].Value);
            lb4F= Convert.ToInt32(paras[3].Value);
            lb3 = Convert.ToInt32(paras[4].Value);
            lb3M = Convert.ToInt32(paras[5].Value);
            lb3F = Convert.ToInt32(paras[6].Value);
            lb2= Convert.ToInt32(paras[7].Value);
            lb2M = Convert.ToInt32(paras[8].Value);
            lb2F = Convert.ToInt32(paras[9].Value);
            lb1= Convert.ToInt32(paras[10].Value);
            lb1M = Convert.ToInt32(paras[11].Value);
            lb1F = Convert.ToInt32(paras[12].Value);
            lb0 = Convert.ToInt32(paras[13].Value);
            lb0M = Convert.ToInt32(paras[14].Value);
            lb0F = Convert.ToInt32(paras[15].Value);

        }   
    }       
}           
