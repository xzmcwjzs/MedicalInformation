using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Mapping
{
    public class Chronic_disease_ConstitutionMap : EntityTypeConfiguration<Chronic_disease_Constitution>
    {
        public Chronic_disease_ConstitutionMap()
        {
            // Primary Key
            this.HasKey(t => t.id);

            // Properties
            this.Property(t => t.id)
                .IsRequired()
                .HasMaxLength(50);

            this.Property(t => t.add_id)
                .HasMaxLength(50);

            this.Property(t => t.resident_id)
                .IsRequired()
                .HasMaxLength(50);

            this.Property(t => t.yangxz_1)
                .HasMaxLength(50);

            this.Property(t => t.yangxz_2)
                .HasMaxLength(50);

            this.Property(t => t.yangxz_3)
                .HasMaxLength(50);

            this.Property(t => t.yangxz_4)
                .HasMaxLength(50);

            this.Property(t => t.yangxz_5)
                .HasMaxLength(50);

            this.Property(t => t.yangxz_6)
                .HasMaxLength(50);

            this.Property(t => t.yangxz_7)
                .HasMaxLength(50);

            this.Property(t => t.yinxz_1)
                .HasMaxLength(50);

            this.Property(t => t.yinxz_2)
                .HasMaxLength(50);

            this.Property(t => t.yinxz_3)
                .HasMaxLength(50);

            this.Property(t => t.yinxz_4)
                .HasMaxLength(50);

            this.Property(t => t.yinxz_5)
                .HasMaxLength(50);

            this.Property(t => t.yinxz_6)
                .HasMaxLength(50);

            this.Property(t => t.yinxz_7)
                .HasMaxLength(50);

            this.Property(t => t.yinxz_8)
                .HasMaxLength(50);

            this.Property(t => t.qixz_1)
                .HasMaxLength(50);

            this.Property(t => t.qixz_2)
                .HasMaxLength(50);

            this.Property(t => t.qixz_3)
                .HasMaxLength(50);

            this.Property(t => t.qixz_4)
                .HasMaxLength(50);

            this.Property(t => t.qixz_5)
                .HasMaxLength(50);

            this.Property(t => t.qixz_6)
                .HasMaxLength(50);

            this.Property(t => t.qixz_7)
                .HasMaxLength(50);

            this.Property(t => t.qixz_8)
                .HasMaxLength(50);

            this.Property(t => t.tansz_1)
                .HasMaxLength(50);

            this.Property(t => t.tansz_2)
                .HasMaxLength(50);

            this.Property(t => t.tansz_3)
                .HasMaxLength(50);

            this.Property(t => t.tansz_4)
                .HasMaxLength(50);

            this.Property(t => t.tansz_5)
                .HasMaxLength(50);

            this.Property(t => t.tansz_6)
                .HasMaxLength(50);

            this.Property(t => t.tansz_7)
                .HasMaxLength(50);

            this.Property(t => t.tansz_8)
                .HasMaxLength(50);

            this.Property(t => t.shirz_1)
                .HasMaxLength(50);

            this.Property(t => t.shirz_2)
                .HasMaxLength(50);

            this.Property(t => t.shirz_3)
                .HasMaxLength(50);

            this.Property(t => t.shirz_4)
                .HasMaxLength(50);

            this.Property(t => t.shirz_5)
                .HasMaxLength(50);

            this.Property(t => t.shirz_6)
                .HasMaxLength(50);

            this.Property(t => t.shirz_7)
                .HasMaxLength(50);

            this.Property(t => t.xueyz_1)
                .HasMaxLength(50);

            this.Property(t => t.xueyz_2)
                .HasMaxLength(50);

            this.Property(t => t.xueyz_3)
                .HasMaxLength(50);

            this.Property(t => t.xueyz_4)
                .HasMaxLength(50);

            this.Property(t => t.xueyz_5)
                .HasMaxLength(50);

            this.Property(t => t.xueyz_6)
                .HasMaxLength(50);

            this.Property(t => t.xueyz_7)
                .HasMaxLength(50);

            this.Property(t => t.tebz_1)
                .HasMaxLength(50);

            this.Property(t => t.tebz_2)
                .HasMaxLength(50);

            this.Property(t => t.tebz_3)
                .HasMaxLength(50);

            this.Property(t => t.tebz_4)
                .HasMaxLength(50);

            this.Property(t => t.tebz_5)
                .HasMaxLength(50);

            this.Property(t => t.tebz_6)
                .HasMaxLength(50);

            this.Property(t => t.tebz_7)
                .HasMaxLength(50);

            this.Property(t => t.qiyz_1)
                .HasMaxLength(50);

            this.Property(t => t.qiyz_2)
                .HasMaxLength(50);

            this.Property(t => t.qiyz_3)
                .HasMaxLength(50);

            this.Property(t => t.qiyz_4)
                .HasMaxLength(50);

            this.Property(t => t.qiyz_5)
                .HasMaxLength(50);

            this.Property(t => t.qiyz_6)
                .HasMaxLength(50);

            this.Property(t => t.qiyz_7)
                .HasMaxLength(50);

            this.Property(t => t.pinghz_1)
                .HasMaxLength(50);

            this.Property(t => t.pinghz_2)
                .HasMaxLength(50);

            this.Property(t => t.pinghz_3)
                .HasMaxLength(50);

            this.Property(t => t.pinghz_4)
                .HasMaxLength(50);

            this.Property(t => t.pinghz_5)
                .HasMaxLength(50);

            this.Property(t => t.pinghz_6)
                .HasMaxLength(50);

            this.Property(t => t.pinghz_7)
                .HasMaxLength(50);

            this.Property(t => t.pinghz_8)
                .HasMaxLength(50);

            this.Property(t => t.scores_yangxz)
                .HasMaxLength(50);

            this.Property(t => t.scores_yinxz)
                .HasMaxLength(50);

            this.Property(t => t.scores_qixz)
                .HasMaxLength(50);

            this.Property(t => t.scores_tansz)
                .HasMaxLength(50);

            this.Property(t => t.scores_shirz)
                .HasMaxLength(50);

            this.Property(t => t.scores_xueyz)
                .HasMaxLength(50);

            this.Property(t => t.scores_tebz)
                .HasMaxLength(50);

            this.Property(t => t.scores_qiyz)
                .HasMaxLength(50);

            this.Property(t => t.scores_pinghz)
                .HasMaxLength(50);

            this.Property(t => t.result)
                .HasMaxLength(50);

            this.Property(t => t.worker_user_name)
                .HasMaxLength(50);

            // Table & Column Mappings
            this.ToTable("Chronic_disease_Constitution");
            this.Property(t => t.id).HasColumnName("id");
            this.Property(t => t.add_id).HasColumnName("add_id");
            this.Property(t => t.resident_id).HasColumnName("resident_id");
            this.Property(t => t.yangxz_1).HasColumnName("yangxz_1");
            this.Property(t => t.yangxz_2).HasColumnName("yangxz_2");
            this.Property(t => t.yangxz_3).HasColumnName("yangxz_3");
            this.Property(t => t.yangxz_4).HasColumnName("yangxz_4");
            this.Property(t => t.yangxz_5).HasColumnName("yangxz_5");
            this.Property(t => t.yangxz_6).HasColumnName("yangxz_6");
            this.Property(t => t.yangxz_7).HasColumnName("yangxz_7");
            this.Property(t => t.yinxz_1).HasColumnName("yinxz_1");
            this.Property(t => t.yinxz_2).HasColumnName("yinxz_2");
            this.Property(t => t.yinxz_3).HasColumnName("yinxz_3");
            this.Property(t => t.yinxz_4).HasColumnName("yinxz_4");
            this.Property(t => t.yinxz_5).HasColumnName("yinxz_5");
            this.Property(t => t.yinxz_6).HasColumnName("yinxz_6");
            this.Property(t => t.yinxz_7).HasColumnName("yinxz_7");
            this.Property(t => t.yinxz_8).HasColumnName("yinxz_8");
            this.Property(t => t.qixz_1).HasColumnName("qixz_1");
            this.Property(t => t.qixz_2).HasColumnName("qixz_2");
            this.Property(t => t.qixz_3).HasColumnName("qixz_3");
            this.Property(t => t.qixz_4).HasColumnName("qixz_4");
            this.Property(t => t.qixz_5).HasColumnName("qixz_5");
            this.Property(t => t.qixz_6).HasColumnName("qixz_6");
            this.Property(t => t.qixz_7).HasColumnName("qixz_7");
            this.Property(t => t.qixz_8).HasColumnName("qixz_8");
            this.Property(t => t.tansz_1).HasColumnName("tansz_1");
            this.Property(t => t.tansz_2).HasColumnName("tansz_2");
            this.Property(t => t.tansz_3).HasColumnName("tansz_3");
            this.Property(t => t.tansz_4).HasColumnName("tansz_4");
            this.Property(t => t.tansz_5).HasColumnName("tansz_5");
            this.Property(t => t.tansz_6).HasColumnName("tansz_6");
            this.Property(t => t.tansz_7).HasColumnName("tansz_7");
            this.Property(t => t.tansz_8).HasColumnName("tansz_8");
            this.Property(t => t.shirz_1).HasColumnName("shirz_1");
            this.Property(t => t.shirz_2).HasColumnName("shirz_2");
            this.Property(t => t.shirz_3).HasColumnName("shirz_3");
            this.Property(t => t.shirz_4).HasColumnName("shirz_4");
            this.Property(t => t.shirz_5).HasColumnName("shirz_5");
            this.Property(t => t.shirz_6).HasColumnName("shirz_6");
            this.Property(t => t.shirz_7).HasColumnName("shirz_7");
            this.Property(t => t.xueyz_1).HasColumnName("xueyz_1");
            this.Property(t => t.xueyz_2).HasColumnName("xueyz_2");
            this.Property(t => t.xueyz_3).HasColumnName("xueyz_3");
            this.Property(t => t.xueyz_4).HasColumnName("xueyz_4");
            this.Property(t => t.xueyz_5).HasColumnName("xueyz_5");
            this.Property(t => t.xueyz_6).HasColumnName("xueyz_6");
            this.Property(t => t.xueyz_7).HasColumnName("xueyz_7");
            this.Property(t => t.tebz_1).HasColumnName("tebz_1");
            this.Property(t => t.tebz_2).HasColumnName("tebz_2");
            this.Property(t => t.tebz_3).HasColumnName("tebz_3");
            this.Property(t => t.tebz_4).HasColumnName("tebz_4");
            this.Property(t => t.tebz_5).HasColumnName("tebz_5");
            this.Property(t => t.tebz_6).HasColumnName("tebz_6");
            this.Property(t => t.tebz_7).HasColumnName("tebz_7");
            this.Property(t => t.qiyz_1).HasColumnName("qiyz_1");
            this.Property(t => t.qiyz_2).HasColumnName("qiyz_2");
            this.Property(t => t.qiyz_3).HasColumnName("qiyz_3");
            this.Property(t => t.qiyz_4).HasColumnName("qiyz_4");
            this.Property(t => t.qiyz_5).HasColumnName("qiyz_5");
            this.Property(t => t.qiyz_6).HasColumnName("qiyz_6");
            this.Property(t => t.qiyz_7).HasColumnName("qiyz_7");
            this.Property(t => t.pinghz_1).HasColumnName("pinghz_1");
            this.Property(t => t.pinghz_2).HasColumnName("pinghz_2");
            this.Property(t => t.pinghz_3).HasColumnName("pinghz_3");
            this.Property(t => t.pinghz_4).HasColumnName("pinghz_4");
            this.Property(t => t.pinghz_5).HasColumnName("pinghz_5");
            this.Property(t => t.pinghz_6).HasColumnName("pinghz_6");
            this.Property(t => t.pinghz_7).HasColumnName("pinghz_7");
            this.Property(t => t.pinghz_8).HasColumnName("pinghz_8");
            this.Property(t => t.scores_yangxz).HasColumnName("scores_yangxz");
            this.Property(t => t.scores_yinxz).HasColumnName("scores_yinxz");
            this.Property(t => t.scores_qixz).HasColumnName("scores_qixz");
            this.Property(t => t.scores_tansz).HasColumnName("scores_tansz");
            this.Property(t => t.scores_shirz).HasColumnName("scores_shirz");
            this.Property(t => t.scores_xueyz).HasColumnName("scores_xueyz");
            this.Property(t => t.scores_tebz).HasColumnName("scores_tebz");
            this.Property(t => t.scores_qiyz).HasColumnName("scores_qiyz");
            this.Property(t => t.scores_pinghz).HasColumnName("scores_pinghz");
            this.Property(t => t.result).HasColumnName("result");
            this.Property(t => t.create_time).HasColumnName("create_time");
            this.Property(t => t.worker_user_name).HasColumnName("worker_user_name");
        }
    }
}

