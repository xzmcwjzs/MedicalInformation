using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Entities
{
    [Table("MT_Comm_Adults_Health_Examination_New")]
    public partial  class MT_Comm_Adults_Health_Examination_New
    {
        [Key]
        [Required]
        [MaxLength(50)]
        public string id { get; set; }
        [MaxLength(50)]
        public string resident_id { get; set; }
        [MaxLength(50)]
        public string name { get; set; }
        [MaxLength(50)]
        public string sex { get; set; }
        [MaxLength(50)]
        public string age { get; set; }
        [MaxLength(50)]
        public string id_card_number { get; set; }

        public Nullable<System.DateTime> birth_date { get; set; }
        [MaxLength(50)]
        public string community_code { get; set; }
        [MaxLength(200)]
        public string address { get; set; }
        [MaxLength(50)]
        public string phone { get; set; }
        [MaxLength(50)]
        public string zipcode { get; set; } 
        [MaxLength(50)]
        public string worker_user_name { get; set; }
        [MaxLength(50)]
        public string worker_user_realname { get; set; }
        [MaxLength(50)]
        public string bianhao { get; set; }
        [MaxLength(50)]
        public string company { get; set; }
        public DateTime? tijianriqi { get; set; }
        public DateTime? create_time { get; set; }
        [MaxLength(50)]
        public string zerenyisheng { get; set; }
        [MaxLength(200)]
        public string zhengzhuang { get; set; }
        [MaxLength(50)]
        public string ybzk_tiwen { get; set; }
        [MaxLength(50)]
        public string ybzk_mailv { get; set; }
        [MaxLength(50)]
        public string ybzk_huxipinglv { get; set; }
        [MaxLength(50)]
        public string ybzk_xueya_h { get; set; }
        [MaxLength(50)]
        public string ybzk_xueya_l { get; set; }
        [MaxLength(50)]
        public string ybzk_shenggao { get; set; }
        [MaxLength(50)]
        public string ybzk_tizhong { get; set; }
        [MaxLength(50)]
        public string ybzk_tizhizhishu { get; set; }
        [MaxLength(50)]
        public string ybzk_yaowei { get; set; }
        [MaxLength(50)]
        public string ybzk_tunwei { get; set; }
        [MaxLength(50)]
        public string ybzk_yaotunweibi { get; set; }
        [MaxLength(50)]
        public string ybzk_renzhi { get; set; }
        [MaxLength(50)]
        public string ybzk_renzhi_pingfen { get; set; }
        [MaxLength(50)]
        public string ybzk_qinggan { get; set; }
        [MaxLength(50)]
        public string ybzk_qinggan_pingfen { get; set; }
        [MaxLength(50)]
        public string shfs_duanlianpinglv { get; set; }
        [MaxLength(50)]
        public string shfs_duanlianshijian1 { get; set; }
        [MaxLength(50)]
        public string shfs_duanlianshijian2 { get; set; }
        [MaxLength(50)]
        public string shfs_duanlianfanshi { get; set; }
        [MaxLength(50)]
        public string shfs_yinshiqingkuan { get; set; }
        [MaxLength(50)]
        public string shfs_yinshiqingkuan2 { get; set; }
        [MaxLength(50)]
        public string shfs_xiyanzhuangkuan { get; set; }
        [MaxLength(50)]
        public string shfs_rixiyanliang { get; set; }
        [MaxLength(50)]
        public string shfs_kaishixiyannianling { get; set; }
        [MaxLength(50)]
        public string shfs_jieyannianling { get; set; }
        [MaxLength(50)]
        public string shfs_yinjiuqingkuan { get; set; }
        [MaxLength(50)]
        public string shfs_riyinjiuliang { get; set; }
        [MaxLength(50)]
        public string shfs_shifoujiejiu { get; set; }
        [MaxLength(50)]
        public string shfs_jiejiunianling { get; set; }
        [MaxLength(50)]
        public string shfs_kaishiyinjiunianling { get; set; }
        [MaxLength(50)]
        public string shfs_shifouzuijiu { get; set; }
        [MaxLength(50)]
        public string shfs_yinjiuzhonglei { get; set; }
        [MaxLength(50)]
        public string shfs_youwubaolu { get; set; }
        [MaxLength(50)]
        public string shfs_jutizhiye { get; set; }
        [MaxLength(50)]
        public string shfs_congyeshijian { get; set; }
        [MaxLength(50)]
        public string shfs_huaxueping { get; set; }
        [MaxLength(50)]
        public string shfs_duwu { get; set; }
        [MaxLength(50)]
        public string shfs_shexian { get; set; }
        [MaxLength(50)]
        public string shfs_fanhucuoshi_youwu1 { get; set; }
        [MaxLength(50)]
        public string shfs_fanhucuoshi1 { get; set; }
        [MaxLength(50)]
        public string shfs_fanhucuoshi_youwu2 { get; set; }
        [MaxLength(50)]
        public string shfs_fanhucuoshi2 { get; set; }
        [MaxLength(50)]
        public string shfs_fanhucuoshi_youwu3 { get; set; }
        [MaxLength(50)]
        public string shfs_fanhucuoshi3 { get; set; }
        [MaxLength(50)]
        public string zqgn_kouqun { get; set; }
        [MaxLength(50)]
        public string zqgn_chilie { get; set; }
        [MaxLength(50)]
        public string zqgn_quechi1 { get; set; }
        [MaxLength(50)]
        public string zqgn_quechi2 { get; set; }
        [MaxLength(50)]
        public string zqgn_quechi3 { get; set; }
        [MaxLength(50)]
        public string zqgn_quechi4 { get; set; }
        [MaxLength(50)]
        public string zqgn_quchi1 { get; set; }
        [MaxLength(50)]
        public string zqgn_quchi2 { get; set; }
        [MaxLength(50)]
        public string zqgn_quchi3 { get; set; }
        [MaxLength(50)]
        public string zqgn_quchi4 { get; set; }
        [MaxLength(50)]
        public string zqgn_yichi1 { get; set; }
        [MaxLength(50)]
        public string zqgn_yichi2 { get; set; }
        [MaxLength(50)]
        public string zqgn_yichi3 { get; set; }
        [MaxLength(50)]
        public string zqgn_yichi4 { get; set; }
        [MaxLength(50)]
        public string zqgn_yanbu { get; set; }
        [MaxLength(50)]
        public string zqgn_zuoyan { get; set; }
        [MaxLength(50)]
        public string zqgn_youyan { get; set; }
        [MaxLength(50)]
        public string zqgn_jiaozhengzuoyan { get; set; }
        [MaxLength(50)]
        public string zqgn_jiaozhengyouyan { get; set; }
        [MaxLength(50)]
        public string zqgn_tingli { get; set; }
        [MaxLength(50)]
        public string zqgn_yundonggongneng { get; set; }
        [MaxLength(50)]
        public string ct_pifu { get; set; }
        [MaxLength(50)]
        public string ct_pifu_qita { get; set; }
        [MaxLength(50)]
        public string ct_gongmo { get; set; }
        [MaxLength(50)]
        public string ct_gongmo_qita { get; set; }
        [MaxLength(50)]
        public string ct_linbajie { get; set; }
        [MaxLength(50)]
        public string ct_linbajie_qita { get; set; }
        [MaxLength(50)]
        public string ct_tongzhuangfei { get; set; }
        [MaxLength(50)]
        public string ct_huxiying { get; set; }
        [MaxLength(50)]
        public string ct_huxiying_yichang { get; set; }
        [MaxLength(50)]
        public string ct_luoying { get; set; }
        [MaxLength(50)]
        public string ct_luoying_gang { get; set; }
        [MaxLength(50)]
        public string ct_luoying_shi { get; set; }
        [MaxLength(50)]
        public string ct_xinlv { get; set; }
        [MaxLength(50)]
        public string ct_xinlve { get; set; }
        [MaxLength(50)]
        public string ct_zayin { get; set; }
        [MaxLength(50)]
        public string ct_zayin_you { get; set; }
        [MaxLength(50)]
        public string ct_yatong { get; set; }
        [MaxLength(50)]
        public string ct_yatong_you { get; set; }
        [MaxLength(50)]
        public string ct_baokuai { get; set; }
        [MaxLength(50)]
        public string ct_baokuai_you { get; set; }
        [MaxLength(50)]
        public string ct_gangda { get; set; }
        [MaxLength(50)]
        public string ct_gangda_you { get; set; }
        [MaxLength(50)]
        public string ct_gangda_you1 { get; set; }
        [MaxLength(50)]
        public string ct_gangda_you2 { get; set; }
        [MaxLength(50)]
        public string ct_pida { get; set; }
        [MaxLength(50)]
        public string ct_pida_you { get; set; }
        [MaxLength(50)]
        public string ct_pida_you1 { get; set; }
        [MaxLength(50)]
        public string ct_zhuyin { get; set; }
        [MaxLength(50)]
        public string ct_zhuyin_you { get; set; }
        [MaxLength(50)]
        public string ct_xiazhishuizhong { get; set; }
        [MaxLength(50)]
        public string ct_zubeidongmaibodong { get; set; }
        [MaxLength(50)]
        public string ct_gangmenzhizhen { get; set; }
        [MaxLength(50)]
        public string ct_gangmenzhizhen_qita { get; set; }
        [MaxLength(50)]
        public string ct_ruxian { get; set; }
        [MaxLength(50)]
        public string ct_waiyin { get; set; }
        [MaxLength(50)]
        public string ct_waiyin_qita { get; set; }
        [MaxLength(50)]
        public string ct_yindao { get; set; }
        [MaxLength(50)]
        public string ct_yindao_qita { get; set; }
        [MaxLength(50)]
        public string ct_gongjin { get; set; }
        [MaxLength(50)]
        public string ct_gongjin_qita { get; set; }
        [MaxLength(50)]
        public string ct_gongti { get; set; }
        [MaxLength(50)]
        public string ct_gongti_qita { get; set; }
        [MaxLength(50)]
        public string ct_fujian { get; set; }
        [MaxLength(50)]
        public string ct_fujian_qita { get; set; }
        [MaxLength(500)]
        public string ct_qita { get; set; }
        [MaxLength(50)]
        public string fzjc_kongfuxuetang1 { get; set; }
        [MaxLength(50)]
        public string fzjc_kongfuxuetang2 { get; set; }
        [MaxLength(50)]
        public string fzjc_xuehongdanbai { get; set; }
        [MaxLength(50)]
        public string fzjc_baixibao { get; set; }
        [MaxLength(50)]
        public string fzjc_xuexiaoban { get; set; }
        [MaxLength(500)]
        public string fzjc_xuechanggui_qita { get; set; }
        [MaxLength(50)]
        public string fzjc_niaodanbai { get; set; }
        [MaxLength(50)]
        public string fzjc_niaotang { get; set; }
        [MaxLength(50)]
        public string fzjc_niaodongti { get; set; }
        [MaxLength(50)]
        public string fzjc_niaoqianxue { get; set; }
        [MaxLength(500)]
        public string fzjc_niaochanggui_qita { get; set; }
        [MaxLength(50)]
        public string fzjc_niaoweiliangbaidanbai { get; set; }
        [MaxLength(50)]
        public string fzjc_dabianqianxue { get; set; }
        [MaxLength(50)]
        public string fzjc_bingZAM { get; set; }
        [MaxLength(50)]
        public string fzjc_guZAM { get; set; }
        [MaxLength(50)]
        public string fzjc_BDB { get; set; }
        [MaxLength(50)]
        public string fzjc_zongDHS { get; set; }
        [MaxLength(50)]
        public string fzjc_jieheDHS { get; set; }
        [MaxLength(50)]
        public string fzjc_xueqinjigan { get; set; }
        [MaxLength(50)]
        public string fzjc_xueniaosudan { get; set; }
        [MaxLength(50)]
        public string fzjc_xuejianongdu { get; set; }
        [MaxLength(50)]
        public string fzjc_xuenanongdu { get; set; }
        [MaxLength(50)]
        public string fzjc_zongdanguchun { get; set; }
        [MaxLength(50)]
        public string fzjc_jiataidanbai { get; set; }
        [MaxLength(50)]
        public string fzjc_gangyousanzhi { get; set; }
        [MaxLength(50)]
        public string fzjc_dimiduDGC { get; set; }
        [MaxLength(50)]
        public string fzjc_gaomiduDGC { get; set; }
        [MaxLength(50)]
        public string fzjc_tanghuaXHDB { get; set; }
        [MaxLength(50)]
        public string fzjc_biaomiankangyuan { get; set; }
        [MaxLength(50)]
        public string fzjc_yandi { get; set; }
        [MaxLength(50)]
        public string fzjc_yandi_yichang { get; set; }
        [MaxLength(50)]
        public string fzjc_xindiantu { get; set; }
        [MaxLength(50)]
        public string fzjc_xindiantu_yichang { get; set; }
        [MaxLength(50)]
        public string fzjc_X_pian { get; set; }
        [MaxLength(50)]
        public string fzjc_X_pian_yichang { get; set; }
        [MaxLength(50)]
        public string fzjc_B_chao { get; set; }
        [MaxLength(500)]
        public string fzjc_B_chao_qita { get; set; }
        [MaxLength(50)]
        public string fzjc_gongjintupian { get; set; }
        [MaxLength(50)]
        public string fzjc_gongjintupian_yichang { get; set; }
        [MaxLength(500)]
        public string fzjc_qita { get; set; }
        [MaxLength(50)]
        public string zytz_hepingzhi { get; set; }
        [MaxLength(50)]
        public string zytz_qixuzhi { get; set; }
        [MaxLength(50)]
        public string zytz_yangxuzhi { get; set; }
        [MaxLength(50)]
        public string zytz_yingxuzhi { get; set; }
        [MaxLength(50)]
        public string zytz_tangshizhi { get; set; }
        [MaxLength(50)]
        public string zytz_shirezhi { get; set; }
        [MaxLength(50)]
        public string zytz_xueyuzhi { get; set; }
        [MaxLength(50)]
        public string zytz_qiyuzhi { get; set; }
        [MaxLength(50)]
        public string zytz_tebingzhi { get; set; }
        [MaxLength(50)]
        public string jkwt_naoxueguanbing { get; set; }
        [MaxLength(50)]
        public string jkwt_shenzangjibing { get; set; }
        [MaxLength(50)]
        public string jkwt_xinzangjibing { get; set; }
        [MaxLength(50)]
        public string jkwt_xueguanjibing { get; set; }
        [MaxLength(50)]
        public string jkwt_yangbujibing { get; set; }
        [MaxLength(50)]
        public string jkwt_shengjingxitong { get; set; }
        [MaxLength(50)]
        public string jkwt_shengjingxitong_you { get; set; }
        [MaxLength(50)]
        public string jkwt_qitajibing { get; set; }
        [MaxLength(50)]
        public string jkwt_qitajibing_you { get; set; }
        [MaxLength(50)]
        public string jkpj_yichang { get; set; }
        [MaxLength(50)]
        public string jiankanzhidao { get; set; }
        [MaxLength(50)]
        public string weixianyinsu { get; set; }
        [MaxLength(50)]
        public string type { get; set; }
        [MaxLength(50)]
        public string perment_community_code { get; set; }
        [MaxLength(50)]
        public string permanent_home_address { get; set; }

    }
}
