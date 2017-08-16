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
            lbJKDA = 0; lb0_6 = 0; lb7_17 = 0; lb18_44 = 0; lb45_59 = 0; lb60_74 = 0; lb75_89 = 0; lb90 = 0; lbGXY = 0; lbTNB = 0; lbGXB = 0; lbJSB = 0; lbZL = 0; lb65M = 0; lb65F = 0;
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
            lbJKDA = Convert.ToInt32(paras[1].Value);
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
            month0 = 0; month1 = 0; month2 = 0; month3 = 0; month4 = 0; month5 = 0; month6 = 0; month7 = 0; month8 = 0; month9 = 0; month10 = 0; month11 = 0;
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
            month11 = Convert.ToInt32(paras[12].Value);

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
            lb4 = Convert.ToInt32(paras[1].Value);
            lb4M = Convert.ToInt32(paras[2].Value);
            lb4F = Convert.ToInt32(paras[3].Value);
            lb3 = Convert.ToInt32(paras[4].Value);
            lb3M = Convert.ToInt32(paras[5].Value);
            lb3F = Convert.ToInt32(paras[6].Value);
            lb2 = Convert.ToInt32(paras[7].Value);
            lb2M = Convert.ToInt32(paras[8].Value);
            lb2F = Convert.ToInt32(paras[9].Value);
            lb1 = Convert.ToInt32(paras[10].Value);
            lb1M = Convert.ToInt32(paras[11].Value);
            lb1F = Convert.ToInt32(paras[12].Value);
            lb0 = Convert.ToInt32(paras[13].Value);
            lb0M = Convert.ToInt32(paras[14].Value);
            lb0F = Convert.ToInt32(paras[15].Value);

        }
        //人口构成 表格 图表 数据处理 存储过程版
        public void GetDemographicDataConstituteNumSP(string regionCode, out int lb0m, out int lb0f, out int lb10m, out int lb10f, out int lb20m, out int lb20f, out int lb30m, out int lb30f, out int lb40m, out int lb40f, out int lb50m, out int lb50f, out int lb60m, out int lb60f, out int lb70m, out int lb70f, out int lb80m, out int lb80f, out int lb90m, out int lb90f)
        {
            lb0m = 0;
            lb0f = 0;
            lb10m = 0;
            lb10f = 0;
            lb20m = 0;
            lb20f = 0;
            lb30m = 0;
            lb30f = 0;
            lb40m = 0;
            lb40f = 0;
            lb50m = 0;
            lb50f = 0;
            lb60m = 0;
            lb60f = 0;
            lb70m = 0;
            lb70f = 0;
            lb80m = 0;
            lb80f = 0;
            lb90m = 0;
            lb90f = 0;
            SqlParameter[] paras = {
                new SqlParameter("@regionCode",regionCode),
                new SqlParameter("@lb0m",lb0m),
                new SqlParameter("@lb0f",lb0f),
                 new SqlParameter("@lb10m",lb10m),
                new SqlParameter("@lb10f",lb10f),
                new SqlParameter("@lb20m",lb20m),
                new SqlParameter("@lb20f",lb20f),
                new SqlParameter("@lb30m",lb30m),
                new SqlParameter("@lb30f",lb30f),
                new SqlParameter("@lb40m",lb40m),
                new SqlParameter("@lb40f",lb40f),
                new SqlParameter("@lb50m",lb50m),
                new SqlParameter("@lb50f",lb50f),
                new SqlParameter("@lb60m",lb60m),
                new SqlParameter("@lb60f",lb60f),
                new SqlParameter("@lb70m",lb70m),
                new SqlParameter("@lb70f",lb70f),
                new SqlParameter("@lb80m",lb80m),
                new SqlParameter("@lb80f",lb80f),
                new SqlParameter("@lb90m",lb90m),
                new SqlParameter("@lb90f",lb90f)
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
            paras[16].Direction = ParameterDirection.Output;
            paras[17].Direction = ParameterDirection.Output;
            paras[18].Direction = ParameterDirection.Output;
            paras[19].Direction = ParameterDirection.Output;
            paras[20].Direction = ParameterDirection.Output;

            SqlHelper.ExecuteNonQuery(CommandType.StoredProcedure, "GetDemographicDataConstituteNumProcedure", paras);
            lb0m = Convert.ToInt32(paras[1].Value);
            lb0f = Convert.ToInt32(paras[2].Value);
            lb10m = Convert.ToInt32(paras[3].Value);
            lb10f = Convert.ToInt32(paras[4].Value);
            lb20m = Convert.ToInt32(paras[5].Value);
            lb20f = Convert.ToInt32(paras[6].Value);
            lb30m = Convert.ToInt32(paras[7].Value);
            lb30f = Convert.ToInt32(paras[8].Value);
            lb40m = Convert.ToInt32(paras[9].Value);
            lb40f = Convert.ToInt32(paras[10].Value);
            lb50m = Convert.ToInt32(paras[11].Value);
            lb50f = Convert.ToInt32(paras[12].Value);
            lb60m = Convert.ToInt32(paras[12].Value);
            lb60f = Convert.ToInt32(paras[14].Value);
            lb70m = Convert.ToInt32(paras[15].Value);
            lb70f = Convert.ToInt32(paras[16].Value);
            lb80m = Convert.ToInt32(paras[17].Value);
            lb80f = Convert.ToInt32(paras[18].Value);
            lb90m = Convert.ToInt32(paras[19].Value);
            lb90f = Convert.ToInt32(paras[20].Value);
        }
        //人口负担 表格 图表 数据处理 存储过程版
        public void GetDemographicDataBurdenNumSP(string regionCode, out int lb0m, out int lb0f, out int lb15m, out int lb15f, out int lb65m, out int lb65f)
        {
            lb0m = 0;
            lb0f = 0;
            lb15m = 0;
            lb15f = 0;
            lb65m = 0;
            lb65f = 0;
            SqlParameter[] paras = {
                new SqlParameter("@regionCode",regionCode),
                new SqlParameter("@lb0m",lb0m),
                new SqlParameter("@lb0f",lb0f),
                 new SqlParameter("@lb15m",lb15m),
                new SqlParameter("@lb15f",lb15f),
                 new SqlParameter("@lb65m",lb65m),
                new SqlParameter("@lb65f",lb65f)
            };
            paras[1].Direction = ParameterDirection.Output;
            paras[2].Direction = ParameterDirection.Output;
            paras[3].Direction = ParameterDirection.Output;
            paras[4].Direction = ParameterDirection.Output;
            paras[5].Direction = ParameterDirection.Output;
            paras[6].Direction = ParameterDirection.Output;

            SqlHelper.ExecuteNonQuery(CommandType.StoredProcedure, "GetDemographicDataBurdenNumProcedure", paras);
            lb0m = Convert.ToInt32(paras[1].Value);
            lb0f = Convert.ToInt32(paras[2].Value);
            lb15m = Convert.ToInt32(paras[3].Value);
            lb15f = Convert.ToInt32(paras[4].Value);
            lb65m = Convert.ToInt32(paras[5].Value);
            lb65f = Convert.ToInt32(paras[6].Value);
        }

        //人口文化程度构成 表格 图表 数据处理 存储过程版
        public void GetDemographicDataEducationNumSP(string regionCode, out int s1, out int s2, out int s3, out int s4, out int s5, out int s6, out int s7, out int s8, out int s9, out int s10)
        {
            s1 = 0;
            s2 = 0;
            s3 = 0;
            s4 = 0;
            s5 = 0;
            s6 = 0;
            s7 = 0;
            s8 = 0;
            s9 = 0;
            s10 = 0;
            SqlParameter[] paras = {
                new SqlParameter("@regionCode",regionCode),
                new SqlParameter("@s1",s1),
                new SqlParameter("@s2",s2),
                 new SqlParameter("@s3",s3),
                new SqlParameter("@s4",s4),
                 new SqlParameter("@s5",s5),
                new SqlParameter("@s6",s6),
                 new SqlParameter("@s7",s7),
                  new SqlParameter("@s8",s8),
                   new SqlParameter("@s9",s9),
                    new SqlParameter("@s10",s10)
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

            SqlHelper.ExecuteNonQuery(CommandType.StoredProcedure, "GetDemographicDataEducationNumProcedure", paras);
            s1 = Convert.ToInt32(paras[1].Value);
            s2 = Convert.ToInt32(paras[2].Value);
            s3 = Convert.ToInt32(paras[3].Value);
            s4 = Convert.ToInt32(paras[4].Value);
            s5 = Convert.ToInt32(paras[5].Value);
            s6 = Convert.ToInt32(paras[6].Value);
            s7 = Convert.ToInt32(paras[7].Value);
            s8 = Convert.ToInt32(paras[8].Value);
            s9 = Convert.ToInt32(paras[9].Value);
            s10 = Convert.ToInt32(paras[10].Value);
        }

        //人口职业构成 表格 图表 数据处理 存储过程版
        public void GetDemographicDataOccupationNumSP(string regionCode, out int s1, out int s2, out int s3, out int s4, out int s5, out int s6, out int s7, out int s8, out int s9)
        {
            s1 = 0;
            s2 = 0;
            s3 = 0;
            s4 = 0;
            s5 = 0;
            s6 = 0;
            s7 = 0;
            s8 = 0;
            s9 = 0;
            SqlParameter[] paras = {
                new SqlParameter("@regionCode",regionCode),
                new SqlParameter("@s1",s1),
                new SqlParameter("@s2",s2),
                 new SqlParameter("@s3",s3),
                new SqlParameter("@s4",s4),
                 new SqlParameter("@s5",s5),
                new SqlParameter("@s6",s6),
                 new SqlParameter("@s7",s7),
                   new SqlParameter("@s8",s8),
                     new SqlParameter("@s9",s9)
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

            SqlHelper.ExecuteNonQuery(CommandType.StoredProcedure, "GetDemographicDataOccupationNumProcedure", paras);
            s1 = Convert.ToInt32(paras[1].Value);
            s2 = Convert.ToInt32(paras[2].Value);
            s3 = Convert.ToInt32(paras[3].Value);
            s4 = Convert.ToInt32(paras[4].Value);
            s5 = Convert.ToInt32(paras[5].Value);
            s6 = Convert.ToInt32(paras[6].Value);
            s7 = Convert.ToInt32(paras[7].Value);
            s8 = Convert.ToInt32(paras[8].Value);
            s9 = Convert.ToInt32(paras[9].Value);
        }

        //人口婚姻状况 表格图表 数据处理 存储过程版
        public void GetDemographicDataMarriageNumSP(string regionCode, out int s1, out int s2, out int s3, out int s4, out int s5)
        {
            s1 = 0;
            s2 = 0;
            s3 = 0;
            s4 = 0;
            s5 = 0; 
            SqlParameter[] paras = {
                new SqlParameter("@regionCode",regionCode),
                new SqlParameter("@s1",s1),
                new SqlParameter("@s2",s2),
                 new SqlParameter("@s3",s3),
                new SqlParameter("@s4",s4),
                 new SqlParameter("@s5",s5)
            };
            paras[1].Direction = ParameterDirection.Output;
            paras[2].Direction = ParameterDirection.Output;
            paras[3].Direction = ParameterDirection.Output;
            paras[4].Direction = ParameterDirection.Output;
            paras[5].Direction = ParameterDirection.Output; 

            SqlHelper.ExecuteNonQuery(CommandType.StoredProcedure, "GetDemographicDataMarriageNumProcedure", paras);
            s1 = Convert.ToInt32(paras[1].Value);
            s2 = Convert.ToInt32(paras[2].Value);
            s3 = Convert.ToInt32(paras[3].Value);
            s4 = Convert.ToInt32(paras[4].Value);
            s5 = Convert.ToInt32(paras[5].Value); 
        }

        //医疗保障构成 表格 图表 数据处理 存储过程版
        public void GetDemographicDataMedicalSecurityNumSP(string regionCode, out int s1, out int s2, out int s3, out int s4, out int s5, out int s6, out int s7, out int s8)
        {
            s1 = 0;
            s2 = 0;
            s3 = 0;
            s4 = 0;
            s5 = 0;
            s6 = 0;
            s7 = 0;
            s8 = 0;
            SqlParameter[] paras = {
                new SqlParameter("@regionCode",regionCode),
                new SqlParameter("@s1",s1),
                new SqlParameter("@s2",s2),
                 new SqlParameter("@s3",s3),
                new SqlParameter("@s4",s4),
                 new SqlParameter("@s5",s5),
                new SqlParameter("@s6",s6),
                 new SqlParameter("@s7",s7),
                   new SqlParameter("@s8",s8)
            };
            paras[1].Direction = ParameterDirection.Output;
            paras[2].Direction = ParameterDirection.Output;
            paras[3].Direction = ParameterDirection.Output;
            paras[4].Direction = ParameterDirection.Output;
            paras[5].Direction = ParameterDirection.Output;
            paras[6].Direction = ParameterDirection.Output;
            paras[7].Direction = ParameterDirection.Output;
            paras[8].Direction = ParameterDirection.Output;

            SqlHelper.ExecuteNonQuery(CommandType.StoredProcedure, "GetDemographicDataMedicalSecurityNumProcedure", paras);
            s1 = Convert.ToInt32(paras[1].Value);
            s2 = Convert.ToInt32(paras[2].Value);
            s3 = Convert.ToInt32(paras[3].Value);
            s4 = Convert.ToInt32(paras[4].Value);
            s5 = Convert.ToInt32(paras[5].Value);
            s6 = Convert.ToInt32(paras[6].Value);
            s7 = Convert.ToInt32(paras[7].Value);
            s8 = Convert.ToInt32(paras[8].Value);
        }

        //吸烟情况分析 表格 图表 数据处理 存储过程版
        public void GetDemographicDataSmokeNumSP(string regionCode, out int s1_1, out int s2_1, out int s3_1, out int s4_1, out int s5_1, out int s6_1, out int s1_2, out int s2_2, out int s3_2, out int s4_2, out int s5_2, out int s6_2)
        {
            s1_1 = 0;
            s2_1 = 0;
            s3_1 = 0;
            s4_1 = 0;
            s5_1 = 0;
            s6_1 = 0;
            s1_2 = 0;
            s2_2 = 0;
            s3_2 = 0;
            s4_2 = 0;
            s5_2 = 0;
            s6_2 = 0;
            SqlParameter[] paras = {
                new SqlParameter("@regionCode",regionCode),
                new SqlParameter("@s1_1",s1_1),
                new SqlParameter("@s2_1",s2_1),
                new SqlParameter("@s3_1",s3_1),
                new SqlParameter("@s4_1",s4_1),
                new SqlParameter("@s5_1",s5_1),
                new SqlParameter("@s6_1",s6_1),
                new SqlParameter("@s1_2",s1_2),
                new SqlParameter("@s2_2",s2_2),
                new SqlParameter("@s3_2",s3_2),
                new SqlParameter("@s4_2",s4_2),
                new SqlParameter("@s5_2",s5_2),
                new SqlParameter("@s6_2",s6_2)
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

            SqlHelper.ExecuteNonQuery(CommandType.StoredProcedure, "GetDemographicDataSmokeNumProcedure", paras);
            s1_1 = Convert.ToInt32(paras[1].Value);
            s2_1 = Convert.ToInt32(paras[2].Value);
            s3_1 = Convert.ToInt32(paras[3].Value);
            s4_1 = Convert.ToInt32(paras[4].Value);
            s5_1 = Convert.ToInt32(paras[5].Value);
            s6_1 = Convert.ToInt32(paras[6].Value);
            s1_2 = Convert.ToInt32(paras[7].Value);
            s2_2 = Convert.ToInt32(paras[8].Value);
            s3_2 = Convert.ToInt32(paras[9].Value);
            s4_2 = Convert.ToInt32(paras[10].Value);
            s5_2 = Convert.ToInt32(paras[11].Value);
            s6_2 = Convert.ToInt32(paras[12].Value);
        }

        //饮酒情况分析 表格 图表 数据处理 存储过程版
        public void GetDemographicDataDrinkNumSP(string regionCode, out int s1_1, out int s2_1, out int s3_1, out int s4_1, out int s5_1, out int s6_1, out int s1_2, out int s2_2, out int s3_2, out int s4_2, out int s5_2, out int s6_2)
        {
            s1_1 = 0;
            s2_1 = 0;
            s3_1 = 0;
            s4_1 = 0;
            s5_1 = 0;
            s6_1 = 0;
            s1_2 = 0;
            s2_2 = 0;
            s3_2 = 0;
            s4_2 = 0;
            s5_2 = 0;
            s6_2 = 0;
            SqlParameter[] paras = {
                new SqlParameter("@regionCode",regionCode),
                new SqlParameter("@s1_1",s1_1),
                new SqlParameter("@s2_1",s2_1),
                new SqlParameter("@s3_1",s3_1),
                new SqlParameter("@s4_1",s4_1),
                new SqlParameter("@s5_1",s5_1),
                new SqlParameter("@s6_1",s6_1),
                new SqlParameter("@s1_2",s1_2),
                new SqlParameter("@s2_2",s2_2),
                new SqlParameter("@s3_2",s3_2),
                new SqlParameter("@s4_2",s4_2),
                new SqlParameter("@s5_2",s5_2),
                new SqlParameter("@s6_2",s6_2)
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

            SqlHelper.ExecuteNonQuery(CommandType.StoredProcedure, "GetDemographicDataDrinkNumProcedure", paras);
            s1_1 = Convert.ToInt32(paras[1].Value);
            s2_1 = Convert.ToInt32(paras[2].Value);
            s3_1 = Convert.ToInt32(paras[3].Value);
            s4_1 = Convert.ToInt32(paras[4].Value);
            s5_1 = Convert.ToInt32(paras[5].Value);
            s6_1 = Convert.ToInt32(paras[6].Value);
            s1_2 = Convert.ToInt32(paras[7].Value);
            s2_2 = Convert.ToInt32(paras[8].Value);
            s3_2 = Convert.ToInt32(paras[9].Value);
            s4_2 = Convert.ToInt32(paras[10].Value);
            s5_2 = Convert.ToInt32(paras[11].Value);
            s6_2 = Convert.ToInt32(paras[12].Value);
        }

        //人口地图分布
        public void GetHomeDataDistributionNumSP(out int s1, out int s2, out int s3, out int s4, out int s5, out int s6, out int s7, out int s8, out int s9, out int s10, out int s11, out int s12, out int s13, out int s14, out int s15, out int s16, out int s17, out int s18, out int s19, out int s20, out int s21, out int s22, out int s23, out int s24, out int s25, out int s26, out int s27, out int s28, out int s29, out int s30, out int s31, out int s32, out int s33, out int s34, out int s1_1, out int s1_2, out int s1_3, out int s1_4, out int s1_5, out int s1_6, out int s1_7, out int s1_8, out int s1_9, out int s1_10, out int s1_11, out int s1_12, out int s1_13, out int s1_10_1, out int s1_10_2, out int s1_10_3, out int s1_10_4, out int s1_10_5, out int s1_10_6, out int s1_10_7, out int s1_10_8)
        {
            s1 = 0;
            s2 = 0;
            s3 = 0;
            s4 = 0;
            s5 = 0;
            s6 = 0;
            s7 = 0;
            s8 = 0;
            s9 = 0;
            s10 = 0;
            s11= 0;
            s12= 0;
            s13= 0;
            s14= 0;
            s15= 0;
            s16= 0;
            s17= 0;
            s18= 0;
            s19= 0;
            s20= 0;
            s21= 0;
            s22= 0;
            s23= 0;
            s24= 0;
            s25= 0;
            s26= 0;
            s27= 0;
            s28= 0;
            s29= 0;
            s30= 0;
            s31= 0;
            s32= 0;
            s33= 0;
            s34 = 0;
            s1_1 = 0;
            s1_2 = 0;
            s1_3  =0;
            s1_4  =0;
            s1_5  =0;
            s1_6  =0;
            s1_7  =0;
            s1_8  =0;
            s1_9  =0;
            s1_10=0;
            s1_11=0;
            s1_12=0;
            s1_13=0;
            s1_10_1 = 0; s1_10_2 = 0; s1_10_3 = 0; s1_10_4 = 0; s1_10_5 = 0; s1_10_6 = 0; s1_10_7 = 0; s1_10_8 = 0;

            SqlParameter[] paras = { 
                new SqlParameter("@s1",s1),
                new SqlParameter("@s2",s2),
                new SqlParameter("@s3",s3),
                new SqlParameter("@s4",s4),
                new SqlParameter("@s5",s5),
                new SqlParameter("@s6",s6),
                new SqlParameter("@s7",s7),
                new SqlParameter("@s8",s8),
                new SqlParameter("@s9",s9),
                new SqlParameter("@s10",s10),
                new SqlParameter("@s11",s11),
                new SqlParameter("@s12",s12),
                new SqlParameter("@s13",s13),
                new SqlParameter("@s14",s14),
                new SqlParameter("@s15",s15),
                new SqlParameter("@s16",s16),
                new SqlParameter("@s17",s17),
                new SqlParameter("@s18",s18),
                new SqlParameter("@s19",s19),
                new SqlParameter("@s20",s20),
                new SqlParameter("@s21",s21),
                new SqlParameter("@s22",s22),
                new SqlParameter("@s23",s23),
                new SqlParameter("@s24",s24),
                new SqlParameter("@s25",s25),
                new SqlParameter("@s26",s26),
                new SqlParameter("@s27",s27),
                new SqlParameter("@s28",s28),
                new SqlParameter("@s29",s29),
                new SqlParameter("@s30",s30),
                new SqlParameter("@s31",s31),
                new SqlParameter("@s32",s32),
                new SqlParameter("@s33",s33),
                new SqlParameter("@s34",s34),
                new SqlParameter("@s1_1",s1_1),
                new SqlParameter("@s1_2",s1_2),
                new SqlParameter("@s1_3",s1_3),
                new SqlParameter("@s1_4",s1_4),
                new SqlParameter("@s1_5",s1_5),
                new SqlParameter("@s1_6",s1_6),
                new SqlParameter("@s1_7",s1_7),
                new SqlParameter("@s1_8",s1_8),
                new SqlParameter("@s1_9",s1_9),
                new SqlParameter("@s1_10",s1_10),
                new SqlParameter("@s1_11",s1_11),
                new SqlParameter("@s1_12",s1_12),
                new SqlParameter("@s1_13",s1_13),
                new SqlParameter("@s1_10_1",s1_10_1),
                new SqlParameter("@s1_10_2",s1_10_2),
                new SqlParameter("@s1_10_3",s1_10_3),
                new SqlParameter("@s1_10_4",s1_10_4),
                new SqlParameter("@s1_10_5",s1_10_5),
                new SqlParameter("@s1_10_6",s1_10_6),
                new SqlParameter("@s1_10_7",s1_10_7),
                new SqlParameter("@s1_10_8",s1_10_8)
            };
            paras[0].Direction = ParameterDirection.Output;
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
            paras[16].Direction = ParameterDirection.Output;
            paras[17].Direction = ParameterDirection.Output;
            paras[18].Direction = ParameterDirection.Output;
            paras[19].Direction = ParameterDirection.Output;
            paras[20].Direction = ParameterDirection.Output;
            paras[21].Direction = ParameterDirection.Output;
            paras[22].Direction = ParameterDirection.Output;
            paras[23].Direction = ParameterDirection.Output;
            paras[24].Direction = ParameterDirection.Output;
            paras[25].Direction = ParameterDirection.Output;
            paras[26].Direction = ParameterDirection.Output;
            paras[27].Direction = ParameterDirection.Output;
            paras[28].Direction = ParameterDirection.Output;
            paras[29].Direction = ParameterDirection.Output;
            paras[30].Direction = ParameterDirection.Output;
            paras[31].Direction = ParameterDirection.Output;
            paras[32].Direction = ParameterDirection.Output;
            paras[33].Direction = ParameterDirection.Output;
            paras[34].Direction = ParameterDirection.Output;
            paras[35].Direction = ParameterDirection.Output;
            paras[36].Direction = ParameterDirection.Output;
            paras[37].Direction = ParameterDirection.Output;
            paras[38].Direction = ParameterDirection.Output;
            paras[39].Direction = ParameterDirection.Output;
            paras[40].Direction = ParameterDirection.Output;
            paras[41].Direction = ParameterDirection.Output;
            paras[42].Direction = ParameterDirection.Output;
            paras[43].Direction = ParameterDirection.Output;
            paras[44].Direction = ParameterDirection.Output;
            paras[45].Direction = ParameterDirection.Output;
            paras[46].Direction = ParameterDirection.Output;

            paras[47].Direction = ParameterDirection.Output;
            paras[48].Direction = ParameterDirection.Output;
            paras[49].Direction = ParameterDirection.Output;
            paras[50].Direction = ParameterDirection.Output;
            paras[51].Direction = ParameterDirection.Output;
            paras[52].Direction = ParameterDirection.Output;
            paras[53].Direction = ParameterDirection.Output;
            paras[54].Direction = ParameterDirection.Output;

            SqlHelper.ExecuteNonQuery(CommandType.StoredProcedure, "GetHomeDataDistributionNumProcedure", paras);
            s1 = Convert.ToInt32(paras[0].Value);
            s2 = Convert.ToInt32(paras[1].Value);
            s3 = Convert.ToInt32(paras[2].Value);
            s4 = Convert.ToInt32(paras[3].Value);
            s5 = Convert.ToInt32(paras[4].Value);
            s6 = Convert.ToInt32(paras[5].Value);
            s7 = Convert.ToInt32(paras[6].Value);
            s8 = Convert.ToInt32(paras[7].Value);
            s9 = Convert.ToInt32(paras[8].Value);
            s10 = Convert.ToInt32(paras[9].Value);
            s11  = Convert.ToInt32(paras[10].Value);
            s12  = Convert.ToInt32(paras[11].Value);
            s13  = Convert.ToInt32(paras[12].Value);
            s14  = Convert.ToInt32(paras[13].Value);
            s15  = Convert.ToInt32(paras[14].Value);
            s16  = Convert.ToInt32(paras[15].Value);
            s17  = Convert.ToInt32(paras[16].Value);
            s18  = Convert.ToInt32(paras[17].Value);
            s19  = Convert.ToInt32(paras[18].Value);
            s20  = Convert.ToInt32(paras[19].Value);
            s21  = Convert.ToInt32(paras[20].Value);
            s22  = Convert.ToInt32(paras[21].Value);
            s23  = Convert.ToInt32(paras[22].Value);
            s24  = Convert.ToInt32(paras[23].Value);
            s25  = Convert.ToInt32(paras[24].Value);
            s26  = Convert.ToInt32(paras[25].Value);
            s27  = Convert.ToInt32(paras[26].Value);
            s28  = Convert.ToInt32(paras[27].Value);
            s29  = Convert.ToInt32(paras[28].Value);
            s30  = Convert.ToInt32(paras[29].Value);
            s31  = Convert.ToInt32(paras[30].Value);
            s32  = Convert.ToInt32(paras[31].Value);
            s33  = Convert.ToInt32(paras[32].Value);
            s34 = Convert.ToInt32(paras[33].Value); 
            s1_1  =  Convert.ToInt32(paras[34].Value);
            s1_2  =  Convert.ToInt32(paras[35].Value);
            s1_3   = Convert.ToInt32(paras[36].Value);
            s1_4   = Convert.ToInt32(paras[37].Value);
            s1_5   = Convert.ToInt32(paras[38].Value);
            s1_6   = Convert.ToInt32(paras[39].Value);
            s1_7   = Convert.ToInt32(paras[40].Value);
            s1_8   = Convert.ToInt32(paras[41].Value);
            s1_9   = Convert.ToInt32(paras[42].Value);
            s1_10 = Convert.ToInt32(paras[43].Value);
            s1_11 = Convert.ToInt32(paras[44].Value);
            s1_12 = Convert.ToInt32(paras[45].Value);
            s1_13 = Convert.ToInt32(paras[46].Value);

            s1_10_1 = Convert.ToInt32(paras[47].Value);
            s1_10_2 = Convert.ToInt32(paras[48].Value);
            s1_10_3 = Convert.ToInt32(paras[49].Value);
            s1_10_4 = Convert.ToInt32(paras[50].Value);
            s1_10_5 = Convert.ToInt32(paras[51].Value);
            s1_10_6 = Convert.ToInt32(paras[52].Value);
            s1_10_7 = Convert.ToInt32(paras[53].Value);
            s1_10_8 = Convert.ToInt32(paras[54].Value);
        }

    }
}
