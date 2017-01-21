using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Mapping
{
    public class Chronic_disease_Comm_Testing_BloodMap : EntityTypeConfiguration<Chronic_disease_Comm_Testing_Blood>
    {
        public Chronic_disease_Comm_Testing_BloodMap()
        {
            // Primary Key
            this.HasKey(t => t.id);

            // Properties
            this.Property(t => t.id)
                .IsRequired()
                .HasMaxLength(50);

            this.Property(t => t.names)
                .IsRequired()
                .HasMaxLength(50);

            this.Property(t => t.sex)
                .IsRequired()
                .HasMaxLength(50);

            this.Property(t => t.age)
                .HasMaxLength(50);

            this.Property(t => t.id_card_number)
                .HasMaxLength(50);

            this.Property(t => t.address)
                .HasMaxLength(50);

            this.Property(t => t.phone)
                .HasMaxLength(50);

            this.Property(t => t.community_code)
                .HasMaxLength(50);

            this.Property(t => t.permanent_home_commitcode)
                .HasMaxLength(50);

            this.Property(t => t.samplenumber)
                .HasMaxLength(50);

            this.Property(t => t.inspect_doctor)
                .HasMaxLength(50);

            this.Property(t => t.check_doctor)
                .HasMaxLength(50);

            this.Property(t => t.report_doctor)
                .HasMaxLength(50);

            this.Property(t => t.name1)
                .HasMaxLength(50);

            this.Property(t => t.result1)
                .HasMaxLength(50);

            this.Property(t => t.unit1)
                .HasMaxLength(50);

            this.Property(t => t.qujian1)
                .HasMaxLength(50);

            this.Property(t => t.tishi1)
                .HasMaxLength(50);

            this.Property(t => t.beizhu1)
                .HasMaxLength(50);

            this.Property(t => t.name2)
                .HasMaxLength(50);

            this.Property(t => t.result2)
                .HasMaxLength(50);

            this.Property(t => t.unit2)
                .HasMaxLength(50);

            this.Property(t => t.qujian2)
                .HasMaxLength(50);

            this.Property(t => t.tishi2)
                .HasMaxLength(50);

            this.Property(t => t.beizhu2)
                .HasMaxLength(50);

            this.Property(t => t.name3)
                .HasMaxLength(50);

            this.Property(t => t.result3)
                .HasMaxLength(50);

            this.Property(t => t.unit3)
                .HasMaxLength(50);

            this.Property(t => t.qujian3)
                .HasMaxLength(50);

            this.Property(t => t.tishi3)
                .HasMaxLength(50);

            this.Property(t => t.beizhu3)
                .HasMaxLength(50);

            this.Property(t => t.name4)
                .HasMaxLength(50);

            this.Property(t => t.result4)
                .HasMaxLength(50);

            this.Property(t => t.unit4)
                .HasMaxLength(50);

            this.Property(t => t.qujian4)
                .HasMaxLength(50);

            this.Property(t => t.tishi4)
                .HasMaxLength(50);

            this.Property(t => t.beizhu4)
                .HasMaxLength(50);

            this.Property(t => t.name5)
                .HasMaxLength(50);

            this.Property(t => t.result5)
                .HasMaxLength(50);

            this.Property(t => t.unit5)
                .HasMaxLength(50);

            this.Property(t => t.qujian5)
                .HasMaxLength(50);

            this.Property(t => t.tishi5)
                .HasMaxLength(50);

            this.Property(t => t.beizhu5)
                .HasMaxLength(50);

            this.Property(t => t.doctor)
                .HasMaxLength(50);

            this.Property(t => t.type)
                .HasMaxLength(50);

            this.Property(t => t.resident_id)
                .HasMaxLength(50);

            // Table & Column Mappings
            this.ToTable("Chronic_disease_Comm_Testing_Blood");
            this.Property(t => t.id).HasColumnName("id");
            this.Property(t => t.names).HasColumnName("names");
            this.Property(t => t.sex).HasColumnName("sex");
            this.Property(t => t.age).HasColumnName("age");
            this.Property(t => t.id_card_number).HasColumnName("id_card_number");
            this.Property(t => t.address).HasColumnName("address");
            this.Property(t => t.phone).HasColumnName("phone");
            this.Property(t => t.community_code).HasColumnName("community_code");
            this.Property(t => t.permanent_home_commitcode).HasColumnName("permanent_home_commitcode");
            this.Property(t => t.samplenumber).HasColumnName("samplenumber");
            this.Property(t => t.inspect_doctor).HasColumnName("inspect_doctor");
            this.Property(t => t.check_doctor).HasColumnName("check_doctor");
            this.Property(t => t.report_doctor).HasColumnName("report_doctor");
            this.Property(t => t.name1).HasColumnName("name1");
            this.Property(t => t.result1).HasColumnName("result1");
            this.Property(t => t.unit1).HasColumnName("unit1");
            this.Property(t => t.qujian1).HasColumnName("qujian1");
            this.Property(t => t.tishi1).HasColumnName("tishi1");
            this.Property(t => t.beizhu1).HasColumnName("beizhu1");
            this.Property(t => t.name2).HasColumnName("name2");
            this.Property(t => t.result2).HasColumnName("result2");
            this.Property(t => t.unit2).HasColumnName("unit2");
            this.Property(t => t.qujian2).HasColumnName("qujian2");
            this.Property(t => t.tishi2).HasColumnName("tishi2");
            this.Property(t => t.beizhu2).HasColumnName("beizhu2");
            this.Property(t => t.name3).HasColumnName("name3");
            this.Property(t => t.result3).HasColumnName("result3");
            this.Property(t => t.unit3).HasColumnName("unit3");
            this.Property(t => t.qujian3).HasColumnName("qujian3");
            this.Property(t => t.tishi3).HasColumnName("tishi3");
            this.Property(t => t.beizhu3).HasColumnName("beizhu3");
            this.Property(t => t.name4).HasColumnName("name4");
            this.Property(t => t.result4).HasColumnName("result4");
            this.Property(t => t.unit4).HasColumnName("unit4");
            this.Property(t => t.qujian4).HasColumnName("qujian4");
            this.Property(t => t.tishi4).HasColumnName("tishi4");
            this.Property(t => t.beizhu4).HasColumnName("beizhu4");
            this.Property(t => t.name5).HasColumnName("name5");
            this.Property(t => t.result5).HasColumnName("result5");
            this.Property(t => t.unit5).HasColumnName("unit5");
            this.Property(t => t.qujian5).HasColumnName("qujian5");
            this.Property(t => t.tishi5).HasColumnName("tishi5");
            this.Property(t => t.beizhu5).HasColumnName("beizhu5");
            this.Property(t => t.report_time).HasColumnName("report_time");
            this.Property(t => t.inspect_time).HasColumnName("inspect_time");
            this.Property(t => t.create_time).HasColumnName("create_time");
            this.Property(t => t.doctor).HasColumnName("doctor");
            this.Property(t => t.type).HasColumnName("type");
            this.Property(t => t.resident_id).HasColumnName("resident_id");
            this.Property(t => t.birth_date).HasColumnName("birth_date");
        }
    }
}

