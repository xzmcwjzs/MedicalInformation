using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Mapping
{
    public class Chronic_disease_Comm_DiagnosticMap :EntityTypeConfiguration<Chronic_disease_Comm_Diagnostic>
    {
        public Chronic_disease_Comm_DiagnosticMap()
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
                .HasMaxLength(50);

            this.Property(t => t.phone)
                .HasMaxLength(50);

            this.Property(t => t.name1)
                .HasMaxLength(50);

            this.Property(t => t.numb1)
                .HasMaxLength(50);

            this.Property(t => t.hospital1)
                .HasMaxLength(50);

            this.Property(t => t.doctor1)
                .HasMaxLength(50);

            this.Property(t => t.name2)
                .HasMaxLength(50);

            this.Property(t => t.numb2)
                .HasMaxLength(50);

            this.Property(t => t.hospital2)
                .HasMaxLength(50);

            this.Property(t => t.doctor2)
                .HasMaxLength(50);

            this.Property(t => t.name3)
                .HasMaxLength(50);

            this.Property(t => t.numb3)
                .HasMaxLength(50);

            this.Property(t => t.hospital3)
                .HasMaxLength(50);

            this.Property(t => t.doctor3)
                .HasMaxLength(50);

            this.Property(t => t.name4)
                .HasMaxLength(50);

            this.Property(t => t.numb4)
                .HasMaxLength(50);

            this.Property(t => t.hospital4)
                .HasMaxLength(50);

            this.Property(t => t.doctor4)
                .HasMaxLength(50);

            this.Property(t => t.name5)
                .HasMaxLength(50);

            this.Property(t => t.numb5)
                .HasMaxLength(50);

            this.Property(t => t.hospital5)
                .HasMaxLength(50);

            this.Property(t => t.doctor5)
                .HasMaxLength(50);

            this.Property(t => t.worker)
                .HasMaxLength(50);

            this.Property(t => t.type)
                .HasMaxLength(50);

            this.Property(t => t.community_code)
                .HasMaxLength(50);

            this.Property(t => t.resident_id)
                .HasMaxLength(50);

            this.Property(t => t.permanent_home_commitcode)
                .HasMaxLength(50);

            // Table & Column Mappings
            this.ToTable("Chronic_disease_Comm_Diagnostic");
            this.Property(t => t.id).HasColumnName("id");
            this.Property(t => t.names).HasColumnName("names");
            this.Property(t => t.sex).HasColumnName("sex");
            this.Property(t => t.age).HasColumnName("age");
            this.Property(t => t.id_card_number).HasColumnName("id_card_number");
            this.Property(t => t.address).HasColumnName("address");
            this.Property(t => t.phone).HasColumnName("phone");
            this.Property(t => t.data1).HasColumnName("data1");
            this.Property(t => t.name1).HasColumnName("name1");
            this.Property(t => t.numb1).HasColumnName("numb1");
            this.Property(t => t.hospital1).HasColumnName("hospital1");
            this.Property(t => t.doctor1).HasColumnName("doctor1");
            this.Property(t => t.data2).HasColumnName("data2");
            this.Property(t => t.name2).HasColumnName("name2");
            this.Property(t => t.numb2).HasColumnName("numb2");
            this.Property(t => t.hospital2).HasColumnName("hospital2");
            this.Property(t => t.doctor2).HasColumnName("doctor2");
            this.Property(t => t.data3).HasColumnName("data3");
            this.Property(t => t.name3).HasColumnName("name3");
            this.Property(t => t.numb3).HasColumnName("numb3");
            this.Property(t => t.hospital3).HasColumnName("hospital3");
            this.Property(t => t.doctor3).HasColumnName("doctor3");
            this.Property(t => t.data4).HasColumnName("data4");
            this.Property(t => t.name4).HasColumnName("name4");
            this.Property(t => t.numb4).HasColumnName("numb4");
            this.Property(t => t.hospital4).HasColumnName("hospital4");
            this.Property(t => t.doctor4).HasColumnName("doctor4");
            this.Property(t => t.data5).HasColumnName("data5");
            this.Property(t => t.name5).HasColumnName("name5");
            this.Property(t => t.numb5).HasColumnName("numb5");
            this.Property(t => t.hospital5).HasColumnName("hospital5");
            this.Property(t => t.doctor5).HasColumnName("doctor5");
            this.Property(t => t.create_time).HasColumnName("create_time");
            this.Property(t => t.worker).HasColumnName("worker");
            this.Property(t => t.type).HasColumnName("type");
            this.Property(t => t.community_code).HasColumnName("community_code");
            this.Property(t => t.resident_id).HasColumnName("resident_id");
            this.Property(t => t.permanent_home_commitcode).HasColumnName("permanent_home_commitcode");
            this.Property(t => t.birth_date).HasColumnName("birth_date");
        }
    }
}

