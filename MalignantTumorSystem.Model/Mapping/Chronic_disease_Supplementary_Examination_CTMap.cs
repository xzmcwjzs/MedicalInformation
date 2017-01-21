using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Mapping
{
    public class Chronic_disease_Supplementary_Examination_CTMap :EntityTypeConfiguration<Chronic_disease_Supplementary_Examination_CT>
    {
        public Chronic_disease_Supplementary_Examination_CTMap()
        {
            // Primary Key
            this.HasKey(t => t.id);

            // Properties
            this.Property(t => t.id)
                .IsRequired()
                .HasMaxLength(50);

            this.Property(t => t.names)
                .HasMaxLength(50);

            this.Property(t => t.sex)
                .HasMaxLength(50);

            this.Property(t => t.age)
                .HasMaxLength(50);

            this.Property(t => t.id_card_number)
                .HasMaxLength(50);

            this.Property(t => t.address)
                .HasMaxLength(200);

            this.Property(t => t.phone)
                .HasMaxLength(50);

            this.Property(t => t.check_project)
                .HasMaxLength(50);

            this.Property(t => t.inspect_doctor)
                .HasMaxLength(50);

            this.Property(t => t.check_doctor)
                .HasMaxLength(50);

            this.Property(t => t.report_doctor)
                .HasMaxLength(50);

            this.Property(t => t.check_position)
                .HasMaxLength(500);

            this.Property(t => t.check_view)
                .HasMaxLength(500);

            this.Property(t => t.check_img1)
                .HasMaxLength(200);

            this.Property(t => t.check_judge)
                .HasMaxLength(500);

            this.Property(t => t.doctor_suggest)
                .HasMaxLength(500);

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
            this.ToTable("Chronic_disease_Supplementary_Examination_CT");
            this.Property(t => t.id).HasColumnName("id");
            this.Property(t => t.names).HasColumnName("names");
            this.Property(t => t.sex).HasColumnName("sex");
            this.Property(t => t.age).HasColumnName("age");
            this.Property(t => t.id_card_number).HasColumnName("id_card_number");
            this.Property(t => t.address).HasColumnName("address");
            this.Property(t => t.phone).HasColumnName("phone");
            this.Property(t => t.check_project).HasColumnName("check_project");
            this.Property(t => t.inspect_doctor).HasColumnName("inspect_doctor");
            this.Property(t => t.check_doctor).HasColumnName("check_doctor");
            this.Property(t => t.report_doctor).HasColumnName("report_doctor");
            this.Property(t => t.check_position).HasColumnName("check_position");
            this.Property(t => t.check_view).HasColumnName("check_view");
            this.Property(t => t.check_img1).HasColumnName("check_img1");
            this.Property(t => t.check_judge).HasColumnName("check_judge");
            this.Property(t => t.doctor_suggest).HasColumnName("doctor_suggest");
            this.Property(t => t.inspect_time).HasColumnName("inspect_time");
            this.Property(t => t.report_time).HasColumnName("report_time");
            this.Property(t => t.check_img2).HasColumnName("check_img2");
            this.Property(t => t.check_img3).HasColumnName("check_img3");
            this.Property(t => t.check_img4).HasColumnName("check_img4");
            this.Property(t => t.create_time).HasColumnName("create_time");
            this.Property(t => t.type).HasColumnName("type");
            this.Property(t => t.doctor).HasColumnName("doctor");
            this.Property(t => t.community_code).HasColumnName("community_code");
            this.Property(t => t.resident_id).HasColumnName("resident_id");
            this.Property(t => t.permanent_home_commitcode).HasColumnName("permanent_home_commitcode");
            this.Property(t => t.birth_date).HasColumnName("birth_date");
        }
    }
}
