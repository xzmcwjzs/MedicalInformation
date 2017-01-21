using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Mapping
{
    public class Chronic_disease_Supplementary_Examination_HeartMap :EntityTypeConfiguration<Chronic_disease_Supplementary_Examination_Heart>
    {
        public Chronic_disease_Supplementary_Examination_HeartMap()
        {
            // Primary Key
            this.HasKey(t => t.id);

            // Properties
            this.Property(t => t.id)
                .IsRequired()
                .HasMaxLength(50);

            this.Property(t => t.name)
                .HasMaxLength(50);

            this.Property(t => t.id_card_number)
                .HasMaxLength(50);

            this.Property(t => t.sex)
                .HasMaxLength(50);

            this.Property(t => t.age)
                .HasMaxLength(50);

            this.Property(t => t.address)
                .HasMaxLength(200);

            this.Property(t => t.phone)
                .HasMaxLength(50);

            this.Property(t => t.record)
                .HasMaxLength(50);

            this.Property(t => t.check_position)
                .HasMaxLength(50);

            this.Property(t => t.inspect_doctor)
                .HasMaxLength(50);

            this.Property(t => t.check_doctor)
                .HasMaxLength(50);

            this.Property(t => t.report_doctor)
                .HasMaxLength(50);

            this.Property(t => t.xinjie_rhythm)
                .HasMaxLength(50);

            this.Property(t => t.xinfang_rhythm)
                .HasMaxLength(50);

            this.Property(t => t.xinshi_rhythm)
                .HasMaxLength(50);

            this.Property(t => t.xindianzhou)
                .HasMaxLength(50);

            this.Property(t => t.p_r)
                .HasMaxLength(50);

            this.Property(t => t.qrs_limit)
                .HasMaxLength(50);

            this.Property(t => t.q_t)
                .HasMaxLength(50);

            this.Property(t => t.limit)
                .HasMaxLength(50);

            this.Property(t => t.p)
                .HasMaxLength(500);

            this.Property(t => t.qrs)
                .HasMaxLength(500);

            this.Property(t => t.st)
                .HasMaxLength(500);

            this.Property(t => t.t)
                .HasMaxLength(500);

            this.Property(t => t.suggest)
                .HasMaxLength(500);

            this.Property(t => t.check_img1)
                .HasMaxLength(200);

            this.Property(t => t.check_img2)
                .HasMaxLength(200);

            this.Property(t => t.check_img3)
                .HasMaxLength(200);

            this.Property(t => t.check_img4)
                .HasMaxLength(200);

            this.Property(t => t.type)
                .HasMaxLength(50);

            this.Property(t => t.doctor)
                .HasMaxLength(50);

            this.Property(t => t.community_code)
                .HasMaxLength(50);

            this.Property(t => t.resident_id)
                .HasMaxLength(50);

            this.Property(t => t.permanent_home_commitcode)
                .HasMaxLength(50);

            // Table & Column Mappings
            this.ToTable("Chronic_disease_Supplementary_Examination_Heart");
            this.Property(t => t.id).HasColumnName("id");
            this.Property(t => t.name).HasColumnName("name");
            this.Property(t => t.id_card_number).HasColumnName("id_card_number");
            this.Property(t => t.sex).HasColumnName("sex");
            this.Property(t => t.age).HasColumnName("age");
            this.Property(t => t.address).HasColumnName("address");
            this.Property(t => t.phone).HasColumnName("phone");
            this.Property(t => t.record).HasColumnName("record");
            this.Property(t => t.check_position).HasColumnName("check_position");
            this.Property(t => t.inspect_doctor).HasColumnName("inspect_doctor");
            this.Property(t => t.check_doctor).HasColumnName("check_doctor");
            this.Property(t => t.report_doctor).HasColumnName("report_doctor");
            this.Property(t => t.xinjie_rhythm).HasColumnName("xinjie_rhythm");
            this.Property(t => t.xinfang_rhythm).HasColumnName("xinfang_rhythm");
            this.Property(t => t.xinshi_rhythm).HasColumnName("xinshi_rhythm");
            this.Property(t => t.xindianzhou).HasColumnName("xindianzhou");
            this.Property(t => t.p_r).HasColumnName("p_r");
            this.Property(t => t.qrs_limit).HasColumnName("qrs_limit");
            this.Property(t => t.q_t).HasColumnName("q_t");
            this.Property(t => t.limit).HasColumnName("limit");
            this.Property(t => t.p).HasColumnName("p");
            this.Property(t => t.qrs).HasColumnName("qrs");
            this.Property(t => t.st).HasColumnName("st");
            this.Property(t => t.t).HasColumnName("t");
            this.Property(t => t.suggest).HasColumnName("suggest");
            this.Property(t => t.inspect_time).HasColumnName("inspect_time");
            this.Property(t => t.report_time).HasColumnName("report_time");
            this.Property(t => t.create_time).HasColumnName("create_time");
            this.Property(t => t.check_img1).HasColumnName("check_img1");
            this.Property(t => t.check_img2).HasColumnName("check_img2");
            this.Property(t => t.check_img3).HasColumnName("check_img3");
            this.Property(t => t.check_img4).HasColumnName("check_img4");
            this.Property(t => t.type).HasColumnName("type");
            this.Property(t => t.doctor).HasColumnName("doctor");
            this.Property(t => t.community_code).HasColumnName("community_code");
            this.Property(t => t.resident_id).HasColumnName("resident_id");
            this.Property(t => t.permanent_home_commitcode).HasColumnName("permanent_home_commitcode");
            this.Property(t => t.birth_date).HasColumnName("birth_date");
        }
    }
}
